"use client"
import {useGetPosts} from "@/app/hooks/useGetPosts";
import {useQueryClient} from "@tanstack/react-query";

export const Posts = () => {
  const {data, isLoading} = useGetPosts();
  const queryClient = useQueryClient();

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id}>
          <h1>{post.name}</h1>
        </div>
      ))}
    </div>
  )
}
