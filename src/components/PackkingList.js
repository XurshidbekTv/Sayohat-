import Item from './Item';
import React from 'react';
import { useState } from "react";

function PackingList({items, onDeleteItem , onToggleItem, onClearList}){
    const [sortBy, setSortBy]=useState("input")
    
    let sortedItems;
    if(sortBy==="input")
    {sortedItems=items}
    if(sortBy==="description")
    { sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))}
    if(sortBy==="packed"){
      sortedItems=items.slice().sort((a,b)=>Number(b.packed)-Number(a.packed))
    }
    return(
      <div className='list'>
       <ul>
        {sortedItems.map(item=>(
          <Item 
          item={item} 
          key={item.id} 
          onDeleteItem={onDeleteItem} 
          onToggleItem={onToggleItem}
          />
        ))}
       </ul>
       <div className="actions">
          <select
          value={sortBy}
          onChange={(e)=>setSortBy(e.target.value)}
          >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sor by packed status</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
      </div>
      </div>
      
    );
  }

  export default PackingList