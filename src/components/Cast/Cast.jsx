import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movieApi';

import { Actor } from 'components/Actor/Actor';

import { Info, List } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <List>
          {cast.map(actorInfo => (
            <Actor key={actorInfo.id} {...actorInfo} />
          ))}
        </List>
      ) : (
        <Info>There are not information about movie cast </Info>
      )}
    </>
  );
};

export default Cast;
