import React, { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Complete Cybersecurity Course - Udemy",
    image: "https://i.imgur.com/8NKdOZj.png",
    date: "Jan 2024",
    provider: "Udemy",
  },
  {
    id: 2,
    title: "React - The Complete Guide",
    image: "https://i.imgur.com/0zvWlDx.png",
    date: "Dec 2023",
    provider: "Udemy",
  },
  {
    id: 3,
    title: "Ethical Hacking Bootcamp",
    image: "https://i.imgur.com/k6vOxWx.png",
    date: "Feb 2024",
    provider: "TryHackMe",
  },
];

export default function Certificates() {
  const [modal, setModal] = useState(null);

  return (
    <section
      id="certificates"
      className="py-24"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-12 text-cyberGreen"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map(({ id, title, image, date, provider }) => (
          <div
            key={id}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg border-4 border-cyberPink"
            onClick={() => setModal(id)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setModal(id)}
            role="button"
            aria-label={`View certificate: ${title}`}
          >
            <img src={image} alt={title} className="w-full h-auto" />
            <div className="p-4 bg-codeBlue text-gray-300">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm">
                {provider} &mdash; {date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="bg-codeBlue rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificates.find((c) => c.id === modal).image}
              alt={certificates.find((c) => c.id === modal).title}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-4 text-cyberGreen text-2xl font-bold">
              {certificates.find((c) => c.id === modal).title}
            </h3>
            <p className="text-gray-300 mt-1">
              {certificates.find((c) => c.id === modal).provider} —{" "}
              {certificates.find((c) => c.id === modal).date}
            </p>
            <button
              onClick={() => setModal(null)}
              className="mt-6 bg-cyberPink hover:bg-pink-600 text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
