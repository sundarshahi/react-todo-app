import {useState} from 'react';
import {v4 as uuid} from 'uuid';

export default function useTodoTools(){
    
    const [items,setItems]=useState([])
    const [id, setId]=useState(uuid())
    const [item,setItem]=useState("")
    const [editItem, setEditItem]=useState(false)
    
    const handleChange = e => {
      setItem( e.target.value);
    };
    const handleSubmit= e =>{
      e.preventDefault();
      const newItem = {
        id:id,
        title:item
      };
      const updateItems = [...items,newItem];
      
      setItems(updateItems)
      setItem("")
      setId(uuid())
      setEditItem(false)
    };
    const clearList=()=>{
      setItems([])
    }
    const handleDelete= id =>{
      const filteredItems = items.filter(item =>
        item.id !== id);
        setItems(filteredItems)
    };
    const handleEdit= id => {
      const filteredItems = items.filter(item =>
        item.id !== id);
        const selectedItem = items.find(item =>
          item.id===id);
          setItems(filteredItems);
          setItem(selectedItem.title);
          setId(id);
          setEditItem(true)
      };

      return(
          { 
            item,
            items,
            editItem,
            handleChange,
            handleDelete,
            handleEdit,
            handleSubmit,
            clearList
          }
      )

}