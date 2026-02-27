import { Star } from "lucide-react";
import { CurvedDivider } from "./CurvedDivider";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chief HR Officer, Fortune 500 Company",
      content:
        "Neurodiverse Strategies transformed our approach to workplace inclusion. Their evidence-based framework helped us create meaningful change that improved employee engagement across the board.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "VP of Diversity & Inclusion",
      content:
        "The workplace audit was comprehensive and insightful. The actionable recommendations have become the foundation of our neuroinclusion strategy.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Executive Director, Tech Nonprofit",
      content:
        "The keynote presentation was powerful and thought-provoking. It challenged our leadership team to rethink how we support neurodivergent talent.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Director of Operations",
      content:
        "The leadership coaching program equipped our managers with practical tools to create a more inclusive environment. The results speak for themselves.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Chief Learning Officer",
      content:
        "Working with Neurodiverse Strategies has been transformational. Their expertise and professional approach made implementation seamless.",
      rating: 5,
    },
    {
      name: "Robert Williams",
      role: "HR Director, Educational Institution",
      content:
        "The training was exceptional. Our staff now has the knowledge and confidence to support neurodiverse employees effectively.",
      rating: 5,
    },
  ];

  return (
    <>
      <section id="testimonials" className="py-20 bg-[#f3f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">
              What Leaders Are Saying
            </h2>
            <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
              Hear from organizational leaders who are experiencing the
              transformative power of neuroinclusive workplace culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border-2 border-[#006666]/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#660000] fill-[#660000]"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-[#5a5a5a] mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="border-t border-[#006666]/10 pt-4">
                  <div className="text-[#1a1a1a] font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-[#5a5a5a] text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CurvedDivider color="#ffffff" />
    </>
  );
}

