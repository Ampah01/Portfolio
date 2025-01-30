import React from 'react';

const Education = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Education & Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Education</h3>
        <div className="mt-2">
          <p className="font-bold text-gray-700">Kwame Nkrumah University of Science and Technology (KNUST)</p>
          <p className="text-gray-700">Bachelor of Arts in Geography and Rural Development with a Minor in Social Work</p>
          <p className="text-gray-600">Graduated: 2022</p>
          
        </div>
      </div>

      {/* National Service Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 ">National Service</h3>
        <div className="mt-2">
          <p className="font-bold text-gray-700">Ghana Cocoa Board (QUALITY CONTROL) - Obuasi</p>
          <p className="text-gray-700">National Service Personnel (Personal Assistant)</p>
          <p className="text-gray-600">November 2022 - September 2023</p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Work Experience</h3>
        <div className="mt-2">
          <p className="font-bold text-gray-700">Ghana Cocoa Board (COCOBOD) - Obuasi</p>
          <p className="text-gray-700">Intern (Personal Assistant)</p>
          <p className="text-gray-600">October 2020 - November 2020</p>
        </div>

        <div className="mt-4">
          <p className="font-bold text-gray-700">Ghana Cocoa Board (COCOBOD) - Obuasi</p>
          <p className="text-gray-700">Volunteer (Part-time)</p>
          <p className="text-gray-600">January 2024 - Current</p>
        </div>
        
        <div className="mt-4">
          <p className="font-bold text-gray-700">Uhall Library</p>
          <p className="text-gray-700">Volunteer</p>
          <p className="text-gray-600">March 2024 - Current</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
