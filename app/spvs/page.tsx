'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getSPVs } from '../../lib/db';
import Button from '../../components/ui/Button';
import styles from './spvs.module.css';

interface SPV {
  id: string;
  name: string;
  description: string | null;
  status: 'draft' | 'active' | 'closed';
  target_size: number;
  current_size: number;
  created_by: string | null;
  created_by_profile?: {
    full_name: string | null;
    company: string | null;
    role: string | null;
  };
  documents?: Array<{
    id: string;
    name: string;
    type: 'pitch_deck' | 'legal_doc' | 'financial_model';
  }>;
  investments?: Array<{
    id: string;
    amount: number;
    status: 'soft_circle' | 'committed' | 'funded';
    lp: {
      name: string;
      email: string;
    };
  }>;
}

export default function SPVList() {
  const [spvs, setSPVs] = useState<SPV[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSPVs = async () => {
      try {
        const data = await getSPVs();
        setSPVs(data as SPV[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load SPVs');
      } finally {
        setLoading(false);
      }
    };

    loadSPVs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateProgressClass = (current: number, target: number) => {
    const progress = Math.min(Math.floor((current / target) * 10) * 10, 100);
    return styles[`progress${progress}`];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">SPV Dashboard</h1>
        <Link href="/spv/new">
          <Button>Create New SPV</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spvs.map((spv) => (
          <motion.div
            key={spv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{spv.name}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  spv.status === 'active' ? 'bg-green-100 text-green-800' :
                  spv.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {spv.status.charAt(0).toUpperCase() + spv.status.slice(1)}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{spv.description || 'No description provided'}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{formatCurrency(spv.current_size)} / {formatCurrency(spv.target_size)}</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progressFill} ${calculateProgressClass(spv.current_size, spv.target_size)}`}
                  ></div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">Created by:</span>
                  <span className="font-medium">{spv.created_by_profile?.full_name || 'Unknown'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="mr-2">Documents:</span>
                  <span className="font-medium">{spv.documents?.length || 0}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="mr-2">Investors:</span>
                  <span className="font-medium">{spv.investments?.length || 0}</span>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/deals/${spv.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {spvs.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No SPVs found</h3>
          <p className="text-gray-600">Get started by creating your first SPV</p>
        </div>
      )}
    </div>
  );
}
