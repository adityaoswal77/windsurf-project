'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../../components/ui/Button';

export default function NewSPV() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-gray-900">Create New SPV</h1>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Deal Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="dealName" className="block text-sm font-medium text-gray-700 mb-1">
                    Deal Name
                  </label>
                  <input
                    type="text"
                    id="dealName"
                    className="input"
                    placeholder="Enter deal name"
                  />
                </div>
                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
                    Deal Summary
                  </label>
                  <textarea
                    id="summary"
                    rows={4}
                    className="input"
                    placeholder="Enter a brief summary of the deal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Pitch Deck
                  </label>
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
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
                      <div className="text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.ppt,.pptx" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF or PowerPoint up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button onClick={() => router.push('/spv/new/entity')}>
                Continue to Entity Setup
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
