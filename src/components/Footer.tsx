import { HiOutlineGlobeAlt, HiOutlineHeart, HiCode } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { config } from "../config";

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  const socialIcons = {
    twitter: AiOutlineTwitter,
    github: FaGithub,
    linkedin: FaLinkedin,
    facebook: FaFacebook,
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 dark:bg-slate-950 text-gray-300 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center space-x-2 text-2xl font-bold text-white mb-4"
            >
              <span className="text-3xl">{config.brand.logo}</span>
              <span>{config.brand.name}</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              {config.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {Object.entries(config.footer.social).map(([platform, url]) => {
                const Icon =
                  socialIcons[platform as keyof typeof socialIcons] ||
                  HiOutlineGlobeAlt;
                return (
                  <a
                    key={platform}
                    href={url}
                    className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-lg transition-colors"
                    aria-label={platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {config.footer.links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {config.footer.links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {config.footer.links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {config.footer.links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {config.footer.copyright}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <HiOutlineHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <HiCode className="w-4 h-4 text-indigo-500" />
              <span>by developers, for developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
