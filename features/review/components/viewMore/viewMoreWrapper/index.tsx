'use client';

import React, { useState, useEffect } from "react";
import Rating from "../rating";
import FitScale from "../fitScale";
import ReviewFilters from "../filters";
import ReviewList from "../list";
import Link from "next/link";
import { Review } from "../list/types";

const ViewMoreWrapper: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [fitScale, setFitScale] = useState({ small: 0, trueToSize: 0, large: 0 });

  const fetchReviews = (filterOptions?: any) => {
    let url = '/api/reviews?product_id=1';
    
    if (filterOptions) {
      if (filterOptions.type !== 'all') {
        url += `&type=${filterOptions.type}`;
      }
      if (filterOptions.rating !== null) {
        url += `&rating=${filterOptions.rating}`;
      }
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setReviews(data));
  };

  useEffect(() => {
    fetchReviews();

    fetch('/api/average-rating?product_id=1')
      .then(response => response.json())
      .then(data => setAverageRating(data.averageRating));

    fetch('/api/fit-scale?product_id=1')
      .then(response => response.json())
      .then(data => setFitScale(data));
  }, []);

  const handleFilterChange = (filterOptions: any) => {
    fetchReviews(filterOptions);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <Link href="/product" className="text-start font-bold text-3xl">&lt;</Link>
        <h1 className="text-2xl font-semibold mx-auto">REVIEWS ({reviews.length})</h1>
      </div>

      <Rating averageRating={averageRating} />
      <FitScale fitScale={fitScale} />
      <ReviewFilters onFilterChange={handleFilterChange} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ViewMoreWrapper;
