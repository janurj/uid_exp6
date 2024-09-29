import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="items-container">
      <h2>Items:</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      ) : (
        <p>No items added yet.</p>
      )}
    </div>
  );
};

export default ItemList;
