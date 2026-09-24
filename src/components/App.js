
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [arr,setArr] = useState([{name: "", age: ""}]);

  const addField = () => {
    setArr([...arr, { name: "", age: ""}]);
  }
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(arr);
  };
  const handleChange = (index, field, value) => {
    const updated = arr.map((item,i) => {
      if(i === index){
      return {...item,[field]:value};
     }
     return item;
    });
    setArr(updated);
  };

  const removeField = (index) => {
     const updated = arr.filter((item,i) => i !== index);
     setArr(updated);
  };

  return (
    <div>
        {
          <form onSubmit={handleSubmit}>

             {
              arr.map((item,index) => (
                <div key={index}>
                  <input 
                     name="name"
                     type="text"
                     placeholder="Name"
                     value={item.name}
                     onChange={(e) => handleChange(index,"name", e.currentTarget.value)}
                  />
                  <input 
                     name="age"
                     type="number"
                     placeholder="Age"
                     value={item.age}
                     onChange={(e) => handleChange(index, "age", e.currentTarget.value)}
                  />

                  <button type="button" onClick={() => removeField(index)}>Remove</button>
                </div>
              ))
             }
             <button type="button"  onClick={addField}>Add More...</button>
             <button type="submit">Submit</button>
          </form>
        }
    </div>
  );
};

export default App
