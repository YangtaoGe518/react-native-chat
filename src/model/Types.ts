export interface User {
    id: number,
    username: string,
    password: string,
    token? : string,
}

export type Member = {
    _id: string,
    name: string,
    avatar: string,
}

export type Message = {
    _id: string | number,
    text: string,
    createdAt: string,
    user?: Member,
}

export type ChatRoom = {
    id: string | number;
    members: Member[],
    lastMessage: Message,
    messages?: Message[]
}
