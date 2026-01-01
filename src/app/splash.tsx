import { useMutation, useQuery } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AuthSessionService from "../services/auth-session/auth-session.service";
import { MobileConfigService } from "../services/mobile-config.service";
import { SecureStoreUtils } from "../utils/secure-store.utils";

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const {
    isPending: mobileConfigIsPending,
    isError: mobileConfigIsError,
    error: mobileConfigError,
  } = useQuery({
    queryKey: ["mobile-config"],
    queryFn: async () => {
      const mobileConfigService = new MobileConfigService();
      const { data } = await mobileConfigService.getMobileConfig();

      const secureStoreUtils = new SecureStoreUtils();
      secureStoreUtils.setItem("mobileConfig", JSON.stringify(data));

      if (data?.x_api_key) {
        getMe();
      }

      return data;
    },
  });

  const {
    mutate: getMe,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["me"],
    mutationFn: async () => {
      const authSessionService = new AuthSessionService();
      return await authSessionService.getMe();
    },
    onSuccess(data) {
      console.log(data?.data);

      SplashScreen.hide();
    },
    onError(err) {
      SplashScreen.hide();
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
