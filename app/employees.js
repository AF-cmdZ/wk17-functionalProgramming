const withEmail = (state) => ({
    getEmail() {
      return `${state.email}`;
    },
  });
  
  const withPay = (state) => ({
    getPayCheck() {
      return (state.salary / 52).toFixed(2);
    },
    giveRaise(amount) {
      return state.salary + amount;
    },
    getSalary(state) {
      return state.salary;
    },
  });
  
  const withVaca = (state) => ({
    getVacaDays() {
      return `${state.vacaDays}`;
    },
    useVaca(days) {
      return state.vacaDays - days;
    },
  });
  
  const createEmployee = ({ name, email, salary = 99000, vacaDays = 21 }) => {
    const employee = {
      name,
      email,
      salary,
      vacaDays,
    };
    return {
      ...withEmail(employee),
      ...withPay(employee),
      ...withVaca(employee),
    };
  };

  const withCode = (state) => ({
    code(project) {
      return `${state.name} is coding ${project} 👩🏾‍💻 in ${state.language}`;
    },
  });
  
  const withDesign = (state) => ({
    design(project) {
        return `${state.name} is designing a ${state.media} ${project} 💻👩🏾 `;
    },
  });
  
  const createDeveloper = ({ name, email, language = "JS" }) => {
    const state = {
      language,
    };
  
    return {
      ...createEmployee({ name, email }),
      ...withCode(state),
    };
  };
  
  const createDesigner = ({ name, email, media = "Print" }) => {
    const state = {
      media,
    };
  
    return {
      ...createEmployee({ name, email }),
      ...withDesign(state),
    };
  };
  
  const createDesignerDeveloper = ({ name, email }) => ({
    ...createDesigner({ name, email }),
    ...createDeveloper({ name, email }),
  });
  
const newEmp = createEmployee({ name: "Blanche", email: "blanche@gmail.com" });
const betterEmp = createEmployee({ name: "Rose", email: "rose@gmail.com" });

const dev = createDeveloper({ name: "JS Dev", email: "coder@gam.com" });

const designer = createDesigner({ name: "Designer", email: "design@gam.com" });

const dd = createDesignerDeveloper({
  name: "Designer Dev",
  email: "hbrid@gam.com",
});

console.log(dd);
console.log(newEmp.getEmail(), newEmp.getPayCheck(), newEmp.giveRaise(1000));
console.log(dev);
  