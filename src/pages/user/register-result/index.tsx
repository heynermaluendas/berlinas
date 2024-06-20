import { Link, useSearchParams } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
import useStyles from './style.style';

const RegisterResult: React.FC<Record<string, unknown>> = () => {
  const { styles } = useStyles();
  const [params] = useSearchParams();

  const actions = (
    <div className={styles.actions}>
      <a href="">
        <Button size="large" type="primary">
          <span>Revisa tu correo</span>
        </Button>
      </a>
      <Link to="/">
        <Button size="large">Ir a pagina principal</Button>
      </Link>
    </div>
  );

  const email = params?.get('account') || 'AntDesign@example.com';
  return (
    <Result
      className={styles.registerResult}
      status="success"
      title={
        <div className={styles.title}>
          <span>Tu cuenta: {email} fue registrada exitosamente!</span>
        </div>
      }
      subTitle="El correo electrónico de activación ha sido enviado a su buzón de correo y es válido por 24 horas. Inicie sesión en su correo electrónico de inmediato y haga clic en el enlace del correo electrónico para activar su cuenta."
      extra={actions}
    />
  );
};
export default RegisterResult;
