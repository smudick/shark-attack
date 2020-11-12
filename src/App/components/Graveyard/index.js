import React from 'react';
import Gravestone from '../Gravestone';

class Graveyard extends React.Component {
  render() {
    return (
      <div className='graveyard d-flex flex-wrap'>
        {this.props.deadStudents.map((student) => (
          <Gravestone key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

export default Graveyard;
