import React from "react";

type Props = {};

const CreateReport = (props: Props) => {
  return (
    <div className="my-11">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="Course">Course</label>
          <input type="text" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Course">Year</label>
          <input type="text" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Course">Lecturer</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default CreateReport;
