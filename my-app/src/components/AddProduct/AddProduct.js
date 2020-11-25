import React from 'react';
import './AddProduct.scss';

class AddProduct extends React.Component{
  state = {
    id: '',
    name: '',
    description: '',
    discount: '',
    quantity: '',
    price: '',
    imageSrc: ''
  };

  handleClear(){
    this.setState ({
      id: '',
      name: '',
      description: '',
      discount: '',
      quantity: '',
      price: '',
      imageSrc: ''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });

    const elements = Object.keys(this.state);

    for(let i = 0; i < elements.length; i++){
      const element = document.getElementById(elements[i]);
      if(element && element){
        const parent = element.closest('.add-product__row');

        if(parent.classList.contains("error")){
          parent.classList.remove("error");
        }
      }
    }
  }
  
  handleSubmit() {
    //alert('name: ' + this.state.name);
    if(!this.state.name){
      let parent = document.getElementById('name').closest('.add-product__row');
      parent.className += ' error';
    }

    if(!this.state.description){
      let parent = document.getElementById('description').closest('.add-product__row');
      parent.className += ' error';
    }

    if(!this.state.quantity){
      let parent = document.getElementById('quantity').closest('.add-product__row');
      parent.className += ' error';
    }

    if(!this.state.price){
      let parent = document.getElementById('price').closest('.add-product__row');
      parent.className += ' error';
    }

    if(this.state.name && this.state.description && this.state.quantity && this.state.price){
      
      this.props.handleProductAdd({
        id: Math.floor(Math.random() * (999999 - 1) + 999999),
        name: this.state.name,
        description: this.state.description,
        discount: this.state.discount,
        quantity: this.state.quantity,
        price: this.state.price,
        imageSrc: 'https://cdn.statically.io/img/static.web.id/dog.jpg'
      });
    }
  }

  render (){
    return (
      <div className="add-product">
        <strong className="add-product__title">Add new product</strong>
        {/* <div className={"add-product__row"+ (!this.state.name ? ' error' : '')}> */}
        <div className="add-product__row">
          <label htmlFor="name" className="add-product__label">Add name<i className="add-product__marker"></i></label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <span className="add-product__error">Field is empty</span>
        </div>
        <div className="add-product__row">
          <label htmlFor="description" className="add-product__label">Add description<i className="add-product__marker"></i></label>
          <input type="text" id="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
          <span className="add-product__error">Field is empty</span>
        </div>
        <div className="add-product__row">
          <label htmlFor="discount" className="add-product__label">Add discount</label>
          <input type="text" id="discount" value={this.state.discount} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="add-product__row">
          <label htmlFor="quantity" className="add-product__label">Add quantity<i className="add-product__marker"></i></label>
          <input type="text" id="quantity" value={this.state.quantity} onChange={this.handleChange.bind(this)}/>
          <span className="add-product__error">Field is empty</span>
        </div>
        <div className="add-product__row">
          <label htmlFor="price" className="add-product__label">Add price<i className="add-product__marker"></i></label>
          <input type="text" id="price" value={this.state.price} onChange={this.handleChange.bind(this)}/>
          <span className="add-product__error">Field is empty</span>
        </div>
        <div className="add-product__buttons">
          <button className="add-product__btn" onClick={this.handleSubmit.bind(this)}>Create</button>
          <button className="add-product__btn danger" onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
        {/* <div>
            {JSON.stringify(this.state)}
          </div> */}
      </div>
    );
  }
}
export default AddProduct;
