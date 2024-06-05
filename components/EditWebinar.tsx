import React from "react";
import GeneraldashboardUi from "./GeneraldashboardUi";
import Webinarform from "./Webinarform";

const EditWebinar = () => {
  return (
    <GeneraldashboardUi
      title="Edit Webinar Site"
      description="You can edit your webinar site"
    >
      <div className="mt-4 mb-4 bg-slate-100 rounded-lg p-4 pt-8 pl-6">
        <Webinarform />
      </div>
    </GeneraldashboardUi>
  );
};

export default EditWebinar;
