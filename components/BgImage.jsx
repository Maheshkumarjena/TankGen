import React from 'react'
import Image from 'next/image';
const BgImage = () => {
  return (
    <div className="bg-image absolute top-0 w-full">
      <Image
        className="object-cover inset-0 z-[2] opacity-[0.2] w-full h-[120vh] rounded-lg shadow-md dark:shadow-lg "
        src="/Images/tankgen.jpg"
        width={500}
        height={700}
        alt="Picture of the author"
      />
      <div class="opacity-gradient absolute inset-0 pointer-events-none"></div>
    </div>
  );
}

export default BgImage