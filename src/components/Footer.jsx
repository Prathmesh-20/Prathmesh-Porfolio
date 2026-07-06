import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-gray-400 text-center md:text-left">
          © 2026 <span className="text-cyan-400 font-semibold">Prathmesh Bhagwat</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bhagwatp853@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;