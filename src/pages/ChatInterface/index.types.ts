
export enum EMessageCreatedBy {
  USER = "USER",
  ASSISSTANT = "ASSISSTANT"
}
export type TChatMessage = {} & TUserMessage

export enum EMessageType {
  TEXT = "TEXT", 
  UNKNOWN = "UNKNOWN"
  // To add further possinle types of messages recieved from backend once these are known
}

export type TChatMessages = TChatMessage[]

export type TUserMessage = {
  id: number;
  type: EMessageType, 
  createdBy: EMessageCreatedBy
  text: string;
} 