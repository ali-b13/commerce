export const products = [
    {
        id: 1,
        title: "T-Shirt Men",
        price: 400,
        description: "Nice T-shirt for all kind",
        image: "/uploads/t-shirt-jordan-white.jpg",
        category: "shirts",
        brand: "Jordan",
        stock: 100,
        currencyCode:"USD",
        material: "Cotton",
        option:[
            { id: "43464", name: "color", values: ["Grey", "White"]},
            { id: "43474", name: "size", values: ["S", "XXL", "L"] },
        ],
        variants: [
            { id: 'variant-1fh5r', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Grey' }, { name: 'size', value: 'S' }] },
            { id: 'variant-2r6thf', availableForSale: true, selectedOptions: [{ name: 'color', value: 'White' }, { name: 'size', value: 'XXL' }] }
        ],
        rating: 4.5,
        reviews: [
            { userId: "1", comment: "Great product!", rating: 5 },

        ],
        salePrice: 350,
        weight: "0.5 lbs",
        material: "Cotton",
        country: "Made in USA"
        ,
        additionalImages: [{ altText: "image product t-shirt", src: "/uploads/t-shirt-jordan-grey.jpg" }],
        tags: ["Casual", "Men's Fashion", "t-shirt"],


    },
    
    
    {
        id: 2,
        title: "Cowboy hat",
        price: 50,
        description: "Beautiful hat for summer time so you can be fashionable person and gets attracted",
        image: "/uploads/cowboy-hat-black-1.png",
        category: "head wear",
        brand: "Arma",
        stock: 100,
        currencyCode:"USD",
        option: [
            { id: "43464", name: "color", values: ["Black", "Tan"] },
            { id: "43474", name: "size", values: ['63/4', '67/8', '71/2'] },
            
        ],
         variants: [
             { id: 'variant-154-45', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Black' }, { name: 'size', value: '63/4' }, { name: 'size', value: '67/8' }, { name: 'size', value: '71/2' }] },
             { id: 'variant-2-3443-', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' },{ name: 'size', value: '71/2' }] },
              { id: 'variant-2-34435-', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' }, { name: 'size', value: '63/4' }] },
               { id: 'variant-2-3443-', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' }, { name: 'size', value: '71/2' }] }
            ],

        rating: 4.5,
        reviews: [
            { userId: "1", comment: "Great product!", rating: 5 },
            
        ],
        salePrice: 40,
        
            weight: "0.5 lbs",
            material: "Cotton",
            country:"Made in USA"
        ,
        additionalImages: [{ src: "/uploads/cowboy-hat-black-2.png", altText: "product-black" }, { src: "/uploads/cowboy-hat-black-3.png" ,altText:"product 2"},
            { src: "/uploads/cowboy-hat-black-4.png", altText: 'product3' }, { src: "/uploads/cowboy-hat-black-5.png", altText: 'product5' }, { src: "/uploads/cowboy-hat-black-6.png", altText: 'product6' }, { src: "/uploads/cowboy-hat-tan-1.png" ,altText:'product7'},
            { src: "/uploads/cowboy-hat-tan-2.png", altText: "product-tan-2" }, { src: "/uploads/cowboy-hat-tan-3.png", altText: 'product-tan-3' }, { src: "/uploads/cowboy-hat-tan-4.png", altText: "product-tan-5" }, { src: "/uploads/cowboy-hat-tan-5.png", altText: 'product-5-tan-1' }, { src: "/uploads/cowboy-hat-tan-6.png" ,altText:"product-tan-8"}
        ],
        tags: ["hat", "Men's Fashion", "Summer Wear"],


    },
    {
        title: "Baby Onesie",
        price: 70,
        description: "Baby cloth to wear nice and affordable to get for your beloved child ",
        variants: ["6M", "3M", 'NB', "12M"],
        image: "/uploads/baby-onesie-black-1.png",
        category: "kids",
        reviews: [],
        brand: "Arma",
        stock: 40,
        currencyCode: "USD",
        option: [
            {
                name: "color",
                values: ["Black", "White", "Beige"]
            },
            {
                name: "Size",
                values: ["6M", "3M", 'NB', "12M"]
            },
        ],
        variants: [
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }, { name: 'Size', value: '6M' }] },
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Tan' }, { name: 'Size', value: '3M' }] }
        ],
        rating: 5,
        salePrice: 60,
        weight: "1 lbs",
        material: "Cotton",
        country: "Made in UK",
        additionalImages: [
            { src: "/uploads/baby-onesie-black-2.png", altText: "Image 2" },
            { src: "/uploads/baby-onesie-beige-1.png", altText: "Image 3" },
            { src: "/uploads/baby-onesie-beige-2.png", altText: "Image 4" },
            { src: "/uploads/baby-onesie-white-1.png", altText: "Image 5" },
            { src: "/uploads/baby-onesie-white-2.png", altText: "Image 6" }
        ],
        tags: ["baby clothes", "kids", "young wear"],
    },
    {
        title: "Bag",
        price: 70,
        description: "A bag with beautiful design and good looking for nice occasions ",
        image: "/uploads/bag-black.png",
        category: "Bags",
        country: "Made in UAE",
        reviews: [],
        brand: "Arma",
        stock: 100,
        option: [
            {
                name: "color",
                values: ["Black", "White"]
            },
            {
                name: "Size",
                values: ['8/12 inches', "6/8 inches"]
            },
        ],
        variants: [
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }, { name: 'Size', value: '"6/8 inches' }] },
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }, { name: 'Size', value: '8/12 inches' }] }
        ],
        rating: 5,
        salePrice: 80,
        weight: "1 lbs",
        material: "Cotton",
        country: "Made in UK",
        additionalImages: [
            { src: "/uploads/bag-white.png", altText: "Bag Image" }
        ],
        tags: ["hand bags", "bag", "bags"],
    },
    {
        title: "T-shirt",
        price: 400,
        description: "Nice T-shirt for all kind",
        image: "/uploads/t-shirt-circles-black.png",
        category: "shirts",
        brand: "Nike",
        country: "Made in Yemen",
        stock: 100,
        reviews:[],
        option: [
            {
                name: "color",
                values: ["Black", "White", "Blue"]
            },
            {
                name: "Size",
                values: ["S", "XXL", "L"]
            },
        ],
        variants: [
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }, { name: 'Size', value: '"S' }] },
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }, { name: 'Size', value: 'L' }] },
            { availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Blue' }, { name: 'Size', value: 'XXL' }, { name: 'Size', value: 'L' }] }
        ],
        material: "Cotton",
        rating: 4.5,
        salePrice: 350,
        weight: "0.5 lbs",
        material: "Cotton",
        additionalImages: [
            { src: "/uploads/t-shirt-circles-white.png", altText: "T-shirt White" },
            { src: "/uploads/t-shirt-circles-blue.png", altText: "T-shirt Blue" }
        ],
        tags: ["Casual", "Men's Fashion", "Summer Wear"],
    }


]


export const relatedProducts=[
    {
        id: 3,
        title: "Baby Onesie",
        price: 70,
        description: "Baby cloth to wear nice and affordable to get for your beloved child ",
        variants: ["6M", "3M", 'NB', "12M"],
        image: "/uploads/baby-onesie-black-1.png",
        category: "kids",
        brand: "Arma",
        stock: 40,
        currencyCode: "USD",
        option: [
            {
                id: "543",
                name: "color",
                values: ["Black", "White", "Beige"]
            },
            {
                id: "5475",
                name: "Size",
                values: ["6M", "3M", 'NB', "12M"]
            },

        ],
        variants: [
            { id: 'variant-1', availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }, { name: 'Size', value: '6M' }] },
            { id: 'variant-2', availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Tan' }, { name: 'Size', value: '3M' }] }
        ],
        rating: 5,
        reviews: [
            { userId: "1", comment: "nice product!", rating: 5 },

        ],
        salePrice: 60,

        weight: "1 lbs",
        material: "Cotton",
        country: "Made in UK"
        ,
        additionalImages: ["/uploads/baby-onesie-black-2.png", "/uploads/baby-onesie-beige-1.png", "/uploads/baby-onesie-beige-2.png",
            "/uploads/baby-onesie-white-1.png", "/uploads/baby-onesie-white-2.png"


        ],
        tags: ["baby clothes", "kids", "young wear"],


    },
    {
        id: 1,
        title: "T-Shirt Men",
        price: 400,
        description: "Nice T-shirt for all kind",
        image: "/uploads/t-shirt-jordan-white.jpg",
        category: "shirts",
        brand: "Jordan",
        stock: 100,
        currencyCode: "USD",
        material: "Cotton",
        option: [
            { id: "43464", name: "color", values: ["Grey", "White"] },
            { id: "43474", name: "size", values: ["S", "XXL", "L"] },
        ],
        variants: [
            { id: 'variant-1fh5r', availableForSale: true, selectedOptions: [{ name: 'color', value: 'Grey' }, { name: 'size', value: 'S' }] },
            { id: 'variant-2r6thf', availableForSale: true, selectedOptions: [{ name: 'color', value: 'White' }, { name: 'size', value: 'XXL' }] }
        ],
        rating: 4.5,
        reviews: [
            { userId: "1", comment: "Great product!", rating: 5 },

        ],
        salePrice: 350,
        weight: "0.5 lbs",
        material: "Cotton",
        country: "Made in USA"
        ,
        additionalImages: [{ altText: "image product t-shirt", src: "/uploads/t-shirt-jordan-grey.jpg" }],
        tags: ["Casual", "Men's Fashion", "t-shirt"],


    },
]