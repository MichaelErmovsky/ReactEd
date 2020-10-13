import React from 'react';

class App extends React.Component {
    customInput(value, onChange) {
        let newArr = value.split(',');
    }

    handleChange() {
        
    }

    render() {
        return (
            <input 
                type="text"
                value = {this.state.value}
                onChange = {this.handleChange}
            />
        );
    }
}

export default App;