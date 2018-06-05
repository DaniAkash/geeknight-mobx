import {
  observable,
  action,
  computed
} from 'mobx';

class Students {
  @observable _students = [
    {
      "id": 1,
      "first_name": "Patric",
      "last_name": "Sumshon",
      "gender": "Male",
      "phone_number": "2063734962",
      "address": "99 Ramsey Court"
    }, {
      "id": 2,
      "first_name": "Giorgi",
      "last_name": "Lates",
      "gender": "Male",
      "phone_number": "7841903428",
      "address": "907 Thompson Park"
    }, {
      "id": 3,
      "first_name": "Barrie",
      "last_name": "Gosson",
      "gender": "Female",
      "phone_number": "4914822706",
      "address": "70387 Crescent Oaks Point"
    }, {
      "id": 4,
      "first_name": "Emmy",
      "last_name": "Adamek",
      "gender": "Female",
      "phone_number": "1463207789",
      "address": "1977 Sachtjen Hill"
    }, {
      "id": 5,
      "first_name": "Aubry",
      "last_name": "Patters",
      "gender": "Female",
      "phone_number": "5463693214",
      "address": "44192 American Hill"
    }, {
      "id": 6,
      "first_name": "Jillayne",
      "last_name": "Gribbon",
      "gender": "Female",
      "phone_number": "6626436616",
      "address": "74 Jay Trail"
    }, {
      "id": 7,
      "first_name": "Avie",
      "last_name": "Lamprecht",
      "gender": "Female",
      "phone_number": "2015665798",
      "address": "753 Farwell Place"
    }, {
      "id": 8,
      "first_name": "Brett",
      "last_name": "Maulden",
      "gender": "Male",
      "phone_number": "7058245372",
      "address": "898 Killdeer Hill"
    }, {
      "id": 9,
      "first_name": "Jeramey",
      "last_name": "Cutts",
      "gender": "Male",
      "phone_number": "3435245151",
      "address": "120 Rutledge Drive"
    }, {
      "id": 10,
      "first_name": "Antonino",
      "last_name": "Penny",
      "gender": "Male",
      "phone_number": "6521104168",
      "address": "18936 Anthes Trail"
    }
    ];

  @computed
  get students() {
    return this._students.slice();
  }

  @action
  addStudent = student => {
    this._students.push(student);
  }

}

export default Students;
