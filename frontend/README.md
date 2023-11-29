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
