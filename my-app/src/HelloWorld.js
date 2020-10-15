import React from 'react';

class Info extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            value: this.props.data,
            str: 'test'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(newProps, prevState) {
        if (newProps.data !== prevState.value) {
            return {
                value: newProps.data
            }
        }
        return null;
    }

    handleChange(event) {
        let res = event.target.value.split(",");
        this.props.onChange(res);
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value.join()} onChange={this.handleChange} />
            </form>
        );
    }
}

export default Info;
