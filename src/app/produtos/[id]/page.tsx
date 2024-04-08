import { Produto } from "@/components/server-fetch";

interface ProdutoProps {
  params: {
    id: string;
  }
}

export default async function ProdutoPage({ params }: ProdutoProps) {

  const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
  const data = (await response.json()) as Produto;

  return (
    <div>
      <h1>{data.nome}</h1>

    </div>
  )
}
