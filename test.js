let text;
switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Darn, its a weekday. Looking forward to the weekend!';
}

console.log(text);