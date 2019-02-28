import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    ngOnInit(){

    }

    onSubmit(form: NgForm){
        console.log(form.value);
    }
}