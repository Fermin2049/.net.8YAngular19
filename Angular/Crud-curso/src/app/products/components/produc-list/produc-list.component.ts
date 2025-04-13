import {
  Component,
  inject,
  signal,
  OnInit,
  WritableSignal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

//interfaces
import { Product } from '../../interfaces/produc';
//service
import { ProductService } from '../../../services/product.service';
//material
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produc-list',
  imports: [MatButtonModule, CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './produc-list.component.html',
  styleUrl: './produc-list.component.css',
})
export class ProducListComponent implements OnInit {
  private router = inject(Router);
  private producService = inject(ProductService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: WritableSignal<Product[]> = signal<Product[]>([]);

  displayedColumns: string[] = ['id', 'description', 'stock', 'action'];
  dataSource = new MatTableDataSource<Product>([]);

  ngOnInit(): void {
    this.loadProducts();
    /*this.producList.getProducs().subscribe({
      next: (data) => {
        console.log('Products fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
      complete: () => {
        console.log('Product fetching completed');
      },
    });*/
  }

  loadProducts() {
    this.producService.getProducs().subscribe({
      next: (products) => {
        this.products.set(products);
        this.updateTableDaata();
      },
    });
  }
  updateTableDaata() {
    this.dataSource.data = this.products(); // Actualiza el dataSource con los productos
    this.dataSource.paginator = this.paginator; // Vincula el paginador
  }
  navigateToForm(id?: number) {
    console.log('Navigating to form with id:', id);
    const path = id ? `/products/edit/${id}` : '/products/new';
    this.router.navigate([path]);
  }
  deleteProduct(id?: number) {}
  editProduct(id?: number) {}
  viewProduct(id?: number) {}
  addProduct() {}
}
