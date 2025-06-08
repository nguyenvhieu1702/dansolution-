import Partner from "@/components/partner";
import Project from "@/components/featuredproject";
import Image from "next/image";
import FeaturedProject from "@/components/featuredproject";
import CountBanner from "@/components/countbanner";
import Testimonials from "@/components/testimonial";
import BannerContact from "@/components/banner-contact";
import MainBanner from "@/components/mainbanner";
import Service from "@/components/service";


export default function Home() {
  return (
    <div>
      <MainBanner/>
      <Service/>
      <Partner/>
      <FeaturedProject/>
      <CountBanner/>
      <Testimonials/>
      <BannerContact/>

    </div>

  );
}
