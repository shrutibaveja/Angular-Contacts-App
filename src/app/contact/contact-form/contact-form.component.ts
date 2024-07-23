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
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d+$/)]], 
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const newContact = {
        id: this.contactsService.getAllContacts().length + 1, 
        ...this.contactForm.value
      };
      this.contactsService.addContact(newContact);
      this.contactForm.reset();
    } else {
      console.log('Form has errors');
      this.contactForm.markAllAsTouched();
    }
  }
}