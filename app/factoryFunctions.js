const createUser = (user) => ({
        introduceSelf() {
            return `Hello, I'm ${user.name}!`;
        },
        giveLocation() {
            return `I'm in ${user.city}`;
        },
});

const matt = createUser({name: "Matt", age: 30, city: "Detroit" });

console.log(matt.introduceSelf(), matt.giveLocation());