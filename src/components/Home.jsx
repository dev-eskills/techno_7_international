import BlogSection from "./Blog";
import ConnectForm from "./ConnectForm";
import CoursesPreview from "./CoursesPreview";
import Features from "./Features";
import Hero from "./Hero";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import WhyBest from "./WhyBest";

// Create this component to hold your landing page content
export const Home = () => (
    <>
        <Hero />
        <Stats />
        <WhyBest />
        <CoursesPreview />                                         
        <Features />
        <Testimonials />
        {/* <BlogSection /> */}
        {/* <ConnectForm /> */}
    </>
);