import { FC, InputHTMLAttributes } from "react";
import { FieldHookConfig, useField } from "formik";

import { Input as InputField } from "@chakra-ui/input";
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
} from "@chakra-ui/form-control";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label: string;
};

export const Input: FC<InputProps> = ({ label, size: _, ...props }) => {
	const [field, { error }] = useField(props);

	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<InputField
				{...field}
				{...props}
				id={field.name}
				placeholder={props.placeholder}
			/>
			{error ? (
				<FormErrorMessage>{error}</FormErrorMessage>
			) : (
				<FormHelperText>
					Enter the email you'd like to receive the newsletter on.
				</FormHelperText>
			)}
		</FormControl>
	);
};
