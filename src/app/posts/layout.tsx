export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-5">{children}</div>;
}
