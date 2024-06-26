import { Component } from '@angular/core';
import { MessagePostComponent } from '../message-post/message-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component'
import { ProfileComponent } from '../profile/profile.component';
import { PostHeaderComponent } from '../post-header/post-header.component';
@Component({
  selector: 'app-post-profile',
  standalone: true,
  imports: [ MessagePostComponent, CommonModule , PostHeaderComponent, ProfileComponent],
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css' 
})
// ESS
export class PostProfileComponent {
  currentView:string = 'profile';

  setView(view:string): void {
    this.currentView = view
  }
}
