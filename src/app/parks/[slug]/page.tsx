export default function ParksPost({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
