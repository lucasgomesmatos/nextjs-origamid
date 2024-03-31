'use client';

import { useRouter } from 'next/navigation';

export const Imc = () => {
  const { push } = useRouter();

  const handleCalculate = async (formData: FormData) => {
    const weight = formData.get('weight');
    const height = Number(formData.get('height')) / 100;

    const imc = Number(weight) / (Number(height) * Number(height));

    push(`/imc?result=${Number(imc).toFixed(2)}`);
  };

  return (
    <form action={handleCalculate} method="GET">
      <div>
        <label htmlFor="height">Altura (em cm)</label>
        <input type="text" id="height" name="height" />
      </div>
      <div>
        <label htmlFor="weight">Peso (em kg)</label>
        <input type="text" name="weight" id="weight" />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};
