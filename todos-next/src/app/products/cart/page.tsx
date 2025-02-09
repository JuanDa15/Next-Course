import { cookies } from 'next/headers';
import { products } from '../page';
import { DeleteIconBtn } from '@/components/DeleteIconBtn';
import { AddIconBtn } from '@/components/AddIconBtn';
import { Product } from '@/interfaces/products';

export const getProductsInCart = (cart: Record<string, number>) => {
  const productsArr: Product[] = [];
  for (const [productId, quantity] of Object.entries(cart)) {
    const product = products.find((p) => p.id === Number(productId));
    if (!product) continue;
    if (quantity === 0) continue;
    productsArr.push({ ...product, quantity });
  }

  return productsArr;
};

export const getTotal = (products: Product[]) => {
  return products.reduce((acc, product) => {
    return acc + product.price * product.quantity!;
  }, 0);
};

export default async function CartComponent() {
  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as Record<
    string,
    number
  >;

  const products = getProductsInCart(cart);

  const total = getTotal(products);

  const taxes = total * 0.19;
  return (
    <div className='bg-gray-900 text-white min-h-screen p-8'>
      <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
      <table className='w-full mb-6'>
        <thead>
          <tr>
            <th className='border-b-2 border-gray-700 p-2 text-left'>
              Product
            </th>
            <th className='border-b-2 border-gray-700 p-2 text-left'>
              Quantity
            </th>
            <th className='border-b-2 border-gray-700 p-2 text-left'>Price</th>
            <th className='border-b-2 border-gray-700 p-2 text-left'>Total</th>
            <th className='border-b-2 border-gray-700 p-2 text-left'></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='border-b border-gray-700 p-2'>
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold'>{product.title}</h3>
                  <p className='text-sm'>
                    {Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(product.price)}
                  </p>
                </div>
              </td>
              <td className='border-b border-gray-700 p-2'>
                {product.quantity}
              </td>
              <td className='border-b border-gray-700 p-2'>
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(product.price)}
              </td>
              <td className='border-b border-gray-700 p-2'>
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(product.price * product.quantity!)}
              </td>
              <td className='border-b border-gray-700 p-3 flex flex-row gap-1'>
                <DeleteIconBtn id={product.id} />
                <AddIconBtn id={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='bg-gray-800 p-4 rounded-lg mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Cart Summary</h2>
        <p className='mb-2'>
          Subtotal:{' '}
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total)}
        </p>
        <p className='mb-2'>
          Tax:
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(taxes)}
        </p>
        <p className='font-bold'>
          Total:{' '}
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total + taxes)}
        </p>
      </div>
      <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
        Proceed to Checkout
      </button>
    </div>
  );
}
