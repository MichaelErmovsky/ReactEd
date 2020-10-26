import React from 'react';
import ProductCard from './components/ProductCard';

class Page extends React.Component{

  state = {

    product: {
      id: 123456789,
      name: 'Cookies',
      description: 'Lorem ipsum dolor imet',
      discount: '5%',
      quantity: 10,
      price: 45,
      imageSrc: 'https://statically.io/images/misc/clouds.jpg'
    }
  };

  render (){
    const item = this.state.product;
    return (
      <ProductCard 
      id = {item.id}
      imgSrc = {item.imageSrc}
      description = {item.description}
      discount = {item.discount}
      price = {item.price}
      />
    );
  }
}
export default Page;
