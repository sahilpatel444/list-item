import { ToastContainer, toast } from 'react-toastify';

export default function Item({ item, onDeleteItem,onToggleItem}) {

    const notify = () => toast("remove item");

   
    return (
      <li>
         <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        
      />
      
      
        <span style={item.packed ? { textDecoration: "line-through", color: "red" } : {}}>
          {item.quantity} {item.description}
          
        </span>
        <button onClick={() => onDeleteItem(item.id)} >remove</button>
      </li>
      
    );
  }
  