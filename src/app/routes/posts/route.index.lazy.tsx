import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts/route/")({
  component: Posts,
  pendingComponent: () => <div>Pending posts ...</div>,
  notFoundComponent: () => <div>No Found the Posts</div>,
});
/*
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(console.log);
*/

function Posts() {
  return (
    <div>
      <h1>Posts Index Page</h1>
      <Link to={"/posts/$postId"} params={{ postId: "1" }}>
        Post #1
      </Link>
      {" | "}
      <Link to={"/posts/$postId"} params={{ postId: "2" }}>
        Post #2
      </Link>
    </div>
  );
}
