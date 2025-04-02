import React from 'react';
import chatbotimage from '../assets/chatbotimage.png';

const TechDeviseAutomation = () => {
    return (
        <div className="w-[1678px] h-[696px] bg-[#F5F5F5] opacity-100 rounded-xl flex items-center justify-center text-center p-10 ml-28 mt-10">
          <div className="w-1/2 pr-10 text-left leading-relaxed">
    <h2 className="text-[40px] font-extrabold font-Montserrat text-black mb-10">
        Tech Devise: Developing User <br /> friendly and Flexible automation
    </h2>
    <p className="text-gray-700">
        <strong>At Tech Devise,</strong> we have dedicated professionals who are specialists in Robot and Control systems.
        We offer you Robot Based Control system to our clients. Be it the automotive industry, or consumer goods,
        we are ready to customize our product and offer you the best that will amaze you for sure. Whether you
        already have an automation system ready and just needs to update / modify, or you need a completely new
        and customized control system, we are always ready for the challenge. We are capable enough to build new
        and customized Robot Systems or we can build systems utilizing your old Robots to meet your requirement in
        any sector...
    </p>
</div>

            <div className="w-1/2 flex justify-center">
                <img
                    src={chatbotimage}
                    alt="Automation Robot"
                    className="w-[624px] h-[624px]"
                />
            </div>
        </div>
    );
};

export default TechDeviseAutomation;
