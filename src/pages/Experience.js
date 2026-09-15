import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-12 px-6 bg-[rgb(110,7,243)] text-[#FFFFFF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-eurostile text-[32px] sm:text-[42px] font-extrabold">
            Professional Experience
          </h2>
          <p className="font-serif text-[18px] sm:text-[20px] mt-4">
            My professional journey and development experience
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div>
              <h3 className="text-[25px] font-bold text-[#141c3a]">
                Software Developer
              </h3>
              <p className="text-[#6E07F3] font-semibold text-lg mt-1">
                ParroPhins Pvt. Ltd.
              </p>
              <p className="text-gray-500">
                Mangalore
              </p>
            </div>
            <div className="text-gray-500 font-medium">
              Oct 2024 – Jul 2026
            </div>
          </div>
          <div className="mt-8">
            <ul className="list-disc ml-5 space-y-3 text-gray-700 text-[17px]">
              <li>
                Developed and maintained web applications using
                PHP and CodeIgniter.
              </li>
              <li>
                Designed responsive interfaces using HTML, CSS,
                Bootstrap and JavaScript.
              </li>
              <li>
                Worked with MySQL for application data management.
              </li>
              <li>
                Developed reports and managed application modules.
              </li>
              <li>
                Fixed bugs and enhanced existing application
                functionality.
              </li>
              <li>
                Worked with AJAX and Postman for API-related
                development and testing.
              </li>
              <li>
                Used Git for version control and collaborated with
                team members to implement new features.
              </li>
            </ul>
          </div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "PHP",
              "CodeIgniter",
              "MySQL",
              "JavaScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "AJAX",
              "Postman",
              "Git",
            ].map((skill) => (
              <span key={skill}
                className="px-4 py-2 bg-[#f1e8ff] text-[#6E07F3] rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;