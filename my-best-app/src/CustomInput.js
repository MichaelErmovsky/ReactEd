import React from 'react';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value.join(','),
        };
    }

    static getDerivedStateFromProps (newProps, prevState){
        if (newProps.value !== prevState.value) {
            return {
                value: newProps.value
            }
        }
        return null;
    }

    handleChange (event){
        const newValue = event.target.value.split(',');
        this.props.onChange(newValue);
    }    

    render() {
        const onChange = this.props.onChange;
        const value = this.state.value;
        return (
            <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
        );
    }
}

export default CustomInput;
