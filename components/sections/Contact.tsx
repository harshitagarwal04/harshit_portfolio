"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { Dropdown } from "@/components/ui/Dropdown";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import Link from "next/link";

type FormStatus = "idle" | "submitting" | "success" | "error" | "invalid_email";

const BLOCKED_EMAIL_DOMAINS = [
  "test.com",
  "abc.com",
  "example.com",
  "xyz.com",
  "sample.com",
  "domain.com",
  "email.com",
  "fake.com",
  "mailinator.com",
];

const REASON_OPTIONS = [
  { label: "Job opportunity", value: "Job opportunity" },
  { label: "Project collaboration", value: "Project collaboration" },
  { label: "Freelance / contract work", value: "Freelance / contract work" },
  { label: "Just saying hi", value: "Just saying hi" },
  { label: "Other", value: "Other" },
];

export const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company_website")) {
      // honeypot field caught a bot — silently drop the submission
      form.reset();
      return;
    }
    formData.delete("company_website");

    const email = (formData.get("email") as string) ?? "";
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && BLOCKED_EMAIL_DOMAINS.includes(domain)) {
      setStatus("invalid_email");
      return;
    }

    setStatus("submitting");
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setReason("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact">
      <CommandBlock command="./ping_me.sh" />

      <div className="mt-8 space-y-6">
        <p className="text-gray-200 max-w-4xl leading-relaxed text-lg">
          I'm open to opportunities involving backend engineering, AI infrastructure, distributed systems,
          and production AI products. Whether you have a question, a project to discuss, or just want to
          say hi, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="mailto:harshitagarwal713@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 text-black rounded-md font-medium hover:bg-white transition-colors w-fit"
          >
            <Mail size={18} />
            Send an Email
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://github.com/harshitagarwal04"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 text-gray-200 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Github size={18} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshit-713-agarwal/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 text-gray-200 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="pt-8 max-w-2xl">
          <p className="font-mono text-sm text-gray-400 mb-4">// or drop a message directly</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot — hidden from real users, bots tend to auto-fill it */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-gray-400 mb-2">
                  name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-md text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-gray-400 mb-2">
                  email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
                  title="Enter a valid email address"
                  className="w-full px-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-md text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block font-mono text-xs text-gray-400 mb-2">
                  company / organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-md text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                  placeholder="Where you work (optional)"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-mono text-xs text-gray-400 mb-2">
                  phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-md text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2">
                reason for reaching out *
              </label>
              <Dropdown
                name="reason"
                required
                options={REASON_OPTIONS}
                value={reason}
                onChange={setReason}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-gray-400 mb-2">
                message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-md text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-md font-medium hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <span className="font-mono text-sm text-green-400">Message sent — thanks!</span>
              )}
              {status === "error" && (
                <span className="font-mono text-sm text-red-400">
                  Something went wrong. Try emailing directly instead.
                </span>
              )}
              {status === "invalid_email" && (
                <span className="font-mono text-sm text-red-400">
                  Please use a real email address I can reply to.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};
