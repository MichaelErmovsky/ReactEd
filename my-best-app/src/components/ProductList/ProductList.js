import React from 'react';
import ProductCard from '../ProductCard';
import './ProductList.scss';

class ProductList extends React.Component {
    render () {
        const products = this.props.products;
        const productsItems = products.map(product => {
            return (
                <ProductCard 
                    imageURL={product.imageURL} 
                    id={product.id} 
                    name={product.name} 
                    description={product.description} 
                    discount={product.discount} 
                    quantity={product.quantity} 
                    price={product.price}
                    key={product.id}
                    deleteProduct={this.props.deleteProduct}
                />
            );
        });
        
        return (
            <div className="list">
                {productsItems}
            </div>
        );
    }
}

export default ProductList;
