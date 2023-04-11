import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url="https://fakestoreapi.com/products/"

  constructor(private http:HttpClient) {
    
   }
   
   getProducts()
    {
      return this.http.get<any>(this.url);
    }
    getProductsById(id:any)
    {
      return this.http.get<any>(this.url+id)
    }
    getCategory()
    {
      return this.http.get<any>(this.url+'/categories')
    }
    getCategoryItem(category:any)
    {
      return this.http.get<any>(this.url+'/category/'+category)
    }
    userLogin(data:any)
    {
      return this.http.post<any>('https://fakestoreapi.com/auth/login',data)
    }
    checkValid()
    {
      return !!localStorage.getItem('token');
    }
    getToken()
    {
      return localStorage.getItem('token');
    }
    logOutUser()
    {
      return localStorage.removeItem('token');
    }
    test()
    {
      return this.http.get<any>('https://fakestoreapi.com/auth/login')
    }
}
