export default function Link({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
