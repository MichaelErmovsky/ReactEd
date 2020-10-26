import React from 'react';
import ProductCard from './../Components/ProductCard/ProductCard';

class Product extends React.Component{
    state = {
        product : {
            id: '00000',
            name: 'Test product 01',
            description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
            discount: '15%',
            quantity: '11',
            price: '99.99$',
            imageURL: 'https://dummyimage.com/300x300/000/000000.jpg',
        }
    }

    render (){
        const product = this.state.product;

        return (
            <ProductCard 
                id={product.id} 
                name={product.name} 
                description={product.description} 
                discount={product.discount} 
                quantity={product.quantity} 
                price={product.price}
                imageURL={product.imageURL} 
            />
        )
    }
}

export default Product;
