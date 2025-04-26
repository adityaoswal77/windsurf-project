'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvestingDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Investing Dashboard</h1>
          <p className="text-gray-600 max-w-3xl">
            Welcome to your investing dashboard. Here you can view and manage your investments, explore new opportunities, and track your portfolio performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Investment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Investment</h3>
            <p className="text-gray-600 mb-4">
              This is a sample investment card. Real investment data would be displayed here.
            </p>
            <Link 
              href="/get-started"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Back to Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
