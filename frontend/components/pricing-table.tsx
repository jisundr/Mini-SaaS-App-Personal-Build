"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    badge: null,
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
      "Basic templates"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing businesses",
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Premium templates",
      "Custom integrations",
      "Team collaboration"
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations",
    badge: null,
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom development",
      "SSO integration",
      "Advanced security",
      "Dedicated manager"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
]

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {pricingTiers.map((tier) => (
        <Card 
          key={tier.name} 
          className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}
        >
          {tier.badge && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge variant="default" className="px-3 py-1">
                {tier.badge}
              </Badge>
            </div>
          )}
          
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground">{tier.period}</span>
            </div>
          </CardHeader>

          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Button 
              variant={tier.buttonVariant} 
              size="lg" 
              className="w-full"
            >
              {tier.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}