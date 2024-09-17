function Add() {
    var iproduct = document.getElementById('iproduct').value;
    var pname = document.getElementById('pname').value;
    var nprice = document.getElementById('nprice').value;
    var oprice = document.getElementById('oprice').value;
    var type = document.getElementById('type').value;
    var code = document.getElementById('code').value;
    // Tạo thẻ sản phẩm mới
    var card = "<div class='product-card'>";
    card += '<img src="'+iproduct+'" alt="Hình ảnh sản phẩm">';
    card += '<h3>' + pname + " "+type + " "+ code+ '</h3>';
    card += '<p> ' + nprice +"  " +oprice+ ' VND</p>';
    card += '<p id="btn">BUY</p>';
    card += '</div>';
    // Thêm thẻ sản phẩm mới vào phần hiển thị
    document.getElementById('display').innerHTML += card;
    document.getElementById('frm').reset();
}
