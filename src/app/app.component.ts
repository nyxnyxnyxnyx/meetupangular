import { Component } from '@angular/core';
import { ChatService } from './chat.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ChatService]
})
export class AppComponent {
  msgInput : string;
  msgs = [];

  constructor(private chatService : ChatService) {}

  ngOnInit() {
    this.chatService
        .getMessage()
        .subscribe(msg => {
          this.msgs.push({type:2,msg:msg})
          if(this.msgs.length>7){
            setTimeout(()=>this.msgs.pop(),5000)
            
          }
        });
  }

  sendMsg(){
    if(this.msgInput!=""){
      this.msgs.push({type:1,msg:this.msgInput})
      this.chatService.sendMessage(this.msgInput);
      this.msgInput="";
    }
  }
}
