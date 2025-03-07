const GetBrazaClient = require('../src/client');
const client = new GetBrazaClient("app_id", "api_key", "account_number");

test('inputTransaction', async () => {
    const response = await client.inputTransaction({
        url_callback: "https://example.com/callback",
        amount: "100.00"
    });
    expect(response).toHaveProperty("message");
});

// Adicione mais testes para outros métodos