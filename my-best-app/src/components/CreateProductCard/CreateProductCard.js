import React from 'react';
import './product-form.scss';

class CreateProductCard extends React.Component {

    state = {
        name: "",
        description: "",
        discount: "",
        quantity: "",
        price: ""
    }

    handleInputChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleClearBtn(event){
        event.preventDefault();
        this.setState({
            name: "",
            description: "",
            discount: "",
            quantity: "",
            price: ""
        })
    }

    handleCreateBtn(event){
        event.preventDefault();
        if(!this.state.name){
            alert("Please enter the name");
            return;
        };
        if(!this.state.description){
            alert("Please enter the description");
            return;
        };
        if(!this.state.quantity){
            alert("Please enter the quantity");
            return;
        };
        if(!this.state.price){
            alert("Please enter the price");
            return;
        };
        this.props.onProductCreate(this.state);
    }

    // componentDidMount() {
    //     let cardId = this.getRandomIntInclusive(10000, 99999);
    // }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        const {name, description, discount, quantity, price} = this.state;
        return (
            <form className="product-form">
                <div className="row">
                    <input id="name" placeholder="Name*" type="text" value={name} onChange={this.handleInputChange.bind(this)} />
                </div>
                <div className="row">
                    <input id="description" placeholder="Description*" value={description} type="text" onChange={this.handleInputChange.bind(this)} />
                </div>
                <div className="row">
                    <input id="discount" placeholder="Discount" type="text" value={discount} onChange={this.handleInputChange.bind(this)} />
                </div>
                <div className="row">
                    <input id="quantity" placeholder="Quantity*" type="text" value={quantity} onChange={this.handleInputChange.bind(this)} />
                </div>
                <div className="row">
                    <input id="price" placeholder="Price*" type="text" value={price} onChange={this.handleInputChange.bind(this)} />
                </div>
                <div className="row">
                    <button onClick={this.handleCreateBtn.bind(this)}>Create</button>
                    <button onClick={this.handleClearBtn.bind(this)}>Clear</button>
                </div>
            </form>
        );
    }
}

export default CreateProductCard;
