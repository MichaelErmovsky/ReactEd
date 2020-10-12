import React from 'react';
import Parent from './Parent';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initText : 'Datsenko Andrey'
        };
    }

    render() {
        const initText = this.state.initText;

        return (
            <div>
                <Parent text={initText} />
            </div>
        );
    };
}

export default Info;
