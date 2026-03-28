import { useState } from 'react';

export default function App(){
  const [rain, setRain] = useState('');
  const [list, setList] = useState([]);

  return (
    <div style={{padding:20}}>
      <h1>ProFarmerZim</h1>
      <input placeholder="mm" value={rain} onChange={e=>setRain(e.target.value)} />
      <button onClick={()=>{setList([...list, rain]); setRain('')}}>Add</button>
      <ul>{list.map((x,i)=><li key={i}>{x} mm</li>)}</ul>
    </div>
  )
}
