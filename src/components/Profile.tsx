// Components
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="profile"
        className="rounded-full"
        priority
      />
      <div className="mt-2 text-center">
        <h1 className="text-3xl font-bold">Hello, I'm LK</h1>
        <p className="text-lg font-medium">Front-end Engineer</p>
        <Link href="/contact">
          <button className="font-semibold font-semibold text-xl p-3 bg-orange-300 rounded-xl mt-3 text-[#654321]">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
