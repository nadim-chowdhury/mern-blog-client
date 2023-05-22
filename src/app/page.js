import Image from "next/image";
import { blogData } from "./blogData";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="text-center button sticky top-0">
        <Link href="/new-post">Create New Post</Link>
      </div>

      {blogData.map((d) => (
        <div key={d.id} className="my-4">
          {/* <div className="p-2 border rounded-lg">
            <Image src={d.img} width={120} height={120} alt="" />
          </div> */}

          <div className="border rounded p-4">
            <h2 className="font-bold">{d.que}</h2>
            <p className="text-sm py-1 text-slate-500 text-end">
              <span className="font-bold mr-2">Author</span>
              {new Date().toLocaleDateString()}
            </p>
            <p className="text-justify">{d.ans}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
