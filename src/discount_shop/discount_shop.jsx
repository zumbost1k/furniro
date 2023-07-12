import React from 'react';
import './discount_shop.css'

const promises = [
    {
        path: 'trophy.svg',
        alt: 'trophy',
        mainText: 'High Quality',
        commonText: 'crafted from top materials'
    },
    {
        path: 'guarantee.svg',
        alt: 'guarantee',
        mainText: 'Warranty Protection',
        commonText: 'Over 2 years'
    },
    {
        path: 'chest.svg',
        alt: 'chest',
        mainText: 'Free Shipping',
        commonText: 'Order over 150 $'
    },
    {
        path: 'woman.svg',
        alt: 'support',
        mainText: '24 / 7 Support',
        commonText: 'Dedicated support'
    },
]

const promisesList = promises.map(promise => {
    return (
        <div className={`discount_shop_item ${promise.alt}`}>
            <img src={`/photos/${promise.path}`} alt={promise.alt} />
            <div>
                <h2 className='promise_main_text'>{promise.mainText}</h2>
                <h3 className='promise_common_text'>{promise.commonText}</h3>
            </div>
        </div>
    )
})

const DiscountShop = () => {
    return (
        <section className='discount_shop'>
            {promisesList}
        </section>
    )
}
export default DiscountShop