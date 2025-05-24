'use client'
import React from 'react'
import { useProductCategories } from '@/hooks/useProductCategories'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Edit, Trash2, MoreHorizontal } from 'lucide-react'
import { ProductCategoryDisplay } from '@/types/categories.types'

// Icons for different category types (keeping the same)
const categoryIcons: Record<string, React.ReactNode> = {
  cars: <div className="bg-blue-100 p-3 rounded-md"><svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10h8M7 14h1M16 14h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M3 18v-7.4c0-.56 0-.84.11-1.07.1-.23.3-.4.5-.5.23-.11.51-.11 1.07-.11h14.64c.56 0 .84 0 1.07.11.23.1.4.3.5.5.11.23.11.51.11 1.07V18c0 .56 0 .84-.11 1.07-.1.23-.3.4-.5.5-.23.11-.51.11-1.07.11H4.68c-.56 0-.84 0-1.07-.11a.91.91 0 01-.5-.5C3 18.84 3 18.56 3 18z" stroke="currentColor" strokeWidth="2"/><path d="M7 6c0-.93 0-1.395.14-1.776a3 3 0 012.12-2.118C9.64 2 10.104 2 11.035 2h1.93c.93 0 1.395 0 1.776.106a3 3 0 012.118 2.118C17 4.605 17 5.07 17 6M6 18v1M18 18v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>,
  bikes: <div className="bg-green-100 p-3 rounded-md"><svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19a4 4 0 100-8 4 4 0 000 8zM19 19a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9l-3 4M12 5v4M12 9h5.5M15 9l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>,
  home: <div className="bg-purple-100 p-3 rounded-md"><svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.175V19c0 .6 0 .9.098 1.127a1 1 0 00.438.437C3.774 20.66 4.075 20.66 4.675 20.66h14.65c.6 0 .9 0 1.127-.097a1 1 0 00.437-.438c.098-.226.098-.526.098-1.126v-8.825M12 3L3 9.825M16 8.5V3.75h2.75v6.825" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>,
  default: <div className="bg-gray-100 p-3 rounded-md"><svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" stroke="currentColor" strokeWidth="2"/></svg></div>
}

export default function CategoryCards() {
  const { categories, loading, error } = useProductCategories();
  
  if (loading) return <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div></div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  const getIconForCategory = (slug: string) => {
    const slugKey = slug.toLowerCase()
    return categoryIcons[slugKey] || categoryIcons.default;
  };

  const getDescriptionForCategory = (category: ProductCategoryDisplay) => {
    // Create description based on category type
    if (category.slug === 'cars') {
      return 'All types of vehicles including sedans, SUVs, trucks, and more';
    } else if (category.slug === 'bikes') {
      return 'Motorcycles, bicycles, and other two-wheeled vehicles';
    } else if (category.slug === 'home') {
      return 'Furniture, appliances, and household items';
    }
    return `Products in the ${category.name} category`;
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden border hover:border-gray-300 transition-colors">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex items-start space-x-4">
                {getIconForCategory(category.slug)}
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">/{category.slug}</p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Badge variant="outline" className="bg-black text-white">Active</Badge>
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="py-4 border-t border-b">
              <p className="text-sm text-muted-foreground">
                {getDescriptionForCategory(category)}
              </p>
              
              <div className="mt-4 text-sm font-medium text-muted-foreground">
                {category.productCount} products
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between pt-4">
              <Button variant="outline" size="sm" className="h-8 px-3 rounded-md">
                <Edit className="h-3.5 w-3.5 mr-1" />
                Edit
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md text-red-500 hover:bg-red-50 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}