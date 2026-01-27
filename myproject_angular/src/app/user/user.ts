import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  color = 'blue'

  handleColor(val:string){
    this.color=val
  }

  // handleInput(event:Event){
  //   this.colors = parseInt((event.target as HTMLInputElement).value)
  // }

  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value
  }

}
