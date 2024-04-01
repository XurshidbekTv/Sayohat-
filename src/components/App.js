import Form from './Form';
import Logo from './Logo';
import PackingList from './PackkingList';
import Stats from './Stats';
import { useState } from 'react';


function App() {
  const [items, setItems]=useState([])
  function handleAddItems(item){
    setItems((items)=>[...items, item])
  }

  function handleDeletedItem(id){
    setItems((items)=>items.filter((item)=>item.id !==id))
  }

  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id ===id ? {...item ,packed: !item.packed}: item))
  }

  function handleClearList(){
    const confirmed= window.confirm('Are you sure you want to delete all items?')
    setItems([])
  }
  return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList 
      items={items} 
      onDeleteItem={handleDeletedItem} 
      onToggleItem={handleToggleItem}
      onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}



export default App;
