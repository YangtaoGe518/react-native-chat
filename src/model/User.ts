import { User } from "./Types"


export const userList : User[] = [
    {
        id: 1,
        username: 'admin',
        password: 'adminadmin',
        userToken: ''
    }
];

export const updateUserToken = async (userId: number, userToken: string) => {
    const user = userList.filter((item) => {
        return userId === item.id;
    })[0];

    user.userToken = userToken;
}
