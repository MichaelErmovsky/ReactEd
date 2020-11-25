import React from 'react';
import ProductList from './components/ProductList';

class Page extends React.Component{
  state = {
    products:[
      {id:101, name: 'pear', description: 'Lorem ipsum', discount: '5%', quantity: 10, price: 45, imageSrc: 'https://statically.io/images/misc/clouds.jpg'},
      {id:102, name: 'apple', description: 'Lorem ipsum dolor imet', discount: '2%', quantity: 20, price: 4.5, imageSrc: 'https://cdn.statically.io/img/static.web.id/dog.jpg'},
      {id:103, name: 'ion', description: 'Lorem ipsum dolor imet', discount: '1%', quantity: 80, price: 25, imageSrc: 'https://cdn.statically.io/img/static.web.id/cat.jpg'},
      {id:104, name: 'garlic', description: 'Lorem ipsum text', discount: '15%', quantity: 100, price: 21, imageSrc: 'https://demo.sirv.com/bag.jpg'},
      {id:105, name: 'orange', description: 'Lorem some text', discount: '3%', quantity: 12, price: 16, imageSrc: 'https://cdn.statically.io/img/static.web.id/cat.jpg'},
      {id:106, name: 'banana', description: 'Lorem ipsum dolor imet', discount: '1%', quantity: 78, price: 82, imageSrc: 'https://demo.sirv.com/bag.jpg'},
      {id:107, name: 'pineapple', description: 'Lorem ipsum dolor imet', discount: '8%', quantity: 65, price: 101, imageSrc: 'https://demo.sirv.com/Examples/FrogGoesToMarket/08.jpg?scale.option=fill&scale.width=698&scale.height=537'},
      {id:108, name: 'peach', description: 'Lorem ipsum dolor imet', discount: '20%', quantity: 80, price: 9, imageSrc: 'https://cdn.statically.io/img/static.web.id/dog.jpg'},
      {id:109, name: 'melon', description: 'Lorem ipsum dolor imet', discount: '4.5%', quantity: 45, price: 27, imageSrc: 'https://demo.sirv.com/Examples/FrogGoesToMarket/00.jpg?crop.height=49.5663%25&crop.y=25.1549%25&scale.option=fill&scale.width=570&scale.height=807'},
      {id:110, name: 'parsley', description: 'Lorem ipsum dolor imet', discount: '0.5%', quantity: 42, price: 33, imageSrc: 'https://statically.io/images/misc/clouds.jpg'}
    ]
  };

  addProduct(newProduct){
    const {products} = this.state;
    products.push(newProduct);
    this.setState({
      products: products
    })
  }

  render (){
    return (
      <div>
        <ProductList products = {this.state.products} handleProductAdd={this.addProduct.bind(this)}/>
      </div>
    );
  }

}
export default Page;
