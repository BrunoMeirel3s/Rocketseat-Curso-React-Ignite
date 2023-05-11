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

interface LineItems {
  price: string;
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

  //const priceId = req.body.priceId;
  const products = req.body.products;
  /*
  let lineItems = [
    { price: "price_1Mtnu5IyfZm95NwNT9d5X8Ho", quantity: 1 },
    { price: "price_1MtnufIyfZm95NwNRRnWavGx", quantity: 1 },
  ] as LineItems[];*/

  //Success URL é a para onde o stripe irá redirecionar em caso de sucesso na compra
  //o CHECKOUT_SESSION_ID é a variável da sessão que o STRIPE pode colocar na URL para trabalharmos e pegar os dados
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const productStripePromises = products.map((product: Products) => {
    return stripe.products.retrieve(product.productId, {
      expand: ["default_price"],
    });
  });

  /**
   * Método Promise.all permite esperar o retorno da promise antes de continuar com
   * o restante do código
   */
  const productStripes = await Promise.all(productStripePromises);

  const lineItems = productStripes.map((productStripe) => {
    const price = productStripe.default_price as Stripe.Price;

    const quantity = products.filter(
      (product: Products) => product.productId === productStripe.id
    );

    return { price: price.id, quantity: quantity[0].quantity };
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: lineItems,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
    checkoutId: checkoutSession.id,
  });
}
