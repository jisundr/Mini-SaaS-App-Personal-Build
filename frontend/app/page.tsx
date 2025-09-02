import { PricingTable } from "@/components/pricing-table"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Scale your business with our flexible pricing options. From startups to enterprise, 
            we have the right solution for you.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="mb-16">
          <PricingTable />
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Contact our sales team to learn more about our Enterprise solutions.
          </p>
          <a 
            href="mailto:sales@example.com" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  )
}
