// contact-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'] 
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const newContact = {
        id: this.contactsService.getAllContacts().length + 1, // naive id generation
        ...this.contactForm.value
      };
      this.contactsService.addContact(newContact);
      this.contactForm.reset();
    }
  }
}

