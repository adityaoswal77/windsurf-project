'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Step {
  title: string;
  path: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
}

export default function Stepper({ steps }: StepperProps) {
  const pathname = usePathname();
  const currentStepIndex = steps.findIndex(step => step.path === pathname);

  return (
    <div className="w-full py-4 px-6 bg-white border-b border-[var(--border-default)]">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <div key={step.path} className="flex-1 group">
                <div className="flex items-center">
                  {/* Step connector line */}
                  {index !== 0 && (
                    <div
                      className={`flex-1 h-px -ml-px ${
                        isCompleted ? 'bg-primary' : 'bg-[var(--border-default)]'
                      }`}
                    />
                  )}
                  
                  {/* Step circle */}
                  <Link href={step.path} className="relative flex items-center justify-center">
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        isCompleted
                          ? 'border-primary bg-primary text-white'
                          : isCurrent
                          ? 'border-primary bg-white text-primary'
                          : 'border-[var(--border-default)] bg-white text-[var(--text-tertiary)]'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isCompleted ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </motion.div>
                  </Link>
                </div>
                
                {/* Step title */}
                <div className="mt-2">
                  <div className={`text-sm font-medium ${
                    isCurrent ? 'text-primary' : 'text-[var(--text-secondary)]'
                  }`}>
                    {step.title}
                  </div>
                  {step.description && (
                    <div className="text-xs text-[var(--text-tertiary)]">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
