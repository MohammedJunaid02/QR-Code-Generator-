let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR()
{
    if(qrText.value.length > 0)
    {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-Img");
    }
    else
    {
        imgBox.classList.remove("show-Img");
        setTimeout(()=>{
            qrText.classList.add('error');
            snackBar();
            setTimeout(()=>{
                qrText.classList.remove('error');
            },800);
        },700);
    }
}

function snackBar()
{
    let errorMessage = document.getElementById("snackBar");
    errorMessage.classList.add("showErrorBar");
    setTimeout(()=>{
        errorMessage.classList.remove('showErrorBar');
    },3000)
}