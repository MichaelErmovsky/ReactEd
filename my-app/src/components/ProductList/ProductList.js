import React from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard';

class ProductList extends React.Component{
  render (){
    const products = this.props.products;
    const productItems = products.map(product => {
      return(
        <ProductCard 
        key={product.id}
        imgSrc = {product.imageSrc}
        description = {product.description}
        discount = {product.discount}
        price = {product.price}
        />
      );
    });

    return (
      <div className="catalog">
        {productItems}
      </div>
    );
  }
}
export default ProductList;
