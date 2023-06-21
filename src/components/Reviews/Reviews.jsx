import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from 'services/movieApi';

import { ReviewItem } from 'components/ReviewItem/ReviewItem';

import { Info, List } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </List>
      ) : (
        <Info>We dont have any reviews for this movie.</Info>
      )}
    </>
  );
};

export default Reviews;
