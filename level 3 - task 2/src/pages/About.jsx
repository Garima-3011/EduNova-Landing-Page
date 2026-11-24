
import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  BookOpen,
  GraduationCap,
  Heart,
} from "lucide-react";
import Reveal from "../components/Reveal";

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
 const shouldReduceMotion = useReducedMotion();
  return (
    <main className="about-page">
      <Reveal>
        <section className="page-hero">
          <span className="section-label">GET TO KNOW US</span>
          <h1>Learning That Moves You Forward</h1>
          <p>
            EduNova is a learning hub designed to make skill development
            accessible, engaging, and meaningful.
          </p>
        </section>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <section className="mission-section">
        <Reveal>
          <motion.div
             className="mission-card"
              whileHover={
               shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }
            }
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             >
            <Target size={34} />
            <h3>Our Mission</h3>
            <p>
              To encourage continuous learning and help learners build
              practical skills for a changing world.
            </p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
           className="mission-card"
           whileHover={
            shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }
           }
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Lightbulb size={34} />
            <h3>Our Vision</h3>
            <p>
              To create a welcoming learning environment where curiosity
              leads to confidence and growth.
            </p>
        </motion.div>
        </Reveal>
      </section>

      <section className="features-section">
        <Reveal>
          <div className="section-heading centered">
            <span className="section-label">WHY EDUNOVA</span>
            <h2>A Better Way to Grow</h2>
            <p>Everything begins with the willingness to learn.</p>
          </div>
        </Reveal>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={index} delay={index * 0.12}>
                <motion.article
                 className="feature-card"
                  whileHover={
                  shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }
                 }
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
               >
                  <div className="feature-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default About;
