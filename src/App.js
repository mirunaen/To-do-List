import './App.css';
import React, { useState } from 'react';

function App() {
  const things = ["Go for a run", "Make the dinner", "Listening to music", "d", "e"];
  const [name, setName] = useState("initialState")
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={() => (setName("Martin"))}>Say hi to Martin</button>
      <div>
        {things.map(todo => <p>{todo}</p>)}
      </div>

    </div>
  );
}

export default App;
