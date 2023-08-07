import React, {
    useEffect,
    useState
} from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
        <div className='filter_icon_list_item'>
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
            <div className='product_item_shop' onClick={handleClick}>
                <div className='item_hoover_state'>
                    <button className='item_button'>Add to cart</button>
                    <div className='product_link_items'>{productHooverItemsList}</div>
                </div>
                <Link to={`/products/${product.name}`} className='product_link'>
                    <img src={`/photos/products/${product.path}`} alt={product.name} />
                    {product.discount && <div className='item_circle item_discount'>{product.discount}</div>}
                    {product.new && <div className='item_circle item_new'>New</div>}
                    <div className='item_text'>
                        <h3 className='item_name'>{product.name}</h3>
                        <p className='item_type'>{product.type}</p>
                        <div className='item_cost'>
                            <p className='current_cost'>Rp {product.cost.toLocaleString('en-US')}</p>
                            {product.oldCost && <p className='old_cost'> Rp {product.oldCost}</p>}
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
}


const PaginatedItems = () => {
    const currentPage = usePageQueryParam()
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOn, setFilterOn] = useState('default');
    const [filtereProductsdArray, setFilteredProductsdArray] = useState(allproducts)

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const updatePageQueryParam = (newPage) => {
        searchParams.set('page', newPage);
        setSearchParams(searchParams);
        navigate({ search: searchParams.toString(), replace: true });
    }
    useEffect(() => {
        setPageCount(Math.ceil(productsList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

    useEffect(() => {
        if (filterOn === 'default') {
            setFilteredProductsdArray(allproducts);
        }
        if (filterOn === 'name') {
            setFilteredArray([...productsList].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (filterOn === 'cost') {
            setFilteredProductsdArray([...allproducts].sort((a, b) => {
                return a - b;
            }));
        }
        setIsLoading(false);
    }, [filterOn]);


    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % productsList.length;
        setItemOffset(newOffset);
        updatePageQueryParam(event.selected)
    };



    if (!isLoading) {
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
                            <input value={itemsPerPage} className='filter_number_input' type='number'
                                onChange={e => {
                                    const inputValue = Number(e.target.value)
                                    if (inputValue >= 4 && inputValue <= 16) {
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
                <div className='products_shop'><ProductList products={filtereProductsdArray.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage + itemsPerPage))} /></div>
                <Paginate handlePageClick={handlePageClick} pageCount={pageCount} currentPage={Number(currentPage)} />
            </section>
        );
    }

}

export default PaginatedItems;