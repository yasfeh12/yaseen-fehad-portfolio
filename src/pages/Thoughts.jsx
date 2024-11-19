import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaUserAlt } from "react-icons/fa";

const ThoughtsWrapper = styled(motion.div)`
  padding: 60px;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #f39c12;
`;

const ThoughtsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  padding: 20px;
  width: 100%;
  max-width: 1300px;
  justify-items: center;
`;

const ThoughtCard = styled(motion.div)`
  background-color: #333;
  border-radius: 15px;
  padding: 60px;
  color: #ffffff;
  max-width: 500px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background-color 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    background-color: #f39c12;
  }

  &:hover .icon {
    color: #1a1a1a;
  }
`;

const ThoughtIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 35px;
  color: #f39c12;
  transition: color 0.3s;
`;

const ThoughtTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const ThoughtDate = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 20px;
`;

const ThoughtContent = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #eee;
`;

const thoughtsData = [
  {
    id: 1,
    title: "Embracing JavaScript",
    date: "October 10, 2024",
    content:
      "JavaScript has truly changed how I approach development. Its flexibility and power allow for incredible web applications.",
    icon: <FaJs />,
  },
  {
    id: 2,
    title: "React Components Best Practices",
    date: "September 25, 2024",
    content:
      "In my recent projects, I've learned that breaking down components into smaller, reusable parts is essential for maintainability.",
    icon: <FaReact />,
  },
  {
    id: 3,
    title: "The Importance of UX",
    date: "August 15, 2024",
    content:
      "Great UX can make or break an application. I always strive to prioritize user experience in my projects.",
    icon: <FaUserAlt />,
  },
  {
    id: 4,
    title: "CSS Flexbox vs. Grid",
    date: "July 30, 2024",
    content:
      "Knowing when to use Flexbox versus Grid can simplify layout creation. Each has its strengths depending on the design's needs.",
    icon: <FaJs />,
  },
  {
    id: 5,
    title: "Improving Page Load Speed",
    date: "June 18, 2024",
    content:
      "Optimizing images, minimizing CSS, and leveraging lazy loading have significantly improved my page load times.",
    icon: <FaUserAlt />,
  },
  {
    id: 6,
    title: "Hooks in React",
    date: "May 5, 2024",
    content:
      "React hooks like useState, useEffect, and useContext make functional components more powerful and help keep code organized.",
    icon: <FaReact />,
  },
  {
    id: 7,
    title: "Responsive Design Essentials",
    date: "April 22, 2024",
    content:
      "Responsive design ensures websites look great on all devices. Mobile-first design is my go-to approach for responsive layouts.",
    icon: <FaUserAlt />,
  },
  {
    id: 8,
    title: "CSS Animations and Transitions",
    date: "March 12, 2024",
    content:
      "Adding subtle CSS animations and transitions can make the UI feel more dynamic and engaging, enhancing user experience.",
    icon: <FaJs />,
  },
  {
    id: 9,
    title: "State Management in React",
    date: "February 25, 2024",
    content:
      "State management is crucial for complex applications. Learning Redux and Context API helped me better handle global state.",
    icon: <FaReact />,
  },
  {
    id: 10,
    title: "Semantic HTML",
    date: "January 19, 2024",
    content:
      "Using semantic HTML tags improves accessibility and SEO. It's essential to use elements like <header>, <nav>, and <footer> correctly.",
    icon: <FaJs />,
  },
  {
    id: 11,
    title: "Importance of Consistent Design",
    date: "December 3, 2023",
    content:
      "Consistency in design, like using a limited color palette and reusable components, improves the overall user experience.",
    icon: <FaUserAlt />,
  },
  {
    id: 12,
    title: "CSS Variables for Theming",
    date: "November 10, 2023",
    content:
      "CSS variables make theming easier and help create a consistent look. They’re especially useful for light and dark modes.",
    icon: <FaJs />,
  },
  {
    id: 13,
    title: "Building Accessible UIs",
    date: "October 15, 2023",
    content:
      "Accessibility is critical. Using ARIA roles, labels, and keyboard navigation ensures that apps are usable by everyone.",
    icon: <FaUserAlt />,
  },
  {
    id: 14,
    title: "Designing Intuitive Navigation",
    date: "September 1, 2023",
    content:
      "Good navigation helps users find what they need easily. A clear layout and intuitive links make for a smooth experience.",
    icon: <FaUserAlt />,
  },
  {
    id: 15,
    title: "The Power of CSS Grid",
    date: "August 5, 2023",
    content:
      "CSS Grid has revolutionized layout design, making it easier to create complex and responsive structures with fewer lines of code.",
    icon: <FaJs />,
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ThoughtsPage = () => {
  return (
    <ThoughtsWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <PageTitle>My Thoughts</PageTitle>
      <ThoughtsGrid>
        {thoughtsData.map((thought) => (
          <ThoughtCard
            key={thought.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <ThoughtIcon className="icon">{thought.icon}</ThoughtIcon>
            <ThoughtTitle>{thought.title}</ThoughtTitle>
            <ThoughtDate>{thought.date}</ThoughtDate>
            <ThoughtContent>{thought.content}</ThoughtContent>
          </ThoughtCard>
        ))}
      </ThoughtsGrid>
    </ThoughtsWrapper>
  );
};

export default ThoughtsPage;
