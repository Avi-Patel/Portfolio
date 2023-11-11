export type Product = {
  id: string;
  label: string;
  description?: string;
  images: string[];
  price?: string;
  pdfLink?: string;
  details: Record<string, string>;
  additional?: Record<string, string[]>;
};

export type ProductGroup = {
  id: string;
  label: string;
  description: string;
  items: Product[];
};
