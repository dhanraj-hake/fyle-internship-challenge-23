import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  public searchInput : string = "";

  @Output()
  public searchEvent = new EventEmitter<string>();
  
  handalSearchClick(){
    console.log(this.searchInput);
    
    this.searchEvent.emit(this.searchInput);
  }

}
