import pw from '/opt/node-tools/node_modules/playwright/index.js';
const b=await pw.chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
for(const [f,W,H] of [['bio004-course-card-wide',1600,900],['bio004-course-card-square',1200,1200]]){
  const p=await b.newPage({viewport:{width:W,height:H},deviceScaleFactor:1});
  await p.goto('file:///home/claude/card/'+f+'.svg');
  await p.waitForTimeout(700);
  await p.screenshot({path:'/home/claude/card/'+f+'.png'});
  await p.close();
  console.log('rendered', f);
}
await b.close();
