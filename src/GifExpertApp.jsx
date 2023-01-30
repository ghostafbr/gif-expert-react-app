import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpert = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, 'Valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
