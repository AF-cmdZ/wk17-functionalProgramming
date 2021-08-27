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
  
  const newEmp = createEmployee({ name: "Blanche", email: "blanche@gmail.com" });
  const betterEmp = createEmployee({ name: "Rose", email: "rose@gmail.com" });
  console.log(newEmp.getEmail(), newEmp.getPayCheck(), newEmp.giveRaise(1000));
  