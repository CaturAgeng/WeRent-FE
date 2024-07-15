import { Product, Customer } from "features/product";

export const products: Product[] = [
    { 
        id: '01',
        name: 'Black Kaftan with Embellishment',
        image: ['/dummy/contohAbaya.png', '/dummy/contohAbaya2.png'],
        size: ['XS','S','M','L','XL'],
        rating: 4,
        review: 100,
        rentPrice: '300.000',
        rentDays: 4,
    },
    { 
        id: '02',
        name: '1991 G Wagon 300GF W 463 2 Door Full Spec',
        image: ['/dummy/contohMobil.png'],
        size: ['Clean'],
        rating: 5,
        review: 50,
        rentPrice: '1.500.000',
        rentDays: 1,
    },
];

export const customers: Customer[] = [
    {
        id: '01',
        rating: 5
    },
    {
        id: '02',
        rating: 4
    },
    {
        id: '03',
        rating: 3
    },
];

// SIZE DETAIL
export const generateSizeDetail = (sizes: string[]) => {
    return sizes.map((size) => {
        let bustSize, lengthSize;
        switch (size) {
            case 'XS':
                bustSize = '74';
                lengthSize = '87';
                break;
            case 'S':
                bustSize = '76';
                lengthSize = '88';
                break;
            case 'M':
                bustSize = '78';
                lengthSize = '89';
                break;
            case 'L':
                bustSize = '80';
                lengthSize = '90';
                break;
            case 'XL':
                bustSize = '82';
                lengthSize = '91';
                break;
            default:
                bustSize = 'N/A';
                lengthSize = 'N/A';
        }
        return { size, bustSize, lengthSize };
    });
};

// MEAN RATING
export const calculateMeanRating = (customers: Customer[]): number => {
    const totalRatings = customers.reduce((accumulator, customer) => accumulator + customer.rating, 0);
    return totalRatings / customers.length;
}