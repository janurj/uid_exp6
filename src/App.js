import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default App;
