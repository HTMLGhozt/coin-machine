import React from 'react';
import Label from './Label';

export default function FormItem({
	children,
	label,
	name,
	error,
}: {
	children: React.ReactNode;
	label: string;
	name: string;
	error?: string;
}) {
	return (
		<>
			<Label name={name}>{label}</Label>
			{children}
			{error ? (
				<p className="mt-2 text-sm text-red-600" role="alert">
					{error}
				</p>
			) : null}
		</>
	);
}
