import { useSearchParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { FcSearch } from 'react-icons/fc';

import css from 'components/SearchBar/SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = data => {
    const searchQuery = data.searchQuery;
    onSearch(searchQuery);
    reset({ searchQuery: '' });

    const params = new URLSearchParams(searchParams.toString());
    params.set('query', searchQuery);
    setSearchParams(params);
  };

  return (
    <form className={css['SearchForm']} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={css['SearchForm-input']}
        type="text"
        placeholder="Search Movies"
        {...register('searchQuery', { required: true })}
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
