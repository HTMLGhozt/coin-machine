import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

type Values = Record<string, any>;

type Props<T> = {
	onSubmit: SubmitHandler<T>;
	children: React.ReactNode;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export default function Form<T = Values>({
	children,
	onSubmit,
	...props
}: Props<T>) {
	const form = useForm<T>();

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} {...props}>
				{children}
			</form>
		</FormProvider>
	);
}
