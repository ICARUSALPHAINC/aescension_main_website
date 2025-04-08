const VideoSection = ({ videoUrl }) => {
    return (
        <div className="
            w-screen h-[40rem] md:h-[25rem]
            flex flex-col md:flex-row-reverse md:gap-4 justify-center items-center
            bg-gray-300"
        >
            <div className="
                w-[22rem] md:w-[35rem]
                aspect-video"
            >
                <iframe 
                    className="w-full h-full"
                    src={videoUrl} 
                    title="video"
                />
            </div>

            <div className="
                flex flex-col items-center 
                w-[22rem] h-[20rem] md:w-[35rem]
             
                mt-[3rem] md:mt-[0rem]
                p-[1rem]"
            >
                <p className="
                    text-5xl text-center">
                    Endless Fun
                </p>

                <p className="
                    text-center md:text-left
                    mt-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
            </div>


        </div>
    )
}

export default VideoSection