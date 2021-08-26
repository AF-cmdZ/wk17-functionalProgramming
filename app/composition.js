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
            return `We are drying. Check back in ${state.dryingTime} minutes. ${state.noise}`;
        },
        });

const createSmartAppliance = (name, noise, dryTime) => {
    const state = {
        name,
        noise,
        dryTime,
    };
};