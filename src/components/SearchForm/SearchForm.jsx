import { useForm } from 'react-hook-form';

export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    onSearch(data.searchQuery);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Search Movies"
        {...register('searchQuery')}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

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
