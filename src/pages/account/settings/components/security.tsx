import { List } from 'antd';
import React from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};

const SecurityView: React.FC = () => {
  const getData = () => [
    {
      title: 'Contraseña',
      description: (
        <>
          Seguridad de la contraseña actual:
          {passwordStrength.strong}
        </>
      ),
      actions: [<a key="Modify">Revisar</a>],
    },
    {
      title: 'Numero de telefono',
      description: `Numero de telefono：138****8293`,
      actions: [<a key="Modify">Modificar</a>],
    },
    {
      title: 'Pregunta de seguridad',
      description: 'No se establecen preguntas de seguridad, lo que puede proteger eficazmente la seguridad de la cuenta.',
      actions: [<a key="Set">Establecer</a>],
    },
    {
      title: 'Correo electrónico de respaldo',
      description: `Email de respaldo：ant***sign.com`,
      actions: [<a key="Modify">Modificar</a>],
    },
    {
      title: 'Dispositivo MFA',
      description: 'El dispositivo MFA no está vinculado. Después de vincularlo, puede realizar una segunda confirmación.',
      actions: [<a key="bind">Vincular</a>],
    },
  ];

  const data = getData();
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  );
};

export default SecurityView;
