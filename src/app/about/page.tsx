// Next
import type { Metadata } from "next";

// Components
import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";

export const metadata: Metadata = {
  title: "About Me",
  description: "블로거의 프로필 입니다.",
};

export default function AboutPage() {
  return (
    <>
      <Profile />
      <div className="px-5">
        <Introduce />
      </div>
    </>
  );
}
