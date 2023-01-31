import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const inputValueTrimed = inputValue.trim();
    if (inputValueTrimed.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValueTrimed);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onSubmit} aria-label='form'>
        <input
          type='text'
          placeholder='Search gif'
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
