import { MutatingDots } from 'react-loader-spinner';

import PropTypes from 'prop-types';

import React from 'react';

export const Loader = ({ visible }) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={visible}
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
