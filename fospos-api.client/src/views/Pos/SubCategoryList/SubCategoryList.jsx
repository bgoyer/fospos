import { useEffect, useState } from "react";

const SubCategoryList = ({ onClick, categoryID = null }) => {
    const [subcategories, setSubcategories] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const handleSubcategoryButtonClick = (item) => () => {
        if (onClick != null) {
            onClick(item);
        }
    }

    useEffect(() => {
        setFiltered(categoryID == null ? [] : subcategories.filter(s => s.categoryID === categoryID));
    }, [categoryID]);

    useEffect(() => {
        const go = async () => {
            const response = await fetch('/api/subcategories');
            const data = await response.json();
            setSubcategories(data);
        }
        go();
    }, []);

    return filtered.map(item => <button key={item.id} onClick={handleSubcategoryButtonClick(item)}>{item.name}</button>);
}

export default SubCategoryList;