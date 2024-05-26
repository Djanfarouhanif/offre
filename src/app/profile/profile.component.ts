import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileId: string = "";
    constructor(private route:Router, private url:ActivatedRoute ){}

    newPage():void{
        this.route.navigate(["/fre_profile"])
    }

    ngOnInit(): void {
      this.url.url.subscribe(urlSegments =>{
        this.profileId = urlSegments.join('/');
        console.log(this.profileId);
      })
    }
}
