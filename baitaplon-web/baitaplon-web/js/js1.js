// JavaScript source code
var time;
function chay() {
    var arr_hinh = new Array();
    arr_hinh[0] = '../hinh/hinhgioithieu1.jpg';
    arr_hinh[1] = '../hinh/hinhgioithieu2.jpg';
    arr_hinh[2] = '../hinh/hinhgioithieu3.jpg';
    arr_hinh[3] = '../hinh/hinhgioithieu4.jpg';
    arr_hinh[4] = '../hinh/hinhgioithieu5.jpg';
    arr_hinh[5] = '../hinh/hinhgioithieu6.jpg';
    arr_hinh[6] = '../hinh/hinhgioithieu7.jpg';

    i = Math.round(Math.random() * 6);
    document.getElementById("udhinh").src = arr_hinh[i];

    time = setTimeout("chay()", 1000);


}
function dung() {
    clearTimeout(time);
}
function ktraten() {
    var regten = /^[A-Z]+[A-Za-z]+/;
    var ten = document.getElementById("txtname").value;
    if (regten.test(ten) == false) {
        document.getElementById("er1").innerHTML = "khong hop le !";
        return false;
    }
    else {
        document.getElementById("er1").innerHTML = "";
        return true;
    }
}
function ktraemail() {
    var regten = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    var emeo = document.getElementById("txtemail").value;
    if (regten.test(emeo) == false) {
        document.getElementById("er2").innerHTML = "khong hop le !";
        return false;
    }
    else {
        document.getElementById("er2").innerHTML = "";
        return true;

    }
}
function ktrasinhnhat() {
    var sn = document.getElementById("btnsn").value;
    var d = new Date();
    if (sn < d) {
        document.getElementById("er3").innerHTML = "";
        return true;
    }
    else {

        document.getElementById("er3").innerHTML = "ngay sinh phai nho hon nay hien tai";
        return false;
    }
}
function ktrause() {
    var regten = /^[a-z][a-zA-Z0-9]/;
    var use = document.getElementById("txtuse").value;
    if (regten.test(use) == false) {
        document.getElementById("er4").innerHTML = "khong duoc nhap ky tu va bat dau bang chu";
        return false;
    }
    else {
        document.getElementById("er4").innerHTML = "";
        return true;
    }
}
function ktrause3() {
    var regten = /^[a-z][a-zA-Z0-9]/;
    var use = document.getElementById("txtuse3").value;
    if (regten.test(use) == false) {
        document.getElementById("er41").innerHTML = "khong duoc nhap ky tu va bat dau bang chu";
        return false;
    }
    else {
        document.getElementById("er41").innerHTML = "";
        return true;
    }
}
function ktrapass1() {
    var regten = /[0-9]/;
    var pass1 = document.getElementById("txtpass1").value;
    if (regten.test(pass1) == false) {
        document.getElementById("er5").innerHTML = "khong duoc nhap chu";
        return false;
    }
    else {
        document.getElementById("er5").innerHTML = "";
        return true;
    }
}
function ktrapass2() {
    var pass1 = document.getElementById("txtpass1").value;
    var pass2 = document.getElementById("txtpass2").value;
    if (pass2 == pass1) {
        document.getElementById("er6").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("er6").innerHTML = " Pass khong trung";
        return false;
    }
}
function ktrapass3() {
    var regten = /[0-9]/;
    var pass1 = document.getElementById("txtpass3").value;
    if (regten.test(pass1) == false) {
        document.getElementById("er51").innerHTML = "khong duoc nhap chu";
        return false;
    }
    else {
        document.getElementById("er51").innerHTML = "";
        return true;
    }
}

function anhien() {
    var x = document.getElementById("txtpass1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

function anhien2() {
    var x = document.getElementById("txtpass2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}
function anhien3() {
    var x = document.getElementById("txtpass3");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}
var hinh1 = '../hinh/vang.jpg'
var hinh2 = '../hinh/den.jpg'
var hinh3 = '../hinh/trang.png'
document.getElementById("btn2").onclick = function () {
    document.getElementById("imgmain").src = hinh1;
}
document.getElementById("btn2").onclick = function () {
    document.getElementById("imgmain").src = hinh2;
}
document.getElementById("btn3").onclick = function () {
    document.getElementById("imgmain").src = hinh3;
}