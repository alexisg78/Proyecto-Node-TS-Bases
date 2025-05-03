import { getUserById } from '../../src/js-foundation/03-callbacks';



describe('js-foundation - 03-callbacks', () => {

  test('getUserById should return if user does not exist', ( done ) => {
    
    const id = 10;

    getUserById(id, ( err, user ) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      // done() is a function that tells Jest that the test is done
      // and it should not wait for the timeout to finish
      done();

    });
  })  

  test('getUserById should return a John Doe', ( done ) => {
      
    const id = 1;

    getUserById(id, ( err, user ) => {

      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe'
      });

      // done() is a function that tells Jest that the test is done
      // and it should not wait for the timeout to finish
        done();
  
    })
  
  });


})