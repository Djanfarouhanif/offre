import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-fre-profile',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './fre-profile.component.html',
  styleUrl: './fre-profile.component.css'
})
export class FreProfileComponent {

  current:string = "post";

  setView(view:string):void{
      this.current = view;
  };
}
