import React from "react";

type Props = {};

const CreateReport = (props: Props) => {
  return (
    <div className="my-11">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="Course">Course Code</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Course">Course Title</label>
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

        <div className="flex flex-col">
          <label htmlFor="Course">Comment</label>
          <textarea name="comment" id="comment"></textarea>
        </div>
        
      </div>
      <div className="text-center">
      <button className="inline-flex items-center px-6 py-2 my-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </div>
    </div>
  );
};

export default CreateReport;
