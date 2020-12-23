import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private router: Router) { }

  storageHandler(data){

    if(localStorage.getItem('Posts')==null){
      data.id = 0;
      data.date = Date();
      localStorage.setItem('Posts',JSON.stringify([data]))
    }

    else{
      let tab = JSON.parse(localStorage.getItem('Posts'));
      data.id = tab.length;
      data.date = Date();
      tab.push(data);
      localStorage.setItem('Posts', JSON.stringify(tab));
    }
  } /* storageHandler */

  listPostsMethod(){
    let tab = JSON.parse(localStorage.getItem('Posts'));

    return tab;
  }

  delete(i){
    let tab = this.listPostsMethod();
    tab.splice(i,1);
    localStorage.setItem('Posts',JSON.stringify(tab));
  }

  navigateToUpDate(data){
    this.router.navigate(['/update-post', data.id]);
  }

  upDateService(data1,data2){
    let tab = JSON.parse(localStorage.getItem('Posts'));
    tab[data1] = data2;
    localStorage.setItem('Posts',JSON.stringify(tab));

    //data1 ==> this.id
    //data2 ==> this.upDateForm.value

  }








}
