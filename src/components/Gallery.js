import React, { useEffect } from "react";
import GLightbox from "glightbox";

const Gallery = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      beforeSlideLoad: (slide, data) => {
        // Need to execute a script in the slide?
        // You can do that here...
      },
    });
  });
  return (
    <section className="gallery-area2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img4.jpg" alt="" />
              <a href="/images/gallery-img4.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img5.jpg" alt="" />
              <a href="/images/gallery-img5.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img6.jpg" alt="" />
              <a href="/images/gallery-img6.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img7.jpg" alt="" />
              <a href="/images/gallery-img7.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img8.jpg" alt="" />
              <a href="/images/gallery-img8.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img9.jpg" alt="" />
              <a href="/images/gallery-img9.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img10.jpg" alt="" />
              <a href="/images/gallery-img10.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img11.jpg" alt="" />
              <a href="/images/gallery-img11.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img12.jpg" alt="" />
              <a href="/images/gallery-img12.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img13.jpg" alt="" />
              <a href="/images/gallery-img13.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img14.jpg" alt="" />
              <a href="/images/gallery-img14.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img15.jpg" alt="" />
              <a href="/images/gallery-img15.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src="/images/gallery-img16.jpg" alt="" />
              <a href="/images/gallery-img16.jpg" className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
