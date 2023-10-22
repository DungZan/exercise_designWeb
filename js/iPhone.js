// back to top
let back = document.getElementById("backtop");
window.onscroll = function() { lan_chuot(); }

function lan_chuot() {
    if (window.innerWidth > 576 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }
}

function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// giá
let dluong = 0;
let msac = 0;
let ten = "";
let size = "";
let colour = "";

function changePrice(dungluong, pban) {
    if (pban == 141) {
        ten = "iPhone 14";
        const Gia = document.getElementById("gia-14");
        const Goc = document.getElementById("goc-14");
        const Giam = document.getElementById("giam-14");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "18.690.000₫";
            Goc.textContent = "24.000.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "21.590.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            size = "512GB";
            dluong = 512;
            Gia.textContent = "26.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 142) {
        ten = "iPhone 14 Plus";
        const Gia = document.getElementById("gia-14plus");
        const Goc = document.getElementById("goc-14plus");
        const Giam = document.getElementById("giam-14plus");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "21.190.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            size = "256GB";
            dluong = 256;
            Gia.textContent = "23.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            size = "512GB";
            dluong = 512;
            Gia.textContent = "25.590.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-31%";
        }
    } else if (pban == 143) {
        ten = "iPhone 14 Pro";
        const Gia = document.getElementById("gia-14pro");
        const Goc = document.getElementById("goc-14pro");
        const Giam = document.getElementById("giam-14pro");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "23.890.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "27.390.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "32.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-21%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "37.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 144) {
        ten = "iPhone 14 Pro Max";
        const Gia = document.getElementById("gia-14max");
        const Goc = document.getElementById("goc-14max");
        const Giam = document.getElementById("giam-14max");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "26.550.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "28.890.000₫";
            Goc.textContent = "37.490.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "35.890.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-19%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "41.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-17%";
        }
    } else if (pban == 151) {
        ten = "iPhone 15";
        const Gia = document.getElementById("gia-15");
        const Goc = document.getElementById("goc-15");
        const Giam = document.getElementById("giam-15");
        if (dungluong == 128) {
            dluong = 128;
            size = "128GB";
            Gia.textContent = "21.890.000₫";
            Goc.textContent = "24.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "24.890.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "29.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-22%";
        }
    } else if (pban == 152) {
        ten = "iPhone 15 Plus";
        const Gia = document.getElementById("gia-15plus");
        const Goc = document.getElementById("goc-15plus");
        const Giam = document.getElementById("giam-15plus");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "25.490.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "28.490.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "33.490.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 153) {
        ten = "iPhone 15 Pro";
        const Gia = document.getElementById("gia-15pro");
        const Goc = document.getElementById("goc-15pro");
        const Giam = document.getElementById("giam-15pro");
        if (dungluong == 128) {
            dluong = 128;
            size = "128GB";
            Gia.textContent = "27.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "30.490.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-13%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "36.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-11%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "42.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 154) {
        ten = "iPhone 15 Pro Max";
        const Gia = document.getElementById("gia-15max");
        const Goc = document.getElementById("goc-15max");
        const Giam = document.getElementById("giam-15max");
        if (dungluong == 256) {
            size = "256GB";
            dluong = 256;
            Gia.textContent = "34.990.000₫";
            Goc.textContent = "37.990.000₫";
            Giam.textContent = "-8%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "39.990.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "45.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-9%";
        }
    }

}

// màu

function changeImg(x, pban) {
    var mau;
    if (pban == 141) {
        mau = document.getElementById("color-14");
        if (x == 1) {
            colour = "Đen bóng đêm";
            mau.src = "img/img_iphone/ip14black.png";
        } else if (x == 2) {
            colour = "Ánh sao";
            mau.src = "img/img_iphone/ip14star.png";
        } else if (x == 3) {
            colour = "Đỏ rực rỡ";
            mau.src = "img/img_iphone/ip14red.png";
        } else if (x == 4) {
            colour = "Tím mộng mơ";
            mau.src = "img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            colour = "Xanh xao";
            mau.src = "img/img_iphone/ip14green.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 142) {
        mau = document.getElementById("color-14plus");
        if (x == 1) {
            colour = "Đen bóng đêm";
            mau.src = "img/img_iphone/ip14black.png";
        } else if (x == 2) {
            colour = "Ánh sao";
            mau.src = "img/img_iphone/ip14star.png";
        } else if (x == 3) {
            colour = "Đỏ rực rỡ";
            mau.src = "img/img_iphone/ip14red.png";
        } else if (x == 4) {
            colour = "Tím mộng mơ";
            mau.src = "img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            colour = "Xanh xao";
            mau.src = "img/img_iphone/ip14green.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 143) {
        mau = document.getElementById("color-14pro");
        if (x == 1) {
            colour = "Đen thời không";
            mau.src = "img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            colour = "Bạc thời thượng";
            mau.src = "img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            colour = "Vàng gold quý phái";
            mau.src = "img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            colour = "Tím vực sâu";
            mau.src = "img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 144) {
        mau = document.getElementById("color-14max");
        if (x == 1) {
            colour = "Đen thời không";
            mau.src = "img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            colour = "Bạc thời thượng";
            mau.src = "img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            colour = "Vàng gold quý phái";
            mau.src = "img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            colour = "Tím vực sâu";
            mau.src = "img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 151) {
        mau = document.getElementById("color-15");
        if (x == 1) {
            colour = "Đen huyền bí";
            mau.src = "img/img_iphone/ip15black.png";
        } else if (x == 10) {
            colour = "Hồng nam tính";
            mau.src = "img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            colour = "Xanh đồng cỏ";
            mau.src = "img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            colour = "Xanh đại dương";
            mau.src = "img/img_iphone/ip15blue.png";
        }
    } else if (pban == 152) {
        mau = document.getElementById("color-15plus");
        if (x == 1) {
            colour = "Đen huyền bí";
            mau.src = "img/img_iphone/ip15black.png";
        } else if (x == 10) {
            colour = "Hồng nam tính";
            mau.src = "img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            colour = "Xanh đồng cỏ";
            mau.src = "img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            colour = "Xanh đại dương";
            mau.src = "img/img_iphone/ip15blue.png";
        }
    } else if (pban == 153) {
        mau = document.getElementById("color-15pro");
        if (x == 1) {
            colour = "Titan huyền bí";
            mau.src = "img/img_iphone/ip15problack.png";
        } else if (x == 13) {
            colour = "Titan thuần khiết";
            mau.src = "img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            colour = "Titan siêu xanh";
            mau.src = "img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            colour = "Titan thiên nhiên";
            mau.src = "img/img_iphone/tip15progrey.png";
        }
    } else if (pban == 154) {
        mau = document.getElementById("color-15max");
        if (x == 1) {
            colour = "Titan huyền bí";
            mau.src = "img/img_iphone/ip15promaxblack.png";
        } else if (x == 13) {
            colour = "Titan thuần khiết";
            mau.src = "img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            colour = "Titan siêu xanh";
            mau.src = "img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            colour = "Titan thiên nhiên";
            mau.src = "img/img_iphone/tip15progrey.png";
        }
    }
    msac = x;
}

function cart() {
    if (dluong != 0 && msac != 0) {
        alert("Thêm thành công \n" + ten + "\n" + size + " " + colour);
        location.reload();
    } else {
        alert("Vui lòng chọn đầy đủ thông tin");
    }
    dluong = 0;
    msac = 0;
}


// test email

const sub_email = (email) => {
    return email.match(
        /^[a-zA-z0-9.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    );
};
const test_email = () => {
        const $result = $('#result');
        const email = $('#email').val();
        $result.text('');
        if (sub_email(email)) {
            $result.text(email + ' là hợp lệ.');
            $result.css('color', 'green');
        } else {
            $result.text(email + ' không hợp lệ.');
            $result.css('color', 'red');
        }
        return false;
    }
    // 
function thong_bao() {
    const $result = $('#result');
    const email = $('#email').val();
    if (sub_email(email)) {
        alert("Đăng ký thành công. Thông tin mới nhất sẽ được gửi đến " + email);
    } else {
        alert("Email không hợp lệ. Vui lòng nh");
    }
    location.reload();
}
$('#email').on('input', test_email);

function infoclose(x) {
    $(x).modal('hide');
}

function view() {
    let cnt = document.getElementById("view-product");
    cnt.scrollIntoView();
}