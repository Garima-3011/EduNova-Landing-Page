
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  BarChart3,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Reveal from "../components/Reveal";

const courses = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    description: "Learn HTML, CSS, JavaScript and build modern websites.",
    icon: Code,
    duration: "8 Weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "Design",
    description: "Explore design principles and create user-friendly interfaces.",
    icon: Palette,
    duration: "6 Weeks",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Data Analytics",
    category: "Analytics",
    description: "Understand data and turn information into useful insights.",
    icon: BarChart3,
    duration: "10 Weeks",
    level: "Intermediate",
  },
];

function Home() {
  const { userName, setUserName, enrolledCourses, enrollCourse } =
    useAppContext();
const shouldReduceMotion = useReducedMotion();
  const [nameInput, setNameInput] = useState(userName);

  const saveName = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setUserName(nameInput.trim());
    }
  };

  return (
    <main>
      <section className="hero">
        <Reveal className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} /> YOUR LEARNING JOURNEY STARTS HERE
          </span>

          <h1>
            Learn Today.
            <br />
            <span>Lead Tomorrow.</span>
          </h1>

          <p>
            Discover practical courses, develop new skills, and take the
            next step towards your dream career with EduNova.
          </p>

          <a href="#courses" className="primary-btn">
            Explore Courses <ArrowRight size={18} />
          </a>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Learning Topics</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Flexible Learning</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Learn Anytime</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.2}>
          <div className="visual-card">
            <div className="visual-icon">
              <BookOpen size={42} />
            </div>
            <h2>Knowledge is your superpower.</h2>
            <p>Small steps today. Big achievements tomorrow.</p>
            <div className="progress-track">
              <span></span>
            </div>
            <small>Keep learning, keep growing!</small>
          </div>
          <div className="floating-badge">
            <CheckCircle size={17} /> Start learning
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="welcome-section">
          <div>
            <span className="section-label">YOUR PERSONAL SPACE</span>
            <h2>Welcome to your learning hub</h2>
            <p>Enter your name to personalize your learning experience.</p>
          </div>

          <form className="name-form" onSubmit={saveName}>
            <input
              type="text"
              placeholder="Enter your name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              aria-label="Your name"
            />
            <button type="submit">Save Name</button>
          </form>

          {userName && (
            <p className="welcome-message">
              Welcome, {userName}! Happy learning.
            </p>
          )}
        </section>
      </Reveal>

      <section className="courses-section" id="courses">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="section-label">GROW YOUR SKILLS</span>
              <h2>Explore Our Courses</h2>
              <p>Choose a learning path that matches your goals.</p>
            </div>
            <span className="course-count">
              {enrolledCourses.length} courses enrolled
            </span>
          </div>
        </Reveal>

        <div className="course-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isEnrolled = enrolledCourses.includes(course.title);

            return (
              <Reveal key={course.id} delay={index * 0.15}>
                <motion.article
                       className="course-card"
                       whileHover={
                         shouldReduceMotion
                         ? undefined
                         : { y: -8, scale: 1.02 }
                       }
                       whileTap={
                      shouldReduceMotion
                      ? undefined
                      : { scale: 0.98 }
                    }
                  transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
              }}
               >
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
