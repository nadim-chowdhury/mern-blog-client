import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b-2">
      <div className="font-bold text-2xl">
        <Link className="uppercase txt-gradient" href="/">
          MyBlog
        </Link>
      </div>

      <div>
        <Link href="/login" className="btn-hover">
          Login
        </Link>
        <Link href="/register" className="ml-2 btn-hover">
          Register
        </Link>
      </div>
    </header>
  );
}
