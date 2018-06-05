import React from 'react';

const StudentTable = ({students}) => {
  return (
    <table className={'table'}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Address</th>
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
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
};

export default StudentTable;
