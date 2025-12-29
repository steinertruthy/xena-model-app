import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AuthSessionService from "../services/auth-session.service";
import { SecureStoreUtils } from "../utils/secure-store.utils";

const queryClient = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    // (async () => {
    //   await getInfoUserLogged();
    // })();

    getInfoUserLogged();
  }, []);

  const {
    mutate: getMe,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["me"],
    mutationFn: async (accessToken: string) => {
      const authSessionService = new AuthSessionService();
      const data = await authSessionService.getMe(accessToken);
      console.log("data", data.data);
    },
  });

  const getAccessToken = () => {
    const secureStoreUtils = new SecureStoreUtils();
    return secureStoreUtils.getItem("accessToken");
  };

  const getInfoUserLogged = () => {
    const accessToken = getAccessToken();

    if (accessToken) {
      getMe(accessToken);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Header />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
