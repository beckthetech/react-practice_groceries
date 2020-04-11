import React from 'react';
import GroceryItem from '../../components/GroceryItem/GroceryItem'

function ItemListPage(props) {
    return (
        <>
            <h1>Grocery List</h1>
            <div>
                {props.groceries.map(item =>
                    <GroceryItem item={item} />
                )}
            </div>
        </>
    );
}

export default ItemListPage;