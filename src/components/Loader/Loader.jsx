import { MutatingDots } from 'react-loader-spinner';
import React from 'react';

import css from 'components/Loader/Loader.module.css';

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
        wrapperClass="loaderWrapper"
        visible={visible}
      />
    </div>
  );
};

export default Loader;
