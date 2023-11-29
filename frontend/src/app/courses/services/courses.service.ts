import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  }
}

