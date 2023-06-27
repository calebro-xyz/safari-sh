export default function ConservanciesPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>My Post: {params.slug}</div>;
}
