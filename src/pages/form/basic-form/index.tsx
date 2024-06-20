import {
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import type { FC } from 'react';
import { fakeSubmitForm } from './service';
import useStyles from './style.style';
const BasicForm: FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('Enviado satisfactoriamente');
    },
  });
  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };
  return (
    <PageContainer content="Las páginas de formulario se utilizan para recopilar o verificar información de los usuarios. Los formularios básicos se utilizan comúnmente en escenarios de formularios con pocos elementos de datos.">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="Titulo"
            name="title"
            rules={[
              {
                required: true,
                message: 'Por favor introduce un título',
              },
            ]}
            placeholder="Nombre del objetivo"
          />
          <ProFormDateRangePicker
            label="Fecha de inicio y finalización"
            width="md"
            name="date"
            rules={[
              {
                required: true,
                message: 'Por favor seleccione fechas de inicio y finalización',
              },
            ]}
            placeholder={['Fecha de inicio', 'Fecha final']}
          />
          <ProFormTextArea
            label="Descripcion del objetivo"
            width="xl"
            name="goal"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa una descripción de objetivo',
              },
            ]}
            placeholder="Por favor ingrese sus objetivos de trabajo por fases"
          />

          <ProFormTextArea
            label="Métrica"
            name="standard"
            width="xl"
            rules={[
              {
                required: true,
                message: 'Por favor introduce métricas',
              },
            ]}
            placeholder="Por favor introduce métricas"
          />

          <ProFormText
            width="md"
            label={
              <span>
                Cliente
                <em className={styles.optional}> (opcional) </em>
              </span>
            }
            tooltip="Destinatarios del servicio objetivo"
            name="client"
            placeholder="Describa los clientes a los que atiende."
          />

          <ProFormText
            width="md"
            label={
              <span>
                Invitar revisores
                <em className={styles.optional}> (opcional) </em>
              </span>
            }
            name="invites"
            placeholder="@nombre/número de empleado, hasta 5 personas"
          />

          <ProFormDigit
            label={
              <span>
                Pesos
                <em className={styles.optional}> (opcional) </em>
              </span>
            }
            name="weight"
            placeholder="Por favor escribe"
            min={0}
            max={100}
            width="xs"
            fieldProps={{
              formatter: (value) => `${value || 0}%`,
              parser: (value) => Number(value ? value.replace('%', '') : '0'),
            }}
          />

          <ProFormRadio.Group
            options={[
              {
                value: '1',
                label: 'Publico',
              },
              {
                value: '2',
                label: 'Parcialmente público',
              },
              {
                value: '3',
                label: 'Privado',
              },
            ]}
            label="Objetivo público"
            help="Los clientes y revisores se comparten de forma predeterminada."
            name="publicType"
          />
          <ProFormDependency name={['publicType']}>
            {({ publicType }) => {
              return (
                <ProFormSelect
                  width="md"
                  name="publicUsers"
                  fieldProps={{
                    style: {
                      margin: '8px 0',
                      display: publicType && publicType === '2' ? 'block' : 'none',
                    },
                  }}
                  options={[
                    {
                      value: '1',
                      label: 'Colega a',
                    },
                    {
                      value: '2',
                      label: 'Colega b',
                    },
                    {
                      value: '3',
                      label: 'Colega c',
                    },
                  ]}
                />
              );
            }}
          </ProFormDependency>
        </ProForm>
      </Card>
    </PageContainer>
  );
};
export default BasicForm;
