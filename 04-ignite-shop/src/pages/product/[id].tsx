import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/products";
import { useRouter } from "next/router";
export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79.90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          adipisci distinctio nulla, odio pariatur fugit laborum eos nam autem
          fuga? Vel nam inventore repellendus eum nihil fuga maiores, ut maxime!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
