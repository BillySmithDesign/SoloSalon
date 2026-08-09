import {cookies} from 'next/headers';import crypto from 'crypto';
const COOKIE='openbook_admin';
function secret(){return process.env.OPENBOOK_SESSION_SECRET||'dev-secret-change-me'}
export function sign(value:string){return value+'.'+crypto.createHmac('sha256',secret()).update(value).digest('hex')}
export function verify(v?:string){if(!v)return false;let [x,s]=v.split('.');if(!x||!s)return false;let expected=crypto.createHmac('sha256',secret()).update(x).digest('hex');try{return crypto.timingSafeEqual(Buffer.from(s),Buffer.from(expected))}catch{return false}}
export async function isAdmin(){return verify((await cookies()).get(COOKIE)?.value)}
export async function requireAdmin(){if(!(await isAdmin()))throw new Error('UNAUTHORISED')}
export async function setAdmin(){(await cookies()).set(COOKIE,sign('admin'),{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*12})}
export async function clearAdmin(){(await cookies()).delete(COOKIE)}
