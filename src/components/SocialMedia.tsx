import "../styles/social.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

export const SocialMedia = () => {
  return (
    <section className="fixed z-20 top-2/5">
      <ul className="commic-text flex flex-col gap-2 md:text-xl">
        <li className="social-item flex justify-end items-center pr-3 pl-5 py-1 cursor-pointer border-2">
          <a
            href="https://www.facebook.com/luis231968/"
            target="_blank"
            className="flex items-center gap-5"
          >
            Facebook
            <FaFacebook className="text-xl md:text-3xl font-bold" />
          </a>
        </li>
        <li className="social-item flex justify-end items-center pr-3 pl-5 py-1 cursor-pointer border-2">
          <a
            href="https://www.instagram.com/naodeawa/"
            target="_blank"
            className="flex items-center gap-5"
          >
            Instagram
            <FaInstagramSquare className="text-xl md:text-3xl font-bold" />
          </a>
        </li>
        <li className="social-item flex justify-end items-center pr-3 pl-5 py-1 cursor-pointer border-2">
          <a
            href="https://wa.me/7891200317"
            target="_blank"
            className="flex items-center gap-5"
          >
            Whatsapp
            <RiWhatsappFill className="text-xl md:text-3xl font-bold" />
          </a>
        </li>
        <li className="social-item flex justify-end items-center pr-3 pl-5 py-1 cursor-pointer border-2">
          <a
            href="https://x.com/ElNao28Pa?t=77xPobl7syInqV68wj56qw&s=08"
            target="_blank"
            className="flex items-center gap-5"
          >
            X
            <FaSquareXTwitter className="text-xl md:text-3xl font-bold" />
          </a>
        </li>
      </ul>
    </section>
  );
};
