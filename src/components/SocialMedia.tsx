import "../styles/social.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

export const SocialMedia = () => {
  return (
    <section className="fixed z-50 top-1/4">
      <ul className="commic-text flex flex-col gap-2 text-xl">
        <li className="social-item flex justify-end items-center pr-6 pl-5 py-1 cursor-pointer border-2">
          <div className="flex items-center gap-5">
            <span>Facebook</span>
            <FaFacebook className="text-3xl font-bold" />
          </div>
        </li>
        <li className="social-item flex justify-end items-center pr-6 pl-5 py-1 cursor-pointer border-2">
          <div className="flex items-center gap-5">
            <span>Instagram</span>
            <FaInstagramSquare className="text-3xl font-bold" />
          </div>
        </li>
        <li className="social-item flex justify-end items-center pr-6 pl-5 py-1 cursor-pointer border-2">
          <div className="flex items-center gap-5">
            <span>Whatsapp</span>
            <RiWhatsappFill className="text-3xl font-bold" />
          </div>
        </li>
        <li className="social-item flex justify-end items-center pr-6 pl-5 py-1 cursor-pointer border-2">
          <div className="flex items-center gap-5">
            <span>X</span>
            <FaSquareXTwitter className="text-3xl font-bold" />
          </div>
        </li>
      </ul>
    </section>
  );
};
