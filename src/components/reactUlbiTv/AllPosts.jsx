import React, { useEffect, useMemo, useState } from "react";
import "../../styles/UlbiTv.css";
import MyModal from "../UI/modal/MyModal";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostsFilter from "./PostsFilter";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import { useFetch } from "../../hooks/useFetch";
import { getPageCount, getPagesArray } from "../../utils/pages";
import Pagination from "../UI/pagination/Pagination";

const AllPosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "1", body: "4" },
    { id: 2, title: "  2", body: "3" },
    { id: 3, title: "3 ", body: "2" },
    { id: 4, title: "4", body: "1" },
  ]);

  const [filter, setFilter] = useState({ searchQuery: "", selectetSort: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(100);
  const [page, setPage] = useState(1);

  const [fetchPosts, loading, error] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalPosts = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalPosts, limit));
  });

  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectetSort,
    filter.searchQuery
  );
  const createPost = (newPost) => {
    setPosts([{ id: Date.now(), ...newPost }, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="UlbiTv">
      <MyButton onClick={() => setModal(true)}>Add new post</MyButton>

      <MyModal modal={modal} setModal={(e) => setModal()}>
        <PostForm createPost={createPost} />
      </MyModal>

      <PostsFilter filter={filter} setFilter={setFilter} />
      {error ? (
        <div>{error}</div>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          loading={loading}
        />
      )}
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
};

export default AllPosts;
