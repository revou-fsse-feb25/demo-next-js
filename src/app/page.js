"use client";

// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Head component for metadata */}
      <Head>
        <title>My Next.js Homepage</title>
        <meta name="description" content="A simple Next.js homepage with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-100">MyWebsite</span>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <Link href="#hero" className="px-3 py-2 text-gray-100 font-medium rounded-md bg-gray-700">
                    Home
                  </Link>
                  <Link href="#features" className="px-3 py-2 text-gray-300 font-medium rounded-md hover:bg-gray-700 hover:text-white">
                    Features
                  </Link>
                  <Link href="#about" className="px-3 py-2 text-gray-300 font-medium rounded-md hover:bg-gray-700 hover:text-white">
                    About
                  </Link>
                  <Link href="#contact" className="px-3 py-2 text-gray-300 font-medium rounded-md hover:bg-gray-700 hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Full viewport height */}
        <section id="hero" className="h-screen bg-gray-800 flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-indigo-400">My Next.js Website</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A clean, simple homepage built with Next.js and styled with Tailwind CSS.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-gray-700 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section - Full viewport height */}
        <section id="features" className="h-screen bg-gray-900 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">FEATURES</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Everything you need to get started
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque.
              </p>
            </div>

            <div className="mt-16">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-white">Fast Performance</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Optimized for speed and efficiency, providing a seamless user experience.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-white">Modern Design</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Clean, responsive layouts that look great on any device or screen size.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-white">Easy Integration</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Seamlessly connect with APIs and third-party services for extended functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Full viewport height */}
        <section id="about" className="h-screen bg-gray-800 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">ABOUT US</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Our story and mission
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                We're dedicated to creating innovative solutions that help our customers succeed in today's digital landscape.
              </p>
              <div className="mt-10 flex justify-center">
                <div className="prose prose-lg text-gray-300 max-w-3xl">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum at cursus aliquet. 
                    Curabitur in dolor eget ligula pulvinar fermentum. Nullam mattis tincidunt metus, sed fringilla turpis
                    pellentesque vitae. Sed auctor massa vel neque interdum, non elementum dui volutpat.
                  </p>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Donec sodales sapien ut metus convallis, eu pulvinar neque tincidunt. Nulla facilisi. 
                    Proin tempor interdum augue, nec iaculis enim interdum eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Full viewport height */}
        <section id="contact" className="h-screen bg-gray-900 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">CONTACT US</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Get in touch with our team
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="mt-10 flex justify-center">
                <div className="bg-gray-800 py-8 px-6 shadow rounded-lg sm:px-10 w-full max-w-md">
                  <form className="mb-0 space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 text-left">
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className="w-full border border-gray-700 bg-gray-700 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 text-left">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="w-full border border-gray-700 bg-gray-700 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 text-left">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          // rows="4"
                          required
                          className="w-full border border-gray-700 bg-gray-700 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link href="#about" className="text-base text-gray-300 hover:text-white">
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Blog
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Jobs
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Press
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Privacy
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Terms
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 My Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}