# Crud angular frontend

## Install Angular Material

```bash
ng add @angular/material
```

## Adding a new module

```bash
ng g m courses --routing
```

## Create Shared for exports component in common

```base
ng g m shared/app-material
```

```js
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
```

## Criando um service

```bash
ng g s courses/services/courses
```

> Fazer o httpClient ficar disponivel no service, no construtor
 
```ts
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
```

> Importar o HttpClient Module no app.modules

```ts
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

> Fazer ficar disponivel no component onde vai usar de fato o Service

```ts
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

```
