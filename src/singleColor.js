import React, {useState, useEffect} from 'react';

const SingleColor = ({colorItem, index})=>{
    const [alert, setAlert] = useState(false);
    useEffect(()=>{
        const hide = setTimeout(()=>setAlert(false), 2000);
        return ()=>clearTimeout(hide);
    },[alert])

    const {rgb, weight, hex} = colorItem;
    const hexColor = `#${hex}`;
    const rgbArray = rgb.join(',');
    return(
      <div className='single-color' key={index} 

      style={{backgroundColor:`rgb(${rgbArray})`, 
      color:`${index>8 && 'white'}`}}

      onClick={()=>{navigator.clipboard.writeText(hexColor);
      setAlert(true)}}>

        <p className='percent'>{weight}%</p>
        <p className='hex-color'>{hexColor}</p>
        {alert?<p className='clipboard'>copied to clipboard</p>:null}
      </div>
    )
}

export default SingleColor;