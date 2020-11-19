import React from "react";
import "./CreateProductCard.scss";

class CreateProductCard extends React.Component {
    state = {
        name: "",
        description: "",
        discount: "",
        quantity: "",
        price: "",
    }

    handleChange(event){
        // const newValue = event.target.value;
        // const fieldId = event.target.id;

        // let fieldValue = {};
        // fieldValue[fieldId] = newValue;
        
        // this.setState(fieldValue);

        this.setState({[event.target.id] : event.target.value});
    }

    randomId(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        console.log(Math.floor(rand));
        return Math.floor(rand);
    }

    handleCreate(event){
        event.preventDefault();
        const payload = this.state;
        payload.id = this.randomId(10000, 99999);
        payload.imageURL = 'https://dummyimage.com/300x300/000/000000.jpg';

        if (!payload.name){
            alert("Invalid name");
            return;
        };
        if (!payload.description){
            alert("Invalid description");
            return;
        };
        if (!payload.quantity){
            alert("Invalid quantity");
            return;
        };
        if (!payload.price){
            alert("Invalid price");
            return;
        };
        
        this.props.handleProductAdd(payload);
        
        this.setState({
            name: "",
            description: "",
            discount: "",
            quantity: "",
            price: "",
        })
    }

    handleClear(event){
        event.preventDefault();
        this.setState({
            name: "",
            description: "",
            discount: "",
            quantity: "",
            price: "",
        })
    }

    render(){
        const {name, description, discount, quantity, price} = this.state;
        return(
            <div className="product-item">
                <div className="product-item--card create">
                    {/* <div className="row">
                        {JSON.stringify(this.state)}
                    </div> */}
                    <div className="product-item--card-field-holder">
                        <div className="row">
                            <label for="name">Enter card name</label>
                            <input value={name} id="name" className="form-input" type="text" onChange={this.handleChange.bind(this)} placeholder="Name" required/>
                        </div>
                        <div className="row">
                            <label for="description">Enter card description</label>
                            <textarea value={description} id="description" className="form-input" type="text" onChange={this.handleChange.bind(this)} placeholder="Description" required/>
                        </div>
                        <div className="row">
                            <label for="discount">Enter card discount</label>
                            <input value={discount} id="discount" className="form-input" type="text" onChange={this.handleChange.bind(this)} placeholder="Discount"/>
                        </div>
                        <div className="row">
                            <label for="quantity">Enter card quantity</label>
                            <input value={quantity} id="quantity" className="form-input" type="text" onChange={this.handleChange.bind(this)} placeholder="Qquantity" required/>
                        </div>
                        <div className="row">
                            <label for="price">Enter card price</label>
                            <input value={price} id="price" className="form-input" type="text" onChange={this.handleChange.bind(this)} placeholder="Price" required/>
                        </div>
                    </div>
                    <div className="product-item--card-btn-holder">
                        <a href="/" onClick={this.handleCreate.bind(this)} className="btn btn-primary" id="create">Create</a>
                        <a href="/" onClick={this.handleClear.bind(this)} className="btn btn-outline-primary" id="clear">Clear</a>
                    </div>
                </div>
            </div>
        )        
    }
}

export default CreateProductCard;
