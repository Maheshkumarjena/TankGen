import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="absolute top-1">
      <Image
        className="object-cover inset-0 z-[2] opacity-[0.2] w-full h-[120vh] rounded-lg shadow-md dark:shadow-lg "
        src="/Images/en.jpg"
        width={50}
        height={20}
        alt="Picture of the author"
      />{" "}
    </div>
  );
}

export default Logo