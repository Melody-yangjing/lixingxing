import request from './index'

export function getBrandList(obj) {
  return request({
    url: '/api/common/search/car/model/brands/list',
    params: {
      ...obj
    }
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
export const getStockList = (isXRAnthen) => {
  return request({
    url: '/api/webpage/getStockList',
    method: 'post',
    data: {
      isXRAnthen
    }
  })
}
export const getCarDetail = (stockNo) => {
  return request({
    url: `/api/webpage/getStockDetail/${stockNo}`,
  })
}
export const getDealerArea = () => {
  return request({
    url: `/api/common/search/getDealerArea`,
  })
}
export const quickEnquiry = (obj) => {
  return request({
    url: `/api/webpage/quickEnquiry`,
    method: 'post',
    data: {
      ...obj
    }
  })
}
export const getSelecContent = (param) => {
  return request({
    url: `/api/common/search/parameters/${param}`
  })
}
export const getCarModel = (obj) => {
  return request({
    url: `/api/common/search/car/model/model/list`,
    method: 'post',
    data: {
      ...obj
    }
  })
}
export const getType = (obj) => {
  return request({
    url: `/api/common/search/car/model/types/list`,
    method: 'post',
    data: {
      ...obj
    }
  })
}

