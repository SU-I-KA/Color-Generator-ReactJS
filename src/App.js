import React, {useState} from 'react';
import './App.css';
import Values from 'values.js';
import SingleColor from './singleColor';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#222299').all(10));
  const [validEntry, setValidEntry] = useState(true);
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
      const colors = new Values(color);
      setList(colors.all(10));
      console.log(colors.all(10));
      setValidEntry(true);
    }
    catch (error){
      console.log(error);
      setValidEntry(false);
    }
    
  };

  return (
    <div className="container">
      <div className='head'>
        <div className='title'>
          <h1>color generator</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} placeholder='#222299' className={`color-entry ${validEntry?null:'error'}`}
            onChange={(e)=>setColor(e.target.value)}
          />
          <input type='submit' value='submit' className='submit-btn' />
        </form>
      </div>
      
      <div className='color-wrap'>
        {
          list.map((colorItem, index)=>{
            return(
            <SingleColor colorItem={colorItem} index={index} key={index}/>
            )
          })
        }
      </div>
    </div>
    

  );
}

export default App;
