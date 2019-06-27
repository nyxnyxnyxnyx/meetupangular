import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }
 
  sendMessage(topic,msg: string){
      this.socket.emit(topic, msg);
  }
   getMessage() {
      return this.socket
          .fromEvent<any>("message")
          .pipe(map( data => data ));
  }

   getWritting() {
      return this.socket
      .fromEvent<any>("writting")
      .pipe(map( data => data ));
  }
}
