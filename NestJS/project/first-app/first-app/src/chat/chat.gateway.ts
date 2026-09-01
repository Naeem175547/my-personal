import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Client } from "node_modules/socket.io/dist/client";


import { Socket, Server } from "socket.io";
@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class ChatGatway {
  @WebSocketServer()
  private server: Server

  @SubscribeMessage('message')
  messageHandler(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log(data)
    client.emit('message', "hy dear how are ")
    return `hello ${data}`
  }

  @SubscribeMessage('joinRoom')
  joinRoom(@MessageBody() room: string, @ConnectedSocket() client: Socket) {
    client.join(room)
    console.log(`${client.id} joined ${room}`);
  }

  @SubscribeMessage('sendMessage')
  sendMessage(
    @MessageBody() data: {
      room: string;
      message: string;
    }, @ConnectedSocket() client: Socket
  ) {
    // this.server
    //   .to(data.room)
    //   .emit('receiveMessage', data.message);
    client
      .to(data.room)
      .emit('receiveMessage', data.message);
  }






}