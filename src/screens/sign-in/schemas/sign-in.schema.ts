import z from "zod";

const getTextCharacterMin = (number: number) => `Mínimo ${number} caracteres`;
const getTextCharacterMax = (number: number) => `Máximo ${number} caracteres`;

export const signInSchema = z.object({
  email: z
    .email("E-mail inválido")
    .trim()
    .min(6, getTextCharacterMin(6))
    .max(120, getTextCharacterMax(120)),
  password: z
    .string("Informe sua senha")
    .min(8, getTextCharacterMin(8))
    .max(120, getTextCharacterMax(120)),
});

export interface ISignIn extends z.infer<typeof signInSchema> {}
