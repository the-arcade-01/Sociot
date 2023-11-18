export interface TagProps {
    name: string;
}

export interface UserRegisterBody {
    username: string;
    email: string;
    password: string;
}

export interface UserLoginBody {
    email: string;
    password: string;
}

export interface UserUpdateBody {
    username: string;
    password: string;
}
