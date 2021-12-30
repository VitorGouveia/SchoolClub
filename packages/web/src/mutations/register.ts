export const register = `mutation Register($email: String!, $username: String!, $password: String!) {
	register(email: $email, password: $password, username: $username) {
		errors {
			field
			message
		}

		user {
			id
			username
			email
			tokenVersion
		}

		accessToken
	}
}`;
