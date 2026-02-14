const checkvalidData = (name, email, password, isSignIn) => {

    // Only check name in Sign Up
    if (!isSignIn) {
        const validName = /^[a-zA-Z\s'-]{2,50}$/.test(name);
        if (!validName) return "Name is not valid";
    }

    const validEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (!validEmail) return "Email is not valid";

    const validPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    if (!validPassword) return "Password is not valid";

    return null;
};

export default checkvalidData;

