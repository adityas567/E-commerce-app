import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category:any;
  products!: any;
  starRating:any;
  constructor(private api:ApiService,private route:ActivatedRoute){}
  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(Cid=>
      {
        this.category=Cid['category'];
        console.log(this.category+'hi');
      })
    this.products=await(this.getCategoryProducts());
    // this.Productid=this.products.map((item:any)=>item.id);
  }
  async getCategoryProducts()
  {
    try
    {
      const data=await(this.api.getCategoryItem(this.category).toPromise());
      console.log(data);
      return data;
    }
    catch(e)
    {
      console.log(e);
    }
  }
  
}
