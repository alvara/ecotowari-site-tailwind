import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-center text-white">
        <div className="container py-0 "></div>

        <div className="p-8 text-center ">
          ecotowari © {new Date().getFullYear()}{' '}
        </div>
      </footer>
    </>
  );
}
