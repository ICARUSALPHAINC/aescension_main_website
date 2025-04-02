import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-[#2a2d3e] text-white text-sm px-6 py-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 mb-6">
        <nav className="flex flex-wrap justify-center gap-6 font-semibold">
          <a href="#">Careers</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
          <a href="#">Press</a>
          <a href="#">API</a>
        </nav>
        <div className="flex items-center gap-2">
          🌐 <span className="font-medium">English (US)</span>
        </div>
      </div>

      <hr className="border-gray-600 mb-6" />

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-4">
          <img
            src="./AESCENSION.png"
            alt="Company Logo"
            className="w-32 h-auto object-contain"
          />
          <p className="text-gray-400 max-w-md">
            ©2025 ICARUS Entertainment, Inc. All trademarks referenced herein
            are the property of their respective owners.{" "}
            <a href="#" className="underline">
              Do not sell or share my personal information
            </a>
          </p>

          <div className="flex flex-wrap gap-4 text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-xs rounded">
              ESRB
            </div>
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-xs rounded">
              TEEN
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <div className="flex gap-4 mt-2 text-white">
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                <TwitterIcon fontSize="small" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                <FacebookIcon fontSize="small" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                <RedditIcon fontSize="small" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                <InstagramIcon fontSize="small" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                <YouTubeIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
