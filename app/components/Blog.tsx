"use client";

import { useState } from "react";
import { Calendar, User, ArrowRight, Tag, FileText, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CurvedDivider } from "./CurvedDivider";

export function Blog() {
  const whitePaperUrl = process.env.NEXT_PUBLIC_WHITE_PAPER_URL ?? "#contact";
  const posts = [
    {
      id: 1,
      title:
        "You Just Hired Someone Who Told You They're Neurodivergent. Now What?",
      excerpt:
        "Most managers freeze at disclosure. This post walks you through exactly what to ask, what not to assume, and how to set the relationship up for success from day one.",
      author: "Neurodiverse Strategies",
      date: "December 15, 2024",
      category: "Neuroinclusive workspace",
      image: "/blog/hired-neurodivergent.png",
      featured: true,
    },
    {
      id: 2,
      title:
        '"Neurodivergent" — What the Term Actually Means and What It Looks Like at Work',
      excerpt:
        "Up to 20% of the population is neurodivergent — meaning ADHD, autism, dyslexia, and more are already represented on your teams, whether you know it or not.",
      author: "Neurodiverse Strategies",
      date: "December 12, 2024",
      category: "Neurodivergent",
      image: "/blog/neurodivergent-term.png",
      featured: false,
    },
    {
      id: 3,
      title: "What Neurodivergent Employee Turnover Is Actually Costing You",
      excerpt:
        "Plug in your headcount and turnover rate and get a real dollar figure, because this is a business problem, not an HR problem, and the numbers prove it.",
      author: "Neurodiverse Strategies",
      date: "December 10, 2024",
      category: "Operational",
      image: "/blog/turnover-cost.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "The Accommodation Conversation You're Afraid to Have",
      excerpt:
        "Managers routinely avoid discussing needs with neurodivergent employees out of fear of saying the wrong thing, and that silence is costing you performance, trust, and retention.",
      author: "Neurodiverse Strategies",
      date: "December 8, 2024",
      category: "ADHD - Autism - Executive Functioning",
      image: "/blog/accommodation-conversation.png",
      featured: false,
    },
    {
      id: 5,
      title:
        "Is Your Organization Leaving Neurodivergent Talent on the Table? A 10-Question Readiness Audit",
      excerpt:
        "HR leaders love a benchmark. This self-assessment reveals exactly where your organization stands against best practice and what it's costing you to stay there.",
      author: "Neurodiverse Strategies",
      date: "December 5, 2024",
      category: "Neuroinclusive workspace",
      image: "/blog/readiness-audit.png",
      featured: false,
    },
    {
      id: 6,
      title:
        "Your Onboarding Process Is Failing Neurodivergent Employees Before They Even Start",
      excerpt:
        "The three things that predict whether a new hire succeeds — role clarity, self-efficacy, and social acceptance — are exactly what traditional onboarding gets wrong for neurodivergent talent.",
      author: "Neurodiverse Strategies",
      date: "December 1, 2024",
      category: "Neurodivergent",
      image: "/blog/onboarding-process.png",
      featured: false,
    },
    {
      id: 7,
      title: "Why Your Best Neurodivergent Employee Just Quit",
      excerpt:
        "When organizations leave inclusion to individual managers, outcomes become a lottery, and the employees with the most to offer are often the first to walk.",
      author: "Neurodiverse Strategies",
      date: "November 27, 2024",
      category: "Operational",
      image: "/blog/employee-quit.png",
      featured: false,
    },
  ];

  const categories = [
    "Neuroinclusive workspace",
    "Neurodivergent",
    "ADHD - Autism - Executive Functioning",
    "Operational",
  ];
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[number] | null>(
    null,
  );

  return (
    <>
      <section
        id="blog"
        className="relative overflow-hidden bg-gradient-to-br from-[#221da0] via-[#2485bd] to-[#78D047] py-16 sm:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(253,208,21,0.42),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(247,98,1,0.32),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,248,255,0.86))]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-4 sm:text-4xl">Blog & Resources</h2>
            <p className="text-lg text-[#5a5a5a] max-w-3xl mx-auto sm:text-xl">
              Stay informed with the latest insights, research, and practical
              strategies for neuroinclusive workplaces.
            </p>
          </div>

          <div className="-mx-4 mb-10 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                  index === 0
                    ? "bg-[#78D047] text-[#1a1a1a]"
                    : "bg-gray-100 text-gray-700 hover:bg-[#78D047]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-10 sm:mb-12">
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="grid gap-5 overflow-hidden rounded-2xl border border-[#78D047]/30 bg-gradient-to-br from-[#eef0ff] to-[#e8f8dc] p-4 sm:rounded-3xl sm:p-8 lg:grid-cols-2 lg:gap-8"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="relative h-56 overflow-hidden rounded-xl text-left sm:h-96"
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#f76201] text-white rounded-full text-sm">
                        Featured
                      </span>
                    </div>
                  </button>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-[#5a5a5a] mb-4">
                      <Tag size={16} className="text-[#f76201]" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-2xl text-[#1a1a1a] mb-3 sm:text-3xl sm:mb-4">
                      {post.title}
                    </h3>
                    <p className="text-[#5a5a5a] mb-5 text-base leading-relaxed sm:mb-6 sm:text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#5a5a5a] mb-5 sm:gap-4 sm:text-base sm:mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button
                      className="bg-[#221da0] hover:bg-[#1b177f] text-white w-fit"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts
              .filter((post) => !post.featured)
              .map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer text-left"
                >
                  <div className="relative rounded-xl overflow-hidden mb-4 h-52 sm:h-64">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-[#1a1a1a] rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg text-[#1a1a1a] mb-2 group-hover:text-[#221da0] transition-colors sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a5a5a] mb-4 sm:text-base">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#5a5a5a] sm:gap-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </button>
              ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#78D047]/40 bg-[#f7f8ff] p-5 shadow-sm sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#221da0]">
                <FileText className="text-white" size={30} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#78D047]">
                  White Paper
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1a1a1a]">
                  Download the White Paper
                </h3>
                <p className="mt-2 text-[#5a5a5a]">
                  Get the full resource on neuroinclusive workplace strategy and
                  the operational cost of doing nothing.
                </p>
              </div>
              <Button
                asChild
                className="bg-[#221da0] text-white hover:bg-[#1b177f]"
              >
                <a href={whitePaperUrl}>Download</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {selectedPost ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-2 backdrop-blur-sm sm:p-4">
          <article className="relative mx-auto my-4 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:my-8 sm:rounded-3xl">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[#221da0] shadow-md transition-colors hover:bg-[#78D047]"
              aria-label="Close article"
            >
              <X size={24} />
            </button>
            <div className="h-52 overflow-hidden sm:h-80">
              <ImageWithFallback
                src={selectedPost.image}
                alt={selectedPost.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#5a5a5a] sm:gap-4">
                <span className="rounded-full bg-[#78D047]/20 px-3 py-1 font-medium text-[#221da0]">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {selectedPost.author}
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-[#1a1a1a] md:text-4xl">
                {selectedPost.title}
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[#5a5a5a] sm:mt-6 sm:text-lg">
                <p>{selectedPost.excerpt}</p>
                <p>
                  This article is being prepared for publication. In the
                  meantime, use this summary as the key takeaway and contact
                  Neurodiverse Strategies for support applying these ideas in
                  your workplace.
                </p>
              </div>
              <Button
                className="mt-8 bg-[#221da0] text-white hover:bg-[#1b177f]"
                onClick={() => {
                  setSelectedPost(null);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Talk Through This Topic
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </article>
        </div>
      ) : null}
      <CurvedDivider color="#f7f8ff" />
    </>
  );
}
