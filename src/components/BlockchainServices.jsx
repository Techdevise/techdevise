import React from 'react';
import { ChevronLeft, ChevronRight, Layers, CuboidIcon as Cube, Box } from "lucide-react"
import "../styles/components/BlockchainServices.css";
import blockchain from '../assets/blockchain.png'
import blockchainicon from '../assets/blockchainicon.png'
import layericon from '../assets/layericon.png'
import blockchaindotcom from '../assets/blockchaindotcom.png'

const BlockchainServices = () => {
  return (
    <div className="bg-[#061611] text-white p-8 md:p-16 h-[940px]">
      <div className="w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 className="text-[48px] md:text-5xl font-extrabold font-Montserrat w-[762px] mb-10 mt-10">
              Our Blockchain
              <br />
              Development <span className="text-[#4fbfa5]">Services</span>
            </h1>
            <p className="mt-4 text-sm md:text-base ml-0">
              <span className="font-semibold">Tech Devise</span> provides a full suite of blockchain development
              services to help <br /> businesses harness the full potential of the technology and stay ahead in today's<br />
              competitive web3 era.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <BlockchainIllustration />
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[-230px] m-auto gap-4">
          {/* Card 1 */}
          <div className="bg-[#0c2018] rounded-[26px] p-6 border border-[#163029] h-[490px] mb-auto">
            <div className="w-[100px] h-[100px] bg-[#157B6C] w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed border-white transition-all duration-300 mb-6">
            <img src={blockchainicon} alt="blockchain" className="blockchain-img" />
              {/* <Cube className="" /> */}
            </div>
            <h3 className="text-xl font-bold mb-4">
              Blockchain Consultation
              <br />& Integration
            </h3>
            <p className="text-[16px] text-gray-300 w-[472px] font-Montserrat mt-5">
            From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successful blockchain integration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c2018] rounded-[26px] p-6 border border-[#163029]">
            <div className="w-[100px] h-[100px] bg-[#157B6C] w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed border-white transition-all duration-300 mb-6">
            <img src={layericon} alt="blockchain" className="blockchain-img w-[46px] h-[28px]" />
              {/* <Layers className="text-[#4fbfa5] w-8 h-8" /> */}
            </div>
            <h3 className="text-xl font-bold mb-4">
              Layer 2
              <br />
              Development
            </h3>
            <p className="text-[16px] w-[472px] mt-5 font-Montserrat text-gray-300">
            We specialize in creating innovative Layer 2 solutions that address the limitations of base-layer blockchains. Our team develops robust Layer 2 protocols, such as rollups and state channels, that seamlessly integrate with existing blockchain networks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="blockchaindotcom bg-[#0c2018] rounded-[26px] p-6 border border-[#163029]">
            <div className="w-[100px] h-[100px] bg-[#157B6C] w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed border-white transition-all duration-300 mb-6">
            <img src={blockchaindotcom} alt="blockchain" className="w-[46px] h-[28px]" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Blockchain Protocol
              <br />
              Development
            </h3>
            <p className="text-[16px] w-[472px] mt-5 font-Montserrat text-gray-300">
            Our expertise spans the entire protocol development lifecycle, from consensus mechanism selection to governance structures. We specialize in designing and implementing scalable and customizable blockchain protocols tailored to your specific requirements.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-8 gap-2">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-[#0a1a14]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#4fbfa5] flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Custom blockchain network illustration component
const BlockchainIllustration = () => {
  return (
    <div className="blockchain-wrapper">
    <img src={blockchain} alt="blockchain" className="blockchain-img1" />
</div>

  )
}

export default BlockchainServices

