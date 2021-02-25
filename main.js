function input() {
  var arr = []
  var form = document.getElementById('form').value
  var details = document.getElementById('details').value
  var amount = document.getElementById('amount').value
  var type = document.getElementById('my_select').value
  arr.push(form + ' is owes $ ' + amount + ' for ' + details + '.')
  var div = document.getElementById('display')
  var ul = document.createElement('ul')
  ul.className = 'list'
  div.appendChild(ul)
  var li = document.createElement('li')
  var p = document.createElement('h4')
  p.innerHTML = type
  li.appendChild(p)
  var p1 = document.createElement('p')
  p1.innerHTML = arr
  li.appendChild(p1)
  var btn = document.createElement('BUTTON')
  btn.innerHTML = 'Delete'
  btn.className = 'close'
  btn.style.marginLeft = '90%'
  li.appendChild(btn)
  ul.appendChild(li)
  btn.onclick = function () {
    var del = confirm('are you sure for delete')
    if (del) {
      li.remove('list')
    }
  }
}
