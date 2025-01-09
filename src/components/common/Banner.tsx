import React from 'react';

interface BannerProps {
  title: string;
  imageUrl?: string;
}

const Banner: React.FC<BannerProps> = ({ title, imageUrl = '/newBanner.jpg' }) => {
  return (
    <div
      className="bg-indigo-900 text-white py-8"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner; 