import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const StudentTable = ({students}) => {
  return (
    <div>
      <table className={'table'}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.gender}</td>
                <td>{student.phone_number}</td>
                <td>{student.address}</td>
                <td><NavLink to={`/edit/${student.id}`} className={'btn'}>Edit</NavLink></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <NavLink to={'/add'} className={'btn btn-large btn-primary'}>Add Student</NavLink>
    </div>
  )
};

StudentTable.propTypes = {
  students: PropTypes.array.isRequired,
};

export default StudentTable;
