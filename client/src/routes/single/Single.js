
import Single from "../../components/posts/Posts";
import HeroImage from '../../components/hero/HeroImage'
import "./Single.css";

export default function Singl() {
  return (
   
    <div className="single">
         <HeroImage heading='BLOG' text='Keep yourself updated with the latest news !! ' />
         <Single />

    </div>
  );
}