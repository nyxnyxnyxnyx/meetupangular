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
  loginInput : string;
  isLogin : boolean;
  msgs = [];
  writting: any[] = [];

  constructor(private chatService : ChatService) {}

  ngOnInit() {

    this.chatService
    .getWritting()
    .subscribe(write => {
      if(write.state){
        if(this.writting.indexOf(write.user)==-1){
          this.writting.push(write.user);
        }
      }else{
        this.writting.splice(this.writting.indexOf(write.user))
      }
    });
  }

  sendMsg(){
    if(this.msgInput!=""){
      this.msgs.push({type:1,msg:this.msgInput})
      this.chatService.sendMessage('message',this.msgInput);
      this.chatService.sendMessage('writting',false);
      this.msgInput="";
    }
  }

  sendWrite(){
    console.log(this.msgInput)
    if(this.msgInput!=""){
      this.chatService.sendMessage('writting',true);
    }else{
      this.chatService.sendMessage('writting',false);
    }
  }

  login(){
    if(this.msgInput!=""){
      this.chatService.sendMessage('login',this.loginInput);
      this.isLogin=true;

      this.chatService
      .getMessage()
      .subscribe(msg => {
        this.msgs.push({type:2,msg:msg.msg,user:msg.user})
      });
    }
  }
}
