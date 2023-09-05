import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-5">
      <div>
        <h1 className="font-bold text-xl">LK's Blog</h1>
      </div>
      <nav className="flex gap-3 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
