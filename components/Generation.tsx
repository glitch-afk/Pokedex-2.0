import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { genData } from "../pages/index";

const Generation = ({ GenData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mx-10 mt-4 mb-12">
      {GenData.map((g: any) => (
        <Link
          href={`/generation/[id]`}
          as={`/generation/${g.name}`}
          key={g.name}
          passHref
        >
          <a className="flex flex-col  items-center justify-center relative">
            <div className="w-full h-full overflow-hidden">
              <Image
                className="bg_img gen_card rounded-lg"
                src={`/assets/img/${g.name}.avif`}
                width={500}
                height={250}
                alt="gen-1"
              />
            </div>
            <div className="absolute -top-4 -left-5 font-semibold text-lg rounded-tl-lg rounded-br-lg uppercase py-3 px-8 bg-white text-[#4a4a4a]">
              {g.name}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Generation;
