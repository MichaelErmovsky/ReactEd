import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
// import CustomInput from './CustomInput';

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('root')
);


{/* <CustomInput value={["string1", "string2"]} onChange={(event)=>{console.log(event.target.value.split(', '))}}/> */}