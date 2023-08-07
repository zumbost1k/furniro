import React, { useState } from 'react';
import './description.css'

const Description = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const classNameCheker = (pageId ) => {
        if (pageId  === currentPage) { return 'description_active' }
        else { return 'description_hidden' }
    }
    return (
        <section className='description_section'>
            <form className='description_links'>
                <div className='description_link_relative'>
                    <input
                        value={1}
                        checked={currentPage === 1}
                        onChange={(event) => {
                            setCurrentPage(parseInt(event.target.value));
                        }}
                        className='description_link'
                        type='radio'
                        name='description_link'
                        id='description' />
                    <label htmlFor='description' className='description_label'>Description</label>
                </div>
                <div className='description_link_relative'>
                    <input
                        value={2}
                        checked={currentPage === 2}
                        onChange={(event) => {
                            setCurrentPage(parseInt(event.target.value));
                        }}
                        className='description_link'
                        type='radio'
                        name='description_link'
                        id='additional' />
                    <label htmlFor='additional' className='description_label'>Additional Information</label>
                </div>
                <div className='description_link_relative'>
                    <input
                        value={3}
                        checked={currentPage === 3}
                        onChange={(event) => {
                            setCurrentPage(parseInt(event.target.value));
                        }}
                        className='description_link'
                        type='radio'
                        name='description_link'
                        id='reviews' />
                    <label htmlFor='reviews' className='description_label'>Reviews [5]</label>
                </div>
            </form>
            <div className={`page ${classNameCheker(1)}`}>
                <p className='page_fish_text'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='page_fish_text'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                <div className='active_page_photos'>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/small_sofa.png'
                            alt='small sofa'
                        />
                    </div>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/big_sofa.png'
                            alt='big sofa'
                        />
                    </div>

                </div>
            </div>
            <div className={`page ${classNameCheker(2)}`}>
                <p className='page_fish_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, labore.</p>
                <p className='page_fish_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eum asperiores beatae obcaecati praesentium adipisci modi minus eaque. Quo quos inventore illum facere, mollitia, repellendus laboriosam obcaecati non ipsum aperiam possimus, eaque optio vero ab rerum tempora quisquam molestiae perspiciatis aut? Voluptatibus modi ex, iusto illo maxime a placeat minima.</p>
                <div className='active_page_photos'>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/single_sofa.svg'
                            alt='small sofa'
                        />
                    </div>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/triple_chair.svg'
                            alt='big sofa'
                        />
                    </div>

                </div>
            </div>
            <div className={`page ${classNameCheker(3)}`}>
                <p className='page_fish_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem quaerat nesciunt dolorum consectetur dignissimos voluptatibus vitae, officiis animi consequatur facilis eos accusamus eligendi quo natus cum quibusdam adipisci praesentium.</p>
                <p className='page_fish_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum corrupti consectetur repellat aperiam praesentium eaque qui, reprehenderit quidem fugiat provident optio dicta autem incidunt itaque nisi rerum quia delectus officia, esse ex velit nihil rem. Id animi molestiae harum impedit ipsum, totam rerum provident minus dolorum quis ad natus a ratione accusantium, eveniet ex! Tempora obcaecati maiores doloribus nihil.</p>
                <div className='active_page_photos'>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/single_chair.svg'
                            alt='small sofa'
                        />
                    </div>
                    <div class='avtive_photo_container'>
                        <img
                            className='active_page_photo'
                            width='604'
                            height='348'
                            src='/photos/productInfoPhotos/grey.svg'
                            alt='big sofa'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Description