import { Link } from '@umijs/max';
import { Button, Result } from 'antd';

export default () => (
  <Result
    status="404"
    title="404"
    subTitle="Lo sentimos, la página que visitaste no existe."
    extra={
      <Link to="/">
        <Button type="primary">Volver a casa</Button>
      </Link>
    }
  />
);
