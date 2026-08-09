export function money(c:number|null|undefined){if(c==null)return'POA';if(c===0)return'Free';return new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD',maximumFractionDigits:0}).format(c/100)}
export function hm(minutes:number){return `${Math.floor(minutes/60)?Math.floor(minutes/60)+'h ':''}${minutes%60?minutes%60+'m':''}`.trim()}
export function localDateParts(iso:string,tz:string){let p=new Intl.DateTimeFormat('en-CA',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(iso));let o:any={};p.forEach(x=>o[x.type]=x.value);return `${o.year}-${o.month}-${o.day}`}
export function localTime(iso:string,tz:string){return new Intl.DateTimeFormat('en-AU',{timeZone:tz,hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(iso))}
