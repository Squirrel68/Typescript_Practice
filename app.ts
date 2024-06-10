// impot local storage

// interface IStudent {
interface IStudent {
  Code: string;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Password: string;
}

class Student {
  data: Array<IStudent>;
  constructor() {
    this.data = this.getData();
  }
  getData(): Array<IStudent> {
    let dataInStorage: any = localStorage.getItem("data");
    return dataInStorage ? JSON.parse(dataInStorage) : [];
  }
  saveData(data: Array<IStudent>) {
    let jsonString = JSON.stringify(data);
    localStorage.setItem("data", jsonString);
  }

  showDataToTable() {
    let tr = "";
    let tbodyList: any = document.getElementById("tbodyList");
    for (const key in this.data) {
      let std = this.data[key];
      tr += `<tr>
                <td>${key}</td>
                <td>${std.Code}</td>
                <td>${std.Name}</td>
                <td>${std.Email}</td>
                <td>${std.Phone}</td>
                <td>${std.Address}</td>
                <td>${std.Password}</td>
                
                <td>
                    <a  onclick="editData(${key})" class="btn btn-sm btn-primary">Edit</a>
                    <a  onclick="deleteData(${key})" class="btn btn-sm btn-danger">Delete</a>
                </td>
            </tr>`;
    }
    tbodyList.innerHTML = tr;
  }

  setData() {
    let stdFrm: any = document.forms["stdFrm"];
    if (this.checkCode(stdFrm.code.value) === false) {
      this.data.push({
        Code: stdFrm.code.value,
        Name: stdFrm.name.value,
        Email: stdFrm.email.value,
        Phone: stdFrm.phone.value,
        Address: stdFrm.address.value,
        Password: stdFrm.password.value,
      });

      this.saveData(this.data);
    }
  }
  checkCode(code: string): boolean {
    for (const item of this.data) {
      if (item.Code === stdFrm.code.value) {
        alert("Code is already exist");
        return true;
      }
    }
    return false;
  }
  updateData(idx: number) {
    var stdFrmEdit: any = document.forms["stdFrmEdit"];
    let x = -1;
    for (let item of this.data) {
      if (
        item.Code === stdFrmEdit.code.value &&
        stdFrmEdit.code.value !== this.data[idx].Code
      ) {
        x = 1;
        break;
      }
    }
    alert(x);
    if (x != -1) {
      alert("Code is already exist");
    } else {
      this.data[idx].Code = stdFrmEdit.code.value;
      this.data[idx].Name = stdFrmEdit.name.value;
      this.data[idx].Email = stdFrmEdit.email.value;
      this.data[idx].Phone = stdFrmEdit.phone.value;
      this.data[idx].Address = stdFrmEdit.address.value;
      this.data[idx].Password = stdFrmEdit.password.value;
      this.saveData(this.data);
      this.showDataToTable();
    }
  }
}

var std = new Student();
std.showDataToTable();

var stdFrm: any = document.forms["stdFrm"];
var stdFrmEdit: any = document.forms["stdFrmEdit"];

stdFrm.onsubmit = function () {
  if (stdFrm.code.value === "") {
    alert("Please enter Code");
    stdFrm.code.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.code.style.border = "1px solid #ced4da";
  }

  if (stdFrm.name.value === "") {
    alert("Please enter Name");
    stdFrm.name.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.name.style.border = "1px solid #ced4da";
  }

  if (stdFrm.email.value === "") {
    alert("Please enter Email");
    stdFrm.email.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.email.style.border = "1px solid #ced4da";
  }

  if (stdFrm.phone.value === "") {
    alert("Please enter Phone");
    stdFrm.phone.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.phone.style.border = "1px solid #ced4da";
  }

  if (stdFrm.address.value === "") {
    alert("Please enter Address");
    stdFrm.address.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.address.style.border = "1px solid #ced4da";
  }

  if (stdFrm.password.value === "") {
    alert("Please enter Password");
    stdFrm.password.style.border = "1px solid red";
    return false;
  } else {
    stdFrm.password.style.border = "1px solid #ced4da";
  }
  std.setData();
  std.showDataToTable();
  return false;
};

function editData(idx: number) {
  stdFrmEdit.id.value = idx;
  stdFrmEdit.code.value = std.data[idx].Code;
  stdFrmEdit.name.value = std.data[idx].Name;
  stdFrmEdit.email.value = std.data[idx].Email;
  stdFrmEdit.phone.value = std.data[idx].Phone;
  stdFrmEdit.address.value = std.data[idx].Address;
  stdFrmEdit.password.value = std.data[idx].Password;
  return false;
}

stdFrmEdit.onsubmit = function () {
  let idx = stdFrmEdit.id.value;
  if (idx === "") {
    alert("Please select record to edit");
    return false;
  }
  std.updateData(idx);
  std.showDataToTable();
  return false;
};

function deleteData(idx: number) {
  if (confirm("Are you sure to delete this record?")) {
    std.data.splice(idx, 1);
    std.saveData(this.data);

    std.showDataToTable();
  }
}
