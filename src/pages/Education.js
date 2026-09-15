import React from "react";

function Education() {
  return (
    <section id="education" className="py-6 px-6 bg-[rgb(110,7,243)] text-[#FFFFFF]">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-eurostile text-[40px] font-extrabold">
                Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-7 rounded-2xl border shadow-sm">
                    <p className="text-[#6E07F3] font-semibold">
                        2022 – 2024
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-[#141c3a]">
                        Master of Computer Applications
                    </h3>
                    <p className="text-gray-600 mt-2">
                        St Joseph Engineering College
                    </p>
                    <p className="mt-3 font-semibold text-[#141c3a]">
                        CGPA: 8.68 / 10
                    </p>
                </div>
                <div className="bg-white p-7 rounded-2xl border shadow-sm">
                    <p className="text-[#6E07F3] font-semibold">
                        2019 – 2022
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-[#141c3a]">
                        Bachelor of Science
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Vivekananda College
                    </p>
                    <p className="mt-3 font-semibold text-[#141c3a]">
                        82.32%
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Education;
