import { client, isDarkModeVar, isLoggedInVar } from "@/apollo";
import routes from "@/routes";
import { darkTheme, GlobalStyle, lightTheme } from "@/styles";
import Login from "@/views/Login";
import Main from "@/views/Main";
import NotFound from "@/views/NotFound";
import SignUp from "@/views/SignUp";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
	const isDarkMode = useReactiveVar(isDarkModeVar);
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	return (
		<ApolloProvider client={client}>
			<HelmetProvider>
				<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
					<GlobalStyle />
					<Router>
						<Routes>
							<Route
								path={routes.home}
								element={isLoggedIn ? <Main /> : <Login />}
							/>
							{!isLoggedIn ? (
								<Route path={routes.signUp} element={<SignUp />} />
							) : null}
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Router>
				</ThemeProvider>
			</HelmetProvider>
		</ApolloProvider>
	);
}

export default App;
