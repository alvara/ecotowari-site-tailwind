import Image from 'next/image';
import React from 'react';

export default function portfolioCard() {
  return (
    <div className="portfolio-card m-3 text-start">
      <Image
        src="https://via.placeholder.com/300x300"
        width="250"
        height="250"
        layout="responsive"
        alt="test"
        className="mb-4"
      />
      <h6>Portfolio Oriented</h6>
      <p>
        I focus on the end result first, building an MVP with prioritized
        features and an iterative approach.
      </p>
    </div>
  );
}
