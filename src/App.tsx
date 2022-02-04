import { isDarkModeVar, isLoggedInVar } from "@/apollo";
import { darkTheme, GlobalStyle, lightTheme } from "@/styles";
import Main from "@/views/Main";
import Users from "@/views/Users";
import { useReactiveVar } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
function App() {
	const isDarkMode = useReactiveVar(isDarkModeVar);
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route index element={isLoggedIn ? <Users /> : <Main />} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
