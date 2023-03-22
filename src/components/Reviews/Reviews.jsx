import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../Api/Api';
import { RevUl, RevLi } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    getReviews(movieId)
      .then(response => {
        setReviewsList(response);
      })
      .catch(() => alert('OOOPPPS'));
  }, [movieId]);

  return (
    <>
      {reviewsList.length > 0 ? (
        <RevUl>
          {reviewsList.map(({ author, id, content }) => (
            <RevLi key={id}>
              {author}:<p>{content}</p>
            </RevLi>
          ))}
        </RevUl>
      ) : (
        <p>Sorry we dont have any reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
