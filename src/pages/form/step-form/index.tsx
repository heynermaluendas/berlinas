import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import type { FormInstance } from 'antd';
import { Alert, Button, Card, Descriptions, Divider, Result, Statistic } from 'antd';
import React, { useRef, useState } from 'react';
import type { StepDataType } from './data.d';
import useStyles from './style.style';
const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="Cuenta de pago"> {payAccount}</Descriptions.Item>
      <Descriptions.Item label="Cuentas por cobrar"> {receiverAccount}</Descriptions.Item>
      <Descriptions.Item label="Nombre del beneficiario"> {receiverName}</Descriptions.Item>
      <Descriptions.Item label="Monto de la transferencia">
        <Statistic
          value={amount}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              Yuan
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};
const StepResult: React.FC<{
  onFinish: () => Promise<void>;
  children?: React.ReactNode;
}> = (props) => {
  const { styles } = useStyles();
  return (
    <Result
      status="success"
      title="Operación exitosa"
      subTitle="Se espera que llegue dentro de dos horas."
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
          Transferir otra cantidad
          </Button>
          <Button>Ver factura</Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};
const StepForm: React.FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  const [stepData, setStepData] = useState<StepDataType>({
    payAccount: 'jmaluendas@berlinasdelfonce.com',
    receiverAccount: 'peti@berlinasdelfonce.com',
    receiverName: 'Juan',
    amount: '500',
    receiverMode: 'Efecty',
  });
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();
  return (
    <PageContainer content="Divida una tarea larga o desconocida en varios pasos y guíe a los usuarios a través de ella.">
      <Card bordered={false}>
        <StepsForm
          current={current}
          onCurrentChange={setCurrent}
          submitter={{
            render: (props, dom) => {
              if (props.step === 2) {
                return null;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm<StepDataType>
            formRef={formRef}
            title="Complete la información de transferencia"
            initialValues={stepData}
            onFinish={async (values) => {
              setStepData(values);
              return true;
            }}
          >
            <ProFormSelect
              label="Cuenta de pago"
              width="md"
              name="payAccount"
              rules={[
                {
                  required: true,
                  message: 'Por favor seleccione cuenta de pago',
                },
              ]}
              valueEnum={{
                'jmaluendas@berlinasdelfonce.com': 'peti@berlinasdelfonce.com',
              }}
            />

            <ProForm.Group title="Cuentas por cobrar" size={8}>
              <ProFormSelect
                name="receiverMode"
                rules={[
                  {
                    required: true,
                    message: 'Por favor seleccione cuenta de pago',
                  },
                ]}
                valueEnum={{
                  alipay: 'Efecty',
                  bank: 'Cuenta bancaria',
                }}
              />
              <ProFormText
                name="receiverAccount"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese la cuenta del beneficiario',
                  },
                  {
                    type: 'email',
                    message: 'El nombre de la cuenta debe estar en formato de correo electrónico.',
                  },
                ]}
                placeholder="test@example.com"
              />
            </ProForm.Group>
            <ProFormText
              label="Nombre del beneficiario"
              width="md"
              name="receiverName"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el nombre del beneficiario',
                },
              ]}
              placeholder="Nombre del beneficiario"
            />
            <ProFormDigit
              label="Monto de la transferencia"
              name="amount"
              width="md"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el monto de la transferencia',
                },
                {
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: 'Por favor ingrese un número de monto legal',
                },
              ]}
              placeholder="Cantidad"
              fieldProps={{
                prefix: '$',
              }}
            />
          </StepsForm.StepForm>

          <StepsForm.StepForm title="Confirmar información de transferencia">
            <div className={styles.result}>
              <Alert
                closable
                showIcon
                message="Una vez confirmada la transferencia, los fondos se acreditarán directamente en la cuenta de la otra parte y no se podrán devolver."
                style={{
                  marginBottom: 24,
                }}
              />
              <StepDescriptions stepData={stepData} bordered />
              <Divider
                style={{
                  margin: '24px 0',
                }}
              />
              <ProFormText.Password
                label="Contraseña de pago"
                width="md"
                name="password"
                required={false}
                rules={[
                  {
                    required: true,
                    message: 'Se requiere una contraseña de pago para realizar el pago.',
                  },
                ]}
              />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Finalizar">
            <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            >
              <StepDescriptions stepData={stepData} />
            </StepResult>
          </StepsForm.StepForm>
        </StepsForm>
        <Divider
          style={{
            margin: '40px 0 24px',
          }}
        />
        <div>
          <h3>Ilustrar</h3>
          <h4>Transferir a cuenta Alipay</h4>
          <p>
          Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto.
          </p>
          <h4>Transferencia a tarjeta bancaria</h4>
          <p>
          Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto. Si es necesario, puede incluir aquí algunas preguntas frecuentes sobre el producto.
          </p>
        </div>
      </Card>
    </PageContainer>
  );
};
export default StepForm;
