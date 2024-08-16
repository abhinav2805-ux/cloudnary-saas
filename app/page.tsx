// pages/index.js
import Head from 'next/head'
// components/Navbar.js
import Link from 'next/link'

 function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
            <a className="text-2xl font-bold text-blue-600">MediaShrink</a>
          
          <div className="space-x-6">
            <a className="text-gray-600 hover:text-blue-600">Features</a>
            <a className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href='/sign-in' className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">sign in</a>
            <a href='/sign-up' className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
// components/Footer.js


function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Blog</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-blue-600">Documentation</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Support</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2024 MediaShrink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MediaShrink - Video Compression & Image Resizing for Social Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Optimize Your Media for Social Success</h1>
          <p className="text-xl mb-8">Compress videos and resize images instantly for all social media platforms</p>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started Free</a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'Video Compression', description: 'Reduce file size without compromising quality' },
    { title: 'Image Resizing', description: 'Perfect dimensions for every social platform' },
    { title: 'Batch Processing', description: 'Save time by optimizing multiple files at once' },
    { title: 'Cloud Storage', description: 'Access your optimized media from anywhere' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



function CallToAction() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Social Media Content?</h2>
        <p className="text-xl mb-8">Join thousands of creators and businesses using MediaShrink</p>
        <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300">Start Your Free Trial</a>
      </div>
    </section>
  )
}