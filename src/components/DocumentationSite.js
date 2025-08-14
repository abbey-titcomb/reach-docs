'use client';

import React, { useState, useEffect } from 'react';
import { Book, Settings, Clock, Users, Scale, HeartHandshake, User, Wallet, BadgeCheck, Pin, Shield, DollarSign } from 'lucide-react';

export default function DocumentationSite() {
  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: Book },
    { id: 'basics', title: 'Getting Started', icon: Settings },
    { id: 'before-launch', title: 'For Brands', icon: HeartHandshake },
    { id: 'first-24-hours', title: 'For Creators', icon: Users },
    { id: 'legal-tips', title: 'Get Verified', icon: BadgeCheck },
    { id: 'managing-community', title: 'Referral Program', icon: DollarSign },
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Getting Started on Reach.Social</h1>
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
                    className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-left transition-opacity duration-200 text-m lg:text-base ${
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
                <div className="prose max-w-none">
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6">
                  Welcome to Reach.Social - a platform that helps creators get paid and brands go viral. Whether you’re a brand or creator, this guide will walk you through everything you need to know to get started.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <HeartHandshake className="w-6 h-6" />
                      <span>For Brands</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Launch viral marketing campaigns in minutes with thousands of creators.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Users className="w-6 h-6" />
                      <span>For Creators</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Get paid to create content. Make memes, post clips, and get paid instantly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Basics Section */}
            <div className="border-t border-gray-100 my-16"></div>
            <section id="basics" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Getting Started</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  On Reach.Social, brands create <strong>campaigns</strong> that pay creators to post content. There are two types of campaigns:
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Pay per View</h3>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Pay per View (PPV) campaigns pay creators based on the number of views their content receives. You set the budget, requirements, and rate and let creators do the rest! Payouts are triggered only when you approve a submission, so you decide which creators get paid.
                    </p>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        <em>Perfect for podcasters, streamers, record labels, or any brand that wants something clipped!</em>
                    </p>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Contests</h3>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Brands can launch contest with a prize pool. Creators submit videos, clips, memes, or other media — brands rank and choose the winners. 
                    </p>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        <em>Perfect for product launches, releases, meme contests, or anytime you need a little community boost.</em>
                    </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-m text-blue-700">
                          <strong>Tip:</strong> Publish a contest on X and receive submissions directly in your replies with our custom bot! [LINK]
                        </p>
                      </div>
                    </div>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Our platform is entirely crypto-based, allowing instant payouts in USDC, SOL, or any other Solana-based token. Don’t know crypto? No problem. All you need is an email or phone number to sign up and our built-in offramp lets creators convert your crypto to cash and deposit directly to their bank account.
                </p>
              </div>
            </section>

            {/* Before Launch Section */}
            <div className="border-t border-gray-100 my-16"></div>
            <section id="before-launch" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">For Brands</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    On Reach, you can launch viral marketing campaigns in minutes and tap into 3000+ creators instantly. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 auto-rows-fr">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <HeartHandshake className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Instant Onboarding</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Create an account with an email or phone number, fund your wallet, and you're ready to go. It's that easy.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <BadgeCheck className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Verified Creators</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Creators can choose to verify the audiences of their social accounts by country.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Pin className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Targeted Campaigns</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Premium and Global campaigns let you to segment your campaigns by specific regions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Wallet className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Automatic Payouts</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Any content you approve gets paid out instantly and automatically.</p>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">The Basics of Getting Started</h3>
                <ol className="list-decimal pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li>Create an account on reach.social</li>
                  <li>Fund your wallet with USDC, SOL, or any other Solana-based coin</li>
                  <li>Create a campaign</li>
                  <li>Watch the submissions roll in</li>
                  <li>Rinse and repeat!</li>
                </ol>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Launching a PPV Campaign</h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Pay per View (PPV) campaigns pay creators based on the number of views their content receives. You set the budget, requirements, and rate and let creators do the rest! Payouts are triggered only when you approve a submission, so you decide which creators get paid.
                </p>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mt-6 mb-4">Creating the Campaign:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li>Set a budget. We support payouts in USDC, SOL, or any other Solana-based coin.</li>
                  <li>Choose your payment rate. Choose the $ amount you’d like to pay per 1,000 views.</li>
                  <li>Categorize the type of content you’re looking for:
                    <ol className="list-[lower-alpha] pl-5 space-y-2 mt-2">
                      <li>UGC – Creators make original content (face or faceless) to showcase your product, podcast, or brand, driving interest and conversions.</li>
                      <li>Clipping – Creators edit your videos into short, shareable clips to spread across the internet.</li>
                      <li>Audio – Creators use your music or sound in any content they make, sending it viral and reaching new audiences.</li>
                    </ol>
                  </li>
                  <li>Define your requirements. Provide creative direction, examples, and criteria that creators need to meet to be approved.</li>
                  <li>Upload your assets. Add logos, videos, audio that you want creators to use in their content.</li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-m text-blue-700">
                          <strong>Pro Tip:</strong> Take your time going through each section. The strategies outlined here have been tested and refined by successful creators.
                        </p>
                      </div>
                    </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-10 mb-4 lg:mb-6">Reviewing Submissions</h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  All submissions can be reviewed directly on your campaign page. You control each dollar paid out — creators only get paid when you approve their content. Payouts are calculated based on the number of views that content has at the time of approval.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-m text-blue-700">
                        <strong>Tip:</strong> Watch out for fake engagement! We’ll help flag suspicious submissions, but if the view count doesn’t match up to the likes, comments, or shares, make sure to deny the submission and flag it for botting.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-10 mb-4 lg:mb-6">Reach.Social vs. Traditional Marketing</h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Traditional marketing is expensive, unpredictable, and often doesn't deliver measurable results. You need a way to turn your compelling content into viral moments without breaking the bank. Reach lets you create a performance-based marketing engine where you only pay for actual engagement and views.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base lg:text-lg text-gray-600 mt-4">
                  <li><strong>Only pay for stuff that works.</strong> No more getting sold a promise. You’re only investing in content that actually delivers.</li>
                  <li><strong>Authentic reach, in real creator voices.</strong> Creators post to their own audiences—so engagement isn’t borrowed, it’s real.</li>
                  <li><strong>Start small, scale when you want.</strong> Launch small, ramp up fast when you see the traction.</li>
                  <li><strong>One idea. Endless spins.</strong> Turn a single piece of content into dozens of unique clips, reels, edits—effortlessly multiplying your creative output.</li>
                  <li><strong>Real-time tracking.</strong> See exactly what's working and optimize accordingly.</li>
                  <li><strong>Build a content army.</strong> Creators become advocates and community members.</li>
                  <li><strong>Trigger algorithm boosts.</strong> Flood platforms with varied, authentic posts to drive sustained visibility and reach far beyond what one expensive influencer drop can deliver.</li>
                </ul>
              </div>
            </section>

            {/* First 24 Hours Section - REPLICATED FROM WORKING PATTERN */}
            <div className="border-t border-gray-100 my-16"></div>
            <section id="first-24-hours" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">For Creators</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  <a href="https://reach.social" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Reach.social</a> is a platform where you get paid to create content. Whether you're making memes, clips, or viral UGC videos, Reach is the place to find campaigns from top brands, podcasts, streamers, and communities.
                </p>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Basics of Getting Started:</h3>
                <ol className="list-decimal pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li>Create an account on <a href="https://reach.social" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">reach.social</a></li>
                  <li>Connect and verify your social accounts (TikTok, Instagram, X, YouTube)</li>
                  <li>Find a campaign</li>
                  <li>Create and post content</li>
                  <li>Submit and wait for approval</li>
                  <li>Get paid!</li>
                </ol>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">Why Do Creators Love Reach.Social?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-2 auto-rows-fr">
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Quick Payouts</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Get paid within 24 hours of content approval. No waiting weeks or months for your earnings.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Scale className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Fair Compensation</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Earn what you're worth. Our algorithm ensures creators get paid fairly based on reach and engagement.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Creator Control</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Choose which campaigns to accept, set your own rates, and maintain full creative control.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Wallet className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Multiple Payment Options</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Payouts are in USDC, SOL, and more. Convert your crypto to cash and deposit directly to your bank account.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Community Support</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Join our creator community for tips, networking, and support from fellow content creators.</p>
                  </div>
                  <div className="bg-gray-50 p-4 lg:p-6 rounded-lg h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      <span>Content Protection</span>
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">Your content is protected. We ensure brands can't use your work without proper compensation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Verified Section */}
            <div className="border-t border-gray-100 my-16"></div>
            <section id="legal-tips" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Get Verified</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">Verification on Reach.social provides creators with priority access and exclusive opportunities. To get verified, you must:</p>
                <ol className="list-decimal pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li><strong>Verify all social accounts</strong> — Connect your TikTok, Instagram, X, and YouTube.</li>
                  <li><strong>Complete social verification</strong> — Submit at least 10 approved pieces of content.</li>
                  <li><strong>Maintain quality</strong> — Keep an approval rate of 80% or higher.</li>
                  <li><strong>Stay organic</strong> — Have 0 botting denials (even 1 will disqualify you). Don't farm views or buy views - make sure they're real, authentic and organic.</li>
                </ol>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-8 mb-4">Why Get Verified?</h3>
                <ul className="list-disc pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li><strong>Have your content reviewed first</strong><br/>Once you're verified, your content will be surfaced first to campaign managers. The higher your priority, the faster you get reviewed, and paid.</li>
                  <li><strong>Unlock access to Premium campaigns</strong><br/>Once verified, if at least 50% of your audience is within the following countries, you can submit to premium campaigns: Europe, NA, Australia, Japan, SK, and New Zealand.</li>
                  <li><strong>Earn your Verified Creator badge!</strong><br/>This status appears on your profile, leaderboards, and more.</li>
                </ul>
              </div>
            </section>

            {/* Managing Community Section - REPLICATED FROM WORKING PATTERN */}
            <div className="border-t border-gray-100 my-16"></div>
            <section id="managing-community" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Referral Program</h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Invite your friends to reach.social and get paid! To start earning:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base lg:text-lg text-gray-600">
                  <li>Share your unique referral link with friends. When someone signs up using your link, they're added to your My Referrals list.</li>
                  <li>If they create a campaign, you earn 3% of everything they spend.</li>
                  <li>If they get paid from a campaign, you earn 2% of everything they earn.</li>
                  <li>Referral fees are paid out instantly on Reach.</li>
                </ul>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6">
                  Add your link to your bio, promote it on your socials, and share with your friends to maximize earnings.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}