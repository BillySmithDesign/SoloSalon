import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SoloSalon — Your bookings. Your business.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{
      width:'100%',height:'100%',display:'flex',background:'#f7f2ed',color:'#191512',
      padding:'72px 78px',fontFamily:'Arial, sans-serif',position:'relative'
    }}>
      <div style={{display:'flex',flexDirection:'column',width:'58%',justifyContent:'center'}}>
        <div style={{fontSize:18,fontWeight:700,letterSpacing:4,marginBottom:38}}>SOLOSALON</div>
        <div style={{fontSize:78,fontWeight:700,lineHeight:.95,letterSpacing:-4}}>Your bookings.<br/>Your business.</div>
        <div style={{fontSize:25,lineHeight:1.45,color:'#71665f',marginTop:34,maxWidth:610}}>
          Free, open-source online booking for independent stylists, home salons and chair renters.
        </div>
        <div style={{display:'flex',gap:22,fontSize:16,fontWeight:700,marginTop:38,color:'#7b6c64'}}>
          <span>NO SUBSCRIPTION</span><span>·</span><span>NO LOCK-IN</span>
        </div>
      </div>
      <div style={{display:'flex',width:'42%',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:390,background:'#fffdfb',border:'1px solid #ded4cd',borderRadius:28,padding:30,boxShadow:'0 24px 55px rgba(75,52,40,.15)'}}>
          <div style={{fontSize:13,letterSpacing:2,color:'#9c7766'}}>BOOK ONLINE</div>
          <div style={{fontSize:31,fontWeight:700,marginTop:12}}>Book your appointment</div>
          <div style={{fontSize:15,color:'#8c8079',marginTop:7}}>Choose a service to get started.</div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:32,padding:'20px',border:'2px solid #9c7766',borderRadius:16,background:'#f8f0eb'}}>
            <div style={{display:'flex',flexDirection:'column'}}><b style={{fontSize:17}}>Cut & Blow Dry</b><span style={{fontSize:13,color:'#8c8079',marginTop:5}}>60 minutes</span></div><b style={{fontSize:18}}>$95</b>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:12,padding:'20px',border:'1px solid #ded4cd',borderRadius:16}}>
            <div style={{display:'flex',flexDirection:'column'}}><b style={{fontSize:17}}>Full Head Foils</b><span style={{fontSize:13,color:'#8c8079',marginTop:5}}>2 hr 15 min</span></div><b style={{fontSize:18}}>$255</b>
          </div>
        </div>
      </div>
    </div>,
    size
  );
}
