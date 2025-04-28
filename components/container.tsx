// src/components/Container.tsx

import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      {children}
    </div>
  )
}
