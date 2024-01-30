type ProductInfoProps={
    brand:string,
    material:string,
    country:string,
    weight:string,

}

const ProductInfo = ({brand,material,country,weight}:ProductInfoProps) => {
  return (
    <ul className="w-full flex gap-2 flex-col text-sm mb-1 text-neutral-600">
      <li>Brand : {brand}</li>
       <li>Material : {material}</li>
        <li>Designed : {country}</li>
         <li>Weight : {weight}</li>
    </ul>
  )
}

export default ProductInfo