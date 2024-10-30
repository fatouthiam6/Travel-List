export function Item({ item, onDetelteItem, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDetelteItem(item.id)}>❌</button>
    </li>
  );
}
