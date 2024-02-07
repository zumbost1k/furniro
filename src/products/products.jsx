import React, { useState } from 'react';
import './products.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/todo/selectedProducts';
import { addProductToCompare } from '../features/compare/compare';
import Share from '../icons/share';
import Compare from '../icons/compare';
import Like from '../icons/like';

const ProductList = ({ products, index }) => {
  const dispatch = useDispatch();
  const [activeButtons, setActiveButtons] = useState({
    like: false,
    compare: false,
    share: false,
  });
  const interactionToolClick = (buttonName) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };
  return products.slice(0, index).map((product) => {
    const addProductHandler = () => {
      const productInf = {
        id: product.id,
        quantity: 1,
      };
      dispatch(addProduct(productInf));
    };

    const addCompareProductHandler = () => {
      dispatch(addProductToCompare(product.id));
    };
    return (
      <Link
        key={product.id}
        className='product_item'
        to={`/products/${product.id}`}
      >
        <div className='item_hoover_state'>
          <button
            type='button'
            onClick={(event) => {
              event.preventDefault();
              addProductHandler();
            }}
            className='item_button'
          >
            Add to cart
          </button>
          <div className='product_link_items'>
            <button
              onClick={(event) => {
                event.preventDefault();
                interactionToolClick(`share-${product.id}`);
              }}
              type='button'
              className={
                activeButtons[`share-${product.id}`]
                  ? 'product_link_item-active green-color'
                  : 'product_link_item'
              }
            >
              <Share />
              <figcaption>Share</figcaption>
            </button>
            <button
              type='button'
              onClick={(event) => {
                event.preventDefault();
                addCompareProductHandler();
                interactionToolClick(`compare-${product.id}`);
              }}
              className={
                activeButtons[`compare-${product.id}`]
                  ? 'product_link_item-active blue-color'
                  : 'product_link_item'
              }
            >
              <Compare />
              <figcaption>Compare</figcaption>
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                interactionToolClick(`like-${product.id}`);
              }}
              type='button'
              className={
                activeButtons[`like-${product.id}`]
                  ? 'product_link_item-active red-color'
                  : 'product_link_item'
              }
            >
              <Like />
              <figcaption>Like</figcaption>
            </button>
          </div>
        </div>
        <div className='product_link'>
          <img src={`/photos/products/${product.path}`} alt={product.name} />
          {product.discount && (
            <div className='item_circle item_discount'>{product.discount}</div>
          )}
          {product.new && <div className='item_circle item_new'>New</div>}
          <div className='item_text'>
            <h3 className='item_name'>{product.name}</h3>
            <p className='item_type'>{product.type}</p>
            <div className='item_cost'>
              <p className='current_cost'>
                Rp {product.cost.toLocaleString('en-US')}
              </p>
              {product.oldCost && (
                <p className='old_cost'> Rp {product.oldCost}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  });
};

const Products = ({ title }) => {
  const [showMore, setShowMore] = useState(true);
  const productsList = useSelector((state) => state.productList.products);
  return (
    <section className='products_section'>
      <h2
        className={
          title === 'Related Products'
            ? 'products_header_single'
            : 'products_header'
        }
      >
        {title}
      </h2>
      <div className='products'>
        {<ProductList products={productsList} index={showMore ? 8 : 4} />}
      </div>
      <div>
        <button
          type='button'
          className={
            title === 'Related Products' ? 'show_more_single' : 'show_more'
          }
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          Show {showMore ? 'Less' : 'More'}
        </button>
      </div>
    </section>
  );
};

export default Products;
