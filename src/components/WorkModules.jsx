import React from 'react';

const WorkModules = () => {
    return (
        <div className="w-full h-auto bg-white opacity-100 rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4 ml-40">
                <strong>Content Management System</strong>
            </h2>
            <p className="mb-6 ml-40">
                Our team follows a very meticulous and precise procedure that allows us to meet the client requirements adequately
                within the deadline date. We take great pride in our module and the work ethic we possess.
            </p>
            <div className="flex">
                <div className="rotate-[90deg] text-gray-500 font-bold text-2xl flex items-center mr-10">
                    Our Work Modules
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="w-[412px] h-[400px] bg-blue-100 p-8 rounded-lg shadow-md">
                        <div className="text-blue-500 text-6xl">★</div>
                        <h3 className="font-bold mt-10">Review / Planning</h3>
                        <p className="text-sm mt-10">We work from the scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you make suggestions for you, discuss the way you want it work. Once we are done, you</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <div className="text-green-500 text-3xl">✔</div>
                        <h3 className="font-bold mt-10">Design</h3>
                        <p className="text-sm mt-10">Good design is necessary when it comes to CMS. We maintain a good quality in every stage Good design is absolutely necessary when it comes to CMS.We maintain a good quality in every single step of designing phase and ensure that you get a consistent result all the time. We do prefer.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                        <div className="text-yellow-500 text-3xl">⚙</div>
                        <h3 className="font-bold mt-10">Development</h3>
                        <p className="text-sm mt-10">The development process is long and complicated but rest assured we will deliver a well-developed, functional CMS The development process is long and complicated but you can rest assured that we will deliver a well-developed, fully functional CMS website to you. We will install your newly designed website.</p>
                    </div>
                    <div className="bg-pink-200 p-6 rounded-lg shadow-md">
                        <div className="text-pink-500 text-3xl">📄</div>
                        <h3 className="font-bold mt-10">Content Upload</h3>
                        <p className="text-sm mt-10">Since your new website is based on CMS, you will need content to get going. The first content uploaded is on us Since your new website is based on CMS, you will need content to get going. The first content upload is on us. We upload the first set of content on your website and check whether everything is already in place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkModules;
