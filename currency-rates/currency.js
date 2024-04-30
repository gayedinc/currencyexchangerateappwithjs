class Currency {
    // bir sınıftan nesne türetildiğinde ilk constructor çalışır
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Cql8dWdz0BlrBZZSnWZbRnGlUkqTgYqPBbQD8nte&base_currency="
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`); //base_currency firstCurrency oluyor
        const result = await response.json(); //jsonla datanın kendisi alındı
        const exchangedResult = amount * result.data[secondCurrency]; //dönen birçok para biriminden 2. kutuda yazan para birimi gelecek

        return exchangedResult; // gelen değer döndü fakat async keywordü ile işaretlendiği için promise döner, metot çağırıldığı yere main.js'e döner
    }
}
