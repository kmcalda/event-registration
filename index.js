let employee_number = document.getElementById("employee_number");
    let employee_name = document.getElementById("employee_name");
    let department = document.getElementById("department");
    document.getElementById("button").addEventListener("click", () => {
        if (employee_name.value && employee_number.value) {
            let value = `${employee_number.value}\n${employee_name.value}\n${department.value}`
            let qrcode = document.getElementById("qrcode");
            qrcode.innerHTML = "";
            new QRCode(qrcode, value);
            document.getElementById("qr-height").style.cssText += "max-height:500px;"
        }
        else {
            alert("Please fill all field!")
        }
        
    })
