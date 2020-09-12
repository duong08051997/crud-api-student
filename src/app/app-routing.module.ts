import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './students/list-student/list-student.component';
import {AddStudentComponent} from './students/add-student/add-student.component';
import {EditStudentComponent} from './students/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: 'students',
    children: [
      {
        path: '',
        component: ListStudentComponent
      },
      {
        path: 'add',
        component: AddStudentComponent
      },
      {
        path: ':id/edit',
        component: EditStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
