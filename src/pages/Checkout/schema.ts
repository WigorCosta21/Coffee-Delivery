import { PaymentMethod } from "enums/PaymentMethod";
import * as z from "zod";

export const orderSchema = z.object({
  cep: z
    .string()
    .nonempty("CEP é obrigatório")
    .regex(/^\d{5}-\d{3}$/, "CEP deve estar no formato 12345-678"),
  street: z.string().nonempty("Rua é obrigatória"),
  number: z.string().nonempty("Número é obrigatório"),
  fullAddress: z.string().optional(),
  neighborhood: z.string().nonempty("Bairro é obrigatório"),
  city: z.string().nonempty("Cidade é obrigatória"),
  state: z
    .string()
    .nonempty("UF é obrigatória")
    .length(2, "UF deve ter exatamente 2 caracteres"),
  paymentMethod: z.enum(
    [PaymentMethod.Credit, PaymentMethod.Debit, PaymentMethod.Cash],
    {
      invalid_type_error: "Informe um método de pagamento",
    }
  ),
});

export type OrderFormData = z.infer<typeof orderSchema>;
