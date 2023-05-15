import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'getter-setter';
  private _customerName: string = ""
  ngOnInit(): void {
    
  }

  get customerName(){
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if(value == "Hello World"){
      alert("Hello World")
    }
  }
}
