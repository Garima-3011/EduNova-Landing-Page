
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
        <div className="hero-content">
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
        </div>

        <div className="hero-visual">
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
        </div>
      </section>

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

      <section className="courses-section" id="courses">
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

        <div className="course-grid">
          {courses.map((course) => {
            const Icon = course.icon;
            const isEnrolled = enrolledCourses.includes(course.title);

            return (
              <article className="course-card" key={course.id}>
                <div className="course-icon">
                  <Icon size={27} />
                </div>
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="course-meta">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>

                <button
                  className={isEnrolled ? "enrolled-btn" : "enroll-btn"}
                  onClick={() => enrollCourse(course.title)}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? (
                    <>Enrolled <CheckCircle size={16} /></>
                  ) : (
                    <>Enroll Now <ArrowRight size={16} /></>
                  )}
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
