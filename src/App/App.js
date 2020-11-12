import React from 'react';
import '../styles/App.scss';
import SharkTank from './components/SharkTank';
import studentData from '../helpers/data/studentData';
import Graveyard from './components/Graveyard';

class App extends React.Component {
  state = {
    liveStudents: studentData,
    deadStudents: [],
  };

  deadDeterminer = (num) => (
    studentData.forEach((student) => {
      if (student.isDead === true) {
        this.state.liveStudents.splice(num, 1);
        this.setState({
          deadStudents: [...this.state.deadStudents, student],
        });
      }
    })
  );

  followTheLight = (num) => {
    const unluckyStudent = this.state.liveStudents[num];
    unluckyStudent.isDead = true;
    this.deadDeterminer(num);
  };

  numberGenerator = () => {
    const randomNum = Math.floor(Math.random() * this.state.liveStudents.length);
    this.followTheLight(randomNum);
  };

  render() {
    return (
      <div className='App'>
        <button className='btn btn-danger m-2 p-3 attack'onClick={this.numberGenerator}>SHARK ATTACK!!!</button>
        <SharkTank liveStudents={this.state.liveStudents} />
        <Graveyard deadStudents={this.state.deadStudents} />
      </div>
    );
  }
}

export default App;
