import { Component, computed, signal } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // color = 'blue'

  // handleColor(val:string){
  //   this.color=val
  // }

  // handleInput(event:Event){
  //   this.colors = parseInt((event.target as HTMLInputElement).value)
  // }

  // changeColor(event:Event){
  //   this.color = (event.target as HTMLInputElement).value
  // }

  // users = ["anil", "sam", "dhoni", "swami"]


  // students = [

  //   {name:'anil', age:23, email: 'anil@test.com'},
  //   {name:'sam', age:24, email: 'sam@test.com'},
  //   {name:'dhoni', age:25, email: 'dhoni@test.com'},
  //   {name:'swami', age:26, email: 'swami@test.com'},

  // ]

  // x = signal(10);
  // y = signal(20);
  // z = computed(()=>this.x() + this.y());

  // showValue(){
  //   console.log(this.z())
  //   this.x.set(100)
  //   console.log(this.z())
  // }

  // userName = signal('Anil')

  // count = signal(2) 

  userName = ['anil', 'siddhu', 'ram', 'lakka', 'singh', 'pawar', 'srikanth', 'srinath']



}
