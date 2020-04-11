import React from 'react';

function GroceryItem(item) {
    console.log(item.item)
    return (
        <>
            <div>{item.item.name} - {item.item.quantity}</div>
        </>
    );
}

export default GroceryItem;