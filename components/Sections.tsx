import React from "react";

const Sections = ({ label, content }: { label: string; content: string }) => {
  return (
    <>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">{label}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your {label} is <strong>{content}</strong>
        </p>
        <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
          Change
        </button>
      </div>
    </>
  );
};

export default Sections;
