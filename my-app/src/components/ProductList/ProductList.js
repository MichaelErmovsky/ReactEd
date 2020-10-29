import React from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard';

class ProductList extends React.Component{
  state = {
    products:[
      {id:101, name: 'pear', description: 'Lorem ipsum', discount: '5%', quantity: 10, price: 45, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:102, name: 'apple', description: 'Lorem ipsum dolor imet', discount: '2%', quantity: 20, price: 4.5, imageSrc: 'https://cdn.statically.io/img/static.web.id/dog.jpg'},
      {id:103, name: 'ion', description: 'Lorem ipsum dolor imet', discount: '1%', quantity: 80, price: 25, imageSrc: 'https://cdn.statically.io/img/static.web.id/cat.jpg'},
      {id:104, name: 'garlic', description: 'Lorem ipsum text', discount: '15%', quantity: 100, price: 21, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:105, name: 'orange', description: 'Lorem some text', discount: '3%', quantity: 12, price: 16, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:106, name: 'banana', description: 'Lorem ipsum dolor imet', discount: '1%', quantity: 78, price: 82, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:107, name: 'pineapple', description: 'Lorem ipsum dolor imet', discount: '8%', quantity: 65, price: 101, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:108, name: 'peach', description: 'Lorem ipsum dolor imet', discount: '20%', quantity: 80, price: 9, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:109, name: 'melon', description: 'Lorem ipsum dolor imet', discount: '4.5%', quantity: 45, price: 27, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:110, name: 'parsley', description: 'Lorem ipsum dolor imet', discount: '0.5%', quantity: 42, price: 33, imageSrc: 'https://statically.io/images/misc/clouds.jpg'}
    ]
  };

  render (){
    const products = this.state.products;
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
