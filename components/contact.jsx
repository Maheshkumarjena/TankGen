import React from 'react'

const Contact = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
    <div class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
        id="contact-form">
        <div class="md:w-1/3 w-full">
            <h1 class="text-4xl text-gray-100 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
            <p class="leading-relaxed text-xl text-gray-200">
                We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
                us.
                <br/>
                You can also email us
                   <a href="https://veilmail.io/e/FkKh7o" class="font-medium text-blue-600 hover:underline">click here to reveal our protected email address</a>
    
            </p>
            <p class="leading-relaxed text-xl text-gray-200 mt-8">
                Connect with us on social media:
            </p>
            <span class="inline-flex mt-6 justify-center sm:justify-start">
                <a class="text-gray-100 hover:text-gray-200" target="_blank" href="https://twitter.com/example">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-6 h-6" viewBox="0 0 24 24">
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                        </path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-100 hover:text-gray-200" href="https://www.instagram.com/example/"
                    target="_blank">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
            </span>
        </div>
        <div class="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 class="text-4xl text-gray-100 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
          <form action="https://fabform.io/f/{form-id}" method="post">
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="name" class="leading-7 py-4 text-lg text-gray-200">Your Name</label>
                        <input type="text" id="name" name="name" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-200 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="email" class="leading-7 py-4 text-lg text-gray-200">Your Email</label>
                        <input type="email" id="email" name="email" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-200 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="message" class="leading-7 py-4 text-lg text-gray-200">Your Message</label>
                        <textarea id="message" name="message" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <button type="submit"
                        class="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                        Send Message ✉
                    </button>
                </div>
                  <p class="leading-relaxed text-xl text-gray-200 mt-8">
                We use VeilMail.io to <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://veilmail.io">hide email address from spammers</a>
            </p>
            </form>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact