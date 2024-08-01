import { ExamplePage, LoadingPage, NotFoundPage } from '../../pages';
import { ExampleLayout } from '../../layouts';
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
