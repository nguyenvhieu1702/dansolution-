import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
// Hàm gọi API
async function getPostBySlug(slug: string) {
  try {
    const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`);
    const data = await res.json();
    return data.data[0];
  } catch (error) {
    console.error("Lỗi fetch bài viết:", error);
    return null;
  }
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const content = post.content || post.attributes?.content || "";

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}