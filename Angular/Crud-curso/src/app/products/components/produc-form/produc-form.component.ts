import { M } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produc-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './produc-form.component.html',
  styleUrl: './produc-form.component.css',
})
export class ProductFormComponent {
  private productService = inject(ProductService);
  private fb = inject(FormBuilder);
  public router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);
  productForm: FormGroup;
  isEditMode: boolean = false;

  constructor() {
    this.productForm = this.fb.group({
      id: [null],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.loadProduct(params['id']);
      }
    });
  }

  private loadProduct(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
