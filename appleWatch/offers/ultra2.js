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
}
function set_bandcolor(type) {
    bandcolor = type;
    var get_displaybandcolor = document.getElementById("dt_bandcolor");
    if (type === "al_1") get_displaybandcolor.innerHTML = "Blue"; else
    if (type === "tr_1") get_displaybandcolor.innerHTML = "Blue/Black"; else
    if (type === "oc_1") get_displaybandcolor.innerHTML = "Blue"; else
    if (type === "al_2") get_displaybandcolor.innerHTML = "Indigo"; else
    if (type === "tr_2") get_displaybandcolor.innerHTML = "Green/Gray"; else
    if (type === "oc_2") get_displaybandcolor.innerHTML = "Orange"; else
    if (type === "al_3") get_displaybandcolor.innerHTML = "Olive"; else
    if (type === "tr_3") get_displaybandcolor.innerHTML = "Orange/Beige"; else
    if (type === "oc_3") get_displaybandcolor.innerHTML = "White";
}
function set_bandsize(type) {
    bandsize = type;
    var get_displaybandsize = document.getElementById("dt_bandsize");
    if (type === "sm") get_displaybandsize.innerHTML = "Nhỏ - 130-160mm"; else
    if (type === "md") get_displaybandsize.innerHTML = "Vừa - 145-190mm"; else
    if (type === "lg") get_displaybandsize.innerHTML = "Lớn - 165-210mm";
}

function beginorder() {
    if (bandcolor!=undefined && bandtype!=undefined && bandsize!=undefined) {
        alert("Sẵn sàng để thực hiện mua hàng. Chức năng đang phát triển");
    } else {
        alert("Quý khách hàng hãy chọn đầy đủ thông số trước khi mua hàng!");
    }
}