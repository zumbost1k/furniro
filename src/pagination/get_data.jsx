import React, {
    useEffect,
    useState
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paginate from './reactPaginate';
import '../products/products.css'
import './pagination.css'

const allproducts = [
    {
        path: 'grifo.png',
        name: 'Grifo',
        type: 'Night lamp',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito',
        type: 'Luxury big sofa',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo',
        type: 'Small mug',
        cost: '150.000',
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky',
        type: 'Cute bed set',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty',
        type: 'Minimalist flower pot',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira',
        type: 'Outdoor bar table and stool',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo',
        type: 'Night lamp',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito',
        type: 'Luxury big sofa',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo',
        type: 'Small mug',
        cost: '150.000',
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky',
        type: 'Cute bed set',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty',
        type: 'Minimalist flower pot',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira',
        type: 'Outdoor bar table and stool',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo',
        type: 'Night lamp',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito',
        type: 'Luxury big sofa',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo',
        type: 'Small mug',
        cost: '150.000',
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky',
        type: 'Cute bed set',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty',
        type: 'Minimalist flower pot',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira',
        type: 'Outdoor bar table and stool',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo',
        type: 'Night lamp',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito',
        type: 'Luxury big sofa',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo',
        type: 'Small mug',
        cost: '150.000',
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky',
        type: 'Cute bed set',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty',
        type: 'Minimalist flower pot',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira',
        type: 'Outdoor bar table and stool',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
    {
        path: 'grifo.png',
        name: 'Grifo',
        type: 'Night lamp',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'leviosa.png',
        name: 'Leviosa',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '',
        new: false,
        discount: ''
    },
    {
        path: 'lolito.png',
        name: 'Lolito',
        type: 'Luxury big sofa',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%'
    },
    {
        path: 'muggo.png',
        name: 'Muggo',
        type: 'Small mug',
        cost: '150.000',
        oldCost: '',
        new: true,
        discount: ''

    },
    {
        path: 'pingky.png',
        name: 'Pingky',
        type: 'Cute bed set',
        cost: '7.000.000',
        oldCost: '14.000.000',
        discount: '-50%',
        new: false,
    },
    {
        path: 'potty.png',
        name: 'Potty',
        type: 'Minimalist flower pot',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'respira.png',
        name: 'Respira',
        type: 'Outdoor bar table and stool',
        cost: '500.000',
        oldCost: '',
        new: true,
        discount: ''
    },
    {
        path: 'syltherine.png',
        name: 'Syltherine',
        type: 'Stylish cafe chair',
        cost: '2.500.000',
        oldCost: '3.500.000',
        discount: '-30%',
        new: false
    },
]

const productHooverItems = [
    {
        path: '1.svg',
        text: 'Share',
    },
    {
        path: '2.svg',
        text: 'Compare',
    },
    {
        path: '3.svg',
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

const productHooverItemsList = productHooverItems.map(item => {
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
    const [itemsPerPage, setItemsPerPage] = useState('16');
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOn, setFilterOn] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredArray, setFilteredArray] = useState(allproducts)
    useEffect(() => {
        setPageCount(Math.ceil(allproducts.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);
    useEffect(() => {
        if (filterOn === 'default') {
            setFilteredArray(allproducts);
        }
        if (filterOn === 'name') {
            setFilteredArray([...allproducts].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (filterOn === 'cost') {
            setFilteredArray([...allproducts].sort((a, b) => {
                const costA = parseInt(a.cost.replace(/\./g, '').replace(',', ''));
                const costB = parseInt(b.cost.replace(/\./g, '').replace(',', ''));
                return costA - costB;
            }));
        }
        setIsLoading(false);
    }, [filterOn]);
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % allproducts.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
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
                            <input min='4' value={itemsPerPage} max='16' className='filter_number_input' type='number'
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const regex = /^[^+-]+$/;
                                    if (regex.test(inputValue) && (inputValue.length <= 2 && (parseInt(inputValue) <= 16 && inputValue !== '0'))){
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
                <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
            </section>
        );
    }
}

export default PaginatedItems;
