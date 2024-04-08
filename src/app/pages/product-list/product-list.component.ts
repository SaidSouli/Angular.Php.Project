import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: any;
  dataSource: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProduct().subscribe(
      (data: any) => {
        this.product = data;
        this.dataSource = data;
        console.log(this.product);
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  deleteProduct(product: any): void {
    console.log("Avant suppression - ID de la product :", product.id);
    
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cette product ?");
    
    if (confirmation) {
      this.productService.deleteProduct(product.id).subscribe(
        (response: any) => {
          if (response.result === 'success') {
            this.dataSource = this.dataSource.filter((item: any) => item.id !== product.id);
            console.log("product supprimée avec succès.");
          } else {
            console.error("Erreur lors de la suppression de la product :", response.message);
          }
        },
        error => {
          console.error("Erreur lors de la suppression de la product :", error);
        }
      );
    }
  }
  
  }
  
  
  

