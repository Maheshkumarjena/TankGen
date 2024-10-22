import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="fixed top-[-20px] left-3">
      <Image
        className="object-cover inset-0 z-[2] opacity-[3]  rounded-lg shadow-md dark:shadow-lg "
        src="/tankgenLogo.jpg"
        width={190}
        height={80}
        alt="Picture of the author"
      />{" "}
    </div>
  );
}

export default Logo