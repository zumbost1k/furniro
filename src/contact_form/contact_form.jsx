import React from 'react';
import './contact_form.css'

const contacts = [
    {
        path: 'tag',
        title: 'Address',
        text: '236 5th SE Avenue, New York NY10000, United States',
        seconLineText: ''
    },
    {
        path: 'bxs_phone',
        title: 'Phone',
        text: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789',
        seconLineText: ''
    },
    {
        path: 'clock',
        title: 'Working Time',
        text: `Monday-Friday: 9:00 - 22:00 `,
        seconLineText: 'Saturday-Sunday: 9:00 - 21:00'
    },
]

const placeholders = [
    {
        theme: 'Your name',
        type: 'text',
        innerText: 'Abc',
        name: 'name',
        extraClass: false
    },
    {
        theme: 'Email address',
        type: 'email',
        innerText: 'Abc@def.com',
        name: 'mail',
        extraClass: false
    },
    {
        theme: 'Subject',
        type: 'text',
        innerText: 'This is an optional',
        name: 'subj',
        extraClass: false
    },
    {
        theme: 'Message',
        type: 'text',
        innerText: 'Hi! i’d like to ask about',
        name: 'mess',
        extraClass: true
    },
]

const contactList = contacts.map(contact => {
    return (
        <div className='contact_item_container'>
            <img width='30' height='30' src={`/photos/${contact.path}.svg`} alt={contact.path} />
            <div className='contact_item_text'>
                <h3 className='contact_item_text_title'>{contact.title}</h3>
                <p className='contact_item_text_text'>{contact.text}</p>
                {contact.seconLineText && <p className='contact_item_text_text'>{contact.seconLineText}</p>}
            </div>
        </div>
    )
})

const placeholdersList = placeholders.map((placeholder, index) => {
    return (
        <div className='contact_form_item_inner'>
            <label className='form_item_label' for={placeholder.name}>{placeholder.theme} </label>
            <input className={placeholder.extraClass ? 'form_item_input big_form_input' : 'form_item_input'} type={placeholder.type} name='contact_form_item' id={placeholder.name} placeholder={placeholder.innerText} required />
        </div>
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