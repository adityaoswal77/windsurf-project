'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const mockVestingData = [
  { month: 'Jan', vested: 1000, unvested: 3000 },
  { month: 'Feb', vested: 1250, unvested: 2750 },
  { month: 'Mar', vested: 1500, unvested: 2500 },
  { month: 'Apr', vested: 1750, unvested: 2250 },
  { month: 'May', vested: 2000, unvested: 2000 },
  { month: 'Jun', vested: 2250, unvested: 1750 },
];

const mockEquityValue = [
  { month: 'Jan', value: 50000 },
  { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 55000 },
  { month: 'Apr', value: 54000 },
  { month: 'May', value: 58000 },
  { month: 'Jun', value: 62000 },
];

const mockHoldings = [
  {
    company: 'TechCorp Inc.',
    shares: 10000,
    value: 50000,
    type: 'Common Stock',
    vestingStatus: '45% vested',
  },
  {
    company: 'AI Solutions Ltd.',
    shares: 5000,
    value: 25000,
    type: 'Preferred Stock',
    vestingStatus: '60% vested',
  },
  {
    company: 'Data Systems Co.',
    shares: 7500,
    value: 37500,
    type: 'Options',
    vestingStatus: '30% vested',
  },
];

export default function Equity() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Your Equity</h1>
          <p className="mt-2 text-gray-600">
            Track your holdings, vesting schedule, and equity value
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">$112,500</p>
            <p className="mt-1 text-sm text-green-600">↑ 12.5% from last month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-sm font-medium text-gray-500">Vested Amount</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">$45,000</p>
            <p className="mt-1 text-sm text-gray-600">40% of total equity</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-sm font-medium text-gray-500">Total Shares</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">22,500</p>
            <p className="mt-1 text-sm text-gray-600">Across 3 companies</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`${
                selectedTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('vesting')}
              className={`${
                selectedTab === 'vesting'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Vesting Schedule
            </button>
            <button
              onClick={() => setSelectedTab('holdings')}
              className={`${
                selectedTab === 'holdings'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Holdings
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {selectedTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Equity Value Over Time
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockEquityValue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0070f3"
                      fill="#0070f3"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {selectedTab === 'vesting' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Vesting Progress
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockVestingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vested" stackId="a" fill="#0070f3" />
                    <Bar dataKey="unvested" stackId="a" fill="#e5e7eb" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {selectedTab === 'holdings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shares
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vesting Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockHoldings.map((holding, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {holding.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {holding.shares.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${holding.value.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {holding.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {holding.vestingStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
