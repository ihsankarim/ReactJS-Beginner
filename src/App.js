import "./App.css";
import {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }

    const setToZero = () => {
        setCount(0);
    }

    return (
        <div className="App">
            <div>
            {count}
            </div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={setToZero}>setToZero</button>
  
        </div>
    )
}

export default App;