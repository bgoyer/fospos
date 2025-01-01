import { useEffect, useState } from 'react';
import './App.css';

const productUrl = getApiUrl('/api/Products');

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const go = async () => {
            const response = await fetch('/api/Products');
            const data = await response.json();
            setData(data);
        }
        go();
    }, [])

    return (
        <>
            <h1>Plop</h1>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                </div>
            ))}
        </>
    );
}

export default App;

function getApiUrl(path) {
    return import.meta.env.DEV ? `https://0.0.0.0:8001/${path}` : `/${path}`;
}