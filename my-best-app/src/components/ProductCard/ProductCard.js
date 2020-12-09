import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {

    render () {
        return (
            <div className="card" id={this.props.id}>
                <div className="card-img">
                    <img src={this.props.imageURL} alt="" />
                </div>
                <strong className="card-description">{this.props.description}</strong>
                <div className="card-bottom-area">
                    <div className="discount">Discount: {this.props.discount}</div>
                    <div className="price">Price: {this.props.price}</div>
                </div>
                <span className="delete-btn" onClick={()=>{this.props.deleteProduct(this.props.id)}}>Delete</span>
            </div>
        );
    }
}

export default ProductCard;
