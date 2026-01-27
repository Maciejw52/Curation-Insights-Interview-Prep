
export enum EMessageCreatedBy {
  USER = "USER",
  ASSISSTANT = "ASSISSTANT"
}
export type TChatMessage = {} & TUserMessage

export type TChatMessages = TChatMessage[]

export type TUserMessage = {
  id: number;
  createdBy: EMessageCreatedBy
  text: string;
} 