const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const btnCopy = document.getElementById('btnCopy');

const resultMessage = document.getElementById('resultMessage');

const notFoundMessage = document.querySelector('.not_found_message');
const foundMessage = document.querySelector('.found_message');

let encryptMatrix = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
  ' ': 'btit',
};

let decryptMatrix = {};

let regDecrypt = '';
for (let key in encryptMatrix) {
  let value = encryptMatrix[key];
  decryptMatrix[value] = key;
  regDecrypt += value + '|';
}

regDecrypt = new RegExp(regDecrypt, 'gi');

btnEncrypt.addEventListener('click', function () {
  const inputMessage = document.getElementById('inputMessage');
  showOrHideResultMessage(inputMessage);
  const encryptText = inputMessage?.value.replace(
    /a|e|i|o|u/gi,
    (match) => encryptMatrix[match] || match
  );
  resultMessage.textContent = encryptText;
});

btnDecrypt.addEventListener('click', function () {
  const inputMessage = document.getElementById('inputMessage');
  showOrHideResultMessage(inputMessage);
  const decryptText = inputMessage?.value.replace(
    regDecrypt,
    (match) => decryptMatrix[match] || match
  );
  resultMessage.textContent = decryptText;
});

btnCopy.addEventListener('click', function () {
  const resultMessage = document.getElementById('resultMessage');

  navigator.clipboard.writeText(resultMessage.textContent);
});

function showOrHideResultMessage(inputMessage) {
  if (inputMessage.value == '') {
    foundMessage.setAttribute('style', 'display: none;');
    notFoundMessage.setAttribute('style', 'display: block;');
    return;
  }
  notFoundMessage.setAttribute('style', 'display: none;');
  foundMessage.setAttribute('style', 'display: flex;');
}
