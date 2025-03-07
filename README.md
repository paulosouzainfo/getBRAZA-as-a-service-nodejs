# getBRAZA Node.js SDK

## Instalação

```bash
npm install
```

## Exemplo de uso
```js
const GetBrazaClient = require('./src/client');

const client = new GetBrazaClient("app_id", "api_key", "account_number");

// Exemplo de transação PIX
client.inputTransaction({
    url_callback: "https://example.com/callback",
    amount: "100.00"
}).then(response => {
    console.log(response);
});
```

## Testes
```bash
npm test
```

Para rodar os testes e gerar um relatório de cobertura:
```bash
npm run test:coverage
```