import React, {
    useEffect,
    useState
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paginate from './reactPaginate';
import '../products/products.css'
import './pagination.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCompare } from '../features/compare/compare';
import { addProduct } from '../features/todo/selectedProducts';

const filterIcons = [
    {
        path: 'filter.svg',
        alt: 'filter',
        text: 'Filter',
    },
    {
        path: 'quadro_sircle.svg',
        alt: 'quadro_sircle',
        text: ''
    },
    {
        path: 'veiew_list.svg',
        alt: 'veiew_list',
        text: '',
    },
]

const filterIconList = filterIcons.map(icon => {
    return (
        <div key={icon.alt} className='filter_icon_list_item'>
            <img src={`/photos/${icon.path}`} alt={icon.alt} />
            {icon.text && <p>{icon.text}</p>}
        </div>
    )
})


const ProductList = ({ products }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return products.map((product) => {
        const addProductHandler = () => {
            const productInf = {
                id: product.id,
                quantity: 1
            }
            dispatch(addProduct(productInf))
        }
        const addCompareProductHandler = () => {
            dispatch(addProductToCompare(product.id))
        }
        const handleClick = () => {
            const newPath = `/products/${product.name}`;
            navigate(newPath);
        };

        return (
            <div key={product.id} className='product_item_shop' onClick={handleClick}>
                <div className='item_hoover_state'>
                    <button type='button' onClick={addProductHandler} className='item_button'>Add to cart</button>
                    <div className='product_link_items'>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/1.svg`} alt='share' />
                            <figcaption className='product_link_item_text'>Share</figcaption>
                        </button>
                        <button type='button' onClick={addCompareProductHandler} className='product_link_item'>
                            <img src={`/photos/products/2.svg`} alt='compare' />
                            <figcaption className='product_link_item_text'>Compare</figcaption>
                        </button>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/3.svg`} alt='like' />
                            <figcaption className='product_link_item_text'>Like</figcaption>
                        </button>
                    </div>
                </div>
                <Link to={`/products/${product.name}`} className='product_link'>
                    <img src={`/photos/products/${product.path}`} alt={product.name} />
                    {product.discount && <div className='item_circle item_discount'>{product.discount}</div>}
                    {product.new && <div className='item_circle item_new'>New</div>}
                    <div className='item_text'>
                        <h3 className='item_name'>{product.name}</h3>
                        <p className='item_type'>{product.type}</p>
                        <div className='item_cost'>
                            <p className='current_cost'>Rp {product.cost}</p>
                            {product.oldCost && <p className='old_cost'> Rp {product.oldCost}</p>}
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
}

const PaginatedItems = () => {
    const productsList = useSelector((state) => state.productList.products).slice(0, 40)
    const [itemsPerPage, setItemsPerPage] = useState('16');
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isLoading, setIsLoading] = useState({
        filterArrVal: true,
        currentPageVal: false,
    });
    const [filterOn, setFilterOn] = useState('default');
    const [currentPage, setCurrentPage] = useState(JSON.parse(localStorage.getItem('localCurrentPage')) || 0);
    const [filteredArray, setFilteredArray] = useState(productsList)
    useEffect(() => {
        setPageCount(Math.ceil(productsList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, productsList.length]);
    useEffect(() => {
        localStorage.setItem('localCurrentPage', JSON.stringify(currentPage));
    }, [currentPage])

    useEffect(() => {
        if (filterOn === 'default') {
            setFilteredArray(productsList);
        }
        if (filterOn === 'name') {
            setFilteredArray([...productsList].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (filterOn === 'cost') {
            setFilteredArray([...productsList].sort((a, b) => {
                const costA = parseInt(a.cost.replace(/\./g, '').replace(',', ''));
                const costB = parseInt(b.cost.replace(/\./g, '').replace(',', ''));
                return costA - costB;
            }));
        }
        setIsLoading(prevValues => ({
            ...prevValues,
            filterArrVal: false
        }));
    }, [filterOn, productsList]);


    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % productsList.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
    };



    if (Object.values(isLoading).every(item => item === false)) {
        return (
            <section className='paginate_section'>
                <div className='paginate_filter'>
                    <div className='paginate_filter_item'>
                        <div className='filter_icon_list'>{filterIconList}</div>
                        <div className='pages_number'>{`Showing ${itemOffset + 1}-${(itemOffset + parseInt(itemsPerPage)) >= productsList.length ? productsList.length : itemOffset + parseInt(itemsPerPage)} of ${productsList.length} results`}</div>
                    </div>
                    <div className='paginate_filter_item'>
                        <div className='filter_number_item'>
                            <p>Show</p>
                            <input min='4' value={itemsPerPage} max='16' className='filter_number_input' type='number'
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const regex = /^[^+-]+$/;
                                    if (regex.test(inputValue) && (inputValue.length <= 2 && (parseInt(inputValue) <= 16 && inputValue !== '0'))) {
                                        setItemsPerPage(inputValue);
                                    }
                                }}
                            />
                        </div>
                        <div className='filter_number_item'>
                            <p>Short by</p>
                            <select className='filter_select' onChange={newState => { setFilterOn(newState.target.value) }}>
                                <option value='default'>Default</option>
                                <option value='name'>Name</option>
                                <option value='cost'>Cost</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='products_shop'><ProductList products={filteredArray.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage + 16))} /></div>
                <Paginate handlePageClick={handlePageClick} pageCount={pageCount} currentPage={currentPage} />
            </section>
        );
    }

}

export default PaginatedItems;
