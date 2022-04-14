import request from '@/utils/request'

export function fetchList(menuQuery, params) {
  return request({
    url: '/menu/queryByPage',
    method: 'post',
    params: params,
    data: menuQuery
  })
}

export function deleteMenu(id) {
  return request({
    url: '/menu/delete/' + id,
    method: 'post'
  })
}

export function createMenu(data) {
  return request({
    url: '/menu/add',
    method: 'post',
    data: data
  })
}

export function updateMenu(data) {
  return request({
    url: '/menu/update',
    method: 'post',
    data: data
  })
}

export function getMenu(id) {
  return request({
    url: '/menu/query/' + id,
    method: 'get',
  })
}

export function listMenuByRole(roleId) {
  return request({
    url: '/menu/menuList/'+roleId,
    method: 'get'
  })
}

export function allocMenu(data) {
  return request({
    url: '/menu/allocMenu',
    method: 'post',
    data:data
  })
}

export function updateHidden(id, params) {
  return request({
    url: '/menu/updateHidden/' + id,
    method: 'post',
    params: params
  })
}

export function fetchTreeList() {
  return request({
    url: '/menu/treeList',
    method: 'get'
  })
}

