/**
 * O código executado dentro da pasta de API roda somente do lado
 * do servidor da aplicação NEXT, deve ser utilizado sempre que precisarmos
 * manter as requisições camufladas por questões de segurança
 */

import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Methot not allowed" });
  }

  if (!req.body.priceId) {
    return res.status(400).json({ error: "Price not found" });
  }

  const priceId = req.body.priceId;

  //Success URL é a para onde o stripe irá redirecionar em caso de sucesso na compra
  //o CHECKOUT_SESSION_ID é a variável da sessão que o STRIPE pode colocar na URL para trabalharmos e pegar os dados
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
