
import CategoryCards from '@/components/Categories/CategoriesCards'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function CategoriesPage() {
  return (
    <>
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Categories</h1>
            <p className="text-muted-foreground">Manage your product categories here.</p>
          </div>
          <Button variant="default">Add Category</Button>
        </div>

        <CategoryCards />
      </section>
    </>
  )
}