import { backEndClient } from "../../api";
import { ISignIn } from "../../screens/sign-in/schemas/sign-in.schema";
import { SecureStoreUtils } from "../../utils/secure-store.utils";
import { IMeResponse, ISignInResponse } from "./auth-session.interface";

export default class AuthSessionService {
  private readonly routerPath: string = "/auth-sessions";

  async signIn(payload: ISignIn) {
    return await backEndClient.post<ISignInResponse>(this.routerPath, {
      cookiesEnabled: false,
      ...payload,
    });
  }

  async getMe() {
    const accessToken = this.getAccessToken();
    if (!accessToken) return null;

    return await backEndClient.get<IMeResponse>(`${this.routerPath}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  private getAccessToken() {
    const secureStoreUtils = new SecureStoreUtils();
    return secureStoreUtils.getItem("accessToken");
  }
}
