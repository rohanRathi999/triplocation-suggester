import './App.css';
import Tours from './Tours';
import data from './Data';
import { useState } from 'react';

function App() {
  
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  
  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button onClick={()=> setTours(data)} className='btn-white'>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
