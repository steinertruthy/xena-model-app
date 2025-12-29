import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import LinkLocal from "@/src/components/ui/Link";
import Section from "@/src/components/ui/Section";
import TextLocal from "@/src/components/ui/Text";
import AuthSessionService from "@/src/services/auth-session.service";
import { colors } from "@/src/styles/colors";
import { SecureStoreUtils } from "@/src/utils/secure-store.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { ISignIn, signInSchema } from "./schemas/sign-in.schema";
import { styles } from "./styles";

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: zodResolver(signInSchema),
  });

  const {
    mutate: onSubmit,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: async (payload: ISignIn) => {
      return await new AuthSessionService().signIn(payload);
    },
    onSuccess(data) {
      const {
        data: { access_token, refresh_token },
      } = data;

      const secureStoreUtils = new SecureStoreUtils();
      secureStoreUtils.setItem("accessToken", access_token);
      secureStoreUtils.setItem("refreshToken", refresh_token);
    },
  });

  console.log("error", error);

  return (
    <View style={styles.page}>
      <Section style={styles.formContainer}>
        <View>
          <TextLocal variant="titleLg" bold>
            Entre com sua conta
          </TextLocal>
          <TextLocal variant="bodyMd">Acesse sua conta com Segurança</TextLocal>
        </View>

        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur } }) => (
              <Input
                label="E-mail"
                placeholder="seu@email.com"
                onBlur={onBlur}
                onChangeText={onChange}
                textError={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange } }) => (
              <Input
                label="Senha"
                placeholder="********"
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={onChange}
                textError={errors.password?.message}
              />
            )}
          />
        </View>

        <LinkLocal
          href={"/forgot-password"}
          textOptions={{ color: colors.primary }}
          style={styles.forgotPassword}
        >
          Esqueceu a senha?
        </LinkLocal>

        <Button
          title="Entrar"
          onPress={handleSubmit((data) => onSubmit(data))}
        />
      </Section>
    </View>
  );
}
