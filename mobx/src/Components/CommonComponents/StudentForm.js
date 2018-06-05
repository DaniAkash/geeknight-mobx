import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StudentForm extends Component {

  static propTypes = {
    student: PropTypes.object,
    isEditing: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    first_name: '',
    last_name: '',
    gender: 'Male',
    phone_number: '',
    address: '',
  };

  editForm = (field, value) => {
    const newState = {...this.state};
    newState[field] = value;
    this.setState(newState);
  };

  submit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return(
      <div>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" className="form-control" id="first-name" value={this.state.first_name} onChange={e => this.editForm('first_name', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" className="form-control" id="last-name" value={this.state.last_name} onChange={e => this.editForm('last_name', e.target.value)} />
        </div>
        <div className={"form-group"}>
          <label htmlFor="gender">Gender:</label>
          <div className="radio">
            <label><input type="radio" name="gender" value={'Male'} checked={this.state.gender === 'Male'} onChange={e => this.editForm('gender', e.target.value)} />Male</label>
          </div>
          <div className="radio">
            <label><input type="radio" name="gender" value={'Female'} checked={this.state.gender === 'Female'} onChange={e => this.editForm('gender', e.target.value)} />Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" className="form-control" id="phone-number" value={this.state.phone_number} onChange={e => this.editForm('phone_number', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea className="form-control" rows={5} id="address" value={this.state.address} onChange={e => this.editForm('address', e.target.value)}  />
        </div>
        <div className="form-group">
          <button className={'btn btn-large btn-primary'} onClick={this.submit}>Add Student</button>
        </div>
      </div>
    )
  }
}

export default StudentForm;
