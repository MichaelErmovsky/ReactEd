import React from 'react';
import './AddProduct.scss';
//import {ReactComponent as Logo} from '../images/logo512.png'; for svg <Logo/>

class AddProduct extends React.Component{

  render (){
    return (
      <div className="add-product">
        <strong className="add-product__title">Add new product</strong>
        <div className="add-product__row">
          <label for="name" className="add-product__label">Add name<i className="add-product__marker"></i></label>
          <input type="text" id="name"/>
          <span className="add-product__error"></span>
        </div>
        <div className="add-product__row">
          <label for="description" className="add-product__label">Add description<i className="add-product__marker"></i></label>
          <input type="text" id="description"/>
          <span className="add-product__error"></span>
        </div>
        <div className="add-product__row">
          <label for="discount" className="add-product__label">Add discount</label>
          <input type="text" id="discount"/>
        </div>
        <div className="add-product__row">
          <label for="quantity" className="add-product__label">Add quantity<i className="add-product__marker"></i></label>
          <input type="text" id="quantity"/>
          <span className="add-product__error"></span>
        </div>
        <div className="add-product__row">
          <label for="price" className="add-product__label">Add price<i className="add-product__marker"></i></label>
          <input type="text" id="price"/>
          <span className="add-product__error"></span>
        </div>
        <div className="add-product__buttons">
          <button className="add-product__btn">Create</button>
          <button className="add-product__btn danger">Clear</button>
        </div>
      </div>
    );
  }
}
export default AddProduct;
