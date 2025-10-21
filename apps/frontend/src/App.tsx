import { useState } from 'react';
import { useLazyGetHealthQuery } from './redux/api/healthApi';

function App() {
  const [preferCache, setPreferCache] = useState<boolean>(true);
  const [trigger, { data, isFetching, isError }] = useLazyGetHealthQuery();

  const handleClick = async () => {
    // Toggle mode each click: cached -> network -> cached -> ...
    await trigger(undefined, preferCache);
    setPreferCache((prev) => !prev);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Frontend ↔ Backend via RTK Query</h1>
      <button onClick={handleClick} style={{ padding: '8px 12px', fontSize: 16 }}>
        {isFetching ? 'Fetching...' : preferCache ? 'Fetch (prefer cache)' : 'Fetch (network)'}
      </button>

      <div style={{ marginTop: 16 }}>
        <strong>Status:</strong>{' '}
        {isFetching ? 'loading' : isError ? 'error' : data ? 'success' : 'idle'}
      </div>
      <div style={{ marginTop: 8 }}>
        <strong>Result:</strong> {data ? `${data.status} (${data.nodeEnv})` : '—'}
      </div>
      <div style={{ marginTop: 8 }}>
        <strong>Mode (next click):</strong> {preferCache ? 'prefer cache' : 'network fetch'}
      </div>

      <p style={{ marginTop: 16, color: '#555' }}>
        Open DevTools → Network and click the button multiple times. You should see a request only
        when mode is "network fetch"; when "prefer cache", it returns from cache.
      </p>
    </div>
  );
}

export default App;
