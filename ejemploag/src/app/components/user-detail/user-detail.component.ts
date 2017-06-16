import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: []
})
export class UserDetailComponent implements OnInit {

   user:any={};
   idSearch:number;
  constructor(private _activateRoute:ActivatedRoute,
              private _contentService:ContentService) {

  }

  ngOnInit() {
    this._activateRoute.params
    .map(params=> params['id'])
    .subscribe(id=>{
      this._contentService.getUser(id)
      .subscribe( data => this.user = data );
    });

  }

}
