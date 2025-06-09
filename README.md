# TR Identity Number Validation

## Expected Outcome

<img src="./id.gif" width="600" />


> The aim is to write a code that returns whether the given TR Identification Number is valid or invalid.

> - Valid TR Identity Number must follow these rules:
>1. TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes. 
>2. The ID number cannot start with 0. 
>3. The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
>4. Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits. 
>5. The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
>6. When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.

>Amaç, verilen TC Kimlik Numarasının geçerli mi yoksa geçersiz mi olduğunu döndüren bir kod yazmaktır.
> - Geçerli TR Kimlik Numarası şu kurallara uymalıdır:
>1. TR Kimlik Numarası aslında 9 haneden oluşur, son 2 hane kontrol/doğrulama amacıyla eklenmiştir.
>2. Kimlik numarası 0 ile başlayamaz.
>3. 10'uncu hane ilk 9 hane kullanılarak elde edilir ve 11. hane ilk 10 hane kullanılarak elde edilir.
>4. 1., 3., 5., 7. ve 9. hanelerdeki rakamları toplayın, 7 ile çarpın ve 2., 4., 6. ve 8. hanelerdeki rakamların toplamını çıkarın.
>5. Elde edilen sonucun birler basamağı (mod 10) kimlik numarasının 10. hanesini verir. 
>6. Kimlik numarasının ilk 9 rakamı ile yukarıdaki yöntemle elde edilen 10. rakam toplandığında birler basamağı (mod 10) 11. rakamı verir.

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

## Problem Statement

- Write a function that takes number variable and return `true` or `false` and write document `invalid` or `valid`.

## Valid TR Identity Numbers for checking

- Here are randomly generated valid ID numbers. You can use them to test your code.

```
34444185856
10880383988
14702551364
90091059698
32413045316
12835718432
53963153566
11111111110
```
