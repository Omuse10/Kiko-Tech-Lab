import { useNavigate, useParams } from 'react-router-dom';
import { GraduationCap, User, Building2, School, BookOpen, Briefcase } from 'lucide-react';

const LAB_TYPES = {
  student: {
    icon: GraduationCap,
    title: 'Student Lab',
    description: 'Perfect for learning and practicing with guided tutorials',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  personal: {
    icon: User,
    title: 'Personal Lab',
    description: 'Your private workspace for individual projects',
    color: 'bg-green-50 hover:bg-green-100',
    iconColor: 'text-green-600',
  },
  company: {
    icon: Building2,
    title: 'Company Lab',
    description: 'Enterprise-grade environment for team collaboration',
    color: 'bg-purple-50 hover:bg-purple-100',
    iconColor: 'text-purple-600',
  },
  institution: {
    icon: School,
    title: 'Institution Lab',
    description: 'Research and development platform for institutions',
    color: 'bg-orange-50 hover:bg-orange-100',
    iconColor: 'text-orange-600',
  },
  educators: {
    icon: BookOpen,
    title: 'Educators Lab',
    description: 'Tools for creating and managing educational content',
    color: 'bg-red-50 hover:bg-red-100',
    iconColor: 'text-red-600',
  },
  professional: {
    icon: Briefcase,
    title: 'Professional Lab',
    description: 'Advanced tools for professional development',
    color: 'bg-indigo-50 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
};

export function LabSelectPage() {
  const { labType } = useParams<{ labType: string }>();
  const navigate = useNavigate();

  const handleLabSelect = (type: string) => {
    navigate(`/lab/${type}/${labType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Select Your Lab Environment</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the workspace that best fits your needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(LAB_TYPES).map(([key, { icon: Icon, title, description, color, iconColor }]) => (
            <button
              key={key}
              onClick={() => handleLabSelect(key)}
              className={`p-6 rounded-lg shadow-sm transition-all ${color} hover:shadow-md`}
            >
              <Icon className={`h-8 w-8 ${iconColor}`} />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}