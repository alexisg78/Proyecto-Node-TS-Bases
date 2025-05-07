// const getAgePlugin = require('get-age');


export const getAge = ( birthdate: string ) => {

  // console.log({ currentDate: new Date().getFullYear() });

  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
