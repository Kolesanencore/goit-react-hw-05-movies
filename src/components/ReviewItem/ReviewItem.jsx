import React from 'react';

import PropTypes from 'prop-types';

import { Content, Item, Title, Wrapper } from './ReviewItem.styled';
import { Container } from 'components/MovieList/MovieList.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <Container>
      <Item>
        <Wrapper>
          <Title>{author}</Title>
        </Wrapper>
        <Content>{content}</Content>
      </Item>
    </Container>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
