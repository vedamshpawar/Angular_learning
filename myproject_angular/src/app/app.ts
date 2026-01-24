import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = ""
  displayName = ""
  getName(event:Event){
    const val = (event.target as HTMLInputElement).value
    this.name = val
  }
  showName(){
    this.displayName = this.name 
  }
  setName(){
    this.name = "sam"
  }

  // handleClick(){
  //   console.log("function called")
  //   this.otherHandler()
  // };

  // otherHandler(){
  //   console.log("this is another One..")
  // }
  // count = 0

  // handleDecrement(){
  //   this.count = this.count-1
  // };

  // handleReset(){
  //   this.count=0
  // };

  // handleIncrement(){
  //   this.count = this.count + 1
  // };

  // handleVar(val: string) {
  //   if (val == 'minus') {
  //     this.count = this.count - 1
  //     if(this.count < 0){
  //       this.count = 0
  //     }
  //   } else if (val == 'plus') {
  //     this.count = this.count + 1
  //   } else {
  //     this.count = 0
  //   }
  // }




}
