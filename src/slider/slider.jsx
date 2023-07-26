import React from 'react';
import './slider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        path: 'bedroom.png',
        text: '01 — Bed Room',
        title: 'Bedroom'
    },
    {
        path: 'girlPeace.png',
        text: '02 — girls room',
        title: 'Girls room'
    },
    {
        path: 'livingPeace.png',
        text: '03 — Living Peace',
        title: 'Living Peace'
    },
    {
        path: 'innerPeace.png',
        text: '04 — Inner Peace',
        title: 'Inner Peace'
    },
]

const MySlider = () => {
    const settings = {
        className: 'my_slider',
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <svg width='64' height='64' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='Ellipse 4' filter='url(#filter0_d_117_484)'>
                <circle cx='39' cy='39' r='30' fill='white' />
            </g>
            <g id='Right 24px'>
                <path id='Arrow' d='M35 33L43 39L35 45' stroke='#B88E2F' strokeWidth='3.2' strokeLinecap='round' strokeLinejoin='round' />
            </g>
            <defs>
                <filter id='filter0_d_117_484' x='0' y='0' width='78' height='78' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feMorphology radius='1' operator='dilate' in='SourceAlpha' result='effect1_dropShadow_117_484' />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='7' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_117_484' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_117_484' result='shape' />
                </filter>
            </defs>
        </svg>
        ,
        dotsClass: 'custom-dots',
        customPaging: function (index) {
            return <svg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='Active'>
                    <circle id='second_elips' opacity='0.7' cx='13.5' cy='13.5' r='13' stroke='currentColor' fill='currentColor' />
                    <circle id='second_elips_inner' cx='13.5' cy='13.5' r='12' stroke='none' fill='#FCF8F3' />
                    <circle id='first_elips' cx='13.5' cy='13.5' r='5' stroke='currentColor' fill='currentColor' />
                </g>
            </svg>;
        },
    };
    return (
        <section className='slider_section'>
            <div className='inspiration_block'>
                <h2 className='rooms_inspiration'>50+ Beautiful rooms
                    inspiration</h2>
                <p className='inspiration_text'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='inspiration_button'>Explore More</button>
            </div>

            <div className='relative_of_slider'>
                <Slider {...settings}>
                    {slides.map((slide) => {
                        return (
                            <div className='slider'>
                                <img className='photo' src={`/photos/${slide.path}`} alt={slide.title} width='404' height='582' />
                                <div className='slide_block'>
                                    <div className='slide_caption'>
                                        <p className='slide_caption_text'>{slide.text}</p>
                                        <h2 className='slide_caption_header'>{slide.title}</h2>
                                    </div>
                                    <div ><button className='slide_caption_button'>
                                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='Right 16px'>
                                                <path id='Vector 1' d='M21 12H3M21 12L15 6M21 12L15 18' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </g>
                                        </svg>
                                    </button></div>
                                </div>

                            </div>
                        )
                    })}


                </Slider>
            </div>

        </section>
    );
}

export default MySlider





