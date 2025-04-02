
import React from 'react';
import Navbar from '../layout/Navbar';
import ContentManagementSystem from '../components/ContentManagementSystem';
import WorkModules from '../components/WorkModules';
import Automation from '../components/Automation';
import TechDeviseAutomation from '../components/TechDeviseAutomation';
import ECommerceServices from '../components/ECommerceServices';
import PythonExpertSection from '../components/PythonExpertSection';
import ChooseUs from '../components/ChooseUs';
import ArtificialIntelligence from '../components/ArtificialIntelligence';


function WebsiteDevelopment() {
    return (
        <div>
            <Navbar style={{ backgroundColor: 'white', color: 'black' }} />

           
            <div className="relative text-white py-12 px-6 md:px-20">
                {/* <Footer /> */}

            </div>
            <ContentManagementSystem />
            <WorkModules />
            <ECommerceServices />
            <Automation />
            <TechDeviseAutomation />
            <PythonExpertSection />
            <ChooseUs />
            <ArtificialIntelligence />
         
        </div>
    );
}

export default WebsiteDevelopment;