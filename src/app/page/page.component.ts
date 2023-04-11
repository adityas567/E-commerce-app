import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  products!: any;
  constructor(private api:ApiService){}
  async ngOnInit(): Promise<void> {
    this.products=await(this.getAllProducts());
    // this.Productid=this.products.map((item:any)=>item.id);
    console.log(this.products)
  }
  async getAllProducts()
  {
    try
    {
      const data=await(this.api.getProducts().toPromise());
      console.log(data);
      return data;
    }
    catch(e)
    {
      console.log(e);
    }
  }
  
}

