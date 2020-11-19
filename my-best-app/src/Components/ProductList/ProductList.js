import React from 'react';
import ProductCard from '../ProductCard';
import CreateProductCard from '../CreateProductCard';
import "./ProductList.scss";

class ProductList extends React.Component {
    render () {
        const products = this.props.products;
        const productsItem = products.map(product => {
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
                />
            );
        });
        
        return (
            <div className="product-item--list">
                {productsItem}
                <CreateProductCard handleProductAdd={this.props.handleProductAdd}/>
            </div>
        );
    }
}

export default ProductList;
