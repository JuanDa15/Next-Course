import { Product } from '@/interfaces/products';
import Image from 'next/image';
import { DeleteIconBtn } from './DeleteIconBtn';
import { AddIconBtn } from './AddIconBtn';

interface Props {
  product: Product;
}
export const ProductComponent = ({ product }: Props) => {
  return (
    <div className='bg-gray-600 p-1 rounded-lg'>
      <Image
        src={product.image}
        width={100}
        height={200}
        alt={product.title}
        className='object-cover w-full h-48 object-top rounded-lg'
      />
      <h4 className='text-white/60 text-lg font-semibold mt-2 leading-5 line-clamp-1'>
        <small>{product.title}</small>
      </h4>
      <p className='line-clamp-2 leading-5 mt-3'>{product.description}</p>
      <div className='flex flex-row mt-4 items-center'>
        <span className='flex-1'>
          <b className='text-2xl'>
            {Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
            }).format(product.price)}
          </b>
        </span>
        <div className='flex flex-row gap-2'>
          <DeleteIconBtn id={product.id} />
          <AddIconBtn id={product.id} />
        </div>
      </div>
    </div>
  );
};
