import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  students = [
    { id: 1, name: 'Nati Getch', studID: 1234, email: 'natig@gmail.com' },
    { id: 2, name: 'Beti Getch', studID: 4567, email: 'betig@gmail.com' }
  ];
  constructor() { }

  getData() {
    return this.students;
  }

  getStudent(sid) {
    for (let d of this.students) {
      if (d.id === parseInt (sid)) {
        return d;
      }
    }
  }

}
