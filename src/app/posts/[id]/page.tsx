import { PostComponent } from "@/app/components/Post";
import Link from "next/link";

import type { PostType } from "@/app/page";

interface PostPageParams {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PostPageParams) {
  const post = await getPost(params.id);

  return (
    <>
      <PostComponent {...post} />
      <Link href="/">Go back</Link>
    </>
  );
}

async function getPost(id: number): Promise<PostType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();

  return data;
}
