import React from 'react';

class Info extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          initText: "Datsenko Andrey"
      };
  }

  render() {
      const initText = this.state.initText;

      return (
          <div>
              {initText}
          </div>
      );
  };
}

export default Info;
