import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SoloSalon — Your bookings. Your business.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{
      width:'100%',height:'100%',display:'flex',background:'#f7f2ed',color:'#191512',
      padding:'70px 76px',fontFamily:'Arial, sans-serif'
    }}>
      <div style={{width:'58%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{display:'flex',alignItems:'center',fontSize:18,fontWeight:700,letterSpacing:4,marginBottom:38}}>
          <div style={{width:34,height:34,borderRadius:9,background:'#231a16',color:'#f7f2ed',display:'flex',alignItems:'center',justifyContent:'center',marginRight:13,fontFamily:'Georgia, serif',fontSize:23}}>S</div>
          SOLOSALON
        </div>
        <div style={{fontSize:78,fontWeight:700,lineHeight:.96,letterSpacing:-4}}>
          Your bookings.<br/>
          <span style={{color:'#9c7766',fontFamily:'Georgia, serif',fontStyle:'italic'}}>Your business.</span>
        </div>
        <div style={{fontSize:24,lineHeight:1.4,color:'#71665f',marginTop:32,maxWidth:620}}>
          Free, open-source online booking for independent stylists, home salons and chair renters.
        </div>
        <div style={{display:'flex',gap:16,fontSize:15,fontWeight:700,marginTop:35,color:'#7b6c64'}}>
          <span>NO SUBSCRIPTION</span><span>·</span><span>NO MARKETPLACE</span><span>·</span><span>NO LOCK-IN</span>
        </div>
      </div>
      <div style={{width:'42%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:390,background:'#fffdfb',border:'1px solid #ded4cd',borderRadius:26,padding:30,boxShadow:'0 24px 55px rgba(75,52,40,.15)',display:'flex',flexDirection:'column'}}>
          <div style={{fontSize:12,letterSpacing:2.2,color:'#9c7766',fontWeight:700}}>YOUR SALON</div>
          <div style={{fontSize:31,fontWeight:700,marginTop:11}}>Book your appointment</div>
          <div style={{fontSize:15,color:'#8c8079',marginTop:7}}>Choose a service and a time that suits you.</div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:30,padding:19,border:'2px solid #9c7766',borderRadius:15,background:'#f8f0eb'}}>
            <div style={{display:'flex',flexDirection:'column'}}><b style={{fontSize:17}}>Cut &amp; Blow Dry</b><span style={{fontSize:13,color:'#8c8079',marginTop:5}}>60 minutes</span></div><b style={{fontSize:18}}>$95</b>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:11,padding:19,border:'1px solid #ded4cd',borderRadius:15}}>
            <div style={{display:'flex',flexDirection:'column'}}><b style={{fontSize:17}}>Full Head Foils</b><span style={{fontSize:13,color:'#8c8079',marginTop:5}}>2 hr 15 min</span></div><b style={{fontSize:18}}>$255</b>
          </div>
        </div>
      </div>
    </div>,
    size
  );
}
