import { Component } from '@angular/core';
import { Course } from './../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})


export class CoursesComponent {
  courses: Course[] = [
    {_id: 1, name: 'Vue', category: 'Frontend'},
    {_id: 2, name: 'Angular', category: 'Frontend'},
    {_id: 3, name: 'React', category: 'Frontend'},
    {_id: 4, name: 'Node', category: 'Backend'},
    {_id: 5, name: 'Express', category: 'Backend'}
  ];
  displayedColumns: string[] = ['name', 'categoria'];
}
