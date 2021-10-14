import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <p>Post: {productId}</p>;
};

export default Post;
