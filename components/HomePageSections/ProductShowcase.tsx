
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    type: "car",
    name: "Toyota Landcruiser",
    description: "Powerful and reliable SUV perfect for Tanzanian roads",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    type: "car",
    name: "Honda Accord",
    description: "Efficient and comfortable sedan with excellent fuel economy",
    image: "https://images.unsplash.com/photo-1592544665618-972a0cdb35b8?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    type: "car",
    name: "Nissan X-Trail",
    description: "Versatile crossover with advanced safety features",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    type: "appliance",
    name: "Panasonic Refrigerator",
    description: "Energy-efficient refrigerator with advanced cooling technology",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    type: "appliance",
    name: "Hitachi Washing Machine",
    description: "Smart washing machine with multiple wash programs",
    image: "https://images.unsplash.com/photo-1626806819282-2c1a93e8f480?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    type: "appliance",
    name: "Mitsubishi Air Conditioner",
    description: "Powerful cooling with energy-saving features",
    image: "https://images.unsplash.com/photo-1628911771814-5d2e2ab3d67d?auto=format&fit=crop&q=80"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-coolex-blue mb-4">Product Showcase</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our selection of premium Japanese cars and appliances, each chosen for quality, reliability, and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    product.type === 'car' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {product.type === 'car' ? 'Vehicle' : 'Appliance'}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-coolex-blue">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
