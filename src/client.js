const axios = require('axios');

class GetBrazaClient {
    constructor(applicationId, apiKey, accountNumber, baseUrl = "https://sandbox-api.getbraza.uk/v2/business") {
        this.applicationId = applicationId;
        this.apiKey = apiKey;
        this.accountNumber = accountNumber;
        this.baseUrl = baseUrl;
    }

    async _request(method, endpoint, data = {}) {
        const headers = {
            "x-application-id": this.applicationId,
            "x-api-key": this.apiKey,
            "x-account-number": this.accountNumber,
            "Content-Type": "application/json"
        };
        const url = `${this.baseUrl}${endpoint}`;
        const response = await axios({ method, url, headers, data });
        return response.data;
    }

    async inputTransaction(data) {
        return this._request("POST", "/v1/", data);
    }

    async retrieveTransactions() {
        return this._request("POST", "/v1/transactions");
    }

    async withdraw(data) {
        return this._request("POST", "/v1/withdraw", data);
    }

    async getQuote(pair, markupType, markupValue) {
        const params = { pair };
        if (markupType) params.markup_type = markupType;
        if (markupValue) params.markup_value = markupValue;
        return this._request("GET", "/v1/quote", { params });
    }

    async internalTransfer(data) {
        return this._request("POST", "/v1/internal-transfer", data);
    }

    async auth() {
        return this._request("POST", "/v1/auth");
    }

    async getBalance() {
        return this._request("GET", "/v1/balance");
    }
}

module.exports = GetBrazaClient;