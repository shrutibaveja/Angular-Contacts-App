import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, // Redirect to /contacts by default
  { path: 'contacts', component: ContactListComponent }, // Route to display contact list
  { path: 'add-contact', component: ContactFormComponent }, // Route to add new contact form
  { path: '**', redirectTo: '/contacts' } // Redirect any other path to /contacts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
