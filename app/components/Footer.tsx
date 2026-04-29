import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail as MailIcon,
} from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#e8ebe9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#2485bd] text-xl mb-4 font-bold">
              Neurodiverse Strategies
            </h3>
            <p className="text-sm mb-4">
              Transforming workplaces through evidence-based neuroinclusion
              consulting and leadership development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#2485bd] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#2485bd] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#2485bd] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#2485bd] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#2485bd] mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-[#2485bd] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("what-we-offer")}
                  className="hover:text-[#2485bd] transition-colors"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#2485bd] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="hover:text-[#2485bd] transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#2485bd] mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#2485bd] transition-colors">
                  Keynote Speaking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2485bd] transition-colors">
                  Neuroinclusive Assessments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2485bd] transition-colors">
                  Professional Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2485bd] transition-colors">
                  Online Courses (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#2485bd] mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MailIcon
                  size={16}
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@neurodiversestrategies.com"
                  className="hover:text-[#2485bd] transition-colors"
                >
                  info@neurodiversestrategies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005551234"
                  className="hover:text-[#2485bd] transition-colors"
                >
                  +1 (800) 555-1234
                </a>
              </li>
              <li>
                123 Business Plaza
                <br />
                Suite 400
                <br />
                New York, NY 10001
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#78D047] hover:text-[#FDD015] transition-colors font-medium"
                >
                  Contact Form →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#221da0]/30 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Neurodiverse Strategies. All
            rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-[#2485bd] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#2485bd] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#2485bd] transition-colors">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
