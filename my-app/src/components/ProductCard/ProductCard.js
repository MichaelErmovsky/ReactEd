import React from 'react';
import './ProductCard.scss';
//import {ReactComponent as Logo} from '../images/logo512.png'; for svg <Logo/>

class ProductCard extends React.Component{

  render (){
    return (
      <div className="card" data-id={this.props.id}>
        <div className="card__img">
          <img src={this.props.imgSrc} alt="image description"/>
        </div>
        <h2 className="card__title">
          {this.props.name}
        </h2>
        <strong className="card__description">
          {this.props.description}
        </strong>
        <div className="card__row">
          <em className="card__discount">
            Discount: {this.props.discount}
          </em>
          <strong className="card__price">
            Price: {this.props.price}
          </strong>
        </div>
      </div>
    );
  }
}
export default ProductCard;
