import React from "react";
import "./ProductCard.scss";

class ProductCard extends React.Component {
    render(){
        return(
            <div className="product-container">
                <div className="product-item" data-id={this.props.id}>
                    <div className="product-item--img-holder">
                        <img src={this.props.imageURL} alt="" />
                    </div>
                    <div className="product-item--content">
                    <div className="product-item--title"></div>
                        <div className="product-item--description">{this.props.description}</div>
                        
                        <div className="product-item--price-line">                            
                            <div className="product-item--id">Product id: {this.props.id}</div>
                            <div className="product-item--price">{this.props.price} <span className="product-item--discount">{this.props.discount}</span></div>                            
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
}

export default ProductCard;
