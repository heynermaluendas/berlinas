import type { Request, Response } from 'express';

const city = require('./geographic/city.json');
const province = require('./geographic/province.json');

function getProvince(_: Request, res: Response) {
  return res.json({
    data: province,
  });
}

function getCity(req: Request, res: Response) {
  return res.json({
    data: city[req.params.province],
  });
}

function getCurrentUse(req: Request, res: Response) {
  return res.json({
    data: {
      name: 'Jorge Maluendas',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: 'Ser tolerante con la diversidad, la tolerancia es una virtud.',
      title: 'Experto en interacción',
      group: 'Ant Financial - XX Grupo Empresarial - XX Departamento de Plataforma - XX Departamento de Tecnología - UED',
      tags: [
        {
          key: '0',
          label: 'Muy pensativo',
        },
        {
          key: '1',
          label: 'Centrarse en el diseño',
        },
        {
          key: '2',
          label: 'Picante~',
        },
        {
          key: '3',
          label: 'Piernas largas',
        },
        {
          key: '4',
          label: 'Chica de sichuan',
        },
        {
          key: '5',
          label: 'Tolerante de todos los ríos.',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'Colombia',
      geographic: {
        province: {
          label: 'Provincia de Zhejiang',
          key: '330000',
        },
        city: {
          label: 'Ciudad de Hangzhou',
          key: '330100',
        },
      },
      address: 'No. 77, calle Gongzhuan, distrito de Xihu',
      phone: '0752-268888888',
    },
  });
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET  /api/accountSettingCurrentUser': getCurrentUse,
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
