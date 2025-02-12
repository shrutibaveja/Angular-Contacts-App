import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'] 
})
export class ContactListComponent {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getAllContacts();
    this.filteredContacts = [...this.contacts]; 
  }

  filterContacts(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredContacts = [...this.contacts];
      return;
    }

    const searchTermLowerCase = searchTerm.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTermLowerCase)
    );
  }
}
