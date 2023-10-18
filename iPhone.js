// modal box
// giá
const Gia = document.getElementById("gia");
const Goc = document.getElementById("goc");
const Giam = document.getElementById("giam");

function changePrice(dungluong) {
    if (dungluong == 128) {
        Gia.textContent = "18.690.000₫";
        Goc.textContent = "24.000.000₫";
        Giam.textContent = "-25%";
    } else if (dungluong == 256) {
        Gia.textContent = "21.590.000₫";
        Goc.textContent = "27.990.000₫";
        Giam.textContent = "-23%";
    } else if (dungluong == 512) {
        Gia.textContent = "26.990.000₫";
        Goc.textContent = "33.990.000₫";
        Giam.textContent = "-21%";
    }
}

// màu
const mau = document.getElementById("color");

function changeImg(x) {
    if (x == 1) {
        mau.src = "img/img_iphone/ip14black.png";
    } else if (x == 2) {
        mau.src = "img/img_iphone/ip14star.png";
    } else if (x == 3) {
        mau.src = "img/img_iphone/ip14red.png";
    } else if (x == 4) {
        mau.src = "img/img_iphone/ip14purple.png";
    } else if (x == 5) {
        mau.src = "img/img_iphone/ip14green.png";
    } else if (x == 6) {
        mau.src = "img/img_iphone/ip14yellow.png";
    }
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

function thong_bao() {
    const $result = $('#result');
    const email = $('#email').val();
    if (sub_email(email)) {
        alert("Đăng ký thành công ");
    } else {
        alert("Email không hợp lệ. Vui lòng nh");
    }
    location.reload();
}
$('#email').on('input', test_email);