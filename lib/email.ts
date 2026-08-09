export async function sendEmail(to:string|undefined,subject:string,html:string){
 if(!to||!process.env.RESEND_API_KEY)return;
 await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.OPENBOOK_FROM_EMAIL||'OpenBook <onboarding@resend.dev>',to:[to],subject,html})});
}
