import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage{

  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController,
    private router: Router) {
      this.getDetailsList()
    }
  
  name:any=''
  product_list=[]
  error_msg=''
  btn='Add'
  edit_index=-1

  getDetailsList()
  {
    this.http.get('http://localhost/cart/get-details-list.php').subscribe(data=>{
    this.product_list=<Array<any>>data
    })
  }

  recipe(){
    this.router.navigate(["recipe"]);
  }
}