import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  @Input()
  public userProfile : any;

  ngOnInit(){
    console.log(this.userProfile);
    
  }

}
