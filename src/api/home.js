import request from './index'

export function getBrandList() {
  return request({
    url: '/api/common/search/car/model/brands/list'
  })
}

export const getSeriesList = (brand) => {
  return request({
    url: '/api/common/search/car/model/series/list',
    method: 'post',
    data: {
      brand
    }
  })
}

