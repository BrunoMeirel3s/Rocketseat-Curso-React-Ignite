import { Product } from "@/styles/pages/home";
/**
 * O código executado dentro da pasta de API roda somente do lado
 * do servidor da aplicação NEXT, deve ser utilizado sempre que precisarmos
 * manter as requisições camufladas por questões de segurança
 */

import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

interface Products {
  productId: string;
  quantity: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Methot not allowed" });
  }

  if (!req.body.products) {
    return res.status(400).json({ error: "Missing mandatory params!" });
  }

  const priceId = req.body.priceId;

  //Success URL é a para onde o stripe irá redirecionar em caso de sucesso na compra
  //o CHECKOUT_SESSION_ID é a variável da sessão que o STRIPE pode colocar na URL para trabalharmos e pegar os dados
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const lineItems = await req.body.products.map(async (product) => {
    const productStripe = await stripe.products.retrieve(product.productId, {
      expand: ["default_price"],
    });

    const price = productStripe.default_price as Stripe.Price;
    return {
      price: price.id,
      quantity: product.quantity,
    };
  });

  console.log(lineItems);

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
