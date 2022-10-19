import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
	return <div>{true ? <LoginPage /> : <ProfilePage />}</div>;
}

export default App;
