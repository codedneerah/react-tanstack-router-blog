import { useState } from "react";
import { Link } from "@tanstack/react-router";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // 4 original educational blog posts
  const posts = [
    {
      id: 1,
      title: "The Importance of Continuous Learning",
      excerpt:
        "Learning is a lifelong journey. Staying curious and seeking knowledge keeps your mind sharp and your skills relevant...",
      content:
        "Learning is a lifelong journey that never truly ends. In a fast-changing world, staying curious and actively seeking knowledge keeps your mind sharp, enhances problem-solving skills, and ensures your abilities remain relevant. Embrace learning from books, online courses, and real-life experiences to grow every day."
    },
    {
      id: 2,
      title: "Building Good Habits for Success",
      excerpt:
        "Success is rarely accidental. Consistent habits, even small ones, shape our productivity and personal growth...",
      content:
        "Success is rarely accidental; it is the result of deliberate, consistent habits. Small daily actions, like planning your day, reflecting on progress, or prioritizing health, compound over time. By focusing on positive routines and eliminating distractions, anyone can create a strong foundation for long-term achievement."
    },
    {
      id: 3,
      title: "Mastering Time Management",
      excerpt:
        "Time is a finite resource. Knowing how to plan, prioritize, and execute tasks efficiently is a skill that transforms outcomes...",
      content:
        "Time is the most valuable resource we have, yet it is often wasted. Effective time management involves planning, prioritizing, and focusing on high-impact tasks. Using techniques such as the Pomodoro method, time-blocking, and goal setting can dramatically improve productivity. Learning to manage time wisely allows for growth, creativity, and a balanced life."
    },
    {
      id: 4,
      title: "The Power of Goal Setting",
      excerpt:
        "Setting clear goals gives direction and motivation. Well-defined goals help track progress and achieve success...",
      content:
        "Goal setting is one of the most powerful tools for personal and professional growth. By defining clear, measurable, and achievable objectives, you create a roadmap for success. Reviewing progress regularly and adjusting your approach ensures you stay on track and motivated to reach your aspirations."
    }
  ];

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link active">
          Home
        </Link>
        <button
          onClick={toggleDarkMode}
          style={{
            marginLeft: "20px",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #0066ff",
            background: darkMode ? "#0066ff" : "#fff",
            color: darkMode ? "#fff" : "#0066ff",
            fontWeight: 300,
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Header */}
      <header className="header">
        <h1>Educational Insights Blog</h1>
        <p>Original articles to inspire learning, growth, and productivity</p>
      </header>

      {/* Blog Posts */}
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>

          <Link
            to="/post/$postId"
            params={{ postId: post.id }}
            className="back-link"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}
