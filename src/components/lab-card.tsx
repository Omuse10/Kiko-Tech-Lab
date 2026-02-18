import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface LabCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
}

export function LabCard({ title, description, icon, to, className }: LabCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group relative overflow-hidden rounded-lg border p-4 sm:p-6 hover:border-blue-100 hover:bg-gray-50 transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 sm:mb-4 text-xl sm:text-2xl text-blue-600">{icon}</div>
          <h3 className="font-semibold leading-none tracking-tight mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-600 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}