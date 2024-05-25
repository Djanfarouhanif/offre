import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-emploi',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './emploi.component.html',
  styleUrl: './emploi.component.css'
})
export class EmploiComponent {

}
