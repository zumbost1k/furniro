import React, { useState } from 'react';
import './description.css'

const descriptionTopLinksInfo = [
    {
        pageId: 1,
        text: 'Description',
        labelFor: 'description'
    },
    {
        pageId: 2,
        text: 'Additional Information',
        labelFor: 'additional'

    },
    {
        pageId: 3,
        text: 'Reviews [5]',
        labelFor: 'reviews'


    },
]

const infoForTopDeskLinks = [
    {
        pageId: 1,
        firstPhotoPath: 'big_sofa.png',
        secondPhotoPath: 'small_sofa.png',
        alt: 'active photo first page',
        firstTextBlock: 'Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
        secondTextBlock: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'
    },
    {
        pageId: 2,
        firstPhotoPath: 'single_sofa.svg',
        secondPhotoPath: 'triple_chair.svg',
        alt: 'active photo second page',
        firstTextBlock: 'Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
        secondTextBlock: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'
    },
    {
        pageId: 3,
        firstPhotoPath: 'single_chair.svg',
        secondPhotoPath: 'grey.svg',
        alt: 'active photo third page',
        firstTextBlock: 'Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
        secondTextBlock: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'
    }
]

const ProductsDescriptions  = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const classNameCheker = (pageId) => {
        if (pageId === currentPage) { return 'active' }
        else { return 'hiden' }
    }
    return (
        <section className='description_section'>
            <form className='description_links'>
                {descriptionTopLinksInfo.map(topLinkInfoItem  => {
                    return (
                        <div className='description_link_relative'>
                            <input
                                value={topLinkInfoItem.pageId}
                                checked={currentPage === topLinkInfoItem.pageId}
                                onChange={(event) => {
                                    setCurrentPage(parseInt(event.target.value));
                                }}
                                className='description_link'
                                type='radio'
                                name='description_link'
                                id={topLinkInfoItem.labelFor} />
                            <label htmlFor={topLinkInfoItem.labelFor} className='description_label'>{topLinkInfoItem.text}</label>
                        </div>
                    )
                })}
            </form>
            {
                infoForTopDeskLinks.map(infoForTopDeskLink => {
                    return (
                        <div className={`page ${classNameCheker(infoForTopDeskLink.pageId)}`}>
                            <p className='page_fish_text'>{infoForTopDeskLink.firstTextBlock}</p>
                            <p className='page_fish_text'>{infoForTopDeskLink.secondTextBlock}</p>
                            <div className='active_page_photos'>
                                <div class='avtive_photo_container'>
                                    <img
                                        className='active_page_photo'
                                        width='604'
                                        height='348'
                                        src={`/photos/productInfoPhotos/${infoForTopDeskLink.firstPhotoPath}`}
                                        alt={infoForTopDeskLink.alt}
                                    />
                                </div>
                                <div class='avtive_photo_container'>
                                    <img
                                        className='active_page_photo'
                                        width='604'
                                        height='348'
                                        src={`/photos/productInfoPhotos/${infoForTopDeskLink.secondPhotoPath}`}
                                        alt={infoForTopDeskLink.alt}
                                    />
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ProductsDescriptions 