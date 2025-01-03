import { useEffect, useState } from "react";

const CategoryList = ({ onChange }) => {
    const [categories, setCategories] = useState([]);

    const handleClick = (item) => () => {
        if (onChange != null) {
            onChange(item);
        }
    }

    useEffect(() => {
        const go = async () => {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data);
        }
        go();
    }, [])
    
    return categories?.map(item => (
        <button key={item.id} onClick={handleClick(item)}>{item.name}</button>
    ));
}

export default CategoryList;