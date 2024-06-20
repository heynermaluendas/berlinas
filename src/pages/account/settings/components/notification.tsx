import { List, Switch } from 'antd';
import React, { Fragment } from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const NotificationView: React.FC = () => {
  const getData = () => {
    const Action = <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />;
    return [
      {
        title: 'Contraseña de cuenta',
        description: 'Los mensajes de otros usuarios serán notificados en forma de mensajes del sitio.',
        actions: [Action],
      },
      {
        title: 'Información del sistema',
        description: 'Los mensajes del sistema se notificarán en forma de mensajes del sitio.',
        actions: [Action],
      },
      {
        title: 'Próximas tareas',
        description: 'Las tareas pendientes se notificarán en forma de mensajes en el sitio',
        actions: [Action],
      },
    ];
  };

  const data = getData();
  return (
    <Fragment>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default NotificationView;
