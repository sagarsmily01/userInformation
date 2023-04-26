import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserInformationService } from '../shared/user-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  
  constructor(
    private datePipe: DatePipe,
    private userItemApi: UserInformationService
    ){
    this.currDate = this.datePipe.transform(this.currDate, 'yyyy-MM-dd');
  }
  public currDate: any = new Date();
  public userInformations: any = [];
  public apiUrl: any = 'https://jsonplaceholder.typicode.com/users';
  public showUsers: Boolean = true;
  title = 'user-information';

  public ngOnInit(){
    this.userItemApi.getUserItems(this.apiUrl).subscribe((data) => {this.getItem(data)});
    this.showUsrList(this.showUsers);
  }

  public getItem(data:any){
    this.userInformations = data;
    for(let items of this.userInformations){
      items.fullAddress = items.address.suite + ' ' + items.address.street + ' ' + items.address.city + ' ' + items.address.zipcode; 
      items.companyName = items.company.name + ' ' + items.company.bs + ' ' + items.company.catchPhrase;
    }    
  }

  public showUsrList(data: any){
    if(data == true){
      this.showUsers = true;
    }
    else{
      this.showUsers = false;
    }
  }
}
