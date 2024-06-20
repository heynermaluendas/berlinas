import {
  ModalForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import type { FC } from 'react';
import type { BasicListItemDataType } from '../data.d';
import useStyles from '../style.style';
type OperationModalProps = {
  done: boolean;
  open: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
  children?: React.ReactNode;
};
const OperationModal: FC<OperationModalProps> = (props) => {
  const { styles } = useStyles();
  const { done, open, current, onDone, onSubmit, children } = props;
  if (!open) {
    return null;
  }
  return (
    <ModalForm<BasicListItemDataType>
      open={open}
      title={done ? null : `Tarea${current ? 'Editar' : 'Añadir'}`}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done
          ? {
              padding: '72px 0',
            }
          : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="title"
            label="Nombre de la misión"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa un nombre de tarea',
              },
            ]}
            placeholder="Por favor escribe"
          />
          <ProFormDateTimePicker
            name="createdAt"
            label="Tiempo de empezar"
            rules={[
              {
                required: true,
                message: 'Por favor seleccione una hora de inicio',
              },
            ]}
            fieldProps={{
              style: {
                width: '100%',
              },
            }}
            placeholder="Por favor elige"
          />
          <ProFormSelect
            name="owner"
            label="Líder de tarea"
            rules={[
              {
                required: true,
                message: 'Por favor seleccione el líder de la tarea',
              },
            ]}
            options={[
              {
                label: 'Fu Xiaoxiao',
                value: 'xiao',
              },
              {
                label: 'Zhou Maomao',
                value: 'mao',
              },
            ]}
            placeholder="Seleccione un administrador"
          />
          <ProFormTextArea
            name="subDescription"
            label="Descripción del Producto"
            rules={[
              {
                message: '¡Ingrese una descripción del producto de al menos cinco caracteres!',
                min: 5,
              },
            ]}
            placeholder="Por favor ingrese al menos cinco caracteres"
          />
        </>
      ) : (
        <Result
          status="success"
          title="Operación exitosa"
          subTitle="Una serie de descripciones informativas, muy breves y también puntuables."
          extra={
            <Button type="primary" onClick={onDone}>
              Sabía
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};
export default OperationModal;
