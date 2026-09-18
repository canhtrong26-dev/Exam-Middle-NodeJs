const API = "/api/contacts";


const getContacts = async() => {
    const res = await fetch(API);
    const contacts = await res.json();
    const tbody = document.getElementById("contactTable");
    tbody.innerHTML = contacts.map((contact, index) => `
    <tr class="border-t">
      <td class="px-4 py-3">${index + 1}</td>
      <td class="px-4 py-3">${contact.email}</td>
      <td class="px-4 py-3 flex gap-2">
        <button onclick="editContact('${contact._id}','${contact.email}')" class="bg-yellow-400 text-white px-3 py-1 rounded">Sửa</button>
        <button onclick="deleteContact('${contact._id}')" class="bg-red-500 text-white px-3 py-1 rounded">Xóa</button>
      </td>
    </tr>
  `).join("");
};


const saveContact = async() => {
    const id = document.getElementById("contactId").value;
    const email = document.getElementById("inputEmail").value;

    if (!email) return alert("Vui lòng nhập email!");

    if (id) {

        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
    } else {

        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
    }

    resetForm();
    getContacts();
};


const editContact = (id, email) => {
    document.getElementById("contactId").value = id;
    document.getElementById("inputEmail").value = email;
    document.getElementById("formTitle").textContent = "Sửa Contact";
};


const deleteContact = async(id) => {
    if (!confirm("Bạn có chắc muốn xóa?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    getContacts();
};


const resetForm = () => {
    document.getElementById("contactId").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("formTitle").textContent = "Thêm Contact";
};


getContacts();