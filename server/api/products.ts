import { defineEventHandler } from 'h3'
import productsData from '../data/products.json'

export default defineEventHandler(async (event) => {
  // Simulate network delay for demonstration purposes
  await new Promise(resolve => setTimeout(resolve, 500))
  
  try {
    return {
      products: productsData,
      total: productsData.length
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    
    // Send error response
    return {
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to fetch products. Please try again later.'
    }
  }
})
