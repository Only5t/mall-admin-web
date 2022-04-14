import request from '@/utils/request'

export function queryByPage(params) {
  return request({
    url: '/role/queryByPage',
    method: 'post',
    params: params
  })
}

export function createRole(data) {
  return request({
    url: '/role/add',
    method: 'post',
    data: data
  })
}

export function updateRole(data) {
  return request({
    url: '/role/update/',
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/role/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteRole(ids) {
  return request({
    url:'/role/delete/' + ids,
    method:'post',
  })
}

export function fetchAllRoleList() {
  return request({
    url: '/role/list',
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/role/role/update',
    method: 'post',
    data: data
  })
}

export function getRoleByUser(id) {
  return request({
    url: '/role/role/' + id,
    method: 'get'
  })
}

export function allocResource(data) {
  return request({
    url: '/role/allocResource',
    method: 'post',
    data:data
  })
}
