import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <>
    <Header/>
    
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <i className="fas fa-book text-primary mr-2"></i>Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive tutoring services tailored to meet your learning needs and help you achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Matric Upgrade */}
          <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Matric Upgrade</h3>
              <p className="text-gray-600 mb-6">
                Improve your final Grade 12 results with focused support, targeted resources, and structured exam preparation.
              </p>
              <ul className="space-y-2 mb-6">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> CAPS-aligned curriculum</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Past paper practice</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Regular assessments</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Personalised attention</li>
              </ul>
              <Button onClick={() => scrollToSection("contact")} className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Saturday School */}
          <div className="bg-yellow-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <i className="fas fa-calendar-day text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Saturday School</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with our Saturday revision classes focusing on core subjects and exam techniques.
              </p>
              <ul className="space-y-2 mb-6">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Weekly revision sessions</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Focused subject areas</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Group learning environment</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Consistent progress tracking</li>
              </ul>
              <Button onClick={() => scrollToSection("contact")} className="px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600 transition-colors">
                Join Saturday School
              </Button>
            </div>
          </div>

          {/* Extra Classes */}
          <div className="bg-green-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <i className="fas fa-plus text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extra Classes</h3>
              <p className="text-gray-600 mb-6">
                Get extra support in subjects you find challenging, tailored to your pace and learning style.
              </p>
              <ul className="space-y-2 mb-6">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Subject-specific sessions</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> One-on-one or small group</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Based on learner needs</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> After-school flexibility</li>
              </ul>
              <Button onClick={() => scrollToSection("contact")} className="px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors">
                Request Extra Class
              </Button>
            </div>
          </div>

          {/* Varsity/College Tutoring */}
          <div className="bg-indigo-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
                <i className="fas fa-university text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Varsity / College Tutoring</h3>
              <p className="text-gray-600 mb-6">
                Academic support for university and college students in key subjects including math, science, business, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Assistance with assignments & modules</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Online or in-person sessions</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Study strategies for higher ed</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Exam prep & consultation</li>
              </ul>
              <Button onClick={() => scrollToSection("contact")} className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
                Book a Session
              </Button>
            </div>
          </div>

          {/* In-Person Classes */}
          <div className="bg-violet-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">In-Person Classes</h3>
              <p className="text-gray-600 mb-6">
                Prefer face-to-face learning? We offer structured contact classes with hands-on problem solving and personal mentorship.
              </p>
              <ul className="space-y-2 mb-6">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Face-to-face instruction</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Hands-on problem solving</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Small group settings</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i> Dedicated learning environment</li>
              </ul>
              <Button onClick={() => scrollToSection("contact")} className="px-6 py-3 bg-purple-500 text-white rounded-md font-medium hover:bg-violet-600 transition-colors">
                Book In-Person Class
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/> 
      </>
    
  );
};

export default Services;
