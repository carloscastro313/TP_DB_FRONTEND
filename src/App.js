import { useState } from 'react';
import { Botones } from './components/Botones';
import { DisplayJson } from './components/DisplayJson';
 
function App() {

  const [json, setJson] = useState({});

  return (
    <div>
      <Botones setJson={setJson} />
      <DisplayJson json={json}/>
    </div>
  );
}

export default App;
