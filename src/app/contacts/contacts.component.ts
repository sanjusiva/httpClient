import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService:ContactsService) { }
contactList:any;
collegeList:any;
  ngOnInit(): void {
    this.contactList=this.contactService.getContacts().subscribe(data=>{
      this.contactList=data;
    });
    this.collegeList=this.contactService.getCollege().subscribe(data=>{
      this.collegeList=data;
    });  
  }

}