import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CommunitySection = () => {
    
    return (
        <div
            className="
            bg-gray-400
            w-screen h-[8rem] lg:h-[12rem]
            flex flex-col items-center justify-center"
        >
            <p
                className="text-4xl lg:text-5xl text-center w-4/5 lg:w-1/2"
            >
                Connect
            </p>

            <div className="flex justify-center items-center gap-4 mt-2 w-4/5 lg:w-1/2">
                <div className="flex gap-4 mt-2 text-white">
                    <div className="w-9 h-9 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                        <TwitterIcon fontSize="small" />
                    </div>
                    <div className="w-9 h-9 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                        <FacebookIcon fontSize="small" />
                    </div>
                    <div className="w-9 h-9 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                        <RedditIcon fontSize="small" />
                    </div>
                    <div className="w-9 h-9 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                        <InstagramIcon fontSize="small" />
                    </div>
                    <div className="w-9 h-9 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition">
                        <YouTubeIcon fontSize="small" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommunitySection