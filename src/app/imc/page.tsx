import { Imc } from '../components/imc';

export default function ImcPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const imc = searchParams.result;

  return (
    <div>
      <h1>Imc {imc}</h1>
      <Imc />
    </div>
  );
}
