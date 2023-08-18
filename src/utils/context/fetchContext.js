import { createContext, useState } from 'react';

export const FetchContext = createContext();

export default function FetchProvider({ children }) {
	const [fetch, setFetch] = useState("api")

	const toggleFetch = () => {
		setFetch(fetch === "api" ? "mock" : "api")
	}
	return (
		<FetchContext.Provider value={{ fetch, toggleFetch }}>
			{children}
		</FetchContext.Provider>
	)
}
