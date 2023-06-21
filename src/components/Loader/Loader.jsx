import { MutatingDots } from 'react-loader-spinner';

import PropTypes from 'prop-types';

import React from 'react';

import css from 'components/Loader/Loader';

export const Loader = ({ visible }) => {
  return (
    <div className={css.loaderWrapper}>
      <MutatingDots
        height="100"
        width="100"
        color="#bf3989"
        secondaryColor="#096bde)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
      />
    </div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
