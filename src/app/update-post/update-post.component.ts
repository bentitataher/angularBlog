import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  upDateForm;
  tab = JSON.parse(localStorage.getItem('Posts')) ;

  constructor(private route: ActivatedRoute, private _blogService : BlogService) { }

  id;

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.upDateForm = new FormGroup({
      titre : new FormControl(''),
      description : new FormControl(''),
      categorie : new FormControl(''),
    })

    let post = this._blogService.listPostsMethod().find(postid=>postid.id == this.id)
    this.upDateForm.patchValue(post)
  }

  upDate(){
    let data1 = this.id;
    let data2 = this.upDateForm.value
    this._blogService.upDateService(data1,data2);


    // let tab = JSON.parse(localStorage.getItem('Posts'));
    // tab[this.id] = this.upDateForm.value;
    // localStorage.setItem('Posts',JSON.stringify(tab));
    
  }

  
  

  
  

}


