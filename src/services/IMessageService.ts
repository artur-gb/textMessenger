import type { InjectionKey } from "vue";
// import { LogbookRecord } from "../entities/Logbook";

export interface IMessageService {
  startConnection: () => void;
  onReceiveMessage: (callback: (message: string) => void) => void;
  sendMessage: (message: string) => void;
  stopConnection: () => void;
}

export const IMessageServiceKey = Symbol() as InjectionKey<IMessageService>;
