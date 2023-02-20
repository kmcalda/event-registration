let employee_number = document.getElementById("employee_number");
let employee_name = document.getElementById("employee_name");
let department = document.getElementById("department");
let qrHeight = document.getElementById("qr-height");
document.getElementById("button").addEventListener("click", () => {
    const qrcode = document.getElementById("qrcode");
    qrcode.innerHTML = ""
    if (employee_name.value && employee_number.value) {
        let data = `${employee_number.value}\n${employee_name.value}\n${department.value}`
        const qrCode = new QRCodeStyling({
            type: "svg",
            data: data,
            image: "pioneerlogo.png",
            dotsOptions: {
                type: "rounded"
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 10
            }
        });
        qrCode.append(qrcode);
        qrHeight.style.cssText += "max-height:500px;"
    }
    else {
        alert("Please fill all field!")
    }
    
})
