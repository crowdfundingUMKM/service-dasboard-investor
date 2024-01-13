import callAPI from '@/config/api';
import { LoginTypes,RegisterTypes } from '@/service/investor/data-types';

const ROOT_API = process.env.NEXT_PUBLIC_SERVICE_INVESTOR;
const API_VERSION = 'api/v1';

const buildUrl = (endpoint) => `${ROOT_API}/${API_VERSION}/${endpoint}`;

export async function setLogin(data = LoginTypes) {
    const url = buildUrl('login_investor');
  
    return callAPI({
      url,
      method: 'POST',
      data,
    });
  }

export async function setRegister(data = RegisterTypes) {
  const url = buildUrl('register_investor');

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

// /email_check
export async function setEmailCheck(data = CheckEmailTypes) {
  const url = buildUrl('email_check');

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
// /phone_check
export async function setPhoneCheck(data = CheckPhoneTypes) {
  const url = buildUrl('phone_check');

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

// verify token






