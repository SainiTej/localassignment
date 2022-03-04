import img1 from '../../assets/images/card_1.png';
import img2 from '../../assets/images/card_2.png';
import img3 from '../../assets/images/card_3.png';
import img4 from '../../assets/images/card_4.png';

function Card() {
  return (
    <div style={{padding:'70px 0px', marginTop:'100px'}}>
      <div style={{fontWeight:'600', fontSize:'36px', marginBottom:'48px'}}>Try our other free products</div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'30%'}}>
          <img style={{width:'100%'}} src={img1} />
          <div style={{fontWeight:'400', fontSize:'20px', margin:'15px 0'}}>Privacy Policy Generator</div>
          <div style={{fontWeight:'400', fontSize:'16px', color:'#4D4D4D', lineHeight:'24px', marginBottom:'48px'}}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
        </div>
        <div style={{width:'30%'}}>
          <img style={{width:'100%'}} src={img2} />
          <div style={{fontWeight:'400', fontSize:'20px', margin:'15px 0'}}>Privacy Policy Generator</div>
          <div style={{fontWeight:'400', fontSize:'16px', color:'#4D4D4D', lineHeight:'24px', marginBottom:'48px'}}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
        </div>
        <div style={{width:'30%'}}>
          <img style={{width:'100%'}} src={img3} />
          <div style={{fontWeight:'400', fontSize:'20px', margin:'15px 0'}}>Privacy Policy Generator</div>
          <div style={{fontWeight:'400', fontSize:'16px', color:'#4D4D4D', lineHeight:'24px', marginBottom:'48px'}}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'30%'}}>
          <img style={{width:'100%'}} src={img4} />
          <div style={{fontWeight:'400', fontSize:'20px', margin:'15px 0'}}>Privacy Policy Generator</div>
          <div style={{fontWeight:'400', fontSize:'16px', color:'#4D4D4D', lineHeight:'24px', marginBottom:'48px'}}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
        </div>
      </div>
    </div>
  );
}
export default Card;