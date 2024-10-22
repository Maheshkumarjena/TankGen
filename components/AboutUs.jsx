import React from 'react'
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div id='about'>
      <section class="">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-200 sm:text-4xl">
                About Us
              </h2>
              <p class="mt-4 text-gray-200 text-lg">
                It is a platform that unlocks personal design or customisable .
                Our venture includes personalised suggestions, customisable
                designs also proving 6 months warranty in colour. It empowers
                individuals to discover their uniqueness in this platform,
                self-expression , and boosting confidence.
              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <Image
                className="object-cover inset-0  w-full h-auto rounded-lg shadow-md dark:shadow-lg "
                src="/tankgen.jpg"
                width={500}
                height={700}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs