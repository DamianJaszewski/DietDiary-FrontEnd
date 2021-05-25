import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.page.html',
  styleUrls: ['./weeks.page.scss'],
})
export class WeeksPage{

 
  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController,
    private router: Router) {
      this.getCartList()
    }
  
  kcal:any=''
  sniad:any=''
  dsniad:any=''
  lunch:any=''
  obiad:any=''
  podw:any=''
  kol:any=''
  product_list=[]
  error_msg=''
  btn='Add'
  edit_index=-1

  getCartList()
  {
    this.http.get('http://localhost/cart/get-cart-list.php').subscribe(data=>{
    this.product_list=<Array<any>>data
    })
  }

  home(){
    this.router.navigate(["/"]);
  }
}