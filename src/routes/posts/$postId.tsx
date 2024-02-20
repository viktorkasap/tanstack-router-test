import { createFileRoute, Link } from "@tanstack/react-router";
import axios from "axios";

type PageParams = {
  page?: number;
};

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const fetchPost = async (id: number): Promise<Post> => {
  try {
    const request = await axios.get<Post>(`https://dummyjson.com/posts/${id}`);
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw new Error(err.message);
    }

    throw new Error("Unknown error occurred!");
  }
};

export const Route = createFileRoute("/posts/$postId")({
  component: Post,
  loader: ({ params }) => fetchPost(Number(params.postId)),
  errorComponent: ({ error }) => {
    return <div>404: {(error as Error).message}</div>;
  },
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: Number(search?.page ?? 1),
    };
  },
});

function Post() {
  const { postId } = Route.useParams();
  const { page } = Route.useSearch();
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      <Link to={"/posts"}>Posts Page</Link>
      <div>Page: {page}</div>
      <p>Title: {data.title}</p>
      <p>Content: {data.body}</p>
    </div>
  );
}
