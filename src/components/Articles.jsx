import React from "react";

export default function Articles() {
  const articles = [
    {
      title: "Building a Full Stack MERN App",
      date: "Dec 2025",
      content: `
Building a full stack MERN application involves MongoDB, Express, React, and Node.js.

I started by setting up the backend using Node.js and Express, creating REST APIs for authentication and data handling. MongoDB was used as the database for storing user and application data.

On the frontend, I used React to build reusable components and implemented state management for better scalability. I also integrated JWT authentication for secure login functionality.

This project helped me understand real-world application architecture and improved my debugging and problem-solving skills.
      `,
    },
    {
      title: "Why My React App Broke and How I Fixed It",
      date: "Nov 2025",
      content: `
I recently encountered a critical issue in my React application where the UI stopped rendering after a recent update. 

After investigating, I found that the problem was due to a state management bug caused by an infinite loop in a useEffect hook, which was triggered by a state update that depended on the same state. 

To fix this, I refactored the useEffect to include proper dependency arrays and added conditional checks to prevent unnecessary re-renders. This experience taught me the importance of understanding React's rendering behavior and the significance of managing side effects correctly.
      `,
    },
    {
      title: "React Native for Mobile Development",
      date: "Jan 2026",
      content: `
React Native allows developers to build mobile applications using JavaScript and React. 

It provides a native-like experience while enabling code reuse across platforms. I used React Native to create a mobile authentication app with JWT and integrated it with a Django REST backend. 

The framework's hot-reloading feature significantly sped up development, and its extensive library ecosystem made it easy to implement complex features. React Native is a great choice for developers looking to build cross-platform mobile apps efficiently, though it may not be suitable for performance-critical applications or those requiring deep native integrations.
      `,
    },

    {
      title: "How I Built My Portfolio Website",
      date: "April 2026",
      content: `
I designed and developed my portfolio website using React and modern CSS techniques.

The goal was to create a clean, responsive, and interactive UI. I implemented reusable components, smooth animations, and a dark/light theme toggle.

I also focused on performance optimization and user experience by reducing load times and ensuring mobile responsiveness.

This project reflects my frontend skills and attention to detail in UI/UX design.
      `,
    },
  ];

  return (
    <section id="articles" className="articles-section">
      <h2>
        Latest <span>Articles</span>
      </h2>

      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <p className="article-date">{article.date}</p>
            <h3>{article.title}</h3>

            <p className="article-content">{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
