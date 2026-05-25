type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

function getZipCode(user: UserResponse): string {
  return user?.info?.address?.zipCode ?? "0000";
}

const user: UserResponse = {
  info: {
    address: {},
  },
};

console.log(getZipCode(user));
