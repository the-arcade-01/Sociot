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

export interface UserUpdateUsernameBody {
  username: string;
}

export interface UserUpdateUserPasswordBody {
  password: string;
}

export interface UserDetails {
  userId: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  userId: string;
  username: string;
  postId: string;
  title: string;
  content: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface TabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
