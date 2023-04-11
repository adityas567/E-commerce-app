import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  
  CatList:any;
  constructor(private api:ApiService){
  }
  async ngOnInit(): Promise<void> {
    this.CatList=await this.getCategories();
    console.log(this.CatList)
  }

  async getCategories()
  {
    try
    {
      const data=await(this.api.getCategory().toPromise());
      console.log(data);
      return data;
    }
    catch(e)
    {
      console.log(e);
    }
    
  }

  checkLogin()
  {
    return this.api.checkValid();
  }

  checkLogout()
  {
    return this.api.logOutUser();
  }

}
