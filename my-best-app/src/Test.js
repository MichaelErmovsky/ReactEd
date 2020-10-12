import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            myName: props.name
        };
    }

    render() {
        const myName = this.state.myName;

        return (
            <div>
                {myName}
            </div>
        );
    };
}

export default App;
