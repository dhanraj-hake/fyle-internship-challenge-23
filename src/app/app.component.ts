import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  public title = "fyle-frontend-challenge";

  public userData : any | null = null;
  public username : string = "";

  public userDataLoading  = false;
  public emptyState  = false;

  ngOnInit() {
    
  }

  searchHandalar(event : string){
    this.username = event;
    this.userDataLoading = true;
    this.emptyState = false;
    this.apiService.getUser(this.username).subscribe({
      next : (data : any)=>{
        this.userData = data;
        this.userDataLoading = false;
      },
      error : (error)=>{
        this.userData = null;
        this.userDataLoading = false;
        this.emptyState = true;
      }
    });
  }

}
