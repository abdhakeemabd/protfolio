import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <button className='cursor-pointer hover:text-white transition-colors'>Terms & Conditions</button>
        <p>|</p>
        <button className='cursor-pointer hover:text-white transition-colors'>Privacy Policy</button>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a key={index} className="hover:scale-110 transition-all" href={social.href} target='_blank' rel='noopener noreferrer'>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2026 <button className='cursor-pointer hover:text-white transition-colors'>Hakeem</button>. All rights reserved.</p>
    </section>
  );
};

export default Footer;