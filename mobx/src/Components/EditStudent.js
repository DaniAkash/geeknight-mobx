import React, {
  Component,
} from 'react';
import {
  withRouter,
} from 'react-router-dom';
import StudentForm from "./CommonComponents/StudentForm";
import {inject, observer} from "mobx-react";

@withRouter
@inject('studentStore')
@observer
class EditStudent extends Component {

  state = {
    student: {},
  };

  editStudent = student => {
    this.props.studentStore.editStudent(student);
    this.props.history.goBack();
  };

  componentWillMount() {
    const studentId = parseFloat(this.props.match.params.id);
    const student = this.props.studentStore.getStudentById(studentId);
    this.setState({student});
  }

  render() {
    return (
      <div className={'container'}>
        <h1>Edit Student</h1>
        <StudentForm onSubmit={this.editStudent} isEditing={true} student={this.state.student} />
      </div>
    )
  }
}

export default EditStudent;
