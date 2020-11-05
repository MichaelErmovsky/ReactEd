import React from 'react';
import ProductList from './../Components/ProductList';
import "./Page.scss";

class Product extends React.Component{
    state = {
        products : [
            {
                id: '00000',
                name: 'Test product 01',
                description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
                discount: '15%',
                quantity: '001',
                price: '99.99$',
                imageURL: 'https://dummyimage.com/300x300/000/000000.jpg', 
            },
            {
                id: '00001',
                name: 'Test product 02',
                description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
                discount: '14%',
                quantity: '010',
                price: '89.99$',
                imageURL: 'https://dummyimage.com/300x300/000/000000.jpg', 
            },
            {
                id: '00002',
                name: 'Test product 03',
                description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
                discount: '13%',
                quantity: '011',
                price: '79.99$',
                imageURL: 'https://dummyimage.com/300x300/000/000000.jpg', 
            },
            {
                id: '00003',
                name: 'Test product 04',
                description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
                discount: '12%',
                quantity: '100',
                price: '69.99$',
                imageURL: 'https://dummyimage.com/300x300/000/000000.jpg', 
            },
            {
                id: '00000',
                name: 'Test product 05',
                description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
                discount: '11%',
                quantity: '101',
                price: '59.99$',
                imageURL: 'https://dummyimage.com/300x300/000/000000.jpg', 
            },
        ],
        product : {
            id: '00000',
            name: 'Test product 01',
            description: 'Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet Lorem ipsum dolor si amet ',
            discount: '15%',
            quantity: '11',
            price: '99.99$',
            imageURL: 'https://dummyimage.com/300x300/000/000000.jpg',
        },
    }

    render (){
        const product = this.state.product;

        return (
            <div className="product-container">
                <ProductList products={this.state.products}/>
            </div>            
        )        
    }
}

export default Product;
