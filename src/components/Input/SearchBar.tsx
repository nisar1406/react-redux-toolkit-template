import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  searchText: string;
  styleClass?: string;
  placeholderText?: string;
  setSearchText: (value: string) => void;
}

const SearchBar = ({
  searchText,
  styleClass,
  placeholderText,
  setSearchText,
}: SearchBarProps): JSX.Element => {
  const updateSearchInput = (value: string): void => {
    setSearchText(value);
  };

  return (
    <div className={`inline-block ${styleClass}`}>
      <div className="input-group relative flex flex-wrap items-stretch w-full">
        <input
          type="search"
          value={searchText}
          placeholder={placeholderText || 'Search'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateSearchInput(e.target.value)
          }
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default SearchBar;
