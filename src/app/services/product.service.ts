import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {}

  url: string = "http://localhost/web_api";

  public getAllProduct() {
    return this._http.get(`${this.url}/view.php`);
  }

  public getProductById(id: string) {
    return this._http.get(`${this.url}/view_one.php?id=${id}`);
  }

  public addProduct(product: any) {
    return this._http.post(`${this.url}/create.php`, product);
  }

  public updateproduct(id: number, product: any) {
    return this._http.patch(`${this.url}/update.php?id=${id}`, product);
  }

  deleteProduct(id: number) {
    const url = `${this.url}/delete.php?id=${id}`;
    return this._http.delete(url).pipe(
      catchError((error: any) => {
        console.error('Error deleting product:', error);
        return throwError('Something went wrong while deleting product.');
      })
    );
  }
  
  
}
