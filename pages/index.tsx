import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>Some cool stuf</h1>
      <Link href="/nicepage">
        <h2>Link</h2>
      </Link>
    </div>
  );
}
