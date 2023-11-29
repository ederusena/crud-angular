import { Component } from '@angular/core'

import { Course } from './../models/course'
import { CoursesService } from '../services/courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = []
  displayedColumns: string[] = ['name', 'categoria']

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.courseService.list()
  }
}
