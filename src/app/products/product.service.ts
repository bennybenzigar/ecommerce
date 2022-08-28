import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")
  constructor(private HttpClient: HttpClient) { }
//to get all product
  viewAllProduct(){
    const baseURL = "http://localhost:3000/products/"
    return this.HttpClient.get(baseURL)
  }


  //apii call to get single product
  viewProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.HttpClient.get(baseURL)
  }


  //api call to delete product

  deleteProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.HttpClient.get(baseURL)
  }


  //api call to add new product

  addProduct(productData:any){
    const baseURL = "http://localhost:3000/products/"+productId
    return this.HttpClient.get(baseURL)

  }
}
