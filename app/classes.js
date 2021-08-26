// Normally only put one class in each file.
// This file uses multiple classes for demo
// Todo: need a class device
class Device {
    constructor(name) {
      this.name = name;
    }
  
    // name property
    takePicture() {
      return `${this.name} took a picture!`;
    }
  }
  
  class Phone extends Device {
    constructor(name, ringtone) {
      super(name);
      this.ringtone = ringtone;
    }
  
    dial(number) {
      return `${this.name} is dialing the number: ${number}.`;
    }
  }
  
  const iPhone = new Phone("iPhone", "ring! ring!");
  
  class Appliance {
    constructor(noise) {
      this.noise = noise;
    }
  
    makeNoise() {
      return `We are making noise. ${this.noise} ${this.noise} ${this.noise}`;
    }
  }
  
  class Dryer extends Appliance {
    constructor(dryingTime, noise) {
      super(noise);
      this.dryingTime = dryingTime;
    }
  
    dry() {
      return `We are drying. Check back in ${this.dryingTime} minutes. ${this.noise}`;
    }
  }
  
  const dryer = new Dryer(10, "woo!");