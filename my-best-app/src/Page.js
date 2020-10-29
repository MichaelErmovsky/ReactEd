import React from 'react';
import ProductList from './components/ProductList'

class Page extends React.Component {
    state = {
        products: [
            {
                id: '001',
                name: 'Product Name 1',
                description: 'Description text Product Name 1',
                discount: '20%',
                quantity: '3',
                price: '100$',
                imageURL: 'https://dummyimage.com/600x400/000/fff'
            },
            {
                id: '002',
                name: 'Product Name 2',
                description: 'Description text Product Name 2',
                discount: '10%',
                quantity: '4',
                price: '200$',
                imageURL: 'https://dummyimage.com/600x400/cecece/fff'
            },
            {
                id: '003',
                name: 'Product Name 3',
                description: 'Description text Product Name 3',
                discount: '12%',
                quantity: '13',
                price: '400$',
                imageURL: 'https://dummyimage.com/600x400/f00/fff'
            },
            {
                id: '004',
                name: 'Product Name 4',
                description: 'Description text Product Name 4',
                discount: '100%',
                quantity: '5',
                price: '600$',
                imageURL: 'https://dummyimage.com/600x400/000/fff'
            }
        ]
    };

    render () {
        return (
            <ProductList products={this.state.products}/>
        );
    }
}

export default Page;
