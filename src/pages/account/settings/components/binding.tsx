import { AlipayOutlined, DingdingOutlined, TaobaoOutlined } from '@ant-design/icons';
import { List } from 'antd';
import React, { Fragment } from 'react';

const BindingView: React.FC = () => {
  const getData = () => [
    {
      title: 'Unir Taobao',
      description: 'La cuenta de Taobao no está vinculada actualmente',
      actions: [<a key="Bind">Vinculante</a>],
      avatar: <TaobaoOutlined className="taobao" />,
    },
    {
      title: 'Vincular Alipay',
      description: 'La cuenta Alipay no está vinculada actualmente',
      actions: [<a key="Bind">vinculante</a>],
      avatar: <AlipayOutlined className="alipay" />,
    },
    {
      title: 'Enlace DingTalk',
      description: 'Actualmente no hay ninguna cuenta de DingTalk vinculada',
      actions: [<a key="Bind">vinculante</a>],
      avatar: <DingdingOutlined className="dingding" />,
    },
  ];

  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={getData()}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta
              avatar={item.avatar}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default BindingView;
