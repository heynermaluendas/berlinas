import { Link } from '@umijs/max';
import { Button, Result } from 'antd';

export default () => (
  <Result
    status="500"
    title="500"
    subTitle="Perdón, algo salió mal."
    extra={
      <Link to="/">
        <Button type="primary">Volver a casa</Button>
      </Link>
    }
  />
);
