export default function ResortsPost({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
