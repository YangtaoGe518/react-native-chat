export interface User {
    id: number,
    username: string,
    password: string,
}

export type Member = {
    id: String;
    name: String;
    imageUri: String;
    status: String;
}

export type Message = {
    id: String;
    content: string;
    createdAt: string;
    member: Member;
}

export type ChatRoom = {
    id: String;
    members: Member[];
    lastMessage: Message;
}
