import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../models/course';

// vai ficar disponivel de maneira global, por conta do privedin root
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // httpclient vai ser fornecido pelo angular automaticamente
  // angular vai fornecer a instancia automaticamente
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: 1, name: 'Vue', category: 'Frontend' },
      { _id: 2, name: 'Angular', category: 'Frontend' },
      { _id: 3, name: 'React', category: 'Frontend' },
      { _id: 4, name: 'Node', category: 'Backend' },
      { _id: 5, name: 'Express', category: 'Backend' },
    ]
  }
}
