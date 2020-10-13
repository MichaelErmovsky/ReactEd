import React from 'react';

class CustomInput extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: props.value,
            onChange: props.onChange
        }
    }

    static getDerivedStateFromProps(newProps, prevState) {
        console.log(newProps, prevState);
        if (newProps.value !== prevState.value) {
            return {
                value: newProps.value
            }
        }
        return null;
    }

    handleInputChange(event){
        console.log(event.target.value);
        let newArr = event.target.value.split(', ');
        this.state.onChange(newArr);
    }

    render() {
        return (
            <input 
                type="text"
                value = {this.state.value.join(', ')}
                onChange = {this.handleInputChange}
            />
        );
    }
}

export default CustomInput;
