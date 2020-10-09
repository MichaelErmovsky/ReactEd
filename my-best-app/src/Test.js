import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            myName: "Vadim"
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
