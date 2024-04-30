// Element Seçimi

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency(); //currency.js dosyasını kullanmak için nesne türetimi

runEventListeners(); //Altta yazılan metod çağırıldı

function runEventListeners() {
    amountInput.addEventListener("input", exchange); // ilk kutuya sayı yazıldığında exchange metodu tetiklensin
}

function exchange() { // buradaki exchange main.js dosyasının içindeki metodun ismi
    const amount = Number(amountInput.value.trim()); // amountu numbera çevirme

    // O an kutularda hangi para birimi seçiliyse onun texcontentini almak için
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].
        textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].
        textContent;

    // buradaki exchange currency.js dosyasının içindeki metodun ismi
    currency.exchange(amount, firstOptionValue, secondOptionValue)
        .then((result) => { //gelen promis then ile yakalandı
            resultInput.value = result.toFixed(2) //noktadan sonra 2 basamak görülecek
        });

}