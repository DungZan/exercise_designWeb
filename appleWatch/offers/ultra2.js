var bc_al = document.getElementById("al_bandcolor");
var bc_tr = document.getElementById("tr_bandcolor");
var bc_oc = document.getElementById("oc_bandcolor");

function hideall_bandcolorchoice() {
    bc_al.style.display = "none";
    bc_al.querySelectorAll("input").forEach(function(child) {
        child.checked = false;
    });
    bc_tr.style.display = "none";
    bc_tr.querySelectorAll("input").forEach(function(child) {
        child.checked = false;
    });
    bc_oc.style.display = "none";
    bc_oc.querySelectorAll("input").forEach(function(child) {
        child.checked = false;
    });
    document.getElementById("pv_placeholder").style.display = "none";
};
function hideall_preview() {
    var clear = document.getElementById("preview");
    clear.querySelectorAll("img").forEach(function(child) {
        child.style.display = "none";
    });
}
function show_preview(type) {
    hideall_preview();
    var sl_b = document.getElementById("pv_b-" + type);
    sl_b.style.display = "block";
    var sl_f = document.getElementById("pv_f-" + type);
    sl_f.style.display = "block";
    var sl_s = document.getElementById("pv_s-" + type);
    sl_s.style.display = "block";
}

function show_al() {
    hideall_bandcolorchoice();
    bc_al.style.display = "block";
    show_preview('1');
};
function show_tr() {
    hideall_bandcolorchoice();
    bc_tr.style.display = "block";
    show_preview('2');
};
function show_oc() {
    hideall_bandcolorchoice();
    bc_oc.style.display = "block";
    show_preview('3');
};

let bandtype;
let bandcolor;
let bandsize;

function set_bandtype(type) {
    bandtype = type;
    var get_displaybandtype = document.getElementById("dt_bandtype");
    if (type === "al") get_displaybandtype.innerHTML = "Alpine Loop"; else
    if (type === "tr") get_displaybandtype.innerHTML = "Trail Loop"; else
    if (type === "oc") get_displaybandtype.innerHTML = "Ocean";
    clear_bandcolor();
}
function set_bandcolor(type) {
    bandcolor = type;
    var get_displaybandcolor = document.getElementById("dt_bandcolor");
    if (type === "al_1") get_displaybandcolor.innerHTML = "Blue"; else
    if (type === "al_2") get_displaybandcolor.innerHTML = "Indigo"; else
    if (type === "al_3") get_displaybandcolor.innerHTML = "Olive"; else
    if (type === "tr_1") get_displaybandcolor.innerHTML = "Green/Gray"; else
    if (type === "tr_2") get_displaybandcolor.innerHTML = "Blue/Black"; else
    if (type === "tr_3") get_displaybandcolor.innerHTML = "Orange/Beige"; else
    if (type === "oc_1") get_displaybandcolor.innerHTML = "Blue"; else
    if (type === "oc_2") get_displaybandcolor.innerHTML = "Orange"; else
    if (type === "oc_3") get_displaybandcolor.innerHTML = "White";
}
function clear_bandcolor() {
    bandcolor = undefined;
    document.getElementById("dt_bandcolor").innerHTML = "";
}
function set_bandsize(type) {
    bandsize = type;
    var get_displaybandsize = document.getElementById("dt_bandsize");
    if (type === "sm") get_displaybandsize.innerHTML = "Nhỏ - 130-160mm"; else
    if (type === "md") get_displaybandsize.innerHTML = "Vừa - 145-190mm"; else
    if (type === "lg") get_displaybandsize.innerHTML = "Lớn - 165-210mm";
}

function show_detail() {
    document.getElementById("moreinfo").style.display = "block";
}
function hide_detail() {
    document.getElementById("moreinfo").style.display = "none";
}

var get_purchaseform = document.getElementById("purchase");
var get_buyquantity = document.getElementById("buyquantity");
let buy_quantity;
const base_price = 21990000;
function begin_order() {
    if (bandcolor!=undefined && bandtype!=undefined && bandsize!=undefined) {
        get_purchaseform.style.display = "block";
        buy_quantity = 1;
        document.getElementById("pc_bandtype").innerHTML = bandtype==="al"?"Alpine Loop":bandtype==="tr"?"Trail Loop":"Ocean Band";
        document.getElementById("pc_bandsize").innerHTML = bandsize==="sm"?"Nhỏ - 130-160mm":bandsize==="md"?"Vừa - 145-190mm":"Lớn - 165-210mm";
        document.getElementById("pc_totalprice").innerHTML = base_price.toLocaleString("en-US") + "đ";
        var get_pcbandcolor = document.getElementById("pc_bandcolor");
        var get_pc_imgpv = document.getElementById("pc_imgpv");
        if (bandcolor === "al_1") {
            get_pcbandcolor.innerHTML = "Blue";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_alpine_blue_side.png");
        } else
        if (bandcolor === "al_2") {
            get_pcbandcolor.innerHTML = "Indigo";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_alpine_indigo_side.png");
        } else
        if (bandcolor === "al_3") {
            get_pcbandcolor.innerHTML = "Olive";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_alpine_olive_side.png");
        } else
        if (bandcolor === "tr_1") {
            get_pcbandcolor.innerHTML = "Green/Gray";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_trail_greengray_side.png");
        } else
        if (bandcolor === "tr_2") {
            get_pcbandcolor.innerHTML = "Blue/Black";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_trail_blueblack_side.png");
        } else
        if (bandcolor === "tr_3") {
            get_pcbandcolor.innerHTML = "Orange/Beige";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_trail_orangebeige_side.png");
        } else
        if (bandcolor === "oc_1") {
            get_pcbandcolor.innerHTML = "Blue";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_ocean_blue_side.png");
        } else
        if (bandcolor === "oc_2") {
            get_pcbandcolor.innerHTML = "Orange";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_ocean_orange_side.png");
        } else
        if (bandcolor === "oc_3") {
            get_pcbandcolor.innerHTML = "White";
            get_pc_imgpv.setAttribute("src", "./img_ultra2/ultra2_ocean_white_side.png");
        }
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
        document.getElementById("pc_totalprice").innerHTML = (base_price*buy_quantity).toLocaleString("en-US") + "đ";
    } else {
        get_buyquantity.value = buy_quantity;
    }
}
let fin_gender, fin_name, fin_phone, fin_address, fin_payment;
function confirm_payment() {
    if (document.getElementById("gender-male").checked) fin_gender = 0; else
    if (document.getElementById("gender-female").checked) fin_gender = 1;
    fin_name = document.getElementById("fullname").value;
    fin_phone = document.getElementById("phone").value;
    fin_address = document.getElementById("address").value;
    if (document.getElementById("payment-cash").checked) fin_payment = 0; else
    if (document.getElementById("payment-bank").checked) fin_payment = 1;
    if (fin_gender == undefined || fin_name == undefined || fin_phone == undefined || fin_address == undefined || fin_payment == undefined || fin_name == "" || fin_phone == "" || fin_address == "") {
        alert("Quý khách hàng hãy nhập đầy đủ thông tin trước khi thanh toán!");
    } else {
        alert("Đơn hàng của quý khách đã được ghi nhận!");
    }
}