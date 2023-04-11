import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  id:any;
  ProductData:any;
  starRating:any;
  constructor(private api:ApiService,private route:ActivatedRoute){}
  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(Pid=>{
      this.id=Pid['id'];
      console.log(this.id);
    })
    this.ProductData=await this.getOneProduct();
    this.starRating=this.ProductData.rating.rate;
  }
  async getOneProduct()
  {
    try{
      const data=await(this.api.getProductsById(this.id).toPromise());
      console.log(data);
      return data;
    }
    catch(e)
    {
      console.log(e)
    }
    
  }
  
}
