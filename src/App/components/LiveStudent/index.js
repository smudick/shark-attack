import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

class LiveStudent extends React.Component {
  render() {
    const {
      firstName, lastName, image,
    } = this.props.student;
    return (
      <div className='live-student-cards col-2 m-2'>
        <Card>
          <CardImg top width='100%' size='sm' src={image} alt='Card image cap' />
          <CardBody>
            <CardTitle tag='h5'>
              {firstName} {lastName}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LiveStudent;
