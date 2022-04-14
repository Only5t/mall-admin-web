import request from '@/utils/request'


export function queryUserByPage(params) {
  return request({
    url: '/user/queryUserByPage',
    method: 'post',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteUser(id) {
  return request({
    url: '/user/delete/' + id,
    method: 'post'
  })
}
export function addUser(user) {
  return request({
    url: '/user/add',
    method: 'post',
    data: user
  })
}
export function updateUser(user) {
  return request({
    url: '/user/update',
    method: 'post',
    data: user
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/user/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/admin/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data: data
  })
}
