import Users from '../data/UserData';
import { ProductData } from './ProductData';

const UserData = Users.map(user => ({
    id: user.id,
    name: user.name,
    address: user.address,
    phone_number: user.phone_number
}));

const ProductsData = ProductData.map(ProductData => ({
    id: ProductData.id,
    title: ProductData.title,
    description: ProductData.description,
    status: ProductData.status,
    user_id: ProductData.user_id,
    price: ProductData.price,
    average_ratings: ProductData.average_ratings,
    product_desc: ProductData.product_desc,
    category: ProductData.category
}));

export { UserData, ProductsData };