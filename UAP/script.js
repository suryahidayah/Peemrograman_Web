function updateTotal() {
    var qty = parseInt(document.getElementById('qty').value);
    var price = parseFloat(document.getElementById('price').value);
    var total = qty * price;

    if (isNaN(total)) {
        document.getElementById('total').value = 'Error! Please enter numeric values only.';
    } else {
        document.getElementById('total').value = total.toFixed(2);
    }
}

document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateTotal();
});