export const validateForm = (data) => {
    const regExp = {
        name: /^[a-zA-Z]{2,}$/,
        email: /\S+@\S+\.\S+/,
    };

    let errors = {};

    if (!data.name) {
        errors.name = 'The Name field is required';
    } else if (!regExp.name.test(data.name)) {
        errors.name = 'Incorrect Name format';
    }

    if (!data.email) {
        errors.email = 'The Email field is required';
    } else if (!regExp.email.test(data.email)) {
        errors.email = 'Incorrect Email format';
    }

    return errors;
};
