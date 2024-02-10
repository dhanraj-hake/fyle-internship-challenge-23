import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositories-card',
  templateUrl: './repositories-card.component.html',
  styleUrls: ['./repositories-card.component.scss']
})
export class RepositoriesCardComponent {

  @Input()
  public repositorie : any;

}
