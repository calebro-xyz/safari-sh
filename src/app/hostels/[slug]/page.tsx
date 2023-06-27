export default function HostelsPost({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
