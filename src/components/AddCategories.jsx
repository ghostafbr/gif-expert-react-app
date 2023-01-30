import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Punch');

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
      <form onSubmit={onSubmit}>
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
