import { FieldError } from 'react-hook-form';

function getErrorMessage(error: FieldError | undefined, name: string) {
    if (!error) {
        return undefined;
    }

    if (error.message) {
        return error.message;
    }

    if (error.type === 'required') {
        return `${name} field is required.`;
    }

    return `${name} field contains an error`;
}

export default function getError({
    name,
    errors,
}: {
    name: string;
    errors?: Record<string, FieldError>;
}) {
    return getErrorMessage(errors?.[name ?? ''], name);
}