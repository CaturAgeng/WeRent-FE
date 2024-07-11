'use client';

import Head from 'next/head';
import ReviewSummary from './components/reviewsummary';
import ReviewCard from './components/reviewcard';

interface Review {
  id: number;
  userImage: string;
  rating: number;
  date: string;
  height: number;
  weight: number;
  measurements: string;
  review: string;
  helpful: number;
  productImage?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    height: 165,
    weight: 65,
    measurements: '88 / 78 / 110 CM',
    review: 'This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it\'s incredibly versatile. I\'ve worn it to brunch with friends, to the beach as a cover-up, and even to a formal dinner with the right accessories. It\'s so comfortable and...',
    date: 'Nov 29, 2023',
    helpful: 5,
    userImage: '',
  },
  {
    id: 2,
    rating: 5,
    height: 160,
    weight: 55,
    measurements: '91 / 82 / 94 CM',
    review: 'This black kaftan exceeded my expectations! The fabric feels luxurious against my skin, and the craftsmanship is impeccable.',
    date: 'Mar 25, 2024',
    helpful: 2,
    userImage: '',
    productImage: '' // Set to empty string to use the default image
  },
  {
    id: 3,
    rating: 5,
    height: 155,
    weight: 45,
    measurements: '88 / 65 / 110 CM',
    review: 'I\'m in love with this black kaftan! The fit is perfect, and the flowing silhouette is so flattering. The material is lightweight yet substantial, making it ideal for warmer weather. I appreciate the attention to detail in the...',
    date: 'Jan 15, 2024',
    helpful: 0,
    userImage: ''
  },
];

const ReviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
        <ReviewSummary />
        <div className="border-t">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
