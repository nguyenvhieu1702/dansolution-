import FeaturedProject from "@/components/featuredproject";
import Image from "next/image";
const Project = () => {
    return (
        <div className="flex flex-col">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                            src="/images/banner-dan.jpg"
                            alt="Contact Background"
                            fill
                            className="object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl md:text-6xl font-bold">Dự án</h1>
                        </div>
                    </div>
        
                    <div className="px-4 md:px-20 py-10 bg-white">
                        <FeaturedProject/>
                    
                    </div>
                </div>
        


    )
    
}
export default Project;