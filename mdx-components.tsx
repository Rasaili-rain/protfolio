import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with anchor links
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-semibold mt-4 mb-2 text-foreground" {...props}>
        {children}
      </h4>
    ),
    
    // Paragraph
    p: ({ children, ...props }) => (
      <p className="text-base leading-7 mb-4 text-foreground/90" {...props}>
        {children}
      </p>
    ),
    
    // Links
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <Link
          href={href || '#'}
          className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </Link>
      );
    },
    
    // Lists
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    
    // Code blocks
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      return isInline ? (
        <code
          className="px-1.5 py-0.5 rounded bg-muted text-accent font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="p-4 rounded-lg bg-muted/50 overflow-x-auto mb-4 border border-border/50"
        {...props}
      >
        {children}
      </pre>
    ),
    
    // Blockquote
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-accent pl-4 py-2 mb-4 italic text-foreground/80 bg-muted/30 rounded-r"
        {...props}
      >
        {children}
      </blockquote>
    ),
    
    // Table
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-border" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-muted/50" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="px-4 py-2 text-left text-sm font-semibold text-foreground" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-4 py-2 text-sm text-foreground/90" {...props}>
        {children}
      </td>
    ),
    
    // Horizontal rule
    hr: (props) => (
      <hr className="my-8 border-border/50" {...props} />
    ),
    
    // Image
    img: ({ src, alt, ...props }) => (
      <span className="block my-6">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg border border-border/50"
          {...props}
        />
      </span>
    ),
    
     // Allow <Image /> directly inside MDX
    Image: (props) => (
      <span className="block my-8">
        <Image {...props} />
      </span>
    ),

    ...components,
  };
}