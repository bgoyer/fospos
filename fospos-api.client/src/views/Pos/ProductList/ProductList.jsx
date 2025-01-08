import { useEffect, useState } from "react";

const ProductList = ({ onClick, subcategoryID = null }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const handleClick = (product) => () => {
        if (onClick != null) {
            onClick(product);
        }
    }
    
    useEffect(() => {
        setFiltered(subcategoryID == null ? [] : products.filter(s => s.subcategoryID === subcategoryID));
    }, [subcategoryID]);

    useEffect(() => {
        const go = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        }
        go();
    }, []);
    
    return filtered.map(item => <button key={item.id} onClick={handleClick(item)} className="orderItemTemplate">{item.name}</button>)
}

export default ProductList;