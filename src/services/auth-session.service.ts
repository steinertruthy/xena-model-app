import { backEndClient } from "../api";
import { ISignIn } from "../screens/sign-in/schemas/sign-in.schema";

export default class AuthSessionService {
  private readonly routerPath: string = "/auth-sessions";

  async signIn(payload: ISignIn) {
    console.log("payload signIn", payload);

    return await backEndClient.post<{
      access_token: string;
      refresh_token: string;
    }>(this.routerPath, { cookiesEnabled: false, ...payload });
  }

  async getMe(accessToken: string) {
    return await backEndClient.patch(
      this.routerPath,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }
}
