export default function LodgesPost({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
