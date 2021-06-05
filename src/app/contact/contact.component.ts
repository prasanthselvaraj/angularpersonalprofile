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
  messageOne : String;
  messageTwo : String;
  constructor(private userService:UserService, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  userSubmit():void {
    this.userService.getUsers(this.users).subscribe(data=> {
      this.messageOne = data["thanksMessage"];
      this.messageTwo = data["respMessage"];
      if(data["status"] == "SUCCESS"){
        this.showToasterSuccess(this.messageTwo, this.messageOne);
      } else {
        this.showToasterError(this.messageTwo, this.messageOne);
      }
      
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


  showToasterSuccess(messageOne, messageTwo){
    this.notifyService.showSuccess(messageOne, messageTwo)
  }

  showToasterError(messageOne, messageTwo){
    this.notifyService.showError(messageOne, messageTwo)
  }


}
