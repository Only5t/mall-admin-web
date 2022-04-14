import request from '@/utils/request'

export function fetchList(params,data) {
  return request({
    url: '/resource/queryByPage',
    method: 'post',
    params: params,
    data: data
  })
}

export function createResource(data) {
  return request({
    url: '/resource/add',
    method: 'post',
    data: data
  })
}

export function updateResource(data) {
  return request({
    url: '/resource/update',
    method: 'post',
    data: data
  })
}

export function deleteResource(id) {
  return request({
    url: '/resource/delete/' + id,
    method: 'post'
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/resource/listByRoleId/'+roleId,
    method: 'get'
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/resource/list',
    method: 'get'
  })
}
