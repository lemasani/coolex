'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Plus, X, Loader2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { CreateCategoryFormValues, createCategorySchema } from '@/types/categories.types';
import { slugify } from '@/lib/utils';
import { createCategory } from '@/services/categories.services';

// Component for specification key management
function SpecificationKeysInput({ 
  specificationKeys, 
  onAdd, 
  onRemove 
}: { 
  specificationKeys: string[],
  onAdd: (key: string) => void,
  onRemove: (index: number) => void 
}) {
  const [newSpecKey, setNewSpecKey] = useState('');

  const handleAddKey = () => {
    if (!newSpecKey.trim()) return;
    onAdd(newSpecKey);
    setNewSpecKey('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddKey();
    }
  };

  return (
    <div className="space-y-3">
      <FormLabel className="text-base font-medium">Specification Keys</FormLabel>
      <FormDescription className="mt-0">
        Add properties that products in this category can have (e.g. Size, Color, Material)
      </FormDescription>
      
      <div className="flex items-center gap-2">
        <Input
          value={newSpecKey}
          onChange={(e) => setNewSpecKey(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add specification key"
          className="flex-1 h-10"
        />
        <Button 
          type="button" 
          onClick={handleAddKey}
          size="sm"
          className="h-10"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>
      
      {specificationKeys.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-3">
          {specificationKeys.map((key, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="px-2 py-1 h-7 text-sm"
            >
              {key}
              <button 
                type="button"
                onClick={() => onRemove(index)}
                className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : (
        <div className="rounded-md p-4 text-center">
          <p className="text-sm text-accent">
            No specification keys added yet
          </p>
        </div>
      )}
    </div>
  );
}

export default function CreateCategoryForm() {
  const [previewSlug, setPreviewSlug] = useState('');

 
  const form = useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: '',
      specificationKeys: [] as string[],
    }
  });

  const isLoading = form.formState.isSubmitting;

  const watchName = form.watch('name');
  const specificationKeys = form.watch('specificationKeys') || [];

  // Generate preview slug whenever name changes
  useEffect(() => {
    setPreviewSlug(watchName ? slugify(watchName) : '');
  }, [watchName]);

  const handleAddSpecKey = (key: string) => {
    // Check for duplicates
    if (specificationKeys.includes(key.trim())) {
      toast.error(`Duplicate key: ${key.trim()} already exists`);
      return;
    }

    form.setValue('specificationKeys', [...specificationKeys, key.trim()]);
  };

  const handleRemoveSpecKey = (index: number) => {
    const updated = [...specificationKeys];
    updated.splice(index, 1);
    form.setValue('specificationKeys', updated);
  };

  const onSubmit = async (data: CreateCategoryFormValues) => {
    
     try {
      // Use the service function instead of inline fetch
      const result = await createCategory(data);

      toast.success(`Category Created: ${result.name} has been successfully created`);
      
      // Reset form
      form.reset();
      setPreviewSlug('');
    } catch (error) {
      toast.error(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    } 
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl">Create New Category</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Category Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter category name" 
                        className="h-10" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      {previewSlug && (
                        <div className="flex items-center mt-2 text-sm">
                          <span className="text-muted-foreground mr-2">Generated URL:</span>
                          <Badge variant="outline" className="font-mono text-xs py-0">
                            /{previewSlug}
                          </Badge>
                        </div>
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="specificationKeys"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <SpecificationKeysInput 
                      specificationKeys={field.value || []}
                      onAdd={handleAddSpecKey}
                      onRemove={handleRemoveSpecKey}
                    />
                    {error && <FormMessage>{error.message}</FormMessage>}
                  </FormItem>
                )}
              />
            </div>

            <CardFooter className="flex justify-end px-0 pt-4 border-t">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="min-w-[120px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : 'Create Category'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}