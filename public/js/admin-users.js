const API = "/api/users";

const getUsers = async() => {
    const res = await fetch(API);
    const users = await res.json();
    const tbody = document.getElementById("userTable");
    tbody.innerHTML = users.map((user, index) => `
        <tr class="border-t">
        <td class="px-4 py-3">${index + 1}</td>
        <td class="px-4 py-3">${user.fullName}</td>
        <td class="px-4 py-3">${user.phone}</td>
        <td class="px-4 py-3">${user.status}</td>
        <td class="px-4 py-3 flex gap-2">
            <button onclick="editUser('${user._id}','${user.fullName}','${user.phone}','${user.status}')" class="bg-yellow-400 text-white px-3 py-1 rounded">Sửa</button>
            <button onclick="deleteUser('${user._id}')" class="bg-red-500 text-white px-3 py-1 rounded">Xóa</button>
        </td>
        </tr>
    `).join("");
};

const saveUser = async() => {
    const id = document.getElementById("userId").value;
    const fullName = document.getElementById("inputFullName").value;
    const phone = document.getElementById("inputPhone").value;
    const status = document.getElementById("inputStatus").value;

    if (!fullName || !phone) return alert("Vui lòng nhập đầy đủ thông tin!");

    if (id) {

        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, phone, status }),
        });
    } else {

        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, phone, status }),
        });
    }

    resetForm();
    getUsers();
};


const editUser = (id, fullName, phone, status) => {
    document.getElementById("userId").value = id;
    document.getElementById("inputFullName").value = fullName;
    document.getElementById("inputPhone").value = phone;
    document.getElementById("inputStatus").value = status;
    document.getElementById("formTitle").textContent = "Sửa User";
};


const deleteUser = async(id) => {
    if (!confirm("Bạn có chắc muốn xóa?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    getUsers();
};


const resetForm = () => {
    document.getElementById("userId").value = "";
    document.getElementById("inputFullName").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputStatus").value = "Level 0";
    document.getElementById("formTitle").textContent = "Thêm User";
};


getUsers();