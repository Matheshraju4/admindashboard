import React from "react";

const GeneraldashboardUi = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-4 md:px-8 shadow">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">{title}</h1>

        <p className="font- text-slate-600">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default GeneraldashboardUi;
