import { getPokemonById } from '../../src/js-foundation/06-promises';



describe('js-foundation - Promises', () => {

  test('should return a Pokemon', async () => {
    
    const pokemonId= 1
    const pokemonName = await getPokemonById(pokemonId);
    
    expect(pokemonName).toBe('bulbasaur');
  });

  test('should return an error if pokemon does exist', async () =>{
    const pokemonId= 100000000000;

    try{
      await getPokemonById(pokemonId);
      expect( pokemonId ).toBeFalsy()

    }
    catch( error ){
      expect( error ).toBe(`Pokemon not found with id: ${pokemonId} `)
    }


    // expect(pokemonName).toBe('Pokemon no existe');

  })

})