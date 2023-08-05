import Chance from "chance";

const chance = Chance();

const fakeUserFetch = () => {
  return chance.name({ middle_initial: true });
};

export default fakeUserFetch;
