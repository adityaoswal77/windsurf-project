'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../../../components/ui/Button';

export default function MemoPreview() {
  const router = useRouter();

  const handleExportPDF = () => {
    // TODO: Implement PDF export
    console.log('Export PDF clicked');
  };

  const handleEditMemo = () => {
    // TODO: Implement memo editing
    console.log('Edit memo clicked');
  };

  const handleCreateSPV = () => {
    // TODO: Implement SPV creation
    router.push('/deals/1');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="card p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Investment Memo</h2>
          <p className="text-[var(--text-secondary)]">
            Review and customize the AI-generated memo
          </p>
        </div>

        <div className="flex space-x-4">
          <Button variant="secondary" onClick={handleExportPDF}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Export PDF
          </Button>
          <Button variant="secondary" onClick={handleEditMemo}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Memo
          </Button>
        </div>

        <div className="border border-[var(--border-default)] rounded-[var(--radius-md)] p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Growth Fund III</h3>
            <div className="prose max-w-none">
              <h4 className="text-base font-medium mb-2">Investment Thesis</h4>
              <p className="text-[var(--text-secondary)]">
                Tech Growth Fund III is targeting a $10M investment in Series B round of [Company Name], 
                a rapidly growing SaaS platform in the enterprise collaboration space. The company has 
                demonstrated strong product-market fit with 15x YoY growth and an impressive list of 
                enterprise customers.
              </p>

              <h4 className="text-base font-medium mb-2 mt-4">Market Opportunity</h4>
              <p className="text-[var(--text-secondary)]">
                The enterprise collaboration software market is expected to reach $45B by 2025, growing at 
                a CAGR of 12%. [Company Name] is well-positioned to capture a significant share of this 
                market with its unique approach to [key differentiation].
              </p>

              <h4 className="text-base font-medium mb-2 mt-4">Traction & Metrics</h4>
              <ul className="list-disc pl-4 text-[var(--text-secondary)]">
                <li>ARR: $12M (growing 15x YoY)</li>
                <li>Gross Margin: 85%</li>
                <li>NDR: 145%</li>
                <li>Customer Count: 250+ enterprise customers</li>
              </ul>

              <h4 className="text-base font-medium mb-2 mt-4">Deal Terms</h4>
              <ul className="list-disc pl-4 text-[var(--text-secondary)]">
                <li>Pre-money Valuation: $200M</li>
                <li>Round Size: $30M</li>
                <li>SPV Allocation: $10M</li>
                <li>Pro-rata Rights: Yes</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-default)] pt-6">
            <h4 className="text-base font-medium mb-2">AI Insights</h4>
            <div className="space-y-3">
              <div className="bg-[var(--primary-light)] text-primary p-3 rounded-[var(--radius-md)]">
                Strong unit economics with high gross margins indicate scalable business model
              </div>
              <div className="bg-[var(--success-light)] text-success p-3 rounded-[var(--radius-md)]">
                Above-market NDR suggests strong product-market fit and customer satisfaction
              </div>
              <div className="bg-[var(--warning-light)] text-warning p-3 rounded-[var(--radius-md)]">
                Consider discussing customer concentration in next diligence round
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
        <Button onClick={handleCreateSPV}>
          Create SPV
        </Button>
      </div>
    </motion.div>
  );
}
