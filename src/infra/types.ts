export type CreateSessionDTO = {
  username: string;
  password: string;
};

export type RefreshTokensStore = Map<string, string[]>;

export type DecodedToken = {
  sub: string;
};
