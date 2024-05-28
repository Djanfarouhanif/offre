import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-header.component.html',
  styleUrl: './post-header.component.css'
})
export class PostHeaderComponent {

}
