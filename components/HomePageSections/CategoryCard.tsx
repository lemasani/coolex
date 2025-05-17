import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  badgeText?: string;
  path: string; // Add path property for navigation
  onInquire?: () => void; // Keep this for backwards compatibility
}

const CategoryCard = ({
  name,
  description,
  icon: Icon,
  imageUrl,
  badgeText,
  path,
  onInquire,
}: CategoryCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    } else if (onInquire) {
      onInquire();
    }
  };

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image container with relative positioning for badge overlay */}
      <div className="relative">
        {/* Badge positioned on the top right */}
        {badgeText && (
          <Badge className="absolute top-2 right-2 z-10" variant="secondary">
            {badgeText}
          </Badge>
        )}

        {/* Image display if available */}
        {imageUrl && (
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src={imageUrl}
              alt={name}
              className="object-cover"
              fill
              sizes="100vw"
            />
          </div>
        )}
      </div>

      <CardHeader className="flex flex-row items-center gap-4 pt-6">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="h-10 w-10 rounded-full bg-coolex-accent/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-coolex-accent" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" className="w-full mt-2" onClick={handleClick}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;