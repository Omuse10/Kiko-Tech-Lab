import Footer from '../components/footer';
import { LabCard } from '../components/lab-card';
import { 
  GraduationCap, 
  User, 
  Building2, 
  School, 
  BookOpen,
  Briefcase
} from 'lucide-react';

export function LabsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Specialized Labs
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your workspace and start innovating with our cutting-edge tools
          </p>
        </div>

        {/* LabCard Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LabCard
            title="Student Lab"
            description="Interactive learning environment with guided tutorials and collaborative tools."
            icon={<GraduationCap className="text-blue-600" />}
            to="/lab/student/new"
            className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-blue-100"
          />
          <LabCard
            title="Personal Lab"
            description="Your private workspace for coding, designing, and experimenting."
            icon={<User className="text-green-600" />}
            to="/lab/personal/new"
            className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-green-100"
          />
          <LabCard
            title="Company Lab"
            description="Enterprise-grade environment for team collaboration and development."
            icon={<Building2 className="text-purple-600" />}
            to="/lab/company/new"
            className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-purple-100"
          />
          <LabCard
            title="Institution Lab"
            description="Comprehensive platform for educational institutions and research."
            icon={<School className="text-orange-600" />}
            to="/lab/institution/new"
            className="bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:shadow-orange-100"
          />
          <LabCard
            title="Educators Lab"
            description="Tools for creating and managing educational content and courses."
            icon={<BookOpen className="text-red-600" />}
            to="/lab/educators/new"
            className="bg-gradient-to-br from-red-50 to-white border-red-100 hover:shadow-red-100"
          />
          <LabCard
            title="Professional Lab"
            description="Advanced tools for professional developers and engineers."
            icon={<Briefcase className="text-indigo-600" />}
            to="/lab/professional/new"
            className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 hover:shadow-indigo-100"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}