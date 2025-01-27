import { Section } from "@/layout/Section"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Animation */}
      <Section yPadding="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/[0.02] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-900">
              Engineering Excellence Since 2020
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight animate-[fadeIn_1s_ease-in]">
              Innovating Engineering Solutions in Raipur
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Combining technical expertise with creative innovation to deliver cutting-edge solutions in engineering and technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="#about" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition-colors">

              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section with Hover Effects */}
      <Section yPadding="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full border border-gray-200">
              Our Services
            </span>
            <h2 className="text-4xl text-black font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering and technology solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-white/50 backdrop-blur rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-6 p-3 rounded-lg bg-gray-900/5 w-fit group-hover:bg-gray-900/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl text-black font-semibold mb-4 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Team with Modern Cards */}
      <Section yPadding="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full border border-gray-200">
              Leadership
            </span>
            <h2 className="text-4xl text-black font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driven by innovation and guided by experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-black font-semibold mb-2">{leader.name}</h3>
                  <p className="text-gray-900 mb-4">{leader.role}</p>
                  <p className="text-gray-600 text-sm">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section with Contact Cards */}
      <Section yPadding="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full border border-gray-200">
                Location
              </span>
              <h2 className="text-4xl text-black font-bold mb-4">Visit Our Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Raipur, Chhattisgarh
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-gray-900 text-white">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p>Raipur, Chhattisgarh, India</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p>+91 6232160066</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p>acs.ind@outlook.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action with Gradient */}
      <Section yPadding="py-24 my-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
           {" Let's collaborate to bring your engineering vision to life with our expertise and innovative solutions"}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all hover:scale-105"
          >
            Start Your Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Section>
    </div>
  )
}

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "AutoCAD Design",
    description: "Professional AutoCAD services with precise attention to detail and industry standards for architectural and engineering projects."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Engineering Drawing",
    description: "Comprehensive engineering drawing services including 2D drafting, 3D modeling, and technical documentation."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom web solutions using latest technologies to create responsive and user-friendly websites for businesses."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "End-to-end mobile application development for iOS and Android platforms with focus on performance and user experience."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Technical Consultation",
    description: "Expert technical consultation services to help businesses implement the right engineering solutions."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Project Management",
    description: "Efficient project management ensuring timely delivery and quality execution of engineering projects."
  }
]

const leaders = [
  {
    name: "Astik Jaiswal",
    role: "Chief Executive Officer",
    description: "Visionary leader with expertise in engineering solutions and business strategy, driving innovation and growth.",
    image: "/assets/team/ashishjaiswal.jpg"
  },
  {
    name: "Ashish Jaiswal",
    role: "Technical Lead",
    description: "Expert in technical architecture and leading development teams to success, ensuring technical excellence in all projects.",
    image: "/assets/team/ashishjaiswal.jpg"

  }
]

