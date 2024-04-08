import Link from "next/link";

export type Produto = {
  nome: string;
  id: number;
};
export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Produto[];

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>
          <Link href={
            `produtos/${produto.id}`
          }>{produto.nome}</Link>
        </li>
      ))}
    </ul>
  );
}
