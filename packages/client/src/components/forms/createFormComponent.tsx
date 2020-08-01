import React from 'react';
import { useFormContext, ValidationRules } from 'react-hook-form';

type FormProps<T> = Omit<T, 'ref' | 'errors' | 'error'> & {
	register?: ValidationRules;
};

export default function createFormComponent<Props>(
	Component: React.ComponentType<Props>,
): React.ComponentType<FormProps<Props>> {
	function FormComponent({ ...props }: FormProps<Props>) {
		const form = useFormContext();

		return (
			// @ts-ignore: TODO::080120 Figure out this type error
			<Component
				ref={props.register ? form.register(props.register) : form.register}
				errors={form.errors}
				{...props}
			/>
		);
	}

	FormComponent.displayName = `Form${Component.displayName || Component.name}`;

	return FormComponent;
}
