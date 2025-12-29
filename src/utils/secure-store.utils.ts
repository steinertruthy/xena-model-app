import * as SecureStore from "expo-secure-store";

type TKey = "accessToken" | "refreshToken";

export class SecureStoreUtils {
  setItem(
    key: TKey,
    value: string,
    options: SecureStore.SecureStoreOptions = {}
  ) {
    return SecureStore.setItem(key, value, options);
  }

  getItem(key: TKey, options: SecureStore.SecureStoreOptions = {}) {
    return SecureStore.getItem(key, options);
  }
}
