import React from 'react';
import hr from "../assets/hr.png"

const teamData = [
  {
    name: 'Sophie Parker',
    role: 'HR Executive',
    image: hr,
    bgColor: 'bg-red-200',
  },
  {
    name: 'Alex Johnson',
    role: 'Project Manager',
    image: hr,
    bgColor: 'bg-blue-200',
  },
  {
    name: 'Alex Johnson',
    role: 'Team Leader',
    image: hr,
    bgColor: 'bg-green-200',
  },
  {
    name: 'Alex Johnson',
    role: 'HR Executive',
    image: hr,
    bgColor: 'bg-yellow-200',
  },
];

function TeamSection() {
  return (
    <div
      className="mx-auto mt-[30px] w-[1662px] h-[688px] opacity-100 bg-white"
      style={{ overflow: 'hidden' }}
    >
      <h2 className="text-center text-4xl font-bold text-black">
        Meet The Visionaries Behind{' '} <br />
        <span className="text-[#157B6C]">TechDevise</span>
      </h2>
      <p className='text text-center semibold'>We're a thriving ecosystem of creators, builders, and forward-thinkers shaping digital technology's future.</p>

      {/* Team Members */}
      <div className="flex justify-between mt-12">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`w-[370px] h-[480px] ${member.bgColor} rounded-md relative`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-4 text-center">
              <h3 className="text-xl font-bold text-black">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
