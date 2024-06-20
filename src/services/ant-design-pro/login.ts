// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Enviar el código de verificación - POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** Número de teléfono */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
