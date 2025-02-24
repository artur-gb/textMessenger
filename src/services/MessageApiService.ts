import * as signalR from "@microsoft/signalr";
import type { IMessageService } from "./IMessageService";

export class MessageApiService implements IMessageService {
  private connection: signalR.HubConnection;

  constructor(hubUrl: string) {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }

  async startConnection() {
    try {
      await this.connection.start();
      console.log("SignalR Connected!");
    } catch (error) {
      console.error("SignalR Connection Error: ", error);
      setTimeout(() => this.startConnection(), 5000)
    }
  }

  onReceiveMessage(callback: (message: string) => void) {
    this.connection.on("ReceiveMessage", callback);
  }

  sendMessage(message: string) {
    this.connection.invoke("SendMessage", message).catch(err => console.error(err));
  }

  stopConnection() {
    this.connection.stop();
  }
}
