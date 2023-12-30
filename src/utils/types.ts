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
  userId: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSearch {
  userId: number;
  username: string;
  postCount: number;
  viewCount: number;
  createdAt: string;
}

export interface Post {
  userId: number;
  username: string;
  postId: string;
  title: string;
  content: string;
  views: number;
  votes: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostBody {
  userId: number;
  title: string;
  content: string;
}

export interface DeletePostBody {
  userId: number;
}

export interface TabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
