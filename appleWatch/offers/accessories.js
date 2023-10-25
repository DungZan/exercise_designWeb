var get_purchaseform = document.getElementById("purchase");
var get_buyquantity = document.getElementById("buyquantity");
let buy_quantity;
let price;
function begin_order(name, pricing, imgsrc) {
    if (1>0) {
        document.getElementById("preview_img").setAttribute("src", imgsrc);
        document.getElementById("pc_name").innerHTML = name;
        price = pricing;
        get_purchaseform.style.display = "block";
        buy_quantity = 1;
        document.getElementById("pc_totalprice").innerHTML = (price*buy_quantity).toLocaleString("en-US") + "đ";
    } else {
        alert("Quý khách hàng hãy chọn đầy đủ thông số trước khi mua hàng!");
    }
}
function cancel_order() {
    get_purchaseform.style.display = "none";
    get_buyquantity.value = 1;
}
function update_totalprice() {
    if (get_buyquantity.value>0 && get_buyquantity.value<11) { 
        buy_quantity = get_buyquantity.value;
        document.getElementById("pc_totalprice").innerHTML = (price*buy_quantity).toLocaleString("en-US") + "đ";
    } else {
        get_buyquantity.value = buy_quantity;
    }
}
let fin_gender, fin_name, fin_phone, fin_address, fin_email,  fin_payment;
function confirm_payment() {
    if (document.getElementById("gender-male").checked) fin_gender = 0; else
    if (document.getElementById("gender-female").checked) fin_gender = 1;
    fin_name = document.getElementById("fullname").value;
    fin_phone = document.getElementById("phone").value;
    fin_address = document.getElementById("address").value;
    fin_email = document.getElementById("email").value;
    if (document.getElementById("payment-cash").checked) fin_payment = 0; else
    if (document.getElementById("payment-bank").checked) fin_payment = 1;
    if (of_casesize == undefined || of_bandlength == undefined || fin_gender == undefined || fin_name == undefined || fin_phone == undefined || fin_address == undefined || fin_email == undefined || fin_payment == undefined || fin_name == "" || fin_phone == "" || fin_address == "" || fin_email == "") {
        alert("Quý khách hàng hãy nhập đầy đủ thông tin trước khi thanh toán!");
    } else {
        alert("Đơn hàng của quý khách đã được ghi nhận!");
        window.location.reload();
    }
}