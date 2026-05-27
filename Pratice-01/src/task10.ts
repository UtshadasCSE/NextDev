interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type PublicUser = Omit<UserAccount, "password">;
