import prisma from "@/lib/db";
import { createPost } from "./actions/actions";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <ModeToggle />


      <form action={createPost} className="max-w-xs mx-auto mt-4">
        <input type="text" name="title" className="w-full p-2 border border-gray-300 rounded-md" />
        <textarea name="content" className="w-full p-2 border border-gray-300 rounded-md" />
        <Button type="submit" className="w-full">Add Post</Button>
      </form>


      <h1 className="text-2xl font-bold mx-auto mt-4">Posts</h1>

    <ul className="max-w-xs mx-auto mt-2">
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
