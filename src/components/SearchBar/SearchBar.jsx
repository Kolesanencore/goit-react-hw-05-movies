import { useForm } from 'react-hook-form';

import { FcSearch } from 'react-icons/fc';

import css from 'components/SearchBar/SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    onSearch(data.searchQuery);
  };

  return (
    <form className={css['SearchForm']} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={css['SearchForm-input']}
        type="text"
        placeholder="Search Movies"
        {...register('searchQuery')}
      />
      <button className={css['SearchForm-button']} type="submit">
        <span className="button-label">
          <FcSearch className={css['search-icon']} />
        </span>
      </button>
    </form>
  );
};

export default SearchBar;

// import { useState } from 'react';

// const SearchForm = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     onSearch(searchQuery);
//   };

//   const handleChange = event => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search Movies"
//         value={searchQuery}
//         onChange={handleChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchForm;
