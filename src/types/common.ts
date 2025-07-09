export type ResponseMessage = {
  message: string;
};

export type Token = {
  token: string;
};

export type Image = {
  id: number;
  src: string;
};

export type ResponseUser = {
  userLogin: {
    roleName: string;
  };
  access_token: string;
};