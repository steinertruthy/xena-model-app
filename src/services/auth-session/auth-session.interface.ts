export interface ISignInResponse {
  access_token: string;
  refresh_token: string;
}
export interface IMeResponse {
  id: string;
  email: string;
  name: string;
  avatar_url?: string | null;
  cover_url?: string | null;
}
