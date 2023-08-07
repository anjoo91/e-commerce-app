import tokenService from './tokenService';

const BASE_URL = '/api/products/';

export default {
  createProduct,
  getAllProducts,
  deleteProduct,
}

export async function createProduct(data) {
  return await fetch(BASE_URL, {
      method: 'POST',
      body: data,
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    });
    if (response.ok) {
      return response.json();
    throw new Error('Error creating product.');
  }
};

export async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error fetching products.');
  } catch (error) {
    throw new Error('Error fetching products:', error.message);
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(BASE_URL + productId, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error deleting product.');
  } catch (error) {
    throw new Error('Error deleting product:', error.message);
  }
}
