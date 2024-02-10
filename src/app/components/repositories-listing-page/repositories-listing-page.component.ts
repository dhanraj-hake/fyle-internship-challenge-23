import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repositories-listing-page',
  templateUrl: './repositories-listing-page.component.html',
  styleUrls: ['./repositories-listing-page.component.scss']
})
export class RepositoriesListingPageComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input()
  public username = "";

  public repositories: [] = [];
  public currentPage = 1;
  public repositoriePerPage = 10;
  public paginationArray = [1, 2, 3, 4, 5];
  public pageSizeArray = [10,20,30,40,50,60,70,80,90,100];
  public reposLoading : boolean = false;

  ngOnInit() {
    this.getCurrentRepos();
  }
  
  getCurrentRepos(){
    this.reposLoading = true;
    this.apiService.getRepos(this.username, this.repositoriePerPage, this.currentPage).subscribe({
      next: (data: any) => {
        this.repositories = data;
        this.reposLoading = false;
        console.log(data);
      },
      error: (error) => {
        this.reposLoading = false;
        console.log(error);
      }
    });
  }

  changePage(pageNumber: number){
    this.currentPage = pageNumber;
    this.getCurrentRepos();
  }

  nextPage(){
    let tempArray = []
    for(let i = this.currentPage+1; i<= this.currentPage +1+5; i++){
      tempArray.push(i);
    }
    this.paginationArray = tempArray;
    this.currentPage +=1;
    this.getCurrentRepos();
  }

  prevPage(){
    if(this.currentPage != 1){
      let tempArray = []
    for(let i = this.currentPage-1; i<= this.currentPage -1+5; i++){
      tempArray.push(i);
    }
    this.paginationArray = tempArray;
    this.currentPage -=1;
    }
    this.getCurrentRepos();
  }

  changePageSize(size:number){
    console.log(this.repositoriePerPage);
    this.repositoriePerPage = size;
  }
}