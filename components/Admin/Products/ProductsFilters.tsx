import { SelectComponent } from "@/components/shared/Select";
import { Input } from "@/components/ui/input";


type FilterOption = {
  label: string;
  value: string;
};

interface FiltersProps {
  filters: {
    search: string;
    category: string;
    status: string;
  };
  onFilterChange: (field: string, value: string) => void;
  categoryOptions: FilterOption[];
  statusOptions: FilterOption[];
}

export function ProductsFilters({
  filters,
  onFilterChange,
  categoryOptions,
  statusOptions
}: FiltersProps) {
  return (
    <div className="flex gap-4 flex-col sm:flex-row">
      <Input
        placeholder="Search products..."
        value={filters.search}
        onChange={(e) => onFilterChange('search', e.target.value)}
        className="sm:max-w-xs"
      />

      <div className="w-full lg:w-1/4">
        <SelectComponent
          options={categoryOptions}
          value={filters.category === "" ? "all" : filters.category}
          onValueChange={(value) => {
            onFilterChange('category', value === "all" ? "" : value);
          }}
          placeholder="All Categories"
          className="w-full"
        />
      </div>
      
      <div className="w-full lg:w-1/4">
        <SelectComponent
          options={statusOptions}
          value={filters.status === "" ? "all" : filters.status}
          onValueChange={(value) => {
            onFilterChange('status', value === "all" ? "" : value);
          }}
          placeholder="All Status"
          className="w-full"
        />
      </div>
    </div>
  );
}