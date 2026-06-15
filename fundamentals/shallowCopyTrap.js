// Challenge 4: The Shallow Copy Trap (Memory & References)

const dbUser = {
    id: "usr_99",
    profile: { name: "Raj", role: "intern" }
};

function promoteUser(user) {
    // shallow copy does not break nested objects reference
    // const updatedUser = { ...dbUser } 

    // To break nested objects reference, need to use clone (deep copy)
    const updatedUser = structuredClone(dbUser) 
    updatedUser.profile.role = user.profile.role

    return updatedUser
}

const updatedDbUser = promoteUser({
    id: 'usr_100',
    profile: { name: 'Neha', role: 'senior'}
});

console.log(dbUser, updatedDbUser)