import { defineEventHandler } from 'h3'
import productsData from '../../data/products.json'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    return {
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Product ID is required'
    }
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300))

  try {
    // Flatten all products from all categories into a single array
    const allProducts = productsData.flatMap(category => category.products)

    // Find the product by ID
    const product = allProducts.find(p => p.id.toString() === id.toString())

    if (!product) {
      return {
        statusCode: 404,
        statusMessage: 'Not Found',
        message: 'Product not found'
      }
    }

    return product
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)

    return {
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to fetch product details. Please try again later.'
    }
  }
})
