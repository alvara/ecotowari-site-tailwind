import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

PortfolioImage.propTypes = {
  img: PropTypes.string,
};

export default function PortfolioImage({ img }) {
  return (
    <div className="portfolio-image-wrapper mt-4">
      <Image
        src={img}
        layout="intrinsic"
        width="700"
        height="400"
        objectFit={'contain'}
        alt="Portfolio Preview"
        quality={50}
        priority={true}
      />
    </div>
  );
}
