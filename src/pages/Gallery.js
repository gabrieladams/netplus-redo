import React from 'react';
import gallery_img_1 from '../assets/img/gallery/gallery-img-1.jpg';
import gallery_img_2 from '../assets/img/gallery/gallery-img-2.jpg';
import gallery_img_3 from '../assets/img/gallery/gallery-img-3.jpg';
import gallery_img_4 from '../assets/img/gallery/gallery-img-4.jpg';
import gallery_img_5 from '../assets/img/gallery/gallery-img-5.jpg';
import gallery_img_6 from '../assets/img/gallery/gallery-img-6.jpg';
import gallery_img_7 from '../assets/img/gallery/gallery-img-7.jpg';
import gallery_img_8 from '../assets/img/gallery/gallery-img-8.jpg';
import gallery_img_9 from '../assets/img/gallery/gallery-img-9.jpg';
import gallery_img_10 from '../assets/img/gallery/gallery-img-10.jpg';
import gallery_img_11 from '../assets/img/gallery/gallery-img-11.jpg';
import gallery_img_12 from '../assets/img/gallery/gallery-img-12.jpg';
import gallery_img_13 from '../assets/img/gallery/gallery-img-13.jpg';
import gallery_img_14 from '../assets/img/gallery/gallery-img-14.jpg';
import gallery_img_15 from '../assets/img/gallery/gallery-img-15.jpg';

function Gallery() {
  return (
    <section id='gallery-section' className='section'>
      <div className='container'>
        {/* row 1 */}
        <div className='row row-1 mb-30'>
          <div className='col-lg-4 mb-lg-0'>
            <div className='gallery-img gallery-img-1 span-1'>
              <img className='img-fluid' src={gallery_img_1} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4 mb-lg-0'>
            <div className='gallery-img gallery-img-2 span-1'>
              <img className='img-fluid' src={gallery_img_2} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='gallery-img gallery-img-3 span-1'>
              <img className='img-fluid' src={gallery_img_3} alt='gallery' />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className='row row-2 mb-30'>
          <div className='col-lg-4'>
            <div className='gallery-img gallery-img-4 span-1 mb-30'>
              <img className='img-fluid' src={gallery_img_4} alt='gallery' />
            </div>
            <div className='gallery-img gallery-img-5 span-1 mb-lg-0'>
              <img className='img-fluid' src={gallery_img_5} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4 mb-lg-0'>
            <div className='gallery-img gallery-img-6 span-2'>
              <img className='img-fluid' src={gallery_img_6} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='gallery-img gallery-img-7 span-1 mb-30'>
              <img className='img-fluid' src={gallery_img_7} alt='gallery' />
            </div>
            <div className='gallery-img gallery-img-8 span-1'>
              <img className='img-fluid' src={gallery_img_8} alt='gallery' />
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div className='row row-3 mb-30'>
          <div className='col-lg-4 mb-lg-0'>
            <div className='gallery-img gallery-img-9 span-1'>
              <img className='img-fluid' src={gallery_img_9} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4 mb-lg-0'>
            <div className='gallery-img gallery-img-10 span-1'>
              <img className='img-fluid' src={gallery_img_10} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='gallery-img gallery-img-11 span-1'>
              <img className='img-fluid' src={gallery_img_11} alt='gallery' />
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className='row row-4 mb-30'>
          <div className='col-lg-6 mb-lg-0'>
            <div className='gallery-img gallery-img-12 span-1'>
              <img className='img-fluid' src={gallery_img_12} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='gallery-img gallery-img-13 span-1'>
              <img className='img-fluid' src={gallery_img_13} alt='gallery' />
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div className='row row-5 mb-30'>
          <div className='col-lg-6 mb-lg-0'>
            <div className='gallery-img gallery-img-14 span-1'>
              <img className='img-fluid' src={gallery_img_14} alt='gallery' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='gallery-img gallery-img-15 span-1'>
              <img className='img-fluid' src={gallery_img_15} alt='gallery' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
