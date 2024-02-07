import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
export const getHomeProducts=async()=>{
  const products= await  prisma.product.findMany({where:{isHidden:true}})
  return products
}
export const getHomeCarouselProducts = async () => {
  try {
    // Retrieve unique category names
    const categories = await prisma.category.findMany();
    // Initialize an array to store carousel products
    const carouselProducts = [];
    
    // Fetch one product from each category
    for (const category of categories) {
      const product = await prisma.product.findFirst({
        where: { category: { name: category.name } },
        orderBy: { createdAt: 'desc' } // You can change the ordering as needed
      });

      if (product) {
        carouselProducts.push(product);
      }
    }
    
    prisma.$disconnect()
    return carouselProducts;
  } catch (error) {
    console.error("Error fetching carousel products:", error);
    throw error;
  }
};

export const getProduct = async (id:string) => {
    const product = await prisma.product.findFirst({where:{id:id},include:{additionalImages:true,options:true,variants:{include:{selectedOptions:true}},reviews:true}})
  prisma.$disconnect()
    return product
}

export const getRelatedProducts = async (id: string) => {
  const product = await prisma.product.findFirst({ where: { id: id }})
  const relatedProducts = await prisma.product.findMany({
    where: {
      id: { not: id },
      OR: [
        { categoryId: product?.categoryId },
        { tags: { hasSome: product?.tags } },
      ],
    },
    take: 10,
  });

  prisma.$disconnect()
  return relatedProducts
}

export const getFilteredProducts=async(
  {sortKey,
    reverse,
    query
  }
  :{sortKey:string,
    reverse:boolean,
    query:string
  }
  )=>
{

  const products = await prisma.product.findMany({
    where:query? {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } }
      ],
      AND:{isHidden:false}
      
    }:{AND:{isHidden:false}},
    
    orderBy: [
       sortKey === 'PRICE' && reverse == false ? { price: 'asc' } :
        sortKey === 'PRICE'&&reverse==true ? { price: 'desc' } :
          sortKey === 'BEST_SELLING' ? { countSold: 'desc' } : // Assuming there's a soldCount field
            sortKey === 'CREATED_AT' ? { createdAt: 'asc' } :
              { createdAt: 'desc' } // Default sorting by createdAt in descending order
    ],
    take: 10 // Limit the number of returned products to 10
  });

  // Reverse the order if reverse is true
  prisma.$disconnect()
  return products;

}

export const getCategoryProducts = async ({
  sortKey,
  category,
  reverse,
}: {
  sortKey: string,
  category: string|undefined
  reverse: boolean,
}) => {
console.log(category,'gategory')
  let whereCondition: any = {};

  if (category && category !== 'All') {
    whereCondition = {
      category: {name:category},
      AND: { isHidden: false }
    };
  } else {
    whereCondition = {
      isHidden: false
    };
  }
  console.log(category,'category')

  const products = await prisma.product.findMany({
    where: whereCondition, orderBy: [
      sortKey === 'PRICE' && reverse ? { price: 'desc' } :
        sortKey === 'PRICE' && reverse==false ? { price: 'asc' } :
        sortKey === 'BEST_SELLING' ? { countSold: 'desc' } :
          sortKey === 'CREATED_AT' ? { createdAt: 'asc' } :
            { createdAt: 'desc' }
    ],
    take: 10
})
    

  prisma.$disconnect()
  return products;
}
