import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileId: string|undefined;
  url: string|undefined;

    constructor(private router:Router, private route:ActivatedRoute ){}

  // initialisations 
  ngOnInit(): void {
    this.route.url.subscribe(urlSegments =>{
      this.profileId = urlSegments.join('/');
      console.log(this.profileId);
    });

   
  }
  //verifier si le formulaire est valide

  onSubmit(form:any){
    if(form.valid){
      
      this.newPage();
      
    }
    else{
      alert("form is not valid")
    }
  }

    newPage():void{
      if( this.profileId === "freelincing_profile"){
        this.router.navigate(["/fre_profile"])
      }
      else if(this.profileId === "profile"){
        this.router.navigate(['/post-profile'])
      }

    }

   
}
