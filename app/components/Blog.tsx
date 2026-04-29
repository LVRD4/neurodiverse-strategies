import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CurvedDivider } from "./CurvedDivider";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Ways to Create a Safe Classroom Environment",
      excerpt:
        "Discover practical strategies to help children feel physically, emotionally, and socially secure in your classroom.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      category: "Neuroinclusive workspace",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY2MjI3MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
    },
    {
      id: 2,
      title: "The Science Behind Emotional Regulation",
      excerpt:
        "Understanding brain development and how it impacts children's ability to manage their emotions.",
      author: "Michael Chen",
      date: "December 12, 2024",
      category: "Neurodivergent",
      image:
        "https://images.unsplash.com/photo-1599081595468-de614fc93694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjYxODI2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      id: 3,
      title: "Building Strong Parent-Teacher Partnerships",
      excerpt:
        "Learn how to create collaborative relationships with families that support children's development.",
      author: "Jennifer Martinez",
      date: "December 10, 2024",
      category: "ADHD - Autism - Executive Functioning",
      image:
        "https://images.unsplash.com/photo-1760205085646-2ce78b07c189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBjaGlsZCUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzY2Mjc1OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      id: 4,
      title: "Transforming Conflict into Teaching Moments",
      excerpt:
        "Practical techniques for turning challenging behaviors into opportunities for growth and learning.",
      author: "Dr. Robert Williams",
      date: "December 8, 2024",
      category: "Operational",
      image:
        "https://images.unsplash.com/photo-1716874905449-7881f6cf1c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNoaWxkfGVufDF8fHx8MTc2NjI3NTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      id: 5,
      title: "Self-Regulation Activities for Young Children",
      excerpt:
        "Age-appropriate activities and games that help children develop essential self-regulation skills.",
      author: "Lisa Anderson",
      date: "December 5, 2024",
      category: "Neuroinclusive workspace",
      image:
        "https://images.unsplash.com/photo-1574130303188-31a915382726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY2MjI3MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      id: 6,
      title: "Conscious Discipline in Remote Learning",
      excerpt:
        "Adapting Conscious Discipline principles for virtual classrooms and distance education.",
      author: "David Thompson",
      date: "December 1, 2024",
      category: "Neurodivergent",
      image:
        "https://images.unsplash.com/photo-1599081595468-de614fc93694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjYxODI2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
  ];

  const categories = [
    "Neuroinclusive workspace",
    "Neurodivergent",
    "ADHD - Autism - Executive Functioning",
    "Operational",
  ];

  return (
    <>
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Blog & Resources</h2>
            <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
              Stay informed with the latest insights, research, and practical
              tips from our experts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-[#78D047] text-[#1a1a1a]"
                    : "bg-gray-100 text-gray-700 hover:bg-[#78D047]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-12">
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-[#eef0ff] to-[#e8f8dc] rounded-3xl overflow-hidden border border-[#78D047]/30 p-8"
                >
                  <div className="relative rounded-xl overflow-hidden h-96">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#f76201] text-white rounded-full text-sm">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-[#5a5a5a] mb-4">
                      <Tag size={16} className="text-[#f76201]" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-3xl text-[#1a1a1a] mb-4">
                      {post.title}
                    </h3>
                    <p className="text-[#5a5a5a] mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-[#5a5a5a] mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button className="bg-[#221da0] hover:bg-[#1b177f] text-white w-fit">
                      Read More <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) => !post.featured)
              .map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden mb-4 h-64">
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
                  <h3 className="text-xl text-[#1a1a1a] mb-2 group-hover:text-[#221da0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#5a5a5a] mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#5a5a5a]">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#78D047] text-[#221da0] hover:bg-[#78D047]/20"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      <CurvedDivider color="#f7f8ff" />
    </>
  );
}
