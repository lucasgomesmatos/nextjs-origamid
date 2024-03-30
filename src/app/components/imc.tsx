'use client';

import { useRouter } from 'next/navigation';

export const Imc = () => {
  const { push } = useRouter();

  const handleCalculate = async (formData: FormData) => {
    const weight = formData.get('weight');
    const height = formData.get('height');

    const imc = Number(weight) / (Number(height) * Number(height));

    push(`/imc?result=${Number(imc).toFixed(2)}`);
  };

  return (
    <form action={handleCalculate} method="GET">
      <input type="text" placeholder="Altura" name="height" />
      <input type="text" placeholder="peso" name="weight" />
      <button type="submit">Calcular</button>
    </form>
  );
};
