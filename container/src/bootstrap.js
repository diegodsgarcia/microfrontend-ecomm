import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

productsMount(document.querySelector('#dash-products'))
cartMount(document.querySelector('#dash-cart'))