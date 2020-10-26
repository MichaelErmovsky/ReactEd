import React from 'react';
import CustomInput from './CustomInput';

class App extends React.Component {
  state = {
    dummyArray: ['1','2','3'],
  }

  handleInput (arr){
    console.log(arr);
    this.setState({dummyArray: arr});
  }

  render (){
    const dummyArray = this.state.dummyArray;

    return(
      <div>
        <CustomInput value={dummyArray} onChange={this.handleInput.bind(this)}/>
      </div>
    )    
  }
}

export default App;
