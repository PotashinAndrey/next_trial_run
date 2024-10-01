import type { FC } from "react";
import type { PostType } from "@/app/page";

export const PostComponent: FC<PostType> = (props) => {
  const { id, title, body } = props;

  return (
    <>
      <p>post №{id}</p>
      <h4>{title}</h4>
      <br />
      <p>{body}</p>
    </>
  );
};
