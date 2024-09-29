export default function DynamicUrl({
  params,
}: {
  params: { urlDynamicId: string };
}) {
  return <h1>Dynamic URL with id: {params.urlDynamicId}</h1>;
}
