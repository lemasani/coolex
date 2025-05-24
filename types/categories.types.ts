export type ProductCategory = {
    id: string;
    name: string;
    slug: string;
    specificationKeys: string[];
}


export type ProductCategoryDisplay = {
    id: string;
    name: string;
    slug: string;
    productCount: number;
    specificationKeys: string[];
}