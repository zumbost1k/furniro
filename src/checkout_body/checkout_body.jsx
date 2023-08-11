import React from 'react';
import './checkout_body.css'
import { useSelector } from 'react-redux';
import { selectProductById, selectTotalCost } from '../store/selectors';

const checkoutInputs = [
    {
        inputType: 'double',
        additionalInformation: {
            secondTopText: 'Last Name',
            secondId: 'last_name',
        },
        topText: 'First Name',
        id: 'first_name',
        type: 'text',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'Company Name (Optional)',
        id: 'company_name',
        type: 'text',
        placeholder: '',
    },
    {
        inputType: 'select',
        additionalInformation: {
            countries: [{
                name: 'Belarus',
                selectVal: 'blr'
            },
            {
                name: 'Poland',
                selectVal: 'pol'
            },
            {
                name: 'Ukraine',
                selectVal: 'ukr'
            },
            ]
        },
        topText: 'Country / Region',
        id: 'countries',
        type: 'select',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'Street address',
        id: 'street_adress',
        type: 'text',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'Town / City',
        id: 'town_city',
        type: 'text',
        placeholder: '',
    },
    {
        inputType: 'select',
        additionalInformation: {
            countries: [{
                name: 'Western Province',
                selectVal: 'west'
            },
            {
                name: 'Eastern Province',
                selectVal: 'east'
            },
            {
                name: 'southern Province',
                selectVal: 'south'
            },
            {
                name: 'northern Province',
                selectVal: 'northern'
            },
            ]
        },
        topText: 'Province',
        id: 'countries',
        type: 'select',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'ZIP code',
        id: 'zip',
        type: 'text',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'Phone',
        id: 'phone',
        type: 'tel',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: 'Email address',
        id: 'mail',
        type: 'email',
        placeholder: '',
    },
    {
        inputType: 'standard',
        additionalInformation: {
        },
        topText: '',
        id: 'additional_inf',
        type: 'text',
        placeholder: 'Additional information',
    },
]

const DoubleInput = ({ checkoutInput }) => {
    return (
        <div key={checkoutInput.id} className='double_inputs_container'>
            <div className='double_inputs_item'>
                <label className='inputs_label' htmlFor={checkoutInput.id}>{checkoutInput.topText}</label>
                <input required className='input_text_global_pad double_checkout_input check_input' type={checkoutInput.type} id={checkoutInput.id} />
            </div>
            <div className='double_inputs_item'>
                <label className='inputs_label' htmlFor={checkoutInput.secondId}>{checkoutInput.additionalInformation.secondTopText}</label>
                <input required className='input_text_global_pad double_checkout_input check_input' type={checkoutInput.type} id={checkoutInput.additionalInformation.secondId} />
            </div>
        </div>
    )
}


const StandardInput = ({ checkoutInput }) => {
    return (
        <div key={checkoutInput.id} className='standard_check_input_container'>
            <label className='inputs_label' htmlFor={checkoutInput.id}>{checkoutInput.topText}</label>
            <input placeholder={checkoutInput.placeholder} required pattern={checkoutInput.type === 'tel' ? '^\\+375-\\d{2}-\\d{3}-\\d{2}-\\d{2}$' : undefined} className='input_text_global_pad standard_check_input  check_input' type={checkoutInput.type} id={checkoutInput.id} />
        </div>
    )
}

const ChekInput = ({ checkoutInput }) => {
    return (
        <div key={checkoutInput.id} className='standard_check_input_container'>
            <label className='inputs_label' htmlFor={checkoutInput.id}>{checkoutInput.topText}</label>
            <select required className='checkout_selector check_input' type={checkoutInput.type} name={checkoutInput.id} id={checkoutInput.id}>
                {checkoutInput.additionalInformation.countries.map(country => {
                    return (
                        <option key={country.name} value={country.selectVal}>{country.name}</option>
                    )
                })}
            </select>
        </div>
    )
}


const checkoutInputsList = checkoutInputs.map((checkoutInput, index) => {
    if (checkoutInput.inputType === 'double') {
        return (
            <DoubleInput checkoutInput={checkoutInput} />
        )
    }
    else if (checkoutInput.inputType === 'standard') {
        return (
            <StandardInput checkoutInput={checkoutInput} />
        )
    }
    else {
        return (
            <ChekInput checkoutInput={checkoutInput} />
        )
    }
})

const CheckoutBody = () => {
    const selectedProducts = useSelector(selectProductById)
    const totalCost = useSelector(selectTotalCost)
    return (
        <section className='checkout_section'>
            <div>
                <h2 className='checkout_header'>Billing details</h2>
                <form className='checkout_form' action=''>
                    {checkoutInputsList}
                </form>
            </div>
            <div className='place_order'>
                <div className='checkout_product_container'>
                    <div className='checkout_product_item'>
                        <p className='checkout_product_header'>Product</p>
                        <p className='checkout_product_header'>Subtotal</p>
                    </div>
                    {selectedProducts.map(product => {
                        return (
                            <div key={product.id} className='checkout_product_item'>
                                <p className='checkout_product_name'>{product.name} <span className='checkout_product_quantity'>X {product.quantity}</span></p>
                                <p className='checkout_product_cost'>Rs. {product.cost}</p>
                            </div>
                        )
                    })}
                    <div className='checkout_product_item'>
                        <p className='checkout_product_text'>Subtotal</p>
                        <p className='checkout_product_cost'>Rs. {totalCost}</p>
                    </div>
                    <div className='checkout_product_item'>
                        <p className='checkout_product_text'>Total</p>
                        <p className='checkout_product_total_cost'>Rs. {totalCost}</p>
                    </div>
                </div>
                <form className='checkout_place_order' action=''>
                    <div className='direct_input_block'>
                        <input className='direct_input' type='radio' name='bank' id='direct_bank' />
                        <label className='direct_input_label' htmlFor='direct_bank'>Direct Bank Transfer</label>
                    </div>

                    <p className='make_sure_directly'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div className='direct_input_block'>
                        <input className='direct_input' type='radio' name='bank' id='second_direct_bank' />
                        <label className='direct_input_label' htmlFor='second_direct_bank'>Direct Bank Transfer</label>
                    </div>
                    <div className='direct_input_block cash_radio_block'>
                        <input className='direct_input' type='radio' name='bank' id='delivery' />
                        <label className='direct_input_label' htmlFor='delivery'>Cash On Delivery</label>
                    </div>

                    <p className='personal_data_support'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='bold_text'>privacy policy.</span></p>
                    <button className='place_order_btn' type='submit'>Place order</button>
                </form>
            </div>
        </section>
    )
}

export default CheckoutBody