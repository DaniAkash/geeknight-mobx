import React, {
  Component,
} from 'react';
import StudentForm from "./CommonComponents/StudentForm";
import {withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react/index";

@withRouter
@inject('studentStore')
@observer
class AddStudent extends Component {

  addStudent = student => {
    this.props.studentStore.addStudent(student);
    this.props.history.goBack();
  };

  render() {
    return (
      <div className={'container'}>
        <h1>Add Student</h1>
        <StudentForm onSubmit={this.addStudent}/>
      </div>
    )
  }
}

export default AddStudent;
