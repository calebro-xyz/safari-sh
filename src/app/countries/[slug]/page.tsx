export default function CountriesPost({
  params,
}: {
  params: { slug: string };
}) {
  return <div>My Post: {params.slug}</div>;
}
