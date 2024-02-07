import { PrismaClient } from "@prisma/client";

 const products = [
     {
         title: "Apple iMac 24-inch",
         price: 1299,
         description: "The all-new iMac features a stunning 24-inch 4.5K Retina display, Apple M1 chip, and a sleek design.",
         image: "/uploads/apple-desktop.jpg",
         category: 3,
         brand: "Apple",
         isHidden:true,
         stock: 50,
         currencyCode: "USD",
         material: "Aluminum, Glass",
         option: [
             { name: "color", values: ["Silver", "Blue", "White"] },
             { name: "storage", values: ["256GB SSD", "512GB SSD", "1TB SSD"] },
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Silver' }, { name: 'storage', value: '256GB SSD' }] },
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Blue' }, { name: 'storage', value: '512GB SSD' }] },
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'White' }, { name: 'storage', value: '512GB SSD' }] },
              { availableForSale: true, selectedOptions: [{ name: 'color', value: 'White' }, { name: 'storage', value: '1TB SSD ' }] }
         ],
         rating: 4.8,
         reviews: [],
         salePrice: 1199,
         weight: "10 lbs",
         country: "Designed by Apple in California",
         additionalImages: [
             { altText: "side view of Apple iMac 24-inch", src: "/uploads/apple-desktop.jpg" },
             { altText: "back view of Apple iMac 24-inch", src: "/uploads/apple-desktop-1.png" }
         ],
         tags: ["Apple", "Desktop", "Computer", "M1 Chip", "4.5K Retina Display","Electronics"]
     },

     {
         title: "Mountain Bike",
         price: 800,
         description: "High-performance mountain bike designed for off-road trails and rugged terrain",
         image: "/uploads/bicycle-1.png",
         category: 11,
         brand: "Trek",
         isHidden:true,
         stock: 50,
         currencyCode: "USD",
         material: "Aluminum Alloy",
         option: [
             { name: "color", values: ["Red", "Blue", "Green"] },
             { name: "size", values: ["Small", "Medium", "Large"] },
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Red' }, { name: 'size', value: 'Medium' }] },
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Blue' }, { name: 'size', value: 'Large' }] }
         ],
         rating: 4.8,
         reviews: [
             
         ],
         salePrice: 750,
         weight: "28 lbs",
         country: "Made in USA",
         additionalImages: [{ altText: "side view of mountain bike", src: "/uploads/bicycle-2.jpg" }],
         tags: ["Mountain Biking", "Outdoor", "Sports"]
     },
  
     {
    title: "Apple Watch Series 7",
    price: 399,
    description: "The latest Apple Watch Series 7 with a larger display and advanced features.",
    image: "/uploads/apple-watch-1.jpg",
    category: 3,
    brand: "Apple",
    isHidden:true,
    stock: 100,
    currencyCode: "USD",
    material: "Aluminum, Ceramic, Titanium, Stainless Steel",
    option: [
        { name: "color", values: ["Silver", "Graphite", "Gold", "Blue", "Red"] },
        { name: "size", values: ["41mm", "45mm"] },
    ],
    variants: [
        { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Silver' }, { name: 'size', value: '41mm' }] },
        { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Graphite' }, { name: 'size', value: '45mm' }] }
    ],
    rating: 4.9,
    reviews: [
       
    ],
    salePrice: 379,
    weight: "0.2 lbs",
    country: "Designed by Apple in California",
    additionalImages: [
        { altText: "side view of Apple Watch Series 7", src: "/uploads/apple-watch-2.jpg" },
       
    ],
    tags: ["Apple", "Smartwatch", "Wearable Tech"]
}

     ,
     {
         title: "Running Shoes",
         price: 120,
         description: "Comfortable and lightweight running shoes for your daily workouts",
         image: "/uploads/shoes-1.png",
         category: 5,
         brand: "Nike",
         stock: 100,
         currencyCode: "USD",
         material: "Mesh",
         option: [
             { name: "color", values: ["Blue", "Black", "White"] },
             { name: "size", values: ["US 7", "US 8", "US 9", "US 10", "US 11"] },
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Blue' }, { name: 'size', value: 'US 7' }] },
             { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Black' }, { name: 'size', value: 'US 8' }] }
         ],
         rating: 4.5,
         reviews: [],
         salePrice: 100,
         weight: "0.8 lbs",
         country: "Made in Vietnam",
         additionalImages: [{ altText: "side view of running shoes", src: "/uploads/shoes-2.png" }, 
         { altText: "back view of running shoes", src: "/uploads/shoes-3.png" },
             { altText: "front view of running shoes", src: "/uploads/shoes-4.png" }
        ],
         tags: ["Running", "Athletic", "Sports"]
     }

    ,
    {
        title: "T-Shirt Men",
        price: 400,
        description: "Nice T-shirt for all kind",
        image: "/uploads/t-shirt-jordan-white.jpg",
        category: 10,
        brand: "Jordan",
        stock: 100,
        currencyCode: "USD",
        material: "Cotton",
        option: [
            {  name: "color", values: ["Grey", "White"] },
            {  name: "size", values: ["S", "XXL", "L"] },
        ],
        variants: [
            { availableForSale: true, selectedOptions: [{ name: 'color', value: 'Grey' }, { name: 'size', value: 'S' }] },
            {  availableForSale: true, selectedOptions: [{ name: 'color', value: 'White' }, { name: 'size', value: 'XXL' }] }
        ],
        rating: 0,
        reviews: [
        
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
       
        title: "Cowboy hat",
        price: 50,
        description: "Beautiful hat for summer time so you can be fashionable person and gets attracted",
        image: "/uploads/cowboy-hat-black-1.png",
        category: 6,
        brand: "Arma",
        stock: 100,
        currencyCode: "USD",
        option: [
            {  name: "color", values: ["Black", "Tan"] },
            {  name: "size", values: ['63/4', '67/8', '71/2'] },

        ],
        variants: [
            {  availableForSale: true, selectedOptions: [{ name: 'color', value: 'Black' }, { name: 'size', value: '63/4' }, { name: 'size', value: '67/8' }, { name: 'size', value: '71/2' }] },
            {  availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' }, { name: 'size', value: '71/2' }] },
            {  availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' }, { name: 'size', value: '63/4' }] },
            {  availableForSale: true, selectedOptions: [{ name: 'color', value: 'Tan' }, { name: 'size', value: '71/2' }] }
        ],

        rating: 5,
        reviews: [
            

        ],
        salePrice: 40,

        weight: "0.5 lbs",
        material: "Cotton",
        country: "Made in USA"
        ,
        additionalImages: [{ src: "/uploads/cowboy-hat-black-2.png", altText: "product-black" }, { src: "/uploads/cowboy-hat-black-3.png", altText: "product 2" },
        { src: "/uploads/cowboy-hat-black-4.png", altText: 'product3' }, { src: "/uploads/cowboy-hat-black-5.png", altText: 'product5' }, { src: "/uploads/cowboy-hat-black-6.png", altText: 'product6' }, { src: "/uploads/cowboy-hat-tan-1.png", altText: 'product7' },
        { src: "/uploads/cowboy-hat-tan-2.png", altText: "product-tan-2" }, { src: "/uploads/cowboy-hat-tan-3.png", altText: 'product-tan-3' }, { src: "/uploads/cowboy-hat-tan-4.png", altText: "product-tan-5" }, { src: "/uploads/cowboy-hat-tan-5.png", altText: 'product-5-tan-1' }, { src: "/uploads/cowboy-hat-tan-6.png", altText: "product-tan-8" }
        ],
        tags: ["hat", "Men's Fashion", "Summer Wear"],


    },
   
     {
         title: "Baby Onesie",
         price: 70,
         description: "Baby cloth to wear nice and affordable to get for your beloved child ",
         variants: ["6M", "3M", 'NB', "12M"],
         image: "/uploads/baby-onesie-black-1.png",
         category: 9,
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
         category: 2,
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
         category: 10,
         brand: "Nike",
         country: "Made in Yemen",
         stock: 100,
         reviews: [],
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
     },
     {
         title: "Panasonic Camera",
         price: 900,
         description: "Capture the moment with this high-quality Panasonic camera.",
         image: "/uploads/camera-1.jpg",
         category: 3,
         brand: "Panasonic",
         country: "Japan",
         stock: 50,
         reviews: [],
         option: [
             { name: "Color", values: ["Black", "Silver"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Silver" }] }
         ],
         rating: 4.8,
         salePrice: 850,
         weight: "1.2 lbs",
         material: "Plastic",
         additionalImages: [
             { src: "/uploads/camera-1.jpg", altText: "Front View" },
             { src: "/uploads/camera-2.jpg", altText: "front View" }
         ],
         tags: ["Camera", "Photography", "Panasonic"]
     },
     {
         title: "Coffee Mug",
         price: 15,
         description: "Enjoy your favorite hot beverage with this stylish coffee mug.",
         image: "/uploads/mug-1.png",
         category: 4,
         brand: "Arma",
         country: "Made in USA",
         stock: 50,
         reviews: [],
         option: [
             { name: "Color", values: ["Black", "White", "Red"] },
             { name: "Size", values: ["8 oz", "12 oz"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }, { name: "Size", value: "8 oz" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }, { name: "Size", value: "12 oz" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }, { name: "Size", value: "8 oz" }] }
         ],
         rating: 4.2,
         salePrice: 12,
         weight: "0.8 lbs",
         material: "Ceramic",
         additionalImages: [
             { src: "/uploads/mug-1.png", altText: "Mug Side View" },
             { src: "/uploads/mug-2.png", altText: "Mug Top View" }
         ],
         tags: ["mug", "drinkware", "coffee"]
     },
     {
         title: "Mechanical Keyboard",
         price: 30,
         description: "Enhance your typing experience with this durable mechanical keyboard.",
         image: "/uploads/keyboard.png",
         category: 3,
         brand: "TechMaster",
         country: "Made in Taiwan",
         stock: 30,
         reviews: [],
         option: [
             { name: "Color", values: ["Black", "White", "RGB"] },
             { name: "Layout", values: ["US", "UK", "ISO"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }, { name: "Layout", value: "US" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }, { name: "Layout", value: "UK" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "RGB" }, { name: "Layout", value: "ISO" }] }
         ],
         rating: 4.8,
         salePrice: 90,
         weight: "2.5 lbs",
         material: "Plastic and Metal",
         additionalImages: [
             { src: "/uploads/keyboard.png", altText: "Keyboard Side View" },

         ],
         tags: ["keyboard", "Electronics", "tech"]
     },
     {
         title: "Comfy Hoodie",
         price: 45,
         description: "Stay warm and stylish with this cozy hoodie.",
         image: "/uploads/hoodie-1.png",
         category: 7,
         brand: "CozyWear",
         country: "Made in USA",
         stock: 50,
         reviews: [],
         option: [
             { name: "Color", values: ["Black", "Gray", "Navy Blue"] },
             { name: "Size", values: ["S", "M", "L", "XL"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }, { name: "Size", value: "M" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Gray" }, { name: "Size", value: "L" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }, { name: "Size", value: "XL" }] }
         ],
         rating: 4.5,
         salePrice: 40,
         weight: "1.2 lbs",
         material: "Cotton and Polyester",
         additionalImages: [
             { src: "/uploads/hoodie-1.png", altText: "front View" },
             { src: "/uploads/hoodie-2.png", altText: "Model Wearing Hoodie" }
         ],
         tags: ["Hoodies", "clothing", "fashion"]
     },
     {
         title: "Small Engine (2-5HP)",
         price: 600,
         description: "Powerful small engine suitable for various applications.",
         image: "/uploads/engine-1.jpg",
         category: 3,
         brand: "PowerTech",
         country: "Made in Germany",
         stock: 20,
         reviews: [],
         rating: 4.8,
         salePrice: 550,
         weight: "15 lbs",
         material: "Steel",
         option: [
             { name: "Power Output", values: ["2 HP", "3 HP", "4 HP", "5 HP"] },
             { name: "Voltage", values: ["12V", "24V", "48V"] },
             { name: "Control Type", values: ["Manual", "Automatic"] }
         ],
         variants: [
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Power Output", value: "2 HP" },
                     { name: "Voltage", value: "12V" },
                     { name: "Control Type", value: "Manual" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Power Output", value: "3 HP" },
                     { name: "Voltage", value: "24V" },
                     { name: "Control Type", value: "Automatic" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Power Output", value: "4 HP" },
                     { name: "Voltage", value: "48V" },
                     { name: "Control Type", value: "Manual" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Power Output", value: "5 HP" },
                     { name: "Voltage", value: "24V" },
                     { name: "Control Type", value: "Automatic" }
                 ]
             }
         ],
         additionalImages: [
             { src: "/uploads/engine-1.jpg", altText: "front View" },
             { src: "/uploads/engine-2.jpg", altText: "Model engine" }
         ],
         tags: ["engine", "machinery", "Motors"],
     },
     {
         title: "Kid's Car Toy",
         price: 50,
         description: "Fun and colorful toy car for kids to enjoy playing with.",
         image: "/uploads/kid-car-toy.jpg",
         category: 9,
         brand: "PlayfulKids",
         country: "Made in China",
         stock: 30,
         reviews: [],
         rating: 4.5,
         salePrice: 45,
         weight: "2 lbs",
         material: "Plastic",
         option: [
             { name: "Color", values: ["Red", "Blue", "Yellow"] },
             { name: "Size", values: ["Small", "Medium", "Large"] },
             { name: "Features", values: ["Light & Sound", "Remote Control"] }
         ],
         variants: [
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Red" },
                     { name: "Size", value: "Small" },
                     { name: "Features", value: "Light & Sound" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Blue" },
                     { name: "Size", value: "Medium" },
                     { name: "Features", value: "Remote Control" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Yellow" },
                     { name: "Size", value: "Large" },
                     { name: "Features", value: "Light & Sound" }
                 ]
             }
         ],
         additionalImages: [
             { src: "/uploads/kid-car-toy.jpg", altText: "front View" },
         ],
         tags: ["toy", "kids", "car"],
     },
     {
         title: "Leather Jacket",
         price: 150,
         description: "Classic black leather jacket for a timeless look.",
         image: "/uploads/jacket-brown.jpg",
         category: 8,
         brand: "ClassicStyle",
         country: "Made in USA",
         stock: 30,
         reviews: [],
         rating: 4.8,
         salePrice: 130,
         weight: "2.0 lbs",
         material: "Leather",
         option: [
             { name: "Color", values: ["Black", "Brown", "Tan"] },
             { name: "Size", values: ["Small", "Medium", "Large", "X-Large"] },
             { name: "Style", values: ["Classic", "Biker", "Bomber"] }
         ],
         variants: [
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Black" },
                     { name: "Size", value: "Medium" },
                     { name: "Style", value: "Classic" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Brown" },
                     { name: "Size", value: "Large" },
                     { name: "Style", value: "Biker" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Tan" },
                     { name: "Size", value: "X-Large" },
                     { name: "Style", value: "Bomber" }
                 ]
             }
         ],
         additionalImages: [
             { src: "/uploads/jacket-brown.jpg", altText: "front View" },
         ],
         tags: ["jacket", "leather", "black"],
     },
     {
         title: "Denim Jacket",
         price: 90,
         description: "Stylish blue denim jacket for a casual look.",
         image: "/uploads/jacket-blue.jpg",
         category: 8,
         brand: "UrbanDenim",
         country: "Made in Japan",
         stock: 25,
         option: [
             { name: "Size", values: ["S", "M", "L", "XL"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [] },
             { availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }] },
             { availableForSale: true, selectedOptions: [{ name: "Size", value: "L" }] }
         ],
         reviews: [],
         rating: 4.5,
         salePrice: 80,
         weight: "1.5 lbs",
         additionalImages: [
             { src: "/uploads/jacket-blue.jpg", altText: "blue jacket View" },
         ],
         material: "Denim",
         tags: ["jacket", "denim", "blue"],
     },
     {
         title: "Modern Jacket",
         price: 180,
         description: "Warm and stylish parka jacket for cold weather.",
         image: "/uploads/bomber-jacket-army.png",
         category: 8,
         brand: "OutdoorGear",
         country: "Made in Canada",
         stock: 20,
         reviews: [],
         rating: 4.9,
         salePrice: 160,
         weight: "2.5 lbs",
         option: [
             { name: "Color", values: ["Black", "Army"] },
             { name: "Size", values: ["S", "M", "L", "XL"] }
         ],
         variants: [
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }, { name: "Size", value: "S" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }, { name: "Size", value: "M" }] },
             { availableForSale: true, selectedOptions: [{ name: "Color", value: "Army" }, { name: "Size", value: "L" }] }
         ],
         additionalImages: [
             { src: "/uploads/bomber-jacket-army.png", altText: "blue View" },
             { src: "/uploads/bomber-jacket-black.png", altText: "black jacket" }
         ],
         material: "Polyester",
         tags: ["jacket", "parka", "green"],
     },
     {
         title: "Dell XPS 15",
         price: 1499,
         description: "Powerful laptop with stunning display and performance.",
         image: "/uploads/dell-laptop.jpg",
         category: 3,
         brand: "Dell",
         stock: 50,
         currencyCode: "USD",
         material: "Aluminum",
         option: [
             { name: "Color", values: ["Silver", "Black"] },
             { name: "Processor", values: ["Intel Core i7", "Intel Core i9"] },
             { name: "RAM", values: ["16GB", "32GB"] },
             { name: "Storage", values: ["512GB SSD", "1TB SSD"] }
         ],
         variants: [
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Silver" },
                     { name: "Processor", value: "Intel Core i7" },
                     { name: "RAM", value: "16GB" },
                     { name: "Storage", value: "512GB SSD" }
                 ]
             },
             {
                 availableForSale: true, selectedOptions: [
                     { name: "Color", value: "Black" },
                     { name: "Processor", value: "Intel Core i9" },
                     { name: "RAM", value: "32GB" },
                     { name: "Storage", value: "1TB SSD" }
                 ]
             }
         ],
         rating: 4.8,
         reviews: [],
         salePrice: 1399,
         weight: "4.5 lbs",
         country: "Made in USA",
         additionalImages: [
             { src: "/uploads/dell-laptop.jpg", altText: "Black Dell XPS 15" },

         ],
         tags: ["laptop", "Dell", "Electronics", "performance"]
     }
]

// const bcrypt = require('bcrypt');

const categoryData = [
    "All",
    "Bags",
    "Electronics",
    "Drinkware",
    "Footwear",
    "Headwear",
    "Hoodies",
    "Jackets",
    "Kids",
    "Shirts",
    "Motors"
];
const newProducts=[
    
  
    
   
   

]
async function seedCategories() {
    try {
        for (const categoryName of categoryData) {
            await prisma.category.create({
                data: {
                    name: categoryName,
                },
            });
            console.log(`Category "${categoryName}" created successfully.`);
        }
    } catch (error) {
        console.error('Error seeding categories:', error);
    }
}
const prisma = new PrismaClient()
async function main() {
    //   await seedCategories()
      await seedProducts()
    // await editProduct("4990e7b8-ddc2-4c47-a62f-a6d4b8633ab1")
    // await prisma.productVariant.deleteMany()
    // await prisma.cartLine.deleteMany()
    // await prisma.cart.deleteMany()
    // await deleteProduct("4990e7b8-ddc2-4c47-a62f-a6d4b8633ab1")
    // await prisma.selectedOption.deleteMany();
    // await prisma.variant.deleteMany();
    // await prisma.option.deleteMany();
    // await prisma.additionalImage.deleteMany()
    // await prisma.product.deleteMany();
    // // delete the products
    // await prisma.product.deleteMany();
    // await  prisma.category.deleteMany()

   

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })




async function seedProducts(){
    for (const product of products) {
        await prisma.product.create({
            data: {
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                isHidden: product.isHidden || false,
                categoryId: product.category,
                brand: product.brand,
                stock: product.stock,
                currencyCode: product.currencyCode,
                salePrice: product.salePrice,
                material: product.material,
                rating: product.rating,
                weight: product.weight,
                country: product.country,
                options: {
                    create: product.option,
                },
                variants: {
                    create: product.variants.map((variant) => ({
                        availableForSale: variant.availableForSale,
                        selectedOptions: {
                            create: variant.selectedOptions.map((option) => ({
                                name: option.name,
                                value: option.value,
                            })),
                        },
                    })),
                },
                reviews: {
                    create: product.reviews,
                },
                additionalImages: {
                    create: product.additionalImages.map((image) => ({
                        altText: image.altText,
                        src: image.src
                    })),
                },
                tags: product.tags,
            },
        });
    }

    console.log('Data seeded successfully.');
}


async function editProduct(id){
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: id },
            data: {
                image: "/uploads/blue-sport-shoes.jpg",
                // Add other fields to update here if needed
            }
        });
        console.log("Product edited successfully:", updatedProduct);
    } catch (error) {
        console.error("Error editing product:", error);
    }
}

async function deleteProduct(id){
    try {
        await prisma.product.delete({where:{additionalImages}})
  
        console.log('deleted')
    } catch (error) {
        console.log(error)
    }
}

async function updateAdditionalImages(productId, newImages) {
    // Find the product by ID
    const product = await prisma.product.findUnique({
        where: { id: productId },
        include: { additionalImages: true } // Include existing additional images
    });

    // Extract the IDs of the existing additional images
    const existingImageIds = product.additionalImages.map(image => image.id);

    // Delete the existing additional images
    await prisma.additionalImage.deleteMany({
        where: { id: { in: existingImageIds } }
    });

    // Create new additional images for the product
    await prisma.additionalImage.createMany({
        data: newImages.map(image => ({
            productId: productId,
            src: image.src,
            altText: image.altText
        }))
    });

    console.log("Additional images updated successfully for product:", productId);
}
