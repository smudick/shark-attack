import React from 'react';
import LiveStudent from '../LiveStudent';
import studentData from '../../../helpers/data/studentData';

class SharkTank extends React.Component {
  state = {
    students: studentData,
  }

  render() {
    return (
      <div className='student-card d-flex flex-wrap'>
        {this.state.students.map((student) => (
          <LiveStudent key={student.id} student={student} />
        ))}
        ;
      </div>
    );
  }
}

export default SharkTank;
