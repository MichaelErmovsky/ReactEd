import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            textField: "Vadim",
            renderComponent: true
        };
    }

    render() {
        const textField = this.state.textField;

        return (
            <div>
                {textField}
            </div>
        );
    };
}

export default App;
