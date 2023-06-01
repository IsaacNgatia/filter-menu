import React, { useState } from "react";
import items from "../data";
import Card from "../components/Card";

const Layout = () => {
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) =>{
    if(category === "all"){
      return setMenuItems(items)
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  return <div>
    <div className="flex flex-col items-center space-y-3 pt-20">
      <h1 className="text-4xl">Our Menu</h1>
      <div className="bg-orange-600 w-24 h-1 rounded-lg"/>
      <div className="flex flex-row space-x-4 items-center pt-5 mx-auto">
      <button type="button" className="px-2 bg-orange-500 hover:bg-orange-400 rounded-md drop-shadow-md"onClick={()=> filterItems("all")}>All</button>
      <button type="button" className="px-2 bg-orange-500 hover:bg-orange-400 rounded-md drop-shadow-md" onClick={()=> filterItems("breakfast")}>Breakfast</button>
      <button type="button" className="px-2 bg-orange-500 hover:bg-orange-400 rounded-md drop-shadow-md" onClick={()=> filterItems("lunch")}>Lunch</button>
      <button type="button" className="px-2 bg-orange-500 hover:bg-orange-400 rounded-md drop-shadow-md" onClick={()=> filterItems("shakes")}> Shakes</button>
    </div>
    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 pt-3">
      {menuItems.map((item)=> {
        return <Card key={item.id} {...item}/>
      })}
    </div>
    
      
    </div>
  </div>;
};

export default Layout;
