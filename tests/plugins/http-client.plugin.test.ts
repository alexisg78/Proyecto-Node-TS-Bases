import { httpClientPlugin } from '../../src/plugins/http-client.plugin';



describe('plugin/http-client.plugin.ts', () => {

  test('httpClientPlugin.get() should return a string', async () => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(data).toEqual({
      userId: 1,
      // id: 1,
      id: expect.any(Number), // se puede usar expect.any para verificar que es un número
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })    
  })
  
  test('httpClientPlugin should have POST, PUT and DELETE methods', () => {
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
  })
  
})