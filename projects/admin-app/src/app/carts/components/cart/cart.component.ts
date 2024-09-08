import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsService } from '../../services/carts.service';
import { ProductsService } from './../../../products/services/products.service';
import bootstrap, { Modal } from 'bootstrap';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  carts:any[] =[]
  products:any[]=[]
  total:any = 0
  form!:FormGroup
  details:any;
  constructor(private service: CartsService , private build : FormBuilder, private productsService:ProductsService){

  }

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end  : ['']
    })
    this.getAllCarts()
  }

  getAllCarts(){
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }

  applyFilter(){
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    })
  }

  deleteCart(id:number){
    this.service.deleteCart(id).subscribe((res:any) => {
      this.getAllCarts()
      alert("Cart delted succes")
    })
  }

  view(index: number) {
    this.details = this.carts[index];
    this.products = [];

    for (let x in this.details.products) {
      this.productsService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({ item: res, quantity: this.details.products[x].quantity });
      });
    }

    const modalElement = document.getElementById('viewCart');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
}
