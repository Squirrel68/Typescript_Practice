// impot local storage
var Student = /** @class */ (function () {
    function Student() {
        this.data = this.getData();
    }
    Student.prototype.getData = function () {
        var dataInStorage = localStorage.getItem("data");
        return dataInStorage ? JSON.parse(dataInStorage) : [];
    };
    Student.prototype.saveData = function (data) {
        var jsonString = JSON.stringify(data);
        localStorage.setItem("data", jsonString);
    };
    Student.prototype.showDataToTable = function () {
        var tr = "";
        var tbodyList = document.getElementById("tbodyList");
        for (var key in this.data) {
            var std_1 = this.data[key];
            tr += "<tr>\n                <td>".concat(key, "</td>\n                <td>").concat(std_1.Code, "</td>\n                <td>").concat(std_1.Name, "</td>\n                <td>").concat(std_1.Email, "</td>\n                <td>").concat(std_1.Phone, "</td>\n                <td>").concat(std_1.Address, "</td>\n                <td>").concat(std_1.Password, "</td>\n                \n                <td>\n                    <a  onclick=\"editData(").concat(key, ")\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a  onclick=\"deleteData(").concat(key, ")\" class=\"btn btn-sm btn-danger\">Delete</a>\n                </td>\n            </tr>");
        }
        tbodyList.innerHTML = tr;
    };
    Student.prototype.setData = function () {
        var stdFrm = document.forms["stdFrm"];
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
    };
    Student.prototype.checkCode = function (code) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Code === stdFrm.code.value) {
                alert("Code is already exist");
                return true;
            }
        }
        return false;
    };
    Student.prototype.updateData = function (idx) {
        var stdFrmEdit = document.forms["stdFrmEdit"];
        var x = -1;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Code === stdFrmEdit.code.value &&
                stdFrmEdit.code.value !== this.data[idx].Code) {
                x = 1;
                break;
            }
        }
        alert(x);
        if (x != -1) {
            alert("Code is already exist");
        }
        else {
            this.data[idx].Code = stdFrmEdit.code.value;
            this.data[idx].Name = stdFrmEdit.name.value;
            this.data[idx].Email = stdFrmEdit.email.value;
            this.data[idx].Phone = stdFrmEdit.phone.value;
            this.data[idx].Address = stdFrmEdit.address.value;
            this.data[idx].Password = stdFrmEdit.password.value;
            this.saveData(this.data);
            this.showDataToTable();
        }
    };
    return Student;
}());
var std = new Student();
std.showDataToTable();
var stdFrm = document.forms["stdFrm"];
var stdFrmEdit = document.forms["stdFrmEdit"];
stdFrm.onsubmit = function () {
    if (stdFrm.code.value === "") {
        alert("Please enter Code");
        stdFrm.code.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.code.style.border = "1px solid #ced4da";
    }
    if (stdFrm.name.value === "") {
        alert("Please enter Name");
        stdFrm.name.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.name.style.border = "1px solid #ced4da";
    }
    if (stdFrm.email.value === "") {
        alert("Please enter Email");
        stdFrm.email.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.email.style.border = "1px solid #ced4da";
    }
    if (stdFrm.phone.value === "") {
        alert("Please enter Phone");
        stdFrm.phone.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.phone.style.border = "1px solid #ced4da";
    }
    if (stdFrm.address.value === "") {
        alert("Please enter Address");
        stdFrm.address.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.address.style.border = "1px solid #ced4da";
    }
    if (stdFrm.password.value === "") {
        alert("Please enter Password");
        stdFrm.password.style.border = "1px solid red";
        return false;
    }
    else {
        stdFrm.password.style.border = "1px solid #ced4da";
    }
    std.setData();
    std.showDataToTable();
    return false;
};
function editData(idx) {
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
    var idx = stdFrmEdit.id.value;
    if (idx === "") {
        alert("Please select record to edit");
        return false;
    }
    std.updateData(idx);
    std.showDataToTable();
    return false;
};
function deleteData(idx) {
    if (confirm("Are you sure to delete this record?")) {
        std.data.splice(idx, 1);
        std.saveData(this.data);
        std.showDataToTable();
    }
}
