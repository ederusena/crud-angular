import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { tap, first } from 'rxjs/operators'

import { CoursesService } from '../services/courses.service'
import { Course } from './../models/course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Observable<Course[]>
  displayedColumns: string[] = ['name', 'categoria']

  constructor(private courseService: CoursesService) {
    this.courses = this.courseService
      .list()
      .pipe(
        first(),
        tap((courses) => console.log(courses))
      )
  }

  ngOnInit(): void {}
}
