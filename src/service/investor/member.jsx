import callAPI from '@/config/api';

import {UserTypes, changePasswordTypes} from '@/service/investor/data-types';

const ROOT_API = process.env.NEXT_PUBLIC_SERVICE_INVESTOR;
const API_VERSION = 'api/v1';

const buildUrl = (endpoint) => `${ROOT_API}/${API_VERSION}/${endpoint}`;

// Get data profile /get_user with token user
export async function getUser(token) {
  const url = buildUrl('get_user');

  return callAPI({
    url,
    method: 'GET',
    token: token,
  });
}

// update data profile /update_profile
export async function setUpdateProfile(data = UserTypes, token) {
  const url = buildUrl('update_profile');

  return callAPI({
    url,
    method: 'PUT',
    token: token,
    data,
  });
}

// update password /update_password
export async function setUpdatePassword(data = changePasswordTypes, token) {
  const url = buildUrl('update_password');

  return callAPI({
    url,
    method: 'PUT',
    token: token,
    data,
  });
}

// update image /upload_avatar POST
export async function setUpdateImage(data, token) {
  const url = buildUrl('upload_avatar');

  return callAPI({
    url,
    method: 'POST',
    token: token,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}