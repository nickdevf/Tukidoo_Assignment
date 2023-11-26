import React, { useState } from "react";
import {FaChalkboardTeacher} from "react-icons/fa";
import { PiPresentationLight } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentVideo } from "react-icons/gr";

const TopNavbar = () => {
  const [activeTab, setActiveTab] = useState("Videos");

  const navbarItems = [
    { id: 1, label: "Classroom", icon: <FaChalkboardTeacher style={{ fontSize: "25px" }} /> },
    { id: 2, label: "Whiteboard", icon: <PiPresentationLight style={{ fontSize: "25px" }} />  },
    { id: 3, label: "Videos", icon: <GoVideo style={{ fontSize: "25px" }} />  },
    { id: 4, label: "Slide Show", icon: <HiOutlinePresentationChartBar style={{ fontSize: "25px" }} />  },
    { id: 5, label: "Documents", icon: <IoDocumentTextOutline style={{ fontSize: "25px" }} />  },
    { id: 6, label: "Doc.Cam", icon: <GrDocumentVideo style={{ fontSize: "25px" }} />  },
  ];

  return (
    <div className="px-1 py-2 flex items-center gap-1 rounded-[50px] bg-slate-200 mt-8">
      {navbarItems.map((item) => (
        <div
          className={`w-44 h-[100%] flex justify-center items-center rounded-[50px] gap-2 font-bold cursor-pointer  ${
            activeTab === `${item.label}` ? "bg-white py-2" : "bg-gray-200 text-gray-400"
          }`}
          onClick={() => {
            setActiveTab(`${item.label}`);
          }}
          key={item.id}
        >
          {item.icon}
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TopNavbar;
