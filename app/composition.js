const withPic = (state) => ({
    takePicture() {
    return `${state.name} took a picture!`;
    },
});

const withPhone = (state) => ({
dial(number) {
    return `${state.name} is dialing the number: ${number}.`;
},
});

const withNoise = (state) => ({
    makeNoise() {
        return `We are making noise. ${state.noise} ${state.noise} ${state.noise}`;
},
});

const withDry = (state) => ({
    dry() {
        return `We are drying. Check back in ${state.dryTime} minutes. ${state.noise}`;
},
});

const createSmartAppliance = (name, noise, dryTime = 100) => {
    const state = {
        name,
        noise,
        dryTime,
    };
    return  {
        ...withNoise(state),
        ...withDry(state),
        ...withPhone(state),
        ...withPic(state),
    };
};

const sd = createSmartAppliance("whirl", "Whirr", 5);

console.log(sd, sd.takePicture(), sd.dial(12345), sd.makeNoise(), sd.dry());