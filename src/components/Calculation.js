
export function Calcu({ items }) {
    if (!items.length)
      return (
        <p >
          <em>Start adding some items to your packing list</em>
        </p>
      );
    const numItems = items.length;
    const checkitem = items.filter((item) => item.packed).length;
    const percentage = Math.round((checkitem / numItems) * 100);
  
    return (
      <footer>
        <em>
          {percentage === 100
            ? "You got everything! Ready to go✈️"
            : `
          You Have ${numItems} items on your list, your item is checked
          ${checkitem} (%${percentage})`}
        </em>
      </footer>
    );
  }
  