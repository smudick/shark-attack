import React from 'react';
import LiveStudent from '../LiveStudent';

class SharkTank extends React.Component {
  render() {
    return (
      <div className='tank d-flex flex-wrap'>
        {this.props.liveStudents.map((student) => (
          <LiveStudent key={student.id} student={student} />
        ))}
        ;
      </div>
    );
  }
}

export default SharkTank;
