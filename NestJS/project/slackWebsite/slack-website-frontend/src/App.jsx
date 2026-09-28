import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/auth';
import { SigninCard } from './components/organisms/Auth/signInCard';
import NotFound from './pages/notFound/notFound';
import { SignupContainer } from './components/organisms/Auth/SignupContainer';

function App() {
  return (
    <>
      <h2>Homepage</h2>
      <Routes>
        <Route
          path="/auth/signup"
          element={
            <Auth>
              <SignupContainer />
            </Auth>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <Auth>
              <SigninCard />
            </Auth>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
