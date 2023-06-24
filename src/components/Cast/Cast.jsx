import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/movieApi';

import { Actor } from 'components/Actor/Actor';

import { Info, List } from './Cast.styled';
import Loader from 'components/Loader/Loader';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <List>
          {cast.map(actorInfo => (
            <Actor key={actorInfo.id} {...actorInfo} />
          ))}
        </List>
      ) : (
        <Info>There is no information about the movie cast</Info>
      )}
    </>
  );
};

export default Cast;
