const ekleBtn= document.querySelector("#ekle-btn");
const harcamaInput= document.querySelector("#harcama");
const fiyatInput= document.querySelector("#fiyat");
const durumInput= document.querySelector("#durum");
const list =document.querySelector(".list");
const toplamSpan = document.querySelector('#toplam');
//butonu izler

ekleBtn.addEventListener('click', addExpense);

//listeyi izler >tıklanma
list.addEventListener("click", handleClick) 

//toplam değerini tanımlama
let toplam=0

//listeye ekleme

function addExpense(event) {
    event.preventDefault();
//inputların içinin boş olmadığını kontrol etme

if (!fiyatInput.value || !harcamaInput.value){
    alert('Kutuları doldurun');
    return;
}

//elemanı oluştur

const listItem =document.createElement("div");
//class ekleme
listItem.classList.add("list-item")
if (durumInput.checked){
    listItem.classList.add('odendi');
}
 //içeriği değiştirme
 listItem.innerHTML=`
            <h1>${harcamaInput.value}</h1>
            <h2><span> ${fiyatInput.value} </span> &#8378;</h2>
            <div class=""buttons>
                <img id="delete" src="images/delete.png" />
                <img id="payment" src="images/payment.png" />
            </div>
 `;
 //html'e gönderme
 list.appendChild(listItem);

 //Toplamı güncelleme

toplam += parseInt (fiyatInput.value);

//   jsdeki toplam değerini ekrana basma
  toplamSpan.innerText = toplam;

 //INPUTları sıfırlama

 fiyatInput.value ='';
 harcamaInput.value='';


}

//Silme ve edit işlemi

function handleClick(e){
    const eleman = e.target
    if(eleman.id === 'delete')
    {
        //tıklanan butonun kapsayıcısını alma
        const harcamaDiv= eleman.parentElement.parentElement;

       
        //tıklanan elemanın fiyatını alma
        const silinenFiyat =harcamaDiv.querySelector('span').innerText;
        //JSdeki toplam değerini güncelledik
        toplam -= parseInt(silinenFiyat)
        //yeni değeri HTML'e göndereceğiz
        toplamSpan.innerText =toplam;
   
   
        // animasyon ekleme
   harcamaDiv.classList.add('fall');

   // animasyonun bitişini bekleme
   harcamaDiv.addEventListener('transitionend', () => {
     // htmlden kaldırma
     harcamaDiv.remove();
   });
 }
}
