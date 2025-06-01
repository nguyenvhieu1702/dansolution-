import Partner from "@/component/partner";
import Project from "@/component/featuredproject";
import Image from "next/image";
import FeaturedProject from "@/component/featuredproject";
import CountBanner from "@/component/countbanner";
import Testimonials from "@/component/testimonial";
import BannerContact from "@/component/banner-contact";
import MainBanner from "@/component/mainbanner";
import Service from "@/component/service";


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
