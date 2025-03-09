import Users from '../data/UserData';

const UserData = Users.map(user => ({
    id: user.id,
    name: user.name,
    address: user.address,
    phone_number: user.phone_number
}));

const ProductData = [

]
export { UserData };