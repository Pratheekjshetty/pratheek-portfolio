import React from "react";
import salesforceCertificate from "../assets/certificates/Salesforce.pdf";
import uxCertificate from "../assets/certificates/UX-Design.pdf";
import securityCertificate from "../assets/certificates/IT-Security.pdf";
import webCertificate from "../assets/certificates/Web-Development.pdf";

function Certification() {
    return (
        <section id="certifications" className="py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-eurostile text-[38px] font-extrabold">
                    Certifications
                </h2>
                <p className="font-serif text-[18px] sm:text-[20px] text-gray-600 mt-4">
                    My professional certifications and achievements
                </p>
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    <div className="border rounded-xl p-5 text-left">
                        <a href={salesforceCertificate} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-bold">
                                Salesforce Developer Virtual Internship
                            </h3>
                        </a>
                        <p className="text-gray-500 mt-1">
                            SmartInternz
                        </p>
                    </div>
                    <div className="border rounded-xl p-5 text-left">
                        <a href={uxCertificate} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-bold">
                                UX Design Fundamentals
                            </h3>
                        </a>
                        <p className="text-gray-500 mt-1">
                            Coursera
                        </p>
                    </div>
                    <div className="border rounded-xl p-5 text-left">
                        <a href={securityCertificate} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-bold">
                                IT Security
                            </h3>
                        </a>
                        <p className="text-gray-500 mt-1">
                            Coursera
                        </p>
                    </div>
                    <div className="border rounded-xl p-5 text-left">
                        <a href={webCertificate} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-bold">
                                Introduction to Web Development
                            </h3>
                        </a>
                        <p className="text-gray-500 mt-1">
                            Coursera
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Certification;