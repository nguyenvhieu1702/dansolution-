"use client";

import { useEffect, useState } from "react";
import Post from "./post";
import axios from "axios";

interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
  slug: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts")
      .then((res) => {
        const rawPosts = res.data.data;
        const mappedPosts = rawPosts.map((item: any) => ({
          id: item.id,
          title: item.title,
          excerpt: item.content.slice(0, 150) + "...",
          image: "/images/news-1.jpg",
          category: "Kiến Thức Website",
          publishedAt: item.publishedAt,
          slug: item.slug, // Thêm slug
        }));

        setPosts(mappedPosts);
      })
      .catch((err) => {
        console.error("Lỗi khi fetch posts:", err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((item) => (
        <div key={item.id} style={{ margin: "0px 10px 30px", width: "368px" }}>
          <Post
            image={item.image}
            title={item.title}
            excerpt={item.excerpt}
            date={new Date(item.publishedAt).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            category={item.category}
            slug={item.slug} // Truyền slug vào Post
          />
        </div>
      ))}
    </div>
  );
}