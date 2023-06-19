import {Posts} from "@/app/components/Posts";
import {Hydrate} from "@/app/utils/HydrateClient";
import {usePrefetchPost} from "@/app/hooks/useGetPosts";

export default async function Home() {
  const dehydratedState = usePrefetchPost();

  return (
    <main className="full-height">
      <h1>Welcome home</h1>
      <Hydrate state={dehydratedState}>
        <Posts/>
      </Hydrate>
    </main>
  )
}
