// import React, { useState } from 'react';
// import './App.css';

// function App() {

//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   const handleAddItem = () => {
//     if (newItem.trim() !== '') {
//       setItems([...items, newItem]);
//       setNewItem('');
//     }
//   };

//   return (
//     <div className="App">
//     <h1>enter list</h1>

//     <div>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Enter item"
//       />
//       <button onClick={handleAddItem}>Add list</button>
//     </div>

//     <h2>List :</h2>
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );
// }

// export default App;

import { useState } from "react";
import Form from "./Form";
import PackingList from "./Packinglist";
import { Calcu } from "./Calculation.js";

export default function App() {
  const [items, setItems] = useState([]);


  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(" clear all items");

    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div>
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Calcu items={items} />
    </div>
  );
}
