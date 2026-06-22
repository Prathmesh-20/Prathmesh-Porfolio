import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const FindMeOnline = () => {
  return (
    <section className="py-16 bg-slate-950 text-white">
     <div className="flex justify-center gap-6">
  <a href="https://github.com/Prathmesh-20">
    <FaGithub className="text-4xl hover:text-cyan-400 transition" />
  </a>

  <a href="https://www.linkedin.com/in/prathmesh2010/">
    <FaLinkedin className="text-4xl hover:text-cyan-400 transition" />
  </a>

  <a href="https://wa.me/6354136921">
    <FaWhatsapp className="text-4xl hover:text-cyan-400 transition" />
  </a>

  <a href="mailto:bhagwatp853@gmail.com">
    <FaEnvelope className="text-4xl hover:text-cyan-400 transition" />
  </a>
</div>
    </section>
  );
};

export default FindMeOnline;