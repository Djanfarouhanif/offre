import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-emploi',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './emploi.component.html',
  styleUrl: './emploi.component.css'
})
export class EmploiComponent {

    constructor(private route:Router){}

    navigatePage(){
      this.route.navigate(['/post-detail'])
    }
}
