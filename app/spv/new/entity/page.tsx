'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../../../components/ui/Button';

const jurisdictions = [
  { id: 'de', name: 'Delaware LLC', description: 'Most common for US-based SPVs' },
  { id: 'ky', name: 'Cayman Islands', description: 'Popular for international investors' },
  { id: 'sg', name: 'Singapore', description: 'Ideal for Asia-Pacific focus' }
];

export default function EntitySetup() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="card p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Entity Setup</h2>
          <p className="text-[var(--text-secondary)]">
            Choose your legal structure and jurisdiction
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-default)] mb-2">
              Legal Entity Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="e.g., Tech Growth Fund III LLC"
            />
            <p className="mt-1 text-xs text-[var(--text-tertiary)]">
              This will be your official legal entity name
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-default)] mb-2">
              Select Jurisdiction
            </label>
            <div className="space-y-3">
              {jurisdictions.map((jurisdiction) => (
                <label
                  key={jurisdiction.id}
                  className="flex items-start p-4 border border-[var(--border-default)] rounded-[var(--radius-md)] cursor-pointer hover:border-primary/30 hover:bg-primary/5"
                >
                  <input
                    type="radio"
                    name="jurisdiction"
                    value={jurisdiction.id}
                    className="mt-1"
                  />
                  <div className="ml-3">
                    <div className="font-medium">{jurisdiction.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {jurisdiction.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-default)] mb-2">
              Entity Formation Documents
            </label>
            <div className="border-2 border-dashed border-[var(--border-default)] rounded-[var(--radius-md)] p-6">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-[var(--text-tertiary)]"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Drag and drop your documents here, or{' '}
                  <span className="text-primary cursor-pointer">browse</span>
                </p>
                <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                  PDF, DOC up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
        <Button onClick={() => router.push('/spv/new/lps')}>
          Continue to LP Setup
        </Button>
      </div>
    </motion.div>
  );
}
