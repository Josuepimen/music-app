import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaDiscord,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#fdfdfd] px-6 py-10 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#383838] pt-6">
        {/* Column 1: About */}
        <div>
          <h4 className="text-lg font-extrabold tracking-widest mb-4">ABOUT</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="!text-white">About Noxis</a></li>
            <li><a href="#" className="!text-white">Careers</a></li>
            <li><a href="#" className="!text-white">Contact Us</a></li>
            <li><a href="#" className="!text-white">News</a></li>
            <li><a href="#" className="!text-white">Press</a></li>
            <li><a href="#" className="!text-white">Terms of Service</a></li>
            <li><a href="#" className="!text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 2: Our Brands */}
        <div>
          <h4 className="text-lg font-extrabold tracking-widest mb-4">OUR BRANDS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="!text-white">Uncaged</a></li>
            <li><a href="#" className="!text-white">Instinct</a></li>
            <li><a href="#" className="!text-white">Silk</a></li>
          </ul>
        </div>

        {/* Column 3: Programming & Events */}
        <div>
          <h4 className="text-lg font-extrabold tracking-widest mb-4">PROGRAMMING</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="#" className="!text-white">MonstercatTV</a></li>
            <li><a href="#" className="!text-white">Call of the Wild</a></li>
            <li><a href="#" className="!text-white">Silk Showcase</a></li>
          </ul>
          <h4 className="text-lg font-extrabold tracking-widest mb-4">EVENTS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="!text-white">Monstercat Events Experience</a></li>
            <li><a href="#" className="!text-white">Upcoming Events</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div>
          <h4 className="text-lg font-extrabold tracking-widest mb-4">NOXIS NEWS</h4>
          <p className="text-sm mb-4">
            Don't miss a thing, stay up to date with the latest news from us.
          </p>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full pr-10 border-0 border-b border-[#38383866] focus:outline-none focus:border-[#38383866] bg-transparent text-[#fdfdfd] placeholder-[#fdfdfd]/50"
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 !text-white">
              ➤
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="!text-white"><FaFacebookF /></a>
            <a href="#" className="!text-white"><FaTwitter /></a>
            <a href="#" className="!text-white"><FaInstagram /></a>
            <a href="#" className="!text-white"><FaYoutube /></a>
            <a href="#" className="!text-white"><FaSpotify /></a>
            <a href="#" className="!text-white"><FaDiscord /></a>
            <a href="#" className="!text-white"><FaTwitch /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#383838] mt-10 pt-6 text-sm text-[#fdfdfd]/60 text-center">
        <p>2011 - {new Date().getFullYear()} © Noxis, All Rights Reserved</p>
        <p className="mt-2">
          We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which our Vancouver HQ stands.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
