// Next
import type { Metadata } from "next";

// components
import MyContact from "@/components/MyContact";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "블로거의 연락처 입니다.",
};

export default function ContactPage() {
  return (
    <section>
      <MyContact />
      <ContactForm />
    </section>
  );
}
