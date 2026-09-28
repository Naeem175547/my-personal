import { Button } from '@/components/ui/button';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/auth';
import { SigninCard } from './components/organisms/Auth/signInCard';
import { SignupCard } from './components/organisms/Auth/signUpCard';

function App() {
  return (
    <>
      <h2>Homepage</h2>
      <Routes>
        <Route
          path="/auth/signUp"
          element={
            <Auth>
              <SignupCard />
            </Auth>
          }
        />
        <Route
          path="/auth/signIn"
          element={
            <Auth>
              <SigninCard />
            </Auth>
          }
        />
        <Route path="/*" element={<p>Not found page</p>} />
      </Routes>
    </>
  );
}

export default App;
