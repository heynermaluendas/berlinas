import { UploadOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Input, message, Upload } from 'antd';
import React from 'react';
import { queryCity, queryCurrent, queryProvince } from '../service';
import useStyles from './index.style';

const validatorPhone = (rule: any, value: string[], callback: (message?: string) => void) => {
  if (!value[0]) {
    callback('Please input your area code!');
  }
  if (!value[1]) {
    callback('Please input your phone number!');
  }
  callback();
};

const BaseView: React.FC = () => {
  const { styles } = useStyles();
  // El componente avatar facilita la independencia en el futuro y añade funciones como la de recorte.
  const AvatarView = ({ avatar }: { avatar: string }) => (
    <>
      <div className={styles.avatar_title}>Avatar</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            Cambiar avatar
          </Button>
        </div>
      </Upload>
    </>
  );
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };
  const handleFinish = async () => {
    message.success('Actualice la información básica con éxito');
  };
  return (
    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                searchConfig: {
                  submitText: 'Actualizar información básica',
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={{
                ...currentUser,
                phone: currentUser?.phone.split('-'),
              }}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="email"
                label="Correo"
                rules={[
                  {
                    required: true,
                    message: '¡Por favor introduzca su correo electrónico!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="name"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Introduzca su usuario!',
                  },
                ]}
              />
              <ProFormTextArea
                name="profile"
                label="Perfil personal"
                rules={[
                  {
                    required: true,
                    message: '¡Por favor ingresa tu perfil personal!',
                  },
                ]}
                placeholder="Perfil personal"
              />
              <ProFormSelect
                width="sm"
                name="country"
                label="Pais/Region"
                rules={[
                  {
                    required: true,
                    message: '¡Por favor ingrese su país o región!',
                  },
                ]}
                options={[
                  {
                    label: 'Colombia',
                    value: 'Colombia',
                  },
                ]}
              />

              <ProForm.Group title="Provincia y ciudad" size={8}>
                <ProFormSelect
                  rules={[
                    {
                      required: true,
                      message: '¡Por favor ingresa tu provincia!',
                    },
                  ]}
                  width="sm"
                  fieldProps={{
                    labelInValue: true,
                  }}
                  name="province"
                  className={styles.item}
                  request={async () => {
                    return queryProvince().then(({ data }) => {
                      return data.map((item) => {
                        return {
                          label: item.name,
                          value: item.id,
                        };
                      });
                    });
                  }}
                />
                <ProFormDependency name={['province']}>
                  {({ province }) => {
                    return (
                      <ProFormSelect
                        params={{
                          key: province?.value,
                        }}
                        name="city"
                        width="sm"
                        rules={[
                          {
                            required: true,
                            message: '¡Por favor ingresa tu ciudad!',
                          },
                        ]}
                        disabled={!province}
                        className={styles.item}
                        request={async () => {
                          if (!province?.key) {
                            return [];
                          }
                          return queryCity(province.key || '').then(({ data }) => {
                            return data.map((item) => {
                              return {
                                label: item.name,
                                value: item.id,
                              };
                            });
                          });
                        }}
                      />
                    );
                  }}
                </ProFormDependency>
              </ProForm.Group>
              <ProFormText
                width="md"
                name="address"
                label="Dirección"
                rules={[
                  {
                    required: true,
                    message: '¡Por favor ingrese su dirección postal!',
                  },
                ]}
              />
              <ProFormFieldSet
                name="phone"
                label="Numero de telefono"
                rules={[
                  {
                    required: true,
                    message: '¡Por favor ingrese su número de contacto!',
                  },
                  {
                    validator: validatorPhone,
                  },
                ]}
              >
                <Input className={styles.area_code} />
                <Input className={styles.phone_number} />
              </ProFormFieldSet>
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL()} />
          </div>
        </>
      )}
    </div>
  );
};
export default BaseView;
