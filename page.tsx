"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Music, Calendar, Users, MapPin, Upload, ChevronRight, Check, MessageSquare, Clock, X } from "lucide-react"

export default function Home() {
  // Initialize animations when component mounts
  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-on-scroll")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const animation = element.dataset.animation || "fadeInUp"
            const delay = element.dataset.delay || ""

            // Only add classes if they're not empty
            if (animation) element.classList.add(`animate-${animation}`)
            if (delay) element.classList.add(delay)

            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6">
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000x300_logo-vavgTFU6Bcq7YGognqAxr94ZchXK5F.png"
            alt="BandQtrs Logo"
            width={300}
            height={100}
            className="h-auto"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold stencil-font text-[#FFD700]">Your Band's Headquarters</h1>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The ultimate app for musicians who collaborate. Manage your band, songs, practices, and gigs all in one
            place.
          </p>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-400">
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <Link href="#" className="inline-block w-[200px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917-djxTdJ19Dn73MAhUGNbLyeb2J0c6rd.svg"
                alt="Download on the App Store"
                width={200}
                height={67}
                className="h-auto"
              />
            </Link>
            <Button className="bg-[#111] hover:bg-[#222] text-white border border-[#333] py-2 px-4 rounded-md flex items-center gap-2 text-sm w-[180px]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.184l2.71-2.712 9.033 5.095a1 1 0 0 1 0 1.736l-9.031 5.095-2.712-2.71 6.242-3.42z" />
              </svg>
              Google Play <span className="text-xs ml-1">(Coming Soon)</span>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-dJwwxX6ccCdvhAHUEmQMIxQkq9JDnt.png"
            alt="BandQtrs App Dashboard"
            width={375}
            height={812}
            className="mx-auto rounded-3xl shadow-2xl border-4 border-[#333] animate-float"
          />
          <div className="absolute -bottom-6 -right-6 md:right-1/4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create%20Event%20with%20Availability-jOWBhh55GJ2IFD7obJux52D7fTptIc.png"
              alt="BandQtrs Event Creation"
              width={300}
              height={650}
              className="rounded-3xl shadow-2xl border-4 border-[#333] hidden md:block animate-float-delayed"
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="container mx-auto px-4 py-12 my-8 bg-[#0A0A0A] rounded-xl">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Tired of the Band Management Chaos?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-100">
            <div className="bg-[#111] p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-[#FFD700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Endless Text Threads</h3>
                  <p className="text-gray-300">
                    "Can everyone make Tuesday at 7?" ... "I can do 8" ... "That doesn't work for me" ... "What about
                    Thursday?" ... 50 messages later and still no practice scheduled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-200">
            <div className="bg-[#111] p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-6 w-6 text-[#FFD700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Scheduling Nightmares</h3>
                  <p className="text-gray-300">
                    Finding a time when everyone is available for practice, gigs, or recording sessions feels
                    impossible. Someone is always unavailable or double-booked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-300">
            <div className="bg-[#111] p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <X className="h-6 w-6 text-[#FFD700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Lost Files & Versions</h3>
                  <p className="text-gray-300">
                    "Which version of the song are we playing?" ... "Did you get the new demo I sent?" ... "I can't find
                    the lyrics you shared last week." Sound familiar?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-400">
            <div className="bg-[#111] p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-[#FFD700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Venue Hunting Hassles</h3>
                  <p className="text-gray-300">
                    Hours spent calling venues, checking availability, and negotiating prices. Then struggling to
                    communicate all the details to your bandmates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-500">
          <div className="text-center mt-8">
            <p className="text-xl font-bold text-white">
              BandQtrs solves all these problems and more in one simple app.
            </p>
          </div>
        </div>
      </section>

      {/* Intro SEO Section */}
      <section className="container mx-auto px-4 py-12 my-8 bg-[#0A0A0A] rounded-xl">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Let's Make Music
          </h2>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Are you a musician looking for a seamless way to collaborate with your bandmates? Whether you're in an{" "}
            <span className="text-[#FFD700]">
              indie band, rock band, pop group, metal band, jazz ensemble, acoustic duo, or even a wedding or corporate
              band
            </span>
            , <span className="font-bold">Bandqtrs</span> is the all-in-one app designed to streamline your band's
            workflow and keep everyone on the same page.
          </p>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-300">
            Bandqtrs is built for <span className="text-white font-semibold">musicians, bands, and artists</span> who
            thrive on collaboration. Whether you're gigging at local venues, recording your next hit single, or planning
            band rehearsals, this app simplifies communication and organization.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 mt-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700] stencil-font">
            Everything Your Band Needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-100">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <Users className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Band Management</h3>
              <p className="text-gray-300">
                Create bands and invite members to collaborate. Manage roles and permissions.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <Music className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Song Creation</h3>
              <p className="text-gray-300">
                Create songs with version control, upload multiple iterations, and track changes over time.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-300">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <svg className="h-12 w-12 text-[#FFD700] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Lyrics & Notes</h3>
              <p className="text-gray-300">
                Write and edit lyrics collaboratively. Add notes, chord progressions, and comments for band members.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-400">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <Upload className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">File Uploads</h3>
              <p className="text-gray-300">
                Upload and share song files, demos, and recordings with version tracking and comments.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-500">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <Calendar className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Practice Scheduling</h3>
              <p className="text-gray-300">
                Schedule practices and automatically check member availability without direct communication.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-600">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <MapPin className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Gig Management</h3>
              <p className="text-gray-300">
                Create gigs with venue details, setlists, and check member availability in one click.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-700">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <svg className="h-12 w-12 text-[#FFD700] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
                <path d="M4 10h16v11H4z" opacity="0.3" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Availability Checker</h3>
              <p className="text-gray-300">
                Check band members' availability for practices and gigs without having to ask each person individually.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-800">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <svg className="h-12 w-12 text-[#FFD700] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">In-App Comments</h3>
              <p className="text-gray-300">
                Comment on songs, practices, and gigs to keep all communication in one place and organized by topic.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-800">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <ChevronRight className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">And Much More</h3>
              <p className="text-gray-300">
                Setlist creation, band profiles, song sharing, and everything else your band needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Creation & Collaboration Section */}
      <section className="container mx-auto px-4 py-16 bg-[#0A0A0A] rounded-xl my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Music Creation & Collaboration
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Create, share, and collaborate on your music with powerful tools designed specifically for bands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll" data-animation="fadeInLeft">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Song%20List-RQLOIVCA70arMzgk0FnLTNAR2OAPy9.png"
              alt="BandQtrs Music Management"
              width={375}
              height={812}
              className="mx-auto rounded-3xl shadow-2xl border-4 border-[#333] animate-float"
            />
          </div>
          <div className="space-y-4">
            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-100">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-white">Create new songs</span> with or without an audio file.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Set <span className="font-semibold text-white">BPM, key, and genre</span> for each track.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Add <span className="font-semibold text-white">lyrics</span> using handy song section templates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Automatically <span className="font-semibold text-white">share new songs</span> with your band,
                    allowing members to comment and provide feedback.
                  </span>
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-300">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Upload <span className="font-semibold text-white">different versions</span> of a song with{" "}
                    <span className="font-semibold text-white">auto-versioning</span>, making it easy to track progress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Mark songs as <span className="font-semibold text-white">demo or finished</span>, ensuring your band
                    knows which tracks are ready for gigs or recording.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Keep a <span className="font-semibold text-white">full history of changes</span>, so you can revisit
                    earlier versions anytime.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Organize your songs into <span className="font-semibold text-white">albums or projects</span>,
                    helping keep your work structured and easy to manage.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Directory Section */}
      <section className="container mx-auto px-4 py-16 my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Service Directory
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
            Everything your band needs in one place. Find and connect with professional services to take your music to
            the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div className="animate-on-scroll" data-animation="fadeInLeft">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service%20Page-zgLYy0nr9Ktsn4Yl7vjng8qzsQrgJP.png"
              alt="BandQtrs Service Directory"
              width={375}
              height={812}
              className="mx-auto rounded-3xl shadow-2xl border-4 border-[#333] animate-float"
            />
          </div>
          <div className="grid gap-6">
            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-100">
              <div className="bg-[#111] p-6 rounded-xl feature-box">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-[#FFD700] mr-2" />
                  Practice Venues
                </h3>
                <p className="text-gray-300">
                  Find and book rehearsal spaces near you. Filter by location, equipment, price, and availability.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-200">
              <div className="bg-[#111] p-6 rounded-xl feature-box">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Music className="h-5 w-5 text-[#FFD700] mr-2" />
                  Recording Studios
                </h3>
                <p className="text-gray-300">
                  Connect with professional recording studios. Compare rates, equipment, and book directly through the
                  app.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-300">
              <div className="bg-[#111] p-6 rounded-xl feature-box">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  Mastering Services
                </h3>
                <p className="text-gray-300">
                  Find mastering engineers to perfect your sound. Review portfolios and previous work.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-400">
              <div className="bg-[#111] p-6 rounded-xl feature-box">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                  </svg>
                  Marketing & Promotion
                </h3>
                <p className="text-gray-300">
                  Connect with marketing professionals specializing in music promotion, social media management, and PR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setlists & Performance Section */}
      <section className="container mx-auto px-4 py-16 bg-[#0A0A0A] rounded-xl my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Setlists & Performance Preparation
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Build and manage setlists for your performances, ensuring your band is always prepared for every gig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-100">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Build <span className="font-semibold text-white">custom setlists</span> with your uploaded songs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Assign setlists to{" "}
                    <span className="font-semibold text-white">practices, gigs, and recording sessions</span>, so
                    everyone stays in sync.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-white">Listen to setlists</span> like a playlist to prepare for
                    live shows.
                  </span>
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-300">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>Rearrange song order with a simple drag-and-drop feature.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Click through to <span className="font-semibold text-white">song pages</span> for quick access to
                    lyrics, notes, and performance details.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Keep track of <span className="font-semibold text-white">past performances</span> to remember which
                    setlists worked best at certain venues.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="animate-on-scroll" data-animation="fadeInRight">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20Page-eXj2Tn7oTfWdKSZ1Ah8Bt2oQy4eBQH.png"
              alt="BandQtrs Profile Setup"
              width={375}
              height={812}
              className="mx-auto rounded-3xl shadow-2xl border-4 border-[#333] animate-float"
            />
          </div>
        </div>
      </section>

      {/* Availability & Scheduling Section */}
      <section className="container mx-auto px-4 py-16 my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Availability & Scheduling
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Coordinate with your band members effortlessly and find the perfect time for practices, gigs, and recording
            sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-100">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Set a <span className="font-semibold text-white">regular weekly or daily schedule</span> so
                    bandmates know when you're available.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Easily <span className="font-semibold text-white">find the best time</span> to schedule practices,
                    recordings, or gigs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Mark <span className="font-semibold text-white">special dates</span> when you're unavailable (e.g.,
                    holidays, personal commitments).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Avoid scheduling conflicts and keep your band organized with{" "}
                    <span className="font-semibold text-white">real-time availability tracking</span>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Integrate with{" "}
                    <span className="font-semibold text-white">
                      Google Calendar, Apple Calendar, and other scheduling tools
                    </span>{" "}
                    for seamless planning.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <span>
                    Set up <span className="font-semibold text-white">automatic reminders</span> so no one forgets
                    rehearsals, gigs, or important deadlines.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="animate-on-scroll" data-animation="fadeInRight">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Availability-XZjGvQYsVAwWP6txmPyxcV5VnkSQa3.png"
                  alt="BandQtrs Calendar"
                  width={375}
                  height={812}
                  className="rounded-3xl shadow-2xl border-4 border-[#333] mx-auto animate-float"
                />
                <div className="absolute -bottom-6 -right-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Event%20Page%20Map-VHGarSn9YvlvybaSvfPv8RQJbXOSSB.png"
                    alt="BandQtrs Venue Details"
                    width={300}
                    height={650}
                    className="rounded-3xl shadow-2xl border-4 border-[#333] hidden md:block animate-float-delayed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for All Musicians Section */}
      <section className="container mx-auto px-4 py-16 bg-[#0A0A0A] rounded-xl my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Perfect for All Types of Musicians
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            No matter what kind of music you play or what type of band you're in, BandQtrs has the tools you need.
          </p>
        </div>

        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-300">
          <div className="bg-[#111] p-8 rounded-xl">
            <p className="mb-4 text-lg">
              Whether you're a <span className="font-semibold text-white">touring rock band</span>, a{" "}
              <span className="font-semibold text-white">local indie group</span>, a{" "}
              <span className="font-semibold text-white">high-energy pop act</span>, or a{" "}
              <span className="font-semibold text-white">session musician</span> looking to connect,{" "}
              <span className="font-semibold text-white">Bandqtrs</span> is your go-to platform. It's also ideal for{" "}
              <span className="font-semibold text-white">wedding bands</span>,{" "}
              <span className="font-semibold text-white">corporate event bands</span>, and{" "}
              <span className="font-semibold text-white">cover bands</span> who need to stay organized for frequent
              bookings and set changes.
            </p>
            <p className="text-lg">
              From <span className="font-semibold text-white">punk rock bands</span> playing basement gigs to{" "}
              <span className="font-semibold text-white">electronic duos</span> crafting beats in their home studios,
              Bandqtrs is designed to support every type of musician. Jazz trios, blues bands, folk collectives, and
              even full orchestras can benefit from the structured collaboration tools built into the platform.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700] stencil-font">
            How BandQtrs Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-100">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Create Your Band Profile</h3>
                    <p className="text-gray-300">
                      Set up your band, add members, and customize your profile with photos and bio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Add Songs & Collaborate</h3>
                    <p className="text-gray-300">
                      Create songs, upload files, write lyrics, and collaborate with your band members in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Schedule Practices & Gigs</h3>
                    <p className="text-gray-300">
                      Plan events, check member availability automatically, and manage your band's calendar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-400">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Find Services You Need</h3>
                    <p className="text-gray-300">
                      Access our directory of venues, studios, and professionals to help your band succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20Page-eXj2Tn7oTfWdKSZ1Ah8Bt2oQy4eBQH.png"
              alt="BandQtrs Profile Setup"
              width={375}
              height={812}
              className="mx-auto rounded-3xl shadow-2xl border-4 border-[#333] animate-float"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Availbaility%20Schedule-LhkztHJmsixpuiwEsz3l1hIEfrIdj3.png"
                alt="BandQtrs Availability Schedule"
                width={300}
                height={650}
                className="rounded-3xl shadow-2xl border-4 border-[#333] hidden md:block animate-float-delayed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Take Your Band to the Next Level Section */}
      <section className="container mx-auto px-4 py-16 bg-[#0A0A0A] rounded-xl my-12">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#FFD700] stencil-font">
            Take Your Band to the Next Level
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Stop juggling endless text messages, emails, and scattered files. With Bandqtrs, your entire band stays
            connected in one powerful app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-300">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Check className="h-6 w-6 text-[#FFD700] mr-2" />
                Save Time
              </h3>
              <p className="text-gray-300">
                Focus on making music instead of wasting time on logistics and coordination. BandQtrs automates the
                tedious parts of band management.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-300">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Check className="h-6 w-6 text-[#FFD700] mr-2" />
                Improve Communication
              </h3>
              <p className="text-gray-300">
                Reduce miscommunication and keep everyone on the same page with centralized messaging and notifications.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInLeft" data-delay="delay-400">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Check className="h-6 w-6 text-[#FFD700] mr-2" />
                Track Creative Ideas
              </h3>
              <p className="text-gray-300">
                Keep all your band's creative ideas in one place, from song concepts to setlist arrangements and
                performance notes.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll" data-animation="fadeInRight" data-delay="delay-400">
            <div className="bg-[#111] p-6 rounded-xl feature-box">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Check className="h-6 w-6 text-[#FFD700] mr-2" />
                Never Miss Important Dates
              </h3>
              <p className="text-gray-300">
                With automated reminders and scheduling tools, you'll never miss a rehearsal, gig, or important deadline
                again.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-500">
          <div className="mt-10 text-center">
            <p className="text-xl font-bold text-[#FFD700]">
              Download Bandqtrs today and revolutionize the way you manage your band!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#111] py-16">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700] stencil-font">
              What Musicians Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-100">
              <div className="bg-black p-6 rounded-xl feature-box">
                <p className="italic mb-4">
                  "BandQtrs has completely transformed how our band organizes practices and gigs. We're more productive
                  than ever!"
                </p>
                <p className="font-bold">- Alex, Lead Guitarist</p>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
              <div className="bg-black p-6 rounded-xl feature-box">
                <p className="italic mb-4">
                  "The ability to upload song files and share them instantly with the band has made our songwriting
                  process so much smoother."
                </p>
                <p className="font-bold">- Sarah, Vocalist</p>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-300">
              <div className="bg-black p-6 rounded-xl feature-box">
                <p className="italic mb-4">
                  "Managing multiple bands used to be a nightmare. With BandQtrs, I can keep everything organized in one
                  place."
                </p>
                <p className="font-bold">- Mike, Drummer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700] stencil-font">
            Ready to Transform Your Band?
          </h2>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-200">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download BandQtrs today and take your musical collaboration to the next level.
          </p>
        </div>
        <div className="animate-on-scroll" data-animation="fadeInUp" data-delay="delay-400">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link href="#" className="inline-block w-[200px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917-djxTdJ19Dn73MAhUGNbLyeb2J0c6rd.svg"
                alt="Download on the App Store"
                width={200}
                height={67}
                className="h-auto"
              />
            </Link>
            <Button className="bg-[#111] hover:bg-[#222] text-white border border-[#333] py-2 px-4 rounded-md flex items-center gap-2 text-sm w-[180px]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.184l2.71-2.712 9.033 5.095a1 1 0 0 1 0 1.736l-9.031 5.095-2.712-2.71 6.242-3.42z" />
              </svg>
              Google Play <span className="text-xs ml-1">(Coming Soon)</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000x300_logo-vavgTFU6Bcq7YGognqAxr94ZchXK5F.png"
                alt="BandQtrs Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© {new Date().getFullYear()} BandQtrs. All rights reserved.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="#" className="text-gray-400 hover:text-[#FFD700]">
                  Contact
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700]">
                  Support
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700]">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Section - Moved to bottom */}
      <section className="bg-[#0A0A0A] py-12 border-t border-[#222]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">Legal Information</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="terms">
              <AccordionTrigger className="text-white hover:text-[#FFD700]">Terms & Conditions</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <div className="space-y-4">
                  <h3 className="font-bold">1. Acceptance of Terms</h3>
                  <p>
                    By downloading, installing, or using the BandQtrs application ("App"), you agree to be bound by
                    these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                  </p>

                  <h3 className="font-bold">2. User Accounts</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account information and for all
                    activities the confidentiality of your account information and for all activities that occur under
                    your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>

                  <h3 className="font-bold">3. User Content</h3>
                  <p>
                    You retain all rights to any content you upload, share, or create within the App. By uploading
                    content, you grant BandQtrs a non-exclusive, worldwide, royalty-free license to use, reproduce, and
                    display such content solely for the purpose of providing the App's services.
                  </p>

                  <h3 className="font-bold">4. Prohibited Activities</h3>
                  <p>
                    You agree not to use the App for any unlawful purpose or in any way that could damage, disable, or
                    impair the App's functionality.
                  </p>

                  <h3 className="font-bold">5. Data Protection</h3>
                  <p>
                    We comply with applicable data protection laws, including the General Data Protection Regulation
                    (GDPR) in the EU and UK. Please refer to our Privacy Policy for details on how we process your
                    personal data.
                  </p>

                  <h3 className="font-bold">6. Intellectual Property</h3>
                  <p>
                    The App and its original content, features, and functionality are owned by BandQtrs and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                  </p>

                  <h3 className="font-bold">7. Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, BandQtrs shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from your use or inability to use the App.
                    This does not affect any liability which cannot be excluded or limited under applicable law.
                  </p>

                  <h3 className="font-bold">8. Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your Country]. For EU
                    and UK users, mandatory consumer protection laws in your country of residence may apply.
                  </p>

                  <h3 className="font-bold">9. Changes to Terms</h3>
                  <p>
                    We may modify these Terms at any time. We will provide notice of any material changes. Your
                    continued use of the App after such changes constitutes your acceptance of the new Terms.
                  </p>

                  <h3 className="font-bold">10. Termination</h3>
                  <p>
                    We reserve the right to terminate or suspend your account at any time for violation of these Terms.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy">
              <AccordionTrigger className="text-white hover:text-[#FFD700]">Privacy Policy</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <div className="space-y-4">
                  <h3 className="font-bold">1. Data Controller</h3>
                  <p>
                    BandQtrs is the data controller responsible for processing your personal data. Contact information:
                    [Your Contact Details].
                  </p>

                  <h3 className="font-bold">2. Information We Collect</h3>
                  <p>
                    We collect information you provide directly, such as when you create an account, upload content, or
                    communicate with other users. We also collect certain technical information automatically when you
                    use the App.
                  </p>

                  <h3 className="font-bold">3. Legal Basis for Processing</h3>
                  <p>We process your data based on the following legal grounds:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Performance of our contract with you</li>
                    <li>Our legitimate interests in providing and improving the App</li>
                    <li>Your consent, where applicable</li>
                    <li>Compliance with legal obligations</li>
                  </ul>

                  <h3 className="font-bold">4. How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide, maintain, and improve the App</li>
                    <li>Communicate with you about the App</li>
                    <li>Personalize your experience</li>
                    <li>Process transactions</li>
                    <li>Monitor and analyze usage patterns</li>
                  </ul>

                  <h3 className="font-bold">5. Data Retention</h3>
                  <p>
                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was
                    collected, including legal, accounting, or reporting requirements. When your data is no longer
                    needed, we will securely delete or anonymize it.
                  </p>

                  <h3 className="font-bold">6. International Data Transfers</h3>
                  <p>
                    Your data may be transferred to and processed in countries outside the EU/UK. We ensure appropriate
                    safeguards are in place to protect your data, such as Standard Contractual Clauses approved by the
                    European Commission.
                  </p>

                  <h3 className="font-bold">7. Your Rights</h3>
                  <p>Under GDPR and UK data protection law, you have the following rights:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restriction of processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Rights related to automated decision-making and profiling</li>
                  </ul>
                  <p>To exercise these rights, please contact us at [Your Contact Email].</p>

                  <h3 className="font-bold">8. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against
                    unauthorized or unlawful processing, accidental loss, destruction, or damage.
                  </p>

                  <h3 className="font-bold">9. Data Breach Notification</h3>
                  <p>
                    In the event of a personal data breach that is likely to result in a risk to your rights and
                    freedoms, we will notify the relevant supervisory authority within 72 hours and, where required,
                    notify affected individuals without undue delay.
                  </p>

                  <h3 className="font-bold">10. Information Sharing</h3>
                  <p>We do not sell your personal information. We may share your information with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service providers who help us operate the App</li>
                    <li>Other users, as necessary for the App's functionality</li>
                    <li>Legal authorities, when required by law</li>
                  </ul>

                  <h3 className="font-bold">11. Children's Privacy</h3>
                  <p>
                    The App is not intended for children under 16. We do not knowingly collect personal data from
                    children under 16. If you become aware that a child has provided us with personal data, please
                    contact us.
                  </p>

                  <h3 className="font-bold">12. Complaints</h3>
                  <p>
                    If you have concerns about our data processing activities, please contact us first. You also have
                    the right to lodge a complaint with a supervisory authority in the EU member state or UK where you
                    live, work, or where an alleged infringement occurred.
                  </p>

                  <h3 className="font-bold">13. Changes to Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new policy on this page and, where appropriate, via email.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cookies">
              <AccordionTrigger className="text-white hover:text-[#FFD700]">Cookies Policy</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <div className="space-y-4">
                  <h3 className="font-bold">1. What Are Cookies</h3>
                  <p>
                    Cookies are small text files that are placed on your device when you use the App. They help us
                    provide you with a better experience and allow certain features to work.
                  </p>

                  <h3 className="font-bold">2. Cookie Consent</h3>
                  <p>
                    In accordance with EU and UK law, we will ask for your consent before placing non-essential cookies
                    on your device. You can withdraw your consent at any time by adjusting your cookie preferences in
                    the App settings.
                  </p>

                  <h3 className="font-bold">3. Types of Cookies We Use</h3>
                  <p>
                    <strong>Essential Cookies:</strong> These are necessary for the App to function properly and cannot
                    be switched off. They are usually set in response to actions you take, such as setting your privacy
                    preferences, logging in, or filling in forms.
                    <br />
                    <br />
                    <strong>Preference Cookies:</strong> These cookies enable the App to remember choices you make and
                    provide enhanced, personalized features.
                    <br />
                    <br />
                    <strong>Analytics Cookies:</strong> These help us understand how you use the App, allowing us to
                    improve functionality and performance. All information collected is aggregated and anonymous.
                    <br />
                    <br />
                    <strong>Marketing Cookies:</strong> These may be set through our App by our advertising partners.
                    They may be used to build a profile of your interests and show you relevant advertisements on other
                    apps and websites.
                  </p>

                  <h3 className="font-bold">4. Cookie Duration</h3>
                  <p>
                    <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser or
                    app.
                    <br />
                    <br />
                    <strong>Persistent Cookies:</strong> These remain on your device for a specified period or until you
                    delete them manually.
                  </p>

                  <h3 className="font-bold">5. Managing Cookies</h3>
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Through the cookie consent banner when you first use the App</li>
                    <li>Through the App's privacy settings</li>
                    <li>Through your device settings</li>
                  </ul>
                  <p>Please note that removing or blocking cookies may impact your user experience.</p>

                  <h3 className="font-bold">6. Third-Party Cookies</h3>
                  <p>
                    Some cookies are placed by third parties on our behalf. These third parties may process your
                    personal data in accordance with their own privacy policies. We recommend reviewing the privacy
                    policies of these third parties.
                  </p>

                  <h3 className="font-bold">7. Do Not Track Signals</h3>
                  <p>
                    We currently do not respond to "Do Not Track" signals from web browsers due to the lack of a common
                    industry standard for this feature.
                  </p>

                  <h3 className="font-bold">8. Changes to Cookies Policy</h3>
                  <p>
                    We may update this Cookies Policy from time to time. Any changes will be posted on this page and,
                    where appropriate, notified to you.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#222] p-4 z-50 border-t border-[#333]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-300">
            <p>
              We use cookies to enhance your experience on our website. By continuing to use this site, you consent to
              our use of cookies in accordance with our{" "}
              <button className="text-[#FFD700] underline">Cookies Policy</button>.
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-[#333] hover:bg-[#444] text-white text-sm py-2 px-4">Customize</Button>
            <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black text-sm py-2 px-4">Accept All</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

