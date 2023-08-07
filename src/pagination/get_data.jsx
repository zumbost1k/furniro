import React, {
    useEffect,
    useState
} from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Paginate from './reactPaginate';
import '../products/products.css'
import './pagination.css'

const allproducts = [
    {
        path: 'grifo.png',
        name: 'Grifo1',
        type: 'Night lamp',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa2',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito3',
        type: 'Luxury big sofa',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo4',
        type: 'Small mug',
        cost: 150000,
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky5',
        type: 'Cute bed set',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty6',
        type: 'Minimalist flower pot',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira7',
        type: 'Outdoor bar table and stool',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine8',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo9',
        type: 'Night lamp',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa10',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito11',
        type: 'Luxury big sofa',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo12',
        type: 'Small mug',
        cost: 150000,
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky13',
        type: 'Cute bed set',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty14',
        type: 'Minimalist flower pot',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira15',
        type: 'Outdoor bar table and stool',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine16',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo17',
        type: 'Night lamp',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa18',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito19',
        type: 'Luxury big sofa',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo20',
        type: 'Small mug',
        cost: 150000,
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky21',
        type: 'Cute bed set',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty22',
        type: 'Minimalist flower pot',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira23',
        type: 'Outdoor bar table and stool',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine24',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo25',
        type: 'Night lamp',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa26',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito27',
        type: 'Luxury big sofa',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo28',
        type: 'Small mug',
        cost: 150000,
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky29',
        type: 'Cute bed set',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty30',
        type: 'Minimalist flower pot',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira31',
        type: 'Outdoor bar table and stool',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine32',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo33',
        type: 'Night lamp',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa34',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito35',
        type: 'Luxury big sofa',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo36',
        type: 'Small mug',
        cost: 150000,
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky37',
        type: 'Cute bed set',
        cost: 7000000,
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty38',
        type: 'Minimalist flower pot',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira39',
        type: 'Outdoor bar table and stool',
        cost: 500000,
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine40',
        type: 'Stylish cafe chair',
        cost: 2500000,
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
]

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
        <div className='filter_icon_list_item'>
            <img src={`/photos/${icon.path}`} alt={icon.alt} />
            {icon.text && <p>{icon.text}</p>}
        </div>
    )
})

const productHooverItemsList = productHoverItems.map(item => {
    return (
        <Link to='' className='product_link_item'>
            <img src={`/photos/products/${item.path}`} alt={item.text} />
            <Link to='' className='product_link_item_text'>{item.text}</Link>
        </Link>
    )
})

const ProductList = ({ products }) => {
    const navigate = useNavigate();

    return products.map((product) => {
        const handleClick = () => {
            const newPath = `/products/${product.name}`;
            navigate(newPath);
        };

        return (
            <div className='product_item_shop' onClick={handleClick}>
                <div className='item_hover_state'>
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

const usePageQueryParam = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    return page;
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
        setPageCount(Math.ceil(allproducts.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

    useEffect(() => {
        if (filterOn === 'default') {
            setFilteredProductsdArray(allproducts);
        }
        if (filterOn === 'name') {
            setFilteredProductsdArray([...allproducts].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (filterOn === 'cost') {
            setFilteredProductsdArray([...allproducts].sort((a, b) => {
                return a - b;
            }));
        }
        setIsLoading(false);
    }, [filterOn]);


    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % allproducts.length;
        setItemOffset(newOffset);
        updatePageQueryParam(event.selected)
    };



    if (!isLoading) {
        return (
            <section className='paginate_section'>
                <div className='paginate_filter'>
                    <div className='paginate_filter_item'>
                        <div className='filter_icon_list'>{filterIconList}</div>
                        <div className='pages_number'>{`Showing ${itemOffset + 1}-${(itemOffset + parseInt(itemsPerPage)) >= allproducts.length ? allproducts.length : itemOffset + parseInt(itemsPerPage)} of ${allproducts.length} results`}</div>
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
