import PropTypes from 'prop-types';

import { Content, Item, Title, Wrapper } from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <Item>
      <Wrapper>
        <Title>{author}</Title>
      </Wrapper>
      <Content>{content}</Content>
    </Item>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
