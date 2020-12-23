import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {


  constructor(private _blogService : BlogService) { }

  ngOnInit(): void {}

      addForm = new FormGroup({
        titre : new FormControl('', Validators.required),
        description : new FormControl('', Validators.required),
        categorie : new FormControl('', Validators.required),
      })


      add(){
        let data = this.addForm.value;
        this._blogService.storageHandler(data);
      }


}
