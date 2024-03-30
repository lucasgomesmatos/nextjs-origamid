import Link from 'next/link';

export const Header = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/imc">Imc</Link>
      </li>
    </ul>
  );
};
