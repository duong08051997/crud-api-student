import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../service/student.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
students;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(): any{
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
}
delete(id: number): any{
    if (confirm('are you sure?')){
      this.studentService.delete(id).subscribe(data =>
        this.getAll()
      );
      console.log(id);
    }
}
}
