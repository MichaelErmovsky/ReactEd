import React from 'react';
// const myName = () => {
//     return (
//       <span>Yarik</span>
//     );
// }

// export default myName;

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       name: props.name 
    };
  }

  render() {
    return <span>{this.state.name}</span>
  }
}

export default HelloWorld;