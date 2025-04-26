'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../../../components/ui/Button';

interface Message {
  id: string;
  type: 'user' | 'ai' | 'lp';
  content: string;
  sender: string;
  timestamp: string;
}

const mockMessages: Message[] = [
  {
    id: '1',
    type: 'lp',
    content: 'What are the key growth metrics for this company?',
    sender: 'John Smith',
    timestamp: '2025-04-26T09:30:00'
  },
  {
    id: '2',
    type: 'ai',
    content: 'Based on the deck, the company has shown:\n- 15x YoY growth\n- $12M ARR\n- 85% gross margins\n- 145% NDR',
    sender: 'AI Assistant',
    timestamp: '2025-04-26T09:31:00'
  }
];

export default function Communication() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[var(--notion-off-white)] pb-8">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">LP Communication</h1>
                <p className="text-[var(--text-secondary)]">Tech Growth Fund III</p>
              </div>
              <Button variant="outline" onClick={() => router.back()}>
                Back to Deal Room
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Chat Area */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              {/* Chat Messages */}
              <div className="h-[600px] flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {mockMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : message.type === 'ai'
                          ? 'bg-[var(--notion-light-gray)]'
                          : 'bg-white border border-[var(--border-default)]'
                      } rounded-[var(--radius-lg)] p-4`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{message.sender}</span>
                          <span className="text-xs opacity-70">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-[var(--border-default)] p-4">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="input flex-1"
                    />
                    <Button>Send</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Templates and Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 space-y-6"
          >
            {/* Batch Updates */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-4">Batch Updates</h2>
              <div className="space-y-4">
                <Button variant="secondary" className="w-full justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  New Investment Update
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Schedule LP Meeting
                </Button>
              </div>
            </div>

            {/* Email Templates */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-4">Email Templates</h2>
              <div className="space-y-3">
                <div className="p-3 border border-[var(--border-default)] rounded-[var(--radius-md)] hover:border-primary/30 cursor-pointer">
                  <div className="font-medium">Welcome Email</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Initial outreach to new LPs
                  </div>
                </div>
                <div className="p-3 border border-[var(--border-default)] rounded-[var(--radius-md)] hover:border-primary/30 cursor-pointer">
                  <div className="font-medium">Monthly Update</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Regular portfolio performance update
                  </div>
                </div>
                <div className="p-3 border border-[var(--border-default)] rounded-[var(--radius-md)] hover:border-primary/30 cursor-pointer">
                  <div className="font-medium">Capital Call</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Request for committed capital
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-4">AI Assistant</h2>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  Generate Response
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Summarize Discussion
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Draft Update Email
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
