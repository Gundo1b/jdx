import { Link } from "wouter";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About JD Tutoring</h3>
            <p className="text-gray-300 mb-4">
              We are dedicated to helping students excel in Mathematics and Physics through personalized tutoring and comprehensive learning programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("About")} className="text-gray-300 hover:text-white transition-colors">About</button></li>
              {/* <li><button onClick={() => scrollToSection("who-can-join")} className="text-gray-300 hover:text-white transition-colors">Who Can Join</button></li> */}
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
            
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Matric Upgrade</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Saturday School</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Extra Classes</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Varsity / College Tutoring</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">In-Person Classes</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>286 pretorius street Central Towers, 5143</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <span>064 905 2715</span>
              </li>

              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <span>012 003 4506/8173</span>
              </li>

              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>Info@jdtutoring.co.za</span>
              </li>
              {/* <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <span>Mon-Sat: 9am-8pm</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} JD Tutoring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
