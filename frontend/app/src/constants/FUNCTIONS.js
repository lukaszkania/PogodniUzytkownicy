    // Generating password (Password requiremets - length, charset - can be changed in PASSWORD_GENERATOR_REQUIREMENTS file)
    const generatePassword = (charset, length) => {
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        
        return retVal;
    }

export { generatePassword}
