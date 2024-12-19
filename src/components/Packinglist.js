import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList
  
}) {

  return (
   

    <div className="packing-item">
      <ul>
        {items.map((item) => (
          <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          
            key={item.id}
            />
        ))}
      </ul>
      <div className="clearbutton">

<button onClick={onClearList}>Clear List</button>
      </div>
    </div>


   
            
  );
}
