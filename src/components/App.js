import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
*/
export default function App() {
  const [items, setItems] = useState([]);

  function handleAdditem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteitem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditem} />
      <PackingList
        items={items}
        onDetelteItem={handleDeleteitem}
        onToggleItem={handleToggleItem}
        onClear={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
