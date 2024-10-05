'use client'
import Image from "next/image";
//import React from "react";



export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="heroText">
          <h1>Tribute to Sir Hamzah</h1>
          <p>An Inspirational Mentor and Full-Stack Developer</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about flex items-center justify-between p-16 bg-gray-100">
        {/* Text about Sir Hamzah */}
        <div className="aboutText w-1/2 pr-8 text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Sir Hamzah</h2>
          <p className="text-lg text-gray-700 leading-7">
            Sir Hamzah has been teaching and mentoring students for many years.
            His journey from an educator to a successful full-stack developer has been
            truly inspirational for all of us. He is currently working as a freelancer,
            delivering remarkable projects and helping students achieve their dreams.
          </p>
        </div>

        {/* Sir Hamzah's Picture */}
        <div className="aboutImage w-1/2 flex justify-end">
          <Image
            src="/Screenshot (347).png"
            alt="Sir Hamzah"
            width={300} 
            height={400}
            className="rounded-lg border-4 border-gray-300 shadow-lg" // Add Tailwind classes for styling
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements p-16 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-8">Achievements & Projects</h2>
        <div className="projectGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="projectCard bg-white p-4 rounded shadow">
            <h3 className="font-bold">Full-Stack Web Development</h3>
            <p>Guided numerous students to master full-stack development.</p>
          </div>
          <div className="projectCard bg-white p-4 rounded shadow">
            <h3 className="font-bold">Freelancing Success</h3>
            <p>Became a successful freelancer, delivering high-quality projects across industries.</p>
          </div>

          {/* LinkedIn Profile Link */}
          <div className="projectCard bg-white p-4 rounded shadow">
            <h3 className="font-bold">LinkedIn Profile</h3>
            <p>Connect with Sir Hamzah on LinkedIn for more updates.</p>
            <a
              href="https://www.linkedin.com/in/webdeveloper-react-jamstack-expert/" /* Replace this with the actual LinkedIn URL */
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="prayers p-16 bg-gray-300">
  <h2 className="text-3xl font-semibold text-center mb-8">Prayers for Sir Hamzah🤲</h2>
  <p>&quot;May you continue to inspire and guide your students with your wisdom&quot;👍</p>
  <p>&quot;May success follow you in all your endeavors&quot;💕</p>
  <p>&quot;May you find happiness and fulfillment in your teaching journey&quot;✨</p>
  <p>&quot;May your projects be fruitful and bring you joy&quot;🥰</p>
  <p>&quot;May you achieve all your dreams and aspirations&quot;🎉</p>
  </section>




      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved. Teacher's Day Tribute website to my favorite mentor by Yemna Mehmood.
        </p>
      </footer>
      

    </div>
  );
}
