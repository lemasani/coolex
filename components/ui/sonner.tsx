"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      // Remove the theme prop to prevent Next.js theme override
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-[var(--popover)] group-[.toaster]:text-[var(--popover-foreground)] group-[.toaster]:border-[var(--border)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[var(--muted-foreground)]",
          actionButton: "group-[.toast]:bg-[var(--primary)] group-[.toast]:text-[var(--primary-foreground)]",
          cancelButton: "group-[.toast]:bg-[var(--muted)] group-[.toast]:text-[var(--muted-foreground)]",
          success: "group toast-success group-[.toaster]:bg-[var(--success-lighter)] group-[.toaster]:text-[var(--success-dark)] group-[.toaster]:border-[var(--success)]",
          error: "group toast-error group-[.toaster]:bg-[var(--error-lighter)] group-[.toaster]:text-[var(--error-dark)] group-[.toaster]:border-[var(--error)]",
          info: "group toast-info group-[.toaster]:bg-[var(--popover)] group-[.toaster]:text-[var(--popover-foreground)] group-[.toaster]:border-[var(--primary)]",
          warning: "group toast-warning group-[.toaster]:bg-[var(--accent)] group-[.toaster]:text-[var(--accent-foreground)] group-[.toaster]:border-[var(--accent)]",
        }
      }}
      style={
        {
          // Override Sonner's default CSS variables with your custom ones
          "--normal-bg": "var(--popover)",
          "--normal-border": "var(--border)",
          "--normal-text": "var(--popover-foreground)",
          "--success-bg": "var(--success-lighter)",
          "--success-text": "var(--success-dark)",
          "--success-border": "var(--success)",
          "--error-bg": "var(--error-lighter)",
          "--error-text": "var(--error-dark)",
          "--error-border": "var(--error)",
          "--info-bg": "var(--popover)",
          "--info-text": "var(--popover-foreground)",
          "--info-border": "var(--primary)",
          "--warning-bg": "var(--accent)",
          "--warning-text": "var(--accent-foreground)",
          "--warning-border": "var(--accent)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }