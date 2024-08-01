import ExamplePage from '@pages/ExamplePage';
import LoadingPage from '@pages/LoadingPage';
import NotFoundPage from '@pages/NotFoundPage';
import { ExampleLayout } from '@layouts';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={
              <ExampleLayout>
                <ExamplePage />
              </ExampleLayout>
            }
          />

          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
