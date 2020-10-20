import React from 'react';
import ProductCard from './components/ProductCard';

class Product extends React.Component {
    state = {
        product: {
            id: '001',
            name: 'Product Name',
            description: 'Description text',
            discount: '20%',
            quantity: '3',
            price: '100$',
            imageURL: 'https://dummyimage.com/600x400/000/fff'
        }
    }

    render () {
        const product = this.state.product;
        return (
            <ProductCard 
                imageURL={product.imageURL} 
                id={product.id} 
                name={product.name} 
                description={product.description} 
                discount={product.discount} 
                quantity={product.quantity} 
                price={product.price}
            />
        )
    }
}

export default Product;
