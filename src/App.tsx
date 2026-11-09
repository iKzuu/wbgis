import { MapView } from './components/MapView';
import { InfoPanel } from './components/InfoPanel';
import { Legend } from './components/Legend';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <MapView />
      <InfoPanel />
      <Legend />
    </div>
  );
}