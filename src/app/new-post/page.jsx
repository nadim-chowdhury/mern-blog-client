import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewPost() {
  return (
    <form className="flex flex-col justify-between items-center">
      <input
        type="text"
        placeholder="Enter Title"
        className="border rounded my-2 w-full px-4 py-1"
      />
      <input
        type="text"
        placeholder="Enter Summary"
        className="border rounded my-2 w-full px-4 py-1"
      />
      <input type="file" className="my-2" />
      <ReactQuill />
    </form>
  );
}
