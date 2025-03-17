import React from 'react';
import mask from "../assets/mask.png"

function OpenPositions() {
  return (
    <div className="mx-auto w-[1678px] h-[650px] opacity-100 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-black mb-8 mt-10">
        Open Positions
      </h2>
      <p className='text text-center font-semibold'>If you're someone who thrives in a fast-paced, collaborative, and constantly evolving environment, then <br /> Apptunix is the perfect place to accelerate your career.</p>

      {/* Main Container */}
      <div className="flex">
        <div className="w-1/3 p-8 border-r">
          <h3 className="text-xl font-bold mb-4">Function</h3>
          <ul className="space-y-4">
            {[
              'Front end Designer',
              'UI/UX Designer',
              'PHP',
              'SEO Executive',
              'BDE',
              'Content Writer',
              'Laravel Developer',
            ].map((job, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-[#157B6C] rounded-sm mr-4"
                />
                <span className="text-lg text-gray-700">{job}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 p-8 flex items-center justify-center">
          <div className="flex items-center">
            <img
              src={mask} 
              alt="Closed"
              className="w-[300px] h-auto mr-8"
            />
            <p className="text-xl font-semibold font-Montserrat text-[#157B6C] tracking-tight leading-7">
              No vacancies available at the moment. Stay <br /> tuned for future
              opportunities!
            </p>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 py-4 px-8 flex items-center">
        <span className="text-lg font-bold mr-4">Experience</span>
        <div className="flex space-x-4">
          {['Fresher', '1 to 3 Years', '3 to 6 Years'].map((exp, index) => (
            <button
              key={index}
              className="border border-green-500 text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition"
            >
              {exp}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenPositions;
