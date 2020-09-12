import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student;
  formEditStudent: FormGroup;
  id = +this.atvRoute.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private router: Router,
              private studentService: StudentService,
              private atvRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formEditStudent = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      address: [''],
      email: [''],
    });
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
      this.formEditStudent.patchValue(this.student);
    });
    console.log(this.student);
  }

  edit(): any {
    this.studentService.edit(this.formEditStudent.value, this.id).subscribe(data => {
        this.router.navigate(['/students']);
      }
    );
  }
}
