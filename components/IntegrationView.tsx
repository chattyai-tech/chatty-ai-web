'use client'

import { useState } from 'react'
import type { FC } from 'react'
import { FileText, Bot, Send, Plus } from 'lucide-react'

interface Persona {
  id: string
  name: string
  description: string
}

interface IntegrationViewProps {
  personas: Persona[]
}

export const IntegrationView: FC<IntegrationViewProps> = ({ personas }) => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null)
  const [documentContent, setDocumentContent] = useState(
    `Quarterly Business Report - Q4 2024

Executive Summary:
Our company has demonstrated strong performance in Q4 2024, with significant growth across multiple key metrics. 

Financial Highlights:
• Revenue increased by 23% year-over-year
• Operating margin improved to 18.5%
• Customer acquisition costs decreased by 15%

Key Achievements:
• Launched three new product lines
• Expanded into two new geographic markets
• Achieved 98% customer satisfaction rating

Challenges:
• Supply chain disruptions affected delivery timelines
• Increased competition in core markets
• Regulatory changes requiring compliance updates

Recommendations:
[AI Assistant will help complete this section]`
  )
  const [aiPrompt, setAiPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateContent = async () => {
    if (!selectedPersona || !aiPrompt.trim()) return

    setIsGenerating(true)
    
    // Simulate AI content generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const generatedContent = {
      lawyer: `Based on the regulatory changes mentioned, we recommend:

1. Immediate compliance audit of all current operations
2. Implementation of new data protection protocols
3. Staff training on updated regulatory requirements
4. Establishment of compliance monitoring systems
5. Documentation of all compliance measures for regulatory review

These actions will mitigate potential legal risks and ensure continued operational compliance.`,
      
      copywriter: `Looking at our Q4 achievements, here's the story we should tell:

"Revolutionary Growth, Unmatched Success"

In a remarkable fourth quarter, our company didn't just meet expectations—we shattered them. With a 23% revenue surge and customer satisfaction hitting an unprecedented 98%, we've redefined what's possible in our industry.

Our three new product lines aren't just additions; they're game-changers that are reshaping market dynamics. As we expand into new territories, we're not just growing—we're leading the charge toward a brighter future.

The challenges we've faced aren't obstacles; they're opportunities that have made us stronger, smarter, and more resilient.`,
      
      analyst: `Strategic Analysis & Forward-Looking Recommendations:

Performance Analysis:
- Revenue growth of 23% exceeds industry average of 15%
- Operating margin of 18.5% ranks in top quartile
- Customer acquisition cost reduction of 15% indicates improved efficiency

Risk Assessment:
- Supply chain vulnerabilities require immediate attention
- Competitive pressure suggests need for differentiation strategy
- Regulatory compliance costs may impact margins by 2-3%

Q1 2025 Priorities:
1. Diversify supply chain to reduce disruption risk
2. Invest in competitive differentiation initiatives
3. Budget for compliance and regulatory adaptation
4. Explore strategic partnerships for market expansion

Projected Q1 2025 Metrics:
- Revenue growth: 18-22% (moderated from Q4)
- Operating margin: 17-19% (compliance impact)
- Customer satisfaction: Maintain >95%`
    }

    const content = generatedContent[selectedPersona as keyof typeof generatedContent] || 'Content generated successfully.'
    
    setDocumentContent(prev => prev + '\n\n' + content)
    setAiPrompt('')
    setIsGenerating(false)
  }

  return (
    <div className="h-full flex bg-gray-50">
      {/* Main Document Area */}
      <div className="flex-1 flex flex-col bg-white m-4 rounded-lg shadow-sm border border-gray-200">
        {/* Document Header */}
        <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Business Document</h3>
              <p className="text-xs text-gray-500">Microsoft Word Simulator</p>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <pre className="whitespace-pre-wrap font-serif text-sm text-gray-800 leading-relaxed">
            {documentContent}
          </pre>
        </div>

        {/* Document Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Page 1 of 1</span>
            <span>Word Count: {documentContent.split(/\s+/).length}</span>
          </div>
        </div>
      </div>

      {/* Chatty AI Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 bg-purple-50">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">Chatty AI Assistant</h3>
          </div>
          <p className="text-xs text-purple-700 mt-1">AI-powered document enhancement</p>
        </div>

        {/* Persona Selection */}
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Choose AI Persona</h4>
          <div className="space-y-2">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedPersona === persona.id
                    ? 'border-purple-300 bg-purple-50 text-purple-900'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="font-medium text-sm">{persona.name}</div>
                <div className="text-xs text-gray-500 mt-1">{persona.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Prompt Input */}
        <div className="flex-1 flex flex-col p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Generate Content</h4>
          
          {selectedPersona ? (
            <div className="flex-1 flex flex-col">
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder={`Ask the ${personas.find(p => p.id === selectedPersona)?.name} to help with your document...`}
                className="flex-1 p-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50"
                disabled={isGenerating}
              />
              
              <button
                onClick={generateContent}
                disabled={!aiPrompt.trim() || isGenerating}
                className="mt-3 w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Generate Content
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
              Select a persona to get started
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Actions</h4>
          <div className="space-y-1">
            <button className="w-full text-left p-2 text-xs text-gray-600 hover:text-purple-600 transition-colors">
              • Summarize document
            </button>
            <button className="w-full text-left p-2 text-xs text-gray-600 hover:text-purple-600 transition-colors">
              • Improve readability
            </button>
            <button className="w-full text-left p-2 text-xs text-gray-600 hover:text-purple-600 transition-colors">
              • Add executive summary
            </button>
            <button className="w-full text-left p-2 text-xs text-gray-600 hover:text-purple-600 transition-colors">
              • Format for presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
