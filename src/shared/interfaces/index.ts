interface ProductData {
    id: string;
    imageUrl: string[];
    name: string;
    description: string;
    color: string;
    filterColor: string;
    price: number;
    brand: string;
    sizes: string[];
    category: string;
}

interface CartProductData {
    id: string;
    name: string;
    color: string;
    price: number;
    size: string;
    image: string;
    quantity: number;
}

interface RenderProductProps {
    appStatus: string;
    source?: ProductData[];
    searchData?: ProductData[]; 
}

interface DataSort {
    category: string;
}

export type { ProductData, CartProductData, RenderProductProps, DataSort };
