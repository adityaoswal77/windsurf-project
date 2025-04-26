'use client';

import Stepper from '../../../components/ui/Stepper/Stepper';

const steps = [
  {
    title: 'Deal Details',
    path: '/spv/new',
    description: 'Upload deck and deal info'
  },
  {
    title: 'Entity Setup',
    path: '/spv/new/entity',
    description: 'Legal structure and docs'
  },
  {
    title: 'LP Targets',
    path: '/spv/new/lps',
    description: 'Add investors and allocations'
  },
  {
    title: 'Memo Preview',
    path: '/spv/new/memo',
    description: 'Review and customize'
  }
];

export default function NewSPVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--notion-off-white)]">
      <Stepper steps={steps} />
      <main className="max-w-4xl mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
}
