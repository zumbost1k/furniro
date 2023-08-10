import React, {
    useEffect,
    useState
} from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Paginate from './reactPaginate';
import '../products/products.css'
import './pagination.css'


    
const productHoverItems = [
    {
        path: 'share.svg',
        text: 'Share',
    },
    {
        path: 'compare.svg',
        text: 'Compare',
    },
    {
        path: 'like.svg',
        text: 'Like',
    },
]

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

const productHooverItemsList = productHoverItems.map(item => {
    return (
        <Link to='' className='product_link_item'>
            <img src={`/photos/products/${item.path}`} alt={item.text} />
            <p  className='product_link_item_text'>{item.text}</p>
        </Link>
    )
})

const ProductList = ({ products }) => {
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


        return (
            <Link key={product.id} className='product_item_shop' to={`/products/${product.name}`}>
                <div className='item_hoover_state'>
                    <button type='button' onClick={addProductHandler} className='item_button'>Add to cart</button>
                    <div className='product_link_items'>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/share.svg`} alt='share' />
                            <figcaption className='product_link_item_text'>Share</figcaption>
                        </button>
                        <button type='button' onClick={addCompareProductHandler} className='product_link_item'>
                            <img src={`/photos/products/compare.svg`} alt='compare' />
                            <figcaption className='product_link_item_text'>Compare</figcaption>
                        </button>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/like.svg`} alt='like' />
                            <figcaption className='product_link_item_text'>Like</figcaption>
                        </button>
                    </div>
                </div>
                <div className='product_link'>
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
                </div>
            </Link>
        )
    })
}
const usePageQueryParam = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    return page;
}
const PaginatedItems = () => {
    const productsList = useSelector((state) => state.productList.products).slice(0, 40)
    const currentPage = usePageQueryParam()
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOn, setFilterOn] = useState('default');
    const currentPage = usePageQueryParam()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const updatePageQueryParam = (newPage) => {
        searchParams.set('page', newPage);
        setSearchParams(searchParams);
        navigate({ search: searchParams.toString(), replace: true });
    }
    const [filteredArray, setFilteredArray] = useState(productsList)
    useEffect(() => {
        setPageCount(Math.ceil(productsList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, productsList.length]);

    useEffect(() => {
        if (filterOn === 'default') {
            setFilteredArray(productsListucts);
        }
        if (filterOn === 'name') {
            setFilteredArray([...productsListucts].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (filterOn === 'cost') {
            setFilteredArray([...productsListucts].sort((a, b) => {
                return a - b;
            }));
        }
        setIsLoading(false
        );
    }, [filterOn, productsList]);


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
                            <input min='4' value={itemsPerPage} max='16' className='filter_number_input' type='number'

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
                <div className='products_shop'><ProductList products={filteredArray.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage + 16))} /></div>
                <Paginate handlePageClick={handlePageClick} pageCount={pageCount} currentPage={Number(currentPage)} />
            </section>
        );
    }

}

export default PaginatedItems;