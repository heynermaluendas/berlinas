import { Link } from '@umijs/max';
import { Button, Result } from 'antd';

export default () => (
  <Result
    status="403"
    title="403"
    subTitle="Lo sentimos, no estás autorizado a acceder a esta página."
    extra={
      <Link to="/">
        <Button type="primary">Volver a casa</Button>
      </Link>
    }
  />
);
