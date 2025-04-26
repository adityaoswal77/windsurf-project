'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';

interface LP {
  id: string;
  name: string;
  email: string;
  allocation: number;
  status: 'pending' | 'invited' | 'committed';
}

const mockLPs: LP[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    allocation: 100000,
    status: 'committed'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    allocation: 50000,
    status: 'invited'
  }
];

const mockContacts = [
  { name: 'Michael Brown', email: 'michael@example.com' },
  { name: 'Emma Wilson', email: 'emma@example.com' },
  { name: 'David Lee', email: 'david@example.com' }
];

const aiSuggestions = [
  { name: 'Alex Rivera', email: 'alex@example.com', reason: 'Previously invested in SaaS companies' },
  { name: 'Lisa Chen', email: 'lisa@example.com', reason: 'Active angel investor in tech' },
  { name: 'Tom Wilson', email: 'tom@example.com', reason: 'Interest in enterprise software' }
];

export default function LPTargets() {
  const router = useRouter();
  const [isAddLPModalOpen, setIsAddLPModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAISuggestionsModalOpen, setIsAISuggestionsModalOpen] = useState(false);
  const [newLP, setNewLP] = useState({ name: '', email: '', allocation: '' });

  const handleImportContacts = () => {
    setIsImportModalOpen(true);
  };

  const handleAISuggestions = () => {
    setIsAISuggestionsModalOpen(true);
  };

  const handleAddLP = () => {
    setIsAddLPModalOpen(true);
  };

  const handleEditLP = (lpId: string) => {
    // TODO: Implement edit LP modal
    console.log('Edit LP clicked', lpId);
  };

  const handleSaveNewLP = () => {
    // TODO: Implement saving new LP
    console.log('Saving new LP:', newLP);
    setIsAddLPModalOpen(false);
    setNewLP({ name: '', email: '', allocation: '' });
  };

  const handleImportSelected = (contacts: typeof mockContacts) => {
    // TODO: Implement importing selected contacts
    console.log('Importing contacts:', contacts);
    setIsImportModalOpen(false);
  };

  const handleAddAISuggestion = (suggestion: typeof aiSuggestions[0]) => {
    // TODO: Implement adding AI suggestion
    console.log('Adding AI suggestion:', suggestion);
    setIsAISuggestionsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="card p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">LP Targets</h2>
          <p className="text-[var(--text-secondary)]">
            Add potential investors and their allocations
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <Button variant="secondary" onClick={handleImportContacts}>
              Import Contacts
            </Button>
            <Button variant="secondary" onClick={handleAISuggestions}>
              Get AI Suggestions
            </Button>
          </div>
          <Button onClick={handleAddLP}>
            Add LP Manually
          </Button>
        </div>

        <div className="border border-[var(--border-default)] rounded-[var(--radius-md)] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--notion-light-gray)]">
                <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-default)]">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-default)]">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-default)]">Allocation</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-default)]">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-default)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockLPs.map((lp) => (
                <tr key={lp.id} className="border-t border-[var(--border-default)]">
                  <td className="px-4 py-3">
                    <div className="font-medium">{lp.name}</div>
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{lp.email}</td>
                  <td className="px-4 py-3">${lp.allocation.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      lp.status === 'committed'
                        ? 'bg-[var(--success-light)] text-success'
                        : lp.status === 'invited'
                        ? 'bg-[var(--warning-light)] text-warning'
                        : 'bg-[var(--notion-light-gray)] text-[var(--text-secondary)]'
                    }`}>
                      {lp.status.charAt(0).toUpperCase() + lp.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="outline" size="sm" onClick={() => handleEditLP(lp.id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--notion-beige)] p-4 rounded-[var(--radius-md)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Total Allocation</div>
              <div className="text-[var(--text-secondary)]">
                ${mockLPs.reduce((sum, lp) => sum + lp.allocation, 0).toLocaleString()}
              </div>
            </div>
            <div>
              <div className="font-medium">Target</div>
              <div className="text-[var(--text-secondary)]">$1,000,000</div>
            </div>
            <div>
              <div className="font-medium">Remaining</div>
              <div className="text-[var(--text-secondary)]">
                ${(1000000 - mockLPs.reduce((sum, lp) => sum + lp.allocation, 0)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
        <Button onClick={() => router.push('/spv/new/memo')}>
          Continue to Memo
        </Button>
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

      {/* Import Contacts Modal */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        title="Import Contacts"
      >
        <div className="space-y-4">
          <div className="border border-[var(--border-default)] rounded-[var(--radius-md)] divide-y">
            {mockContacts.map((contact, index) => (
              <div key={index} className="p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{contact.email}</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleImportSelected([contact])}>
                  Import
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* AI Suggestions Modal */}
      <Modal
        isOpen={isAISuggestionsModalOpen}
        onClose={() => setIsAISuggestionsModalOpen(false)}
        title="AI-Suggested LPs"
      >
        <div className="space-y-4">
          <div className="border border-[var(--border-default)] rounded-[var(--radius-md)] divide-y">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium">{suggestion.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{suggestion.email}</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleAddAISuggestion(suggestion)}>
                    Add LP
                  </Button>
                </div>
                <div className="text-sm text-[var(--text-tertiary)] bg-[var(--notion-light-gray)] p-2 rounded">
                  {suggestion.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
