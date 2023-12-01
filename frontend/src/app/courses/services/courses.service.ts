import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs/operators'

import { Course } from './../models/course';

// vai ficar disponivel de maneira global, por conta do privedin root
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  // httpclient vai ser fornecido pelo angular automaticamente
  // angular vai fornecer a instancia automaticamente
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(15000),
      tap((courses) => console.log(courses))
    )
  }
}

