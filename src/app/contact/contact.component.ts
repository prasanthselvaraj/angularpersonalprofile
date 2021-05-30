import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public users = new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  userSubmit():void {
    alert('HI SMPLE');
    alert(this.users);
    this.userService.getUsers(this.users).subscribe((data: User[]) => {
      console.log(data);
      alert(data);
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

  

}
