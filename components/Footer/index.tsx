import Logo from "../Logo";
import Sosmed from "./Sosmed";

import { dataFooter, sosmeds } from "./data";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-start pt-72 first-letter:h-full gap-20">
        <Logo />
        {dataFooter.map((item, index) => (
          <div key={index} className="">
            <h1 className="text-white text-lg font-semibold">{item.label}</h1>
            <ul className="text-white/75 text-sm mt-3">
              {item.items.map((v, index) => (
                <li
                  key={index}
                  className="mt-3 cursor-pointer hover:text-white"
                >
                  {v.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-20 mb-8">
        {sosmeds.map((item, index) => (
          <Sosmed key={index} icon={item.icon} link={item.link} />
        ))}
      </div>
      <p className="text-xs text-white/50 pb-10">Copyright © 2024 Indonesia Comic Con. All rights reserved.</p>
    </div>
  );
};

export default Footer;
