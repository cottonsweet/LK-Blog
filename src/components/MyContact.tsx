// lib
import { FaGithub } from "react-icons/fa";

export default function MyContact() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-3xl my-3">Contact Me</h2>
      <p>whitecandy777@naver.com</p>

      <a href="https://github.com/sstipdev" target="_blank" rel="noreferrer">
        <FaGithub className="text-zinc-600 mt-3 text-5xl hover:text-yellow-700 duration-200" />
      </a>

      <h2 className="font-bold text-4xl my-10">Please send us your email !</h2>
    </div>
  );
}
