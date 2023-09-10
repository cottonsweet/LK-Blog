// Components
import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";

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
