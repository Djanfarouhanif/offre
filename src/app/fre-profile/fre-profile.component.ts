import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-fre-profile',
  standalone: true,
  imports: [ CommonModule, HeaderComponent, ProfileComponent],
  templateUrl: './fre-profile.component.html',
  styleUrl: './fre-profile.component.css'
})
export class FreProfileComponent {

  current:string = "post";

  setView(view:string):void{
      this.current = view;
  };
}
