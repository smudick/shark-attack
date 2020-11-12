import React from 'react';

class Gravestone extends React.Component {
  render() {
    const { firstName, lastName } = this.props.student;
    return (
      <div className='gravestone col-2 m-2'>
        <h2 className='epitaph'>RIP <br></br>
         {firstName} {lastName}</h2>
      </div>
    );
  }
}

export default Gravestone;
