import Users from '../data/UserData';

const UserData = Users.map(user => ({
    id: user.id,
    name: user.name,
    address: user.address,
    phone_number: user.phone_number
}));

const categories = ["pakaian atas", "pakaian bawah", "pakaian dalam", "aksesoris"];
const getRandomCategory = () => categories[Math.floor(Math.random() * categories.length)];

const ProductData = Array.from({ length: 200}, (_, index) => {
    const category = getRandomCategory();
    const imageUrl = category === "pakaian atas" ? "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300" :
                    category === "pakaian bawah" ? "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300" :
                    category === "pakaian dalam" ? "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300" :
                    "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300";
    return {
        id: index + 1,
        title: `Product ${index + 1}`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestias beatae repudiandae neque quod corporis aliquam inventore, illum ullam commodi laborum magni id doloremque aperiam odio facilis veritatis odit qui molestiae, delectus consequatur cupiditate soluta sequi. Voluptatibus architecto, voluptates, excepturi velit maxime magni inventore at libero quasi reiciendis deleniti tempore. ${index + 1}`,
        status: Math.random() > 0.5 ? "Recycle" : "Fixed",
        user_id: index + 1,
        price: (index + 1) * 10000,
        image: imageUrl,
        average_ratings: (Math.random() * 2 + 3).toFixed(1),
        product_desc: `Detailed description for product ${index + 1}`,
        category: category,
        detailed_product: `Detailed product information for product ${index + 1}`,
        quantity: Math.floor(Math.random() * 10) + 1,
        comments: `${UserData[Math.floor(Math.random() * UserData.length)].name} commented on this product`,
        Rating : Math.floor(Math.random() * 5) + 1
    };
});

const Review = [
    {
        id: 1,
        user: UserData[0],
        title: "Great Product",
        descReview: "I really liked this product. It exceeded my expectations.",
        ratings: 5,
        product_id: ProductData[0].id
    },
    {
        id: 2,
        user: UserData[1],
        title: "Not Bad",
        descReview: "The product is okay, but could be better.",
        ratings: 3,
        product_id: ProductData[1].id
    },
    {
        id: 3,
        user: UserData[2],
        title: "Terrible Experience",
        descReview: "I had a bad experience with this product. It did not work as expected.",
        ratings: 1,
        product_id: ProductData[2].id
    },
    {
        id: 4,
        user: UserData[0],
        title: "Good Value",
        descReview: "The product offers good value for the price.",
        ratings: 4,
        product_id: ProductData[0].id
    },
    {
        id: 5,
        user: UserData[1],
        title: "Average Quality",
        descReview: "The quality is average, but it serves the purpose.",
        ratings: 3,
        product_id: ProductData[1].id
    },
    {
        id: 6,
        user: UserData[2],
        title: "Highly Recommend",
        descReview: "I highly recommend this product. It is worth every penny.",
        ratings: 5,
        product_id: ProductData[2].id
    }
];

export { UserData, ProductData, Review };