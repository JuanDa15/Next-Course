import { getCookie, setCookie } from "cookies-next/client"

const CART_COOKIE_NAME = 'cart'

export const getCartFromCookies = () => {
  const cart = JSON.parse(getCookie(CART_COOKIE_NAME) ?? '{}')
  return { ...cart }
}

export const addProductToCart = (id: number) => {
  const cart = getCartFromCookies()

  if (cart[id]) {
    cart[id] += 1
  } else {
    cart[id] = 1
  }

  setCookie(CART_COOKIE_NAME, JSON.stringify(cart))
}

export const removeProductFromCart = (productId: number) => {
  const cart = getCartFromCookies()

  if (!cart[productId]) {
    return
  }

  if (cart[productId] === 0) {
    delete cart[productId]
  }

  cart[productId] -= 1

  setCookie(CART_COOKIE_NAME, JSON.stringify(cart))
}
