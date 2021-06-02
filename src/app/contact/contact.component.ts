import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import {UserService} from '../user.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public users = new User();
  constructor(private userService:UserService, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  userSubmit():void {
    alert('HI SMPLE');
    alert(this.users);
    this.userService.getUsers(this.users).subscribe((data) => {
      alert(data);
      this.showToasterSuccess();
    });
  } 

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numberOnly(event): boolean {
    const charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }

  showToasterError(){
    this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }


}
