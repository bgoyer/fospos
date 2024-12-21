import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const go = async () => {
            const response = await fetch('/api/Products');
            const data = await response.json();
            setData(data);
        }
        go();
    }, [])

    return (
        <div>
            <h1>Plop</h1>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                </div>
            ))}
        </div>
    );
}

export default App;