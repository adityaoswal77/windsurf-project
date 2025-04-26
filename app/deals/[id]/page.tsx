'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../../../components/ui/Button';
import Modal from '../../../components/ui/Modal';

interface LP {
  id: string;
  name: string;
  email: string;
  allocation: number;
  status: 'soft_circle' | 'committed' | 'passed';
  lastContact: string;
}

const mockLPs: LP[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    allocation: 100000,
    status: 'committed',
    lastContact: '2025-04-25'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    allocation: 50000,
    status: 'soft_circle',
    lastContact: '2025-04-24'
  }
];

export default function DealRoom() {
  const [isAddLPModalOpen, setIsAddLPModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [newLP, setNewLP] = useState({ name: '', email: '', allocation: '', status: 'soft_circle' });
  const [updateMessage, setUpdateMessage] = useState('');

  const handleAddLP = () => {
    setIsAddLPModalOpen(true);
  };

  const handleSaveNewLP = () => {
    // TODO: Implement saving new LP
    console.log('Saving new LP:', newLP);
    setIsAddLPModalOpen(false);
    setNewLP({ name: '', email: '', allocation: '', status: 'soft_circle' });
  };

  const handleSendUpdate = () => {
    setIsUpdateModalOpen(true);
  };

  const handleSubmitUpdate = () => {
    // TODO: Implement sending update
    console.log('Sending update:', updateMessage);
    setIsUpdateModalOpen(false);
    setUpdateMessage('');
  };

  return (
    <div className="min-h-screen bg-[var(--notion-off-white)] pb-8">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Tech Growth Fund III</h1>
                <p className="text-[var(--text-secondary)]">Series B Investment in [Company Name]</p>
              </div>
              <div className="space-x-3">
                <Link href="/deals/1/communication">
                  <Button variant="secondary">
                    LP Communication
                  </Button>
                </Link>
                <Button onClick={handleSendUpdate}>
                  Send Updates
                </Button>
              </div>
            </div>
            
            {/* Progress Stats */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              <div className="bg-[var(--notion-beige)] p-4 rounded-[var(--radius-md)]">
                <div className="text-sm text-[var(--text-secondary)]">Target Size</div>
                <div className="text-xl font-semibold mt-1">$1,000,000</div>
              </div>
              <div className="bg-[var(--success-light)] p-4 rounded-[var(--radius-md)]">
                <div className="text-sm text-success">Committed</div>
                <div className="text-xl font-semibold mt-1">$150,000</div>
              </div>
              <div className="bg-[var(--warning-light)] p-4 rounded-[var(--radius-md)]">
                <div className="text-sm text-warning">Soft Circled</div>
                <div className="text-xl font-semibold mt-1">$300,000</div>
              </div>
              <div className="bg-[var(--notion-light-gray)] p-4 rounded-[var(--radius-md)]">
                <div className="text-sm text-[var(--text-secondary)]">Remaining</div>
                <div className="text-xl font-semibold mt-1">$550,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Summary and Deck */}
          <div className="col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6"
            >
              <h2 className="text-lg font-semibold mb-4">Investment Summary</h2>
              <div className="prose max-w-none">
                <p className="text-[var(--text-secondary)]">
                  Tech Growth Fund III is targeting a $10M investment in the Series B round of [Company Name], 
                  a rapidly growing SaaS platform in the enterprise collaboration space.
                </p>
                <h3 className="text-base font-medium mt-4 mb-2">Key Highlights</h3>
                <ul className="list-disc pl-4 text-[var(--text-secondary)]">
                  <li>15x YoY growth with $12M ARR</li>
                  <li>85% gross margins</li>
                  <li>250+ enterprise customers</li>
                  <li>Strong product-market fit in $45B market</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <h2 className="text-lg font-semibold mb-4">Pitch Deck</h2>
              <div className="aspect-[16/9] bg-[var(--notion-light-gray)] rounded-[var(--radius-md)] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[var(--text-tertiary)] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Embedded pitch deck viewer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - LP Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">LP Tracker</h2>
                <Button size="sm" onClick={handleAddLP}>Add LP</Button>
              </div>
              
              <div className="space-y-4">
                {mockLPs.map((lp) => (
                  <div
                    key={lp.id}
                    className="p-4 border border-[var(--border-default)] rounded-[var(--radius-md)] hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{lp.name}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{lp.email}</div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        lp.status === 'committed'
                          ? 'bg-[var(--success-light)] text-success'
                          : lp.status === 'soft_circle'
                          ? 'bg-[var(--warning-light)] text-warning'
                          : 'bg-[var(--error-light)] text-error'
                      }`}>
                        {lp.status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <div className="text-[var(--text-secondary)]">
                        ${lp.allocation.toLocaleString()}
                      </div>
                      <div className="text-[var(--text-tertiary)]">
                        Last contact: {lp.lastContact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add LP Modal */}
      <Modal
        isOpen={isAddLPModalOpen}
        onClose={() => setIsAddLPModalOpen(false)}
        title="Add New LP"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="lpName" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="lpName"
              className="input"
              value={newLP.name}
              onChange={(e) => setNewLP({ ...newLP, name: e.target.value })}
              placeholder="Enter LP name"
            />
          </div>
          <div>
            <label htmlFor="lpEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="lpEmail"
              className="input"
              value={newLP.email}
              onChange={(e) => setNewLP({ ...newLP, email: e.target.value })}
              placeholder="Enter LP email"
            />
          </div>
          <div>
            <label htmlFor="lpAllocation" className="block text-sm font-medium text-gray-700 mb-1">
              Allocation ($)
            </label>
            <input
              type="number"
              id="lpAllocation"
              className="input"
              value={newLP.allocation}
              onChange={(e) => setNewLP({ ...newLP, allocation: e.target.value })}
              placeholder="Enter allocation amount"
            />
          </div>
          <div>
            <label htmlFor="lpStatus" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="lpStatus"
              className="input"
              value={newLP.status}
              onChange={(e) => setNewLP({ ...newLP, status: e.target.value as LP['status'] })}
            >
              <option value="soft_circle">Soft Circle</option>
              <option value="committed">Committed</option>
              <option value="passed">Passed</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <Button variant="outline" onClick={() => setIsAddLPModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveNewLP}>
              Add LP
            </Button>
          </div>
        </div>
      </Modal>

      {/* Send Update Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        title="Send Update to LPs"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="updateMessage" className="block text-sm font-medium text-gray-700 mb-1">
              Update Message
            </label>
            <textarea
              id="updateMessage"
              rows={6}
              className="input"
              value={updateMessage}
              onChange={(e) => setUpdateMessage(e.target.value)}
              placeholder="Enter your update message..."
            />
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <Button variant="outline" onClick={() => setIsUpdateModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitUpdate}>
              Send Update
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
