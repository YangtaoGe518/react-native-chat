export interface User {
    id: number,
    username: string,
    password: string,
    token? : string,
}

export type Member = {
    id: string,
    name: string,
    imageUri: string,
}

export type Message = {
    id: string,
    content: string,
    createdAt: string,
    member?: Member,
}

export type ChatRoom = {
    id: string;
    members: Member[],
    lastMessage: Message,
}
