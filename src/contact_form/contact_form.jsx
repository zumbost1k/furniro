import React from 'react';
import './contact_form.css'

const contacts = [
    {
        path: 'tag',
        title: 'Address',
        text: '236 5th SE Avenue, New York NY10000, United States',
        additionalInfo: ''
    },
    {
        path: 'bxs_phone',
        title: 'Phone',
        text: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789',
        additionalInfo: ''
    },
    {
        path: 'clock',
        title: 'Working Time',
        text: `Monday-Friday: 9:00 - 22:00 `,
        additionalInfo: 'Saturday-Sunday: 9:00 - 21:00'
    },
]



const contactForms = [
    {
        label: 'Your name',
        type: 'text',
        placeholder: 'Abc',
        name: 'name',
        isBig: false
    },
    {
        label: 'Email address',
        type: 'email',
        placeholder: 'Abc@def.com',
        name: 'mail',
        isBig: false
    },
    {
        label: 'Subject',
        type: 'text',
        placeholder: 'This is an optional',
        name: 'subj',
        isBig: false
    },
    {
        label: 'Message',
        type: 'text',
        placeholder: 'Hi! i’d like to ask about',
        name: 'mess',
        isBig: true
    },
]

const contactList = contacts.map(contact => {
    return (
        <div key={contact.path} className='contact_item_container'>
            <img width='30' height='30' src={`/photos/${contact.path}.svg`} alt={contact.path} />
            <div className='contact_item_text'>
                <h3 className='contact_item_text_title'>{contact.title}</h3>
                <p className='contact_item_text_text'>{contact.text}</p>
                {contact.additionalInfo && <p className='contact_item_text_text'>{contact.additionalInfo}</p>}
            </div>
        </div>
    )
})


const placeholdersList = contactForms.map((placeholder, index) => {
    return (
        <div className='contact_form_item_inner'>
            <label className='form_item_label' for={placeholder.name}>{placeholder.label} </label>
            {placeholder.isBig ?
                < textarea className='form_item_input big_form_input' name='contact_form_item' id={placeholder.name} placeholder={placeholder.placeholder} required />
                : <input className='form_item_input' type={placeholder.type} name='contact_form_item' id={placeholder.name} placeholder={placeholder.placeholder} required />
            }

            </div >
        )
    })

const ContactForm = () => {
    return (
        <section className='contact_form_section'>
            <div className='contact_form_headers'>
                <h2 className='contact_form_header'>Get In Touch With Us</h2>
                <h3 className='contact_form_subheading'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h3>
            </div>
            <div className='contact_form_container'>
                <div >
                    {contactList}
                </div>
                <form className='contact_form_item ' action='' >
                    {placeholdersList}
                    <button className='contact_form_btn' type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default ContactForm