import { logUserIn } from "@/apollo";
import AuthLayout from "@/components/auth/AuthLayout";
import BottomBox from "@/components/auth/BottomBox";
import Button from "@/components/auth/Button";
import FormBox from "@/components/auth/FormBox";
import FormError from "@/components/auth/FormError";
import Input from "@/components/auth/Input";
import Separator from "@/components/auth/Separator";
import PageTitle from "@/components/PageTitle";
import routes from "@/routes";
import { gql, useMutation } from "@apollo/client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const FacebookLogin = styled.div`
	color: #385285;
	span {
		margin-left: 10px;
		font-weight: 600;
	}
`;

const Notification = styled.div`
	color: #2ecc71;
`;

const LOGIN_MUTATION = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			ok
			token
			error
		}
	}
`;

const Login = () => {
	interface loginState {
		username?: string;
		password?: string;
		message?: string;
		result?: boolean;
	}
	let location = useLocation();
	const state = location.state as loginState;
	const {
		register,
		handleSubmit,
		formState,
		getValues,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<loginState>({
		mode: "onChange",
		defaultValues: {
			username: state?.username || "",
			password: state?.password || "",
		},
	});
	const onCompleted = (data: any) => {
		const {
			login: { ok, error, token },
		} = data;
		if (!ok) {
			return setError("result", {
				message: error,
			});
		}
		if (token) {
			logUserIn(token);
		}
	};
	const [login, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted,
	});
	const onSubmitValid = () => {
		if (loading) {
			return;
		}
		const { username, password } = getValues();
		login({
			variables: { username, password },
		});
	};
	const clearLoginError = () => {
		clearErrors("result");
	};
	return (
		<AuthLayout>
			<PageTitle title='Login' />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram as IconProp} size='3x' />
				</div>
				<Notification>{state?.message}</Notification>
				<form onSubmit={handleSubmit(onSubmitValid)}>
					<Input
						{...register("username", {
							required: "Username is required",
							minLength: {
								value: 5,
								message: "Username should be longer than 5 chars.",
							},
						})}
						onChange={clearLoginError}
						name='username'
						type='text'
						placeholder='Username'
						aria-invalid={Boolean(errors?.username?.message)}
					/>
					<FormError message={errors?.username?.message} />
					<Input
						{...register("password", {
							required: "Password is required.",
						})}
						onChange={clearLoginError}
						name='password'
						type='password'
						placeholder='Password'
						aria-invalid={Boolean(errors?.password?.message)}
					/>
					<FormError message={errors?.password?.message} />
					<Button
						type='submit'
						value={loading ? "Loading..." : "Log in"}
						disabled={!formState.isValid || loading}
					/>
					<FormError message={errors?.result?.message} />
				</form>
				<Separator />
				<FacebookLogin>
					<FontAwesomeIcon icon={faFacebookSquare as IconProp} />
					<span>Log in with Facebook</span>
				</FacebookLogin>
			</FormBox>
			<BottomBox
				cta="Don't have an account?"
				linkText='Sign up'
				link={routes.signUp}
			/>
		</AuthLayout>
	);
};
export default Login;
