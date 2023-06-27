export default function HotelsPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
