import './App.css'
import {useState} from 'react';

function App() {
  const [message, setMessage] = useState('Jens');

  const handleChange = event => {
    setMessage(event.target.value);

    // console.log('value is:', event.target.value);
  };

  return (
    <div className='app'>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange} />

      <p>Hello Function {message}!</p>
    </div>
  );
}

export default App;