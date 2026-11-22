
import {
  Target,
  Lightbulb,
  Users,
  BookOpen,
  GraduationCap,
  Heart,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Practical Learning",
      description:
        "Learn through structured topics and practical skill-building activities.",
    },
    {
      icon: Users,
      title: "Learner Focused",
      description:
        "Explore learning paths designed around different interests and goals.",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description:
        "Build useful knowledge and develop confidence through continuous learning.",
    },
    {
      icon: Heart,
      title: "Learn at Your Pace",
      description:
        "Take control of your learning journey and progress at a comfortable pace.",
    },
  ];

  return (
    <main className="about-page">
      <section className="page-hero">
        <span className="section-label">GET TO KNOW US</span>
        <h1>Learning That Moves You Forward</h1>
        <p>
          EduNova is a learning hub designed to make skill development
          accessible, engaging, and meaningful.
        </p>
      </section>

      <section className="about-intro">
        <div className="about-symbol">
          <GraduationCap size={75} />
        </div>

        <div className="about-copy">
          <span className="section-label">WHO WE ARE</span>
          <h2>Making learning a part of everyday growth.</h2>
          <p>
            We believe that learning should be flexible, practical, and
            accessible to everyone. EduNova brings different learning
            opportunities together in one simple platform.
          </p>
          <p>
            Whether you want to explore technology, design, or analytics,
            our goal is to help you take the first step towards developing
            valuable skills.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <Target size={34} />
          <h3>Our Mission</h3>
          <p>
            To encourage continuous learning and help learners build
            practical skills for a changing world.
          </p>
        </div>

        <div className="mission-card">
          <Lightbulb size={34} />
          <h3>Our Vision</h3>
          <p>
            To create a welcoming learning environment where curiosity
            leads to confidence and growth.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading centered">
          <span className="section-label">WHY EDUNOVA</span>
          <h2>A Better Way to Grow</h2>
          <p>Everything begins with the willingness to learn.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={25} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default About;
