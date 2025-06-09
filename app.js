const input = document.querySelector("input");

input.addEventListener("change", function () {

    // console.log(input.value);

    //! Daha önce eklenen uyarı div'ini sil
    const existingDivError = document.getElementById("tc-warning");
    if (existingDivError) existingDivError.remove();
    
    //! Error mesajları için bir divError div'i oluştur.
    const divError = document.createElement("div");
    divError.id = "tc-warning";

    //! inputun sayısal ve 11 karakter olduğunun kontrolü
    if (!/^\d{11}$/.test(input.value)) {
        divError.textContent = "TC Kimlik Numarası 11(onbir) haneli olmalı ve sadece rakam içermeli!";
        divError.style.color = "red";
        divError.style.textAlign = "center";
        input.after(divError);
        return;
    }

    //! Geçerlilik kontrolü (gerçek algoritmaya basit bir yaklaşım)
    // sting'i ayır, her karakteri sayıya çevir
    const digits = input.value.split("").map(Number);
    // console.log(digits);

    const totalOdd = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const totalEven = digits[1] + digits[3] + digits[5] + digits[7];

    const rule10 = ((totalOdd * 7) - totalEven) % 10;
    const rule11 = (digits.slice(0, 10).reduce((a, b) => a + b, 0)) % 10;

    if (digits[0] === 0) {
        divError.textContent = `${input.value} ➔ TC Kimlik No 0 ile başlayamaz!`;
        divError.style.color = "red";
        input.value = "";

    } else if (rule10 !== digits[9] || rule11 !== digits[10]) {
        divError.textContent = `${input.value} ➔ Geçersiz TC Kimlik No!`;
        divError.style.color = "red";
        input.value = "";
    } else {
        divError.textContent = "Geçerli TC Kimlik No ✔️";
        divError.style.color = "green";
    }
    input.after(divError);

});