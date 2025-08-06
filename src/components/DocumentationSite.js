'use client';

import React, { useState, useEffect } from 'react';
import { Book, Settings, Clock, Users, Scale } from 'lucide-react';

export default function DocumentationSite() {
  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: Book },
    { id: 'basics', title: 'Basics', icon: Settings },
    { id: 'before-launch', title: 'Before Launch', icon: Clock },
    { id: 'first-24-hours', title: 'Your Project\'s First 24 Hours', icon: Clock },
    { id: 'managing-community', title: 'Managing Your Community', icon: Users },
    { id: 'legal-tips', title: 'Additional Legal Tips', icon: Scale },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'basics', 'before-launch', 'first-24-hours', 'managing-community', 'legal-tips'];
      let currentSection = sections[0];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) { // Increased threshold for even faster detection
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-100 px-6 py-4 fixed top-0 left-0 right-0 bg-white z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
            <img src="/reach-social-logo.png" alt="Reach Social" className="h-8 w-auto"/>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center py-12 px-6 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Getting Started</h1>
        <p className="text-gray-500 text-base md:text-lg">Last Updated: August 8, 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <nav className="space-y-2 lg:sticky lg:top-24 bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none">
              <h3 className="font-semibold text-gray-900 mb-3 lg:hidden">Table of Contents</h3>
              {tableOfContents.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-left transition-opacity duration-200 text-sm lg:text-base ${
                      activeSection === item.id
                        ? 'text-gray-900 font-semibold opacity-100'
                        : 'text-gray-600 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content - Right Side */}
          <div className="flex-1 max-w-4xl space-y-12 lg:space-y-16 pb-96">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Introduction</h2>
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-green-50 rounded-2xl p-6 lg:p-8 border border-green-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">$</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Your Coin</h3>
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <p className="text-gray-600">$YOURCOIN</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-xl opacity-30"></div>
                    <div className="relative h-24 lg:h-32 flex items-end justify-center">
                      <div className="flex items-end space-x-2">
                        <div className="w-3 h-12 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-20 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-16 bg-green-600 rounded-full"></div>
                        <div className="w-4 h-24 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Welcome to the Creator Playbook! This comprehensive guide will walk you through everything you need to know about launching and managing your project successfully.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Pro Tip:</strong> Take your time going through each section. The strategies outlined here have been tested and refined by successful creators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Basics Section */}
            <section id="basics" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Getting Started with the Basics</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Before diving into your project launch, it's crucial to understand the fundamental concepts and prepare your foundation properly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Planning Phase</h3>
                    <p className="text-gray-600 text-sm">Define your project goals, target audience, and core value proposition.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Setup</h3>
                    <p className="text-gray-600 text-sm">Prepare your technical infrastructure and development environment.</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Start by clearly defining what you want to achieve with your project. Consider who your target audience is and what value you're providing to them. This foundation will guide all your subsequent decisions.
                </p>
              </div>
            </section>

            {/* Before Launch Section */}
            <section id="before-launch" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Before Launch Checklist</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  A comprehensive checklist to ensure you're fully prepared before going live with your project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Documentation Complete</h4>
                      <p className="text-gray-600 text-sm">All project documentation is finalized and reviewed.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Community Setup</h4>
                      <p className="text-gray-600 text-sm">Social channels and community platforms are ready.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Legal Review</h4>
                      <p className="text-gray-600 text-sm">Terms of service and privacy policy have been reviewed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* First 24 Hours Section - REPLICATED FROM WORKING PATTERN */}
            <section id="first-24-hours" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Your Project's First 24 Hours</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  The first 24 hours after launch are critical for building momentum and establishing your project's presence in the market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Monitor Key Metrics</h4>
                      <p className="text-gray-600 text-sm">Track user engagement, performance, and any immediate issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Engage Early Adopters</h4>
                      <p className="text-gray-600 text-sm">Respond promptly to feedback and build relationships with first users.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Stay Responsive</h4>
                      <p className="text-gray-600 text-sm">Be available to address any technical issues or user questions.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  The first 24 hours set the foundation for your project's success. Stay focused, be responsive, and remember that early feedback is invaluable for future improvements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Consider having a team member dedicated to monitoring and responding during this critical period. Quick response times can make a huge difference in user perception and early adoption rates.
                </p>
              </div>
            </section>

            {/* Managing Community Section - REPLICATED FROM WORKING PATTERN */}
            <section id="managing-community" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Managing Your Community</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Building and maintaining a strong community is essential for long-term success. Your community members are your most valuable advocates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Regular Engagement</h4>
                      <p className="text-gray-600 text-sm">Post updates, respond to comments, and maintain active communication.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Listen to Feedback</h4>
                      <p className="text-gray-600 text-sm">Actively collect and implement community suggestions and concerns.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Foster Connections</h4>
                      <p className="text-gray-600 text-sm">Create opportunities for community members to connect with each other.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  A thriving community becomes your best marketing tool. Focus on creating genuine value and authentic relationships rather than just promoting your project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Remember that community management is an ongoing effort that requires consistency, patience, and genuine care for your members' experience and success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Community Platforms</h3>
                    <p className="text-gray-600 text-sm">Choose the right platforms where your audience is most active and engaged.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Content Strategy</h3>
                    <p className="text-gray-600 text-sm">Develop a consistent content calendar that provides value to your community.</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  Building authentic relationships takes time, but the long-term benefits of a loyal community far outweigh the initial investment of time and energy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Consider appointing community moderators or ambassadors as your community grows. This helps maintain quality discussions and reduces your direct workload.
                </p>
              </div>
            </section>

            {/* Legal Tips Section - REPLICATED FROM WORKING PATTERN */}
            <section id="legal-tips" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Additional Legal Tips</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Understanding the legal landscape is crucial for protecting your project and ensuring compliance with relevant regulations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Consult Professionals</h4>
                      <p className="text-gray-600 text-sm">Work with lawyers who specialize in your industry and jurisdiction.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Document Everything</h4>
                      <p className="text-gray-600 text-sm">Keep detailed records of decisions, agreements, and communications.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-600 text-xs">○</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Stay Updated</h4>
                      <p className="text-gray-600 text-sm">Monitor changes in regulations that might affect your project.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  Legal compliance isn't just about avoiding problems - it's about building trust with your users and creating a sustainable foundation for growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Invest in proper legal setup early in your project. The cost of prevention is always lower than the cost of fixing problems later.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Terms of Service</h3>
                    <p className="text-gray-600 text-sm">Clear, comprehensive terms that protect both you and your users.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy</h3>
                    <p className="text-gray-600 text-sm">Transparent data handling practices that comply with regulations.</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  Regular legal reviews should be part of your ongoing business process, especially as you scale and enter new markets or introduce new features.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Consider forming relationships with legal professionals early, even before you need them. Having trusted advisors on standby can save you time and stress when urgent issues arise.
                </p>
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
                  <div class="flex">
                    <div class="ml-3">
                      <p class="text-sm text-yellow-700">
                        <strong>Tip:</strong> Many legal issues can be prevented with proper planning and documentation from the start.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Disclaimer:</strong> This information is for educational purposes only and should not be considered legal advice.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  Remember that legal requirements vary significantly by jurisdiction and industry. What works in one location may not be sufficient in another.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}