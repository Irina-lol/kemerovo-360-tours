import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, title }) => {
  return (
    <div className={styles.galleryWrapper}>
      {title && <h3 className={styles.galleryTitle}>{title}</h3>}
      <div className={styles.imageGallery}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div className={styles.galleryItem} key={index}>
              <img
                src={image.src}
                alt={image.alt || `Фото ${index + 1}`}
                className={styles.galleryImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;