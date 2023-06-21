import PropTypes from 'prop-types';

import { Character, Img, Item, Name } from './Actor.styled';

import { Container } from 'components/MovieList/MovieList.styled';

export const Actor = ({ name, character, src }) => {
  return (
    <Container>
      <Item>
        <Img src={src} alt={name} />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </Item>
    </Container>
  );
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Actor;
