import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate BreadcrumbList schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.chatty-ai.ai',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://www.chatty-ai.ai${item.href}`,
      })),
    ],
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb UI - Accessible & Readable */}
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
              aria-label="Home"
            >
              <Home className="w-3 h-3" />
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {isLast ? (
                  <span className="text-[var(--text-primary)] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[var(--text-primary)] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
