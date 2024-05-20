import { Component } from '@angular/core';
import { MessagePostComponent } from '../message-post/message-post.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-profile',
  standalone: true,
  imports: [ MessagePostComponent, CommonModule],
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css' 
})

export class PostProfileComponent {
  currentView:string = 'post';

  setView(view:string): void {
    this.currentView = view
  }
}
