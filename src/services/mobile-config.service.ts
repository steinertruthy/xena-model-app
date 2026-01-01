import { backEndClient } from "../api";

export class MobileConfigService {
  private readonly routerPath: string = "/mobile-configs";
  async getMobileConfig() {
    return await backEndClient.get<{ x_api_key: string }>(this.routerPath);
  }
}
