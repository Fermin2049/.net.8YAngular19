import { Routes } from '@angular/router';
import { ProducListComponent } from './components/produc-list/produc-list.component';
import { ProducFormComponent } from './components/produc-form/produc-form.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProducListComponent },
  { path: 'new', component: ProducFormComponent },
  { path: 'edit/:id', component: ProducFormComponent }, // Editar producto
];
