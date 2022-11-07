import logo from "./logo.svg";
import "./App.css";
// import Loading from "./context/Loading";
import Routers from "./routes/Routers";
import { useLoading } from "./context/LoadingContext";
import Loading from "./context/Loading";
import { useAuth } from "./context/AuthContext";

function App() {
	const { loading } = useLoading();

	const { initialLoading } = useAuth();

	if (initialLoading) return <Loading />;
	return (
		<>
			{loading && <Loading />}

			<Routers />
		</>
	);
}

export default App;
