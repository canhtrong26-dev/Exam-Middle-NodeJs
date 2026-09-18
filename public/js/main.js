document.getElementById("btnGetVaccine").addEventListener("click", () => {
    document.getElementById("registerSection").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("btnHelpCentre").addEventListener("click", () => {
    document.getElementById("quoteSection").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("btnVerify").addEventListener("click", () => {
    const phone = document.getElementById("inputPhone2").value;
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
        alert("Số điện thoại hợp lệ!");
    } else {
        alert("Số điện thoại không hợp lệ!");
    }
});


document.getElementById("btnSubmit").addEventListener("click", async() => {
    const fullName = document.getElementById("inputFullName").value;
    const phone = document.getElementById("inputPhone2").value;

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, phone }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Đăng ký thành công!");
        } else {
            alert("Lỗi: " + data.message);
        }
    } catch (error) {
        alert("Lỗi kết nối server!");
    }
});


document.getElementById("btnSendEmail").addEventListener("click", async() => {
    const email = document.getElementById("inputEmail").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return;
    }

    try {
        const response = await fetch("/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Gửi thành công!");
        } else {
            alert("Lỗi: " + data.message);
        }
    } catch (error) {
        alert("Lỗi kết nối server!");
    }
});


document.getElementById("btnCheck").addEventListener("click", async() => {
    const fullName = document.getElementById("inputName").value;
    const phone = document.getElementById("inputPhone").value;

    try {
        const response = await fetch(`/api/users?fullName=${fullName}&phone=${phone}`);
        const data = await response.json();
        if (data.length > 0) {
            alert("Status của bạn: " + data[0].status);
        } else {
            alert("Không tìm thấy thông tin!");
        }
    } catch (error) {
        alert("Lỗi kết nối server!");
    }
});