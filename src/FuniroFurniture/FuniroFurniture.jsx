import React from 'react';
import './FuniroFurniture.css';

const FuniroFurniture = () => {
  return (
    <section className='funiro_section'>
      <div className='funiro_title'>
        <p className='funiro_title_text'>Share your setup with</p>
        <h2 className='funiro_title_header'>#FuniroFurniture</h2>
      </div>

      <div className='funiro_photos'>
        <div>
          <div className='first_line_photos_left'>
            <img
              src='/photos/firstLinePhotos/1.png'
              alt='1'
              width='78'
              height='382'
            />
            <img
              src='/photos/firstLinePhotos/2.png'
              alt='2'
              width='451'
              height='312'
            />
          </div>
          <div className='second_line_photos_left'>
            <img
              src='/photos/firstLinePhotos/3.png'
              alt='3'
              width='185'
              height='323'
            />
            <img
              src='/photos/firstLinePhotos/4.png'
              alt='4'
              width='344'
              height='242'
            />
          </div>
        </div>
        <div className='center_photo'>
          <img
            src='/photos/firstLinePhotos/5.png'
            alt='5'
            width='400'
            height='392'
          />
        </div>
        <div>
          <div className='first_line_photos_right'>
            <img
              src='/photos/firstLinePhotos/6.png'
              alt='6'
              width='290'
              height='348'
            />
            <img
              src='/photos/firstLinePhotos/7.png'
              alt='7'
              width='225'
              height='433'
            />
          </div>
          <div className='second_line_photos_right'>
            <img
              src='/photos/firstLinePhotos/8.png'
              alt='8'
              width='178'
              height='242'
            />
            <img
              src='/photos/firstLinePhotos/9.png'
              alt='9'
              width='258'
              height='196'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FuniroFurniture;
