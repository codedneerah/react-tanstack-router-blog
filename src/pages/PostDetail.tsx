import { useParams, Link } from "@tanstack/react-router";
//import { useState } from "react";

export default function PostDetail() {
  const { postId } = useParams({ strict: false });
  const id = Number(postId);

  // Same 4 posts as Home (could be moved to shared file if needed)
  const posts = [
    {
      id: 1,
      title: "The Importance of Continuous Learning",
      content:
        "Learning is a lifelong journey that never truly ends. In a fast-changing world, staying curious and actively seeking knowledge keeps your mind sharp, enhances problem-solving skills, and ensures your abilities remain relevant. Embrace learning from books, online courses, and real-life experiences to grow every day."
    },
    {
      id: 2,
      title: "Building Good Habits for Success",
      content:
        "Success is rarely accidental; it is the result of deliberate, consistent habits. Small daily actions, like planning your day, reflecting on progress, or prioritizing health, compound over time. By focusing on positive routines and eliminating distractions, anyone can create a strong foundation for long-term achievement."
    },
    {
      id: 3,
      title: "Mastering Time Management",
      content:
        "Time is the most valuable resource we have, yet it is often wasted. Effective time management involves planning, prioritizing, and focusing on high-impact tasks. Using techniques such as the Pomodoro method, time-blocking, and goal setting can dramatically improve productivity. Learning to manage time wisely allows for growth, creativity, and a balanced life."
    },
    {
      id: 4,
      title: "The Power of Goal Setting",
      content:
        "Goal setting is one of the most powerful tools for personal and professional growth. By defining clear, measurable, and achievable objectives, you create a roadmap for success. Reviewing progress regularly and adjusting your approach ensures you stay on track and motivated to reach your aspirations."
    }
  ];

  const post = posts.find((p) => p.id === id);

  if (!post) return (
    <div className="container">
      <h1>Post not found</h1>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );

  return (
    <div className="container post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}
