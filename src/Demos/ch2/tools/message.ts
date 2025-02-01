/*
for command history:
    > h

   1 pwd
   2 cd C:\Users\kouro\Desktop\sportsstore-nodejs\src\Demos\ch1\tools
   3 node hello.js
   4 npm init -y
   5 npm install bootstrap@5.3.0
   6 npm install --save-dev typescript@5.2.2 tsc-watch@6.0.4
   7 npm install --save-dev nodemon@2.0.20
   8 tsc message.ts
   9 node .\message.js
  10 npx tsc message.ts
  11 npx --package=typescript tsc message.ts
  12 npm start
  13 npm run go
*/
function writeMessage(msg: string) {
    console.log(`Message: ${msg}`);
}
writeMessage("This is the new message");