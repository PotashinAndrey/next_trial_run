import Link from "next/link";

export default function StaticUrl() {
  return (
    <>
      <h1>static address</h1>
      <ul>
        <ol>
          <Link href="/">To the main</Link>
        </ol>
        <ol>
          <Link href="/staticUrl/secondStaticLevel">static page level 2 (not static anymore)</Link>
        </ol>
        <ol>
          <Link href={`/staticUrl/${Math.round(Math.random() * 100)}`}>
            static page with random url
          </Link>
        </ol>
      </ul>
    </>
  );
}
