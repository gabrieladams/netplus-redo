import React from 'react';

function Gallery() {
  return (
    <section id='gallery-section' className='section'>
      <div className='container'>
        {/* row 1 */}
        <div className='row row-1 mb-30'>
          <div className='col-md-4 mb-md-0'>
            <div className='gallery-img gallery-img-1 span-1'></div>
          </div>
          <div className='col-md-4 mb-md-0'>
            <div className='gallery-img gallery-img-2 span-1'></div>
          </div>
          <div className='col-md-4'>
            <div className='gallery-img gallery-img-3 span-1'></div>
          </div>
        </div>

        {/* row 2 */}
        <div className='row row-2 mb-30'>
          <div className='col-md-4'>
            <div className='gallery-img span-1 mb-30'></div>
            <div className='gallery-img span-1 mb-md-0'></div>
          </div>
          <div className='col-md-4 mb-md-0'>
            <div className='gallery-img span-2'></div>
          </div>
          <div className='col-md-4'>
            <div className='gallery-img span-1 mb-30'></div>
            <div className='gallery-img span-1'></div>
          </div>
        </div>

        {/* row 3 */}
        <div className='row row-3 mb-30'>
          <div className='col-md-4 mb-md-0'>
            <div className='gallery-img span-1'></div>
          </div>
          <div className='col-md-4 mb-md-0'>
            <div className='gallery-img span-1'></div>
          </div>
          <div className='col-md-4'>
            <div className='gallery-img span-1'></div>
          </div>
        </div>

        {/* row 4 */}
        <div className='row row-4 mb-30'>
          <div className='col-md-7 mb-md-0'>
            <div className='gallery-img span-1'></div>
          </div>
          <div className='col-md-5'>
            <div className='gallery-img span-1'></div>
          </div>
        </div>

        {/* row 5 */}
        <div className='row row-5 mb-30'>
          <div className='col-md-5 mb-md-0'>
            <div className='gallery-img span-1'></div>
          </div>
          <div className='col-md-7'>
            <div className='gallery-img span-1'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
