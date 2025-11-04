import { Circles } from 'react-loading-icons';

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ animation: 'spin 2s linear infinite' }}>
    <Circles />
    </div>
  </div>
);

export default Loading;