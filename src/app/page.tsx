import Link from "next/link";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchData(): Promise<PostType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  return data;
}

export default async function Home() {
  const fetchedData = await fetchData();
  console.log(fetchedData);

  return (
    <>
      <h1>Home page</h1>
      {fetchedData.slice(0,5).map((e) => (
        <div key={e.id} style={{padding: "15px"}}>
          <h4>{e.title}</h4>
          <br />
          <p>{e.body}</p>
          <Link href={`/posts/${e.id}`}>more</Link>
        </div>
      ))}
    </>
  );
}
