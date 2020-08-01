import React, { forwardRef, InputHTMLAttributes } from 'react';
import FormItem from './FormItem';
import { FieldError } from 'react-hook-form';
import getError from '../../utils/getError';

export type Props = {
	label: string;
	name: string;
	errors?: Record<string, FieldError>;
} & InputHTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, Props>(
	({ label, errors, ...props }, ref) => {
		const errorMessage = getError({ name: props.name as string, errors });

		return (
			<FormItem label={label} name={props.name} error={errorMessage}>
				<input
					id={props.name}
					className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
					ref={ref}
					{...props}
				/>
				{errorMessage && (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-red-500"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				)}
			</FormItem>
		);
	},
);
