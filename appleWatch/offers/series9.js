var case_mat, case_color, case_size, case_connect;
var band_line, band_type, band_color;

function cleardown(depth) {
    if (depth>0) {
        document.getElementById("pv_full_band").style.display = "none";
        document.getElementById("pv_full_case").style.display = "none";
        document.getElementById("bandcolor").querySelectorAll("form").forEach(function(child) {
            child.style.display = "none";
            child.querySelectorAll("input").forEach(function(children) {
                children.checked = 0;
            });
        });
        band_color = undefined;
    } else return;
    if (depth>1) {
        document.getElementById("bandtype").querySelectorAll("form").forEach(function(child) {
            child.style.display = "none";
            child.querySelectorAll("input").forEach(function(children) {
                children.checked = 0;
            });
        });
        band_type = undefined;
    } else return;
    if (depth>2) {
        document.getElementById("connectivity").style.display = "none";
        document.getElementById("connectivity").querySelectorAll("input").forEach(function(child) {
            child.checked = 0;
        });
        case_connect = undefined;
        connective = 1;
        document.getElementById("bandline").style.display = "none";
        document.getElementById("bandline").querySelectorAll("input").forEach(function(child) {
            child.checked = 0;
        });
        band_line = undefined;
        document.getElementById("pv_band").style.display = "none";
    } else return;
    if (depth>3) {
        document.getElementById("casesize").style.display = "none";
        document.getElementById("casesize").querySelectorAll("input").forEach(function(child) {
            child.checked = 0;
        });
        case_size = 41;
    } else return;
    if (depth>4) {
        document.getElementById("pv_placeholder").style.display = "none";
        document.getElementById("casecolor").querySelectorAll("form").forEach(function(child) {
            child.style.display = "none";
            child.querySelectorAll("input").forEach(function(children) {
                children.checked = 0;
            });
        });
        case_color = undefined;
    } else return;
}
function set_case(id) {
    cleardown(5);
    case_mat = id;
    document.getElementById("casecolor_" + id).style.display = "block";
    document.getElementById("pv_case").setAttribute("src", "./img_series9/case/series9_case_" + id + ".png");
    document.getElementById("pv_case").style.display = "block";
    update_detail();
}
function set_casesize(size) {
    cleardown(3);
    case_size = size;
    document.getElementById("connectivity").style.display = "block";
    document.getElementById("bandline").style.display = "block";
    if (size == 41) {
        document.getElementById("pdc_onlyGPS").style.display = "block";
        document.getElementById("modernBuckle_41mm").style.display = "block";
    } else {
        document.getElementById("pdc_onlyGPS").style.display = "none";
        document.getElementById("modernBuckle_41mm").style.display = "none";
    }
    if (case_color != undefined) show_preview('c', case_color);
    update_detail();
}
function set_caseconnect(id) {
    case_connect = id;
    update_detail();
}
function set_bandline(id) {
    cleardown(2);
    band_line = id;
    document.getElementById("bandtype_" + id).style.display = "block";
    document.getElementById("pv_band").setAttribute("src", "./img_series9/band/series9_band_" + id + ".png");
    document.getElementById("pv_band").style.display = "block";
    update_detail();
}
function set_bandtype(id) {
    cleardown(1);
    band_type = id;
    document.getElementById("bandcolor_" + id).style.display = "block";
    document.getElementById("pv_band").setAttribute("src", "./img_series9/band/series9_band_" + id + ".png");
    update_detail();
}
function show_preview(type, id) {
    if (type === "c") {
        case_color = id;
        var temp_casesize;
        if (case_size==undefined) temp_casesize = 41; else temp_casesize = case_size;
        document.getElementById("pv_case").setAttribute("src", "./img_series9/case/series9_case_" + id + "_" + temp_casesize + ".png");
        document.getElementById("casesize").style.display = "block";
    } else
    if (type === "b") {
        band_color = id;
        document.getElementById("pv_band").setAttribute("src", "./img_series9/band/series9_band_" + id + ".png");
    }
    if (case_color != undefined && band_color != undefined) {
        document.getElementById("pv_full_band").style.display = "block";
        document.getElementById("pv_full_case").style.display = "block";
        document.getElementById("pv_full_band").setAttribute("src", "./img_series9/full/band/series9_full_band_" + band_color + ".png");
        document.getElementById("pv_full_case").setAttribute("src", "./img_series9/full/case/series9_full_case_" + case_color + "_" + case_size + ".png");
    }
    update_detail();
}

var caseinfo;
var bandinfo;
var connectinfo;
function update_detail() {
    caseinfo = "";
    if (case_mat == "1") caseinfo += "Nhôm"; else
    if (case_mat == "2") caseinfo += "Thép không gỉ";
    if (case_color != undefined) {
        if (case_color == "1_1") caseinfo += " - Pink"; else
        if (case_color == "1_2") caseinfo += " - Midnight"; else
        if (case_color == "1_3") caseinfo += " - Starlight"; else
        if (case_color == "1_4") caseinfo += " - Silver"; else
        if (case_color == "2_1") caseinfo += " - Gold"; else
        if (case_color == "2_2") caseinfo += " - Silver"; else
        if (case_color == "2_3") caseinfo += " - Graphite"; 
    }
    if (case_size == "41") caseinfo += " - 41mm"; else caseinfo += " - 45mm";
    document.getElementById("dt_case").innerHTML = caseinfo;
    bandinfo = "";
    if (band_line != undefined) {
        if (band_line == "1") bandinfo += "Rubber"; else
        if (band_line == "2") bandinfo += "Textile"; else
        if (band_line == "3") bandinfo += "Stainless Steel";
        if (band_type != undefined) {
            if (band_type == "1_1") bandinfo += " - Solo Loop"; else
            if (band_type == "1_2") bandinfo += " - Sport Band"; else
            if (band_type == "2_1") bandinfo += " - Sport Loop"; else
            if (band_type == "2_2") bandinfo += " - Magnetic Link"; else
            if (band_type == "2_3") bandinfo += " - Modern Buckle"; else
            if (band_type == "2_4") bandinfo += " - Braided Solo Loop"; else
            if (band_type == "3_1") bandinfo += " - Milanese Loop"; else
            if (band_type == "3_2") bandinfo += " - Link Bracelet";
            if (band_color != undefined) {
                if (band_color == "1_1_1") bandinfo += " - Light Pink"; else
                if (band_color == "1_1_2") bandinfo += " - Orange Sorbet"; else
                if (band_color == "1_1_3") bandinfo += " - Cypress"; else
                if (band_color == "1_1_4") bandinfo += " - Winter Blue"; else
                if (band_color == "1_1_5") bandinfo += " - Midnight"; else
                if (band_color == "1_1_6") bandinfo += " - Starlight"; else
                if (band_color == "1_2_1") bandinfo += " - Winter Blue"; else
                if (band_color == "1_2_2") bandinfo += " - Mulberry"; else
                if (band_color == "1_2_3") bandinfo += " - Light Pink"; else
                if (band_color == "1_2_4") bandinfo += " - Starlight"; else
                if (band_color == "1_2_5") bandinfo += " - Clay"; else
                if (band_color == "1_2_6") bandinfo += " - Storm Blue"; else
                if (band_color == "2_1_1") bandinfo += " - Cypress"; else
                if (band_color == "2_1_2") bandinfo += " - Winter Blue"; else
                if (band_color == "2_1_3") bandinfo += " - Midnight"; else
                if (band_color == "2_1_4") bandinfo += " - Starlight"; else
                if (band_color == "2_1_5") bandinfo += " - Light Pink"; else
                if (band_color == "2_2_1") bandinfo += " - Evergreen"; else
                if (band_color == "2_2_2") bandinfo += " - Taupe"; else
                if (band_color == "2_2_3") bandinfo += " - Pacific Blue"; else
                if (band_color == "2_3_1") bandinfo += " - Lavender Blue"; else
                if (band_color == "2_3_2") bandinfo += " - Mulberry"; else
                if (band_color == "2_3_3") bandinfo += " - Tan"; else
                if (band_color == "2_4_1") bandinfo += " - Storm Blue"; else
                if (band_color == "2_4_2") bandinfo += " - Guava"; else
                if (band_color == "2_4_3") bandinfo += " - Clay"; else
                if (band_color == "2_4_4") bandinfo += " - Beige"; else
                if (band_color == "2_4_5") bandinfo += " - Midnight"; else
                if (band_color == "3_1_1") bandinfo += " - Gold"; else
                if (band_color == "3_1_2") bandinfo += " - Silver"; else
                if (band_color == "3_1_3") bandinfo += " - Graphite"; else
                if (band_color == "3_2_1") bandinfo += " - Silver"; else
                if (band_color == "3_2_2") bandinfo += " - Space Black";
            }
        }
    }
    document.getElementById("dt_band").innerHTML = bandinfo;
    connectinfo = "";
    if (case_connect == "1") connectinfo = "GPS"; else
    if (case_connect == "2") connectinfo = "GPS + eSim"
    document.getElementById("dt_connect").innerHTML = connectinfo;
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
    if (case_color!=undefined && band_color!=undefined && case_size!=undefined && case_connect!=undefined) {
        document.getElementById("pcpv_full_band").setAttribute("src", document.getElementById("pv_full_band").getAttribute("src"));
        document.getElementById("pcpv_full_case").setAttribute("src", document.getElementById("pv_full_case").getAttribute("src"));
        document.getElementById("pc_case").innerHTML = caseinfo;
        document.getElementById("pc_band").innerHTML = bandinfo;
        document.getElementById("pc_connect").innerHTML = connectinfo;
        get_purchaseform.style.display = "block";
        buy_quantity = 1;
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
        window.location.reload();
    }
}