import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [];

  constructor() {
    // Initialize contacts from browser storage on service instantiation
    this.loadContacts();
  }

  private saveContacts(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  private loadContacts(): void {
    const contactsString = localStorage.getItem('contacts');
    this.contacts = contactsString ? JSON.parse(contactsString) : [];
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
    this.saveContacts();
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

}
