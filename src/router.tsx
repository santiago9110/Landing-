import { createBrowserRouter, Navigate } from 'react-router-dom';
import AgentPage from '@/landings/AgentPage';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/norma" replace /> },
  { path: '/norma', element: <AgentPage slug="norma" /> },
  { path: '/roberto', element: <AgentPage slug="roberto" /> }
]);

export default router;