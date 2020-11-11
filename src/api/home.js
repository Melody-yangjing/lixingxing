import request from './index'

export function getBrandList(obj) {
  return request({
    url: 'common/search/car/model/brands/list',
    params: {
      ...obj
    }
  })
}

export const getSeriesList = (brand) => {
  return request({
    url: 'common/search/car/model/series/list',
    method: 'post',
    data: {
      brand
    }
  })
}
export const getStockList = (obj) => {
  const likeSearch = obj.likeSearch
  return request({
    url: 'webpage/getStockList',
    method: 'post',
    data: {
      brand:obj.brand||[],
      city: obj.city,
      isXRAnthen: obj.isXRAnthen || '',
      pageIndex: obj.pageIndex || 0,
      pageSize: obj.pageSize || 4,
      levels:obj.levels||[],
      quotedQueryCodes:obj.price||[],
      vehicleAgeQueryCode:obj.age||'',
      vehicleModelQueryCode:obj.model||'',
      mileageQueryCode:obj.mile||'',
      ...(likeSearch?{likeSearch}:null)
    }
  })
}
export const getCarDetail = (stockNo) => {
  return request({
    url: `webpage/getStockDetail/${stockNo}`,
  })
}
export const getDealerArea = () => {
  return request({
    url: `common/search/getDealerArea/v2`,
  })
}
export const getAgencyInfo = (queryType, queryParam) => {
  return request({
    url: `webpage/getAgencyInfo`,
    method: 'POST',
    data: {
      queryType,
      queryParam
    }
  })
}
export const quickEnquiry = (obj) => {
  return request({
    url: `webpage/quickEnquiry`,
    method: 'post',
    data: {
      ...obj
    }
  })
}
export const getSelecContent = (param) => {
  return request({
    url: `common/search/parameters/${param}`
  })
}
export const saveClueInfo = (data) => {
  return request({
    url: `webpage/saveClueInfo`,
    method: 'post',
    data
  })
}
export const getCarModel = (obj) => {
  return request({
    url: `common/search/car/model/model/list`,
    method: 'post',
    data: {
      ...obj
    }
  })
}
export const getType = (obj) => {
  return request({
    url: `common/search/car/model/types/list`,
    method: 'post',
    data: {
      ...obj
    }
  })
}
