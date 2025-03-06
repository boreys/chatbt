'use client'

import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Script from "next/script"

export default function LandingPage() {
  return (
      <main className="flex-grow-1">
        <section className="py-5 py-md-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 mb-4 mb-lg-0">
                <h1 className="display-4 fw-bold mb-3">About AI Chatbot for Customer Service</h1>
                <p className="lead mb-4">This is a demo of AI Chatbot for automated customer service created with MyBotChat</p>
                
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}