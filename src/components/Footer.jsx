import Link from "next/link";
import { BsLinkedin, BsGithub, BsGlobeAmericas } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="py-4 border-t-2 flex justify-between items-center">
      <h3 className="text-center">&copy;2023 By Nadim Chowdhury</h3>

      <div className="flex">
        <Link href="https://nadim.vercel.app">
          <BsGlobeAmericas className="btn-hover" />
        </Link>
        <Link href="https://github.com/nadim-chowdhury">
          <BsGithub className="ml-2 btn-hover" />
        </Link>
        <Link href="https://www.linkedin.com/in/nadim-chowdhury">
          <BsLinkedin className="ml-2 btn-hover" />
        </Link>
      </div>
    </section>
  );
}
