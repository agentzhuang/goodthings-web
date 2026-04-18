import request from './index'

export const itemApi = {
  list: (params) => request.get('/v1/items', { params }),
  detail: (id) => request.get(`/v1/items/${id}`),
  create: (data) => request.post('/v1/items', data),
  delete: (id) => request.delete(`/v1/items/${id}`),
  like: (id) => request.post(`/v1/items/${id}/like`),
  unlike: (id) => request.delete(`/v1/items/${id}/like`),
}

export const commentApi = {
  list: (itemId, params) => request.get(`/v1/items/${itemId}/comments`, { params }),
  create: (itemId, data) => request.post(`/v1/items/${itemId}/comments`, data),
  delete: (itemId, id) => request.delete(`/v1/items/${itemId}/comments/${id}`),
}

export const tagApi = {
  hot: (limit) => request.get('/v1/tags/hot', { params: { limit } }),
  search: (keyword) => request.get('/v1/tags/search', { params: { keyword } }),
}

export const collectionApi = {
  myList: () => request.get('/v1/collections/me'),
  detail: (id) => request.get(`/v1/collections/${id}`),
  create: (data) => request.post('/v1/collections', data),
  update: (id, data) => request.put(`/v1/collections/${id}`, data),
  delete: (id) => request.delete(`/v1/collections/${id}`),
  addItem: (id, itemId) => request.post(`/v1/collections/${id}/items`, { itemId }),
  removeItem: (id, itemId) => request.delete(`/v1/collections/${id}/items/${itemId}`),
}

export const userApi = {
  login: (data) => request.post('/v1/users/login', data),
  register: (data) => request.post('/v1/users/register', data),
  me: () => request.get('/v1/users/me'),
  update: (data) => request.put('/v1/users/me', data),
}

export const ossApi = {
  signature: () => request.post('/v1/oss/signature'),
}
