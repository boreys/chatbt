'use client'

import { ArrowRight, CheckCircle, CalendarCheck2, UserCheck } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="flex-grow-1">
      <section className="py-5 py-md-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Enhanced Customer Service through Personalized AI Chatbots</h1>
              <p className="lead mb-4">Build custom AI Chatbot to help your support team provide better customer service</p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <a href="https://mybot.chat/?src=chatbt" className="btn btn-primary" role="button">
                  Get Started
                  <ArrowRight className="ms-2" size={16} />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/chat-ui-desktop.jpg"
                alt="Chatbot UI"
                width={550}
                height={550}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                  <CheckCircle size={32} />
                </div>
                <h3 className="h4 mb-3">No-code Chatbot Builder</h3>
                <p className="text-start">Build AI Chatbot without writing code. Anyone can do it in minutes.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                  <UserCheck size={32} />
                </div>
                <h3 className="h4 mb-3">Customer Service</h3>
                <p className="tex-start">Use AI Chatbot to help your customer service team improve customer satisfaction for your business</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                  <CalendarCheck2 size={32} />
                </div>
                <h3 className="h4 mb-3">Collect Feedback</h3>
                <p className="text-start">Get user feedback with contact information captured by AI Chatbot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Benefits For Business</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src="/img/benefit-support.jpeg" alt="benefit on customer service" className="rounded mx-auto d-block img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <h2>Improve Customer Support</h2>
              <p className="text-start">
              AI Chatbot can answer customer's questions instantly, anytime, reducing wait times and frustration. This frees up human agents to tackle more intricate issues that require a personal touch.
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-sm-12 col-md-6 text-center">
              <h2>Lead Generation</h2>
              <p className="text-start">
              AI Chatbot can engage website visitors in real-time and qualify leads by asking strategic questions. This allows businesses to identify potential customers early on and nurture them through the sales funnel.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="/img/benefit-lead-generation.png" alt="benefit on customer service" className="rounded mx-auto d-block img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Testimonials</h2>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <Image
                  src="/img/testimonials-4.jpg"
                  alt="Alice Johnson"
                  width={100}
                  height={100}
                  className="rounded-circle mb-3"
                />
                <h3 className="h5 mb-1">Alice Johnson</h3>
                <p className="mb-3">CEO, TechCorp</p>
                <p className="text-start">"MyBot.Chat's AI took my website from crickets to conversations! 24/7 support & happy customers."</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <Image
                  src="/img/testimonials-2.jpg"
                  alt="Bob Smith"
                  width={100}
                  height={100}
                  className="rounded-circle mb-3"
                />
                <h3 className="h5 mb-1">Bob Smith</h3>
                <p className="mb-3">CTO, InnovateCo</p>
                <p className="text-start">"AI is a lifesaver! Answers customer questions 24/7 & frees me up for tougher tasks. Love the easy setup - no coding needed!"</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Image
                  src="/img/testimonials-3.jpg"
                  alt="Carol Davis"
                  width={100}
                  height={100}
                  className="rounded-circle mb-3"
                />
                <h3 className="h5 mb-1">Carol Davis</h3>
                <p className="mb-3">Lead Developer, WebSolutions</p>
                <p className="text-start">"MyBot.Chat's AI saved my team hours! It answers customer questions & frees us for complex issues. Night & day support, a lifesaver!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <a href="https://mybot.chat/?src=chatbt" type="button" className="btn btn-primary w-100">Get Started Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}