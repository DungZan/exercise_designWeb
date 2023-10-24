$('.ofl--item').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./img_etc/prev.svg' alt='Prev'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./img_etc/next.svg' alt='Next'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });

function show_list(id) {
  if (id == "apple") {
    document.getElementById("list_apple").classList.add("active");
    document.getElementById("list_collab").classList.remove("active");
    document.getElementById("list_apple-list").style.display = "block";
    document.getElementById("list_collab-list").style.display = "none";
  } else
  if (id == "collab") {
    document.getElementById("list_apple").classList.remove("active");
    document.getElementById("list_collab").classList.add("active");
    document.getElementById("list_apple-list").style.display = "none";
    document.getElementById("list_collab-list").style.display = "block";
  }
  $('.ofl--item').slick("refresh");
}

var get_purchaseform = document.getElementById("purchase");
var get_buyquantity = document.getElementById("buyquantity");
let buy_quantity;
let price;
let of_casesize, of_bandlength;
// add set_ofcasesize and set_ofbandlength
function set_ofcasesize(size) {
  of_casesize = size;
}
function set_ofbandlength(length) {
  of_bandlength = length;
}
function calculate_price(id) {
  if (id[0] == 'u' || id == "s9_2_2" || id == "s9_2_4" || id == "s9_3_1") price = 2549000; else
  if (id == "s9_2_1" || id == "s9_1_1" || id == "s9_1_2" || id[0] == 'n') price = 1249000; else
  if (id == "s9_2_3") price = 4299000; else
  if (id == "s9_3_2") {
    if (color == "Silver") price = 10449000; else
    if (color == "Space Black") price = 13549000;
  } else
  if (id[0] == 'h') {
    if (id == "h_4") price = 13549000; else price = 10449000;
  }
}
function begin_order(bandtype, name, color, imgsrc, onlysize=undefined) {
    if (1>0) {
        calculate_price(bandtype);
        document.getElementById("preview_img").setAttribute("src", imgsrc);
        document.getElementById("pc_line").innerHTML = name;
        document.getElementById("pc_color").innerHTML = color;
        if (onlysize == undefined) {
          document.getElementById("pc_forcase").style.display = "inline";
          document.getElementById("forcase_41").checked = false;
          document.getElementById("forcase_45").checked = false;
          document.getElementById("show_casesize").innerHTML = "";
          of_casesize = undefined;
        } else {
          document.getElementById("pc_forcase").style.display = "none";
          of_casesize = onlysize;
          document.getElementById("show_casesize").innerHTML = of_casesize + "mm";
        }
        if (bandtype == "n_2") {
          document.getElementById("pc_bandlength").style.display = "block";
          of_bandlength = undefined;
        } else {
          document.getElementById("pc_bandlength").style.display = "none";
          of_bandlength = "0";
        }
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