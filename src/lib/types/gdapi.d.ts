export interface GdUser {
  username: string;
  playerID: string;
  accountID: string;
  rank: number;
  stars: number;
  diamonds: number;
  coins: number;
  userCoins: number;
  demons: number;
  cp: number;
  icon: number;
  friendRequests: boolean;
  messages: string;
  commentHistory: string;
  moderator: number;
  youtube: null;
  twitter: null;
  twitch: null;
  ship: number;
  ball: number;
  ufo: number;
  wave: number;
  robot: number;
  spider: number;
  col1: number;
  col2: number;
  deathEffect: number;
  glow: boolean;
  col1RGB: {
    r: number;
    g: number;
    b: number;
  };
  col2RGB: {
    r: number;
    g: number;
    b: number;
  };
}
