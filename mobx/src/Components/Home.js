import React, {
  Component,
} from 'react';
import {
  observer,
  inject,
} from 'mobx-react';
import StudentTable from "./CommonComponents/StudentTable";

@inject('studentStore')
@observer
class Home extends Component {
  render() {
    const {students} = this.props.studentStore;

    return (
      <div className="container">
        <h1>Students</h1>
        <StudentTable students={students}/>
      </div>
    )
  }
}

export default Home;
