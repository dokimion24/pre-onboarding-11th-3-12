import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const router = (
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="detail/:id" element={<Detail />} />
    <Route path="/*" element={<NotFound />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
