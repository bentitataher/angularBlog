import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private _blogService : BlogService, private router: Router) { }

  ngOnInit(): void {}

    postsTable = this._blogService.listPostsMethod()

    check(){
      console.log(this.postsTable);
    }

    supp(i){
      this._blogService.delete(i);  
    }

    onSelect(post){
      this._blogService.navigateToUpDate(post)
      // this.router.navigate(['/update-post', post.id]);
    }


} /* Fin - export class ListPostComponent implements OnInit */
