import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor(private _contentService:ContentService,
              private _router:Router) { }



  ngOnInit() {
    this._contentService.getUsers()
    .subscribe();
  }

  eliminarDato(id:number){
    this._router.navigate(['/userdel',id])
  }

}
