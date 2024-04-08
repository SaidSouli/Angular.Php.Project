import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';



@NgModule({
  declarations: [AddproductComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
})
export class AppAddProductModule {}
