import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import Credit from './headerGroups/Credit'
import Tender from './headerGroups/Tender'
import creditImg from '../../icons/Kredit_sub_iba.png'
import ipotecaImg from '../../icons/ipoteka-02.png'
import electronImg from '../../icons/randevu_iba_yeni_site.jpg'
import bank247 from '../../icons/proekt-2.png'
import abbIcon from '../../icons/logo.svg'
import internetBankingIcon  from '../../icons/internet-banking-signin.svg'



const HeaderBottom = () => {

  const screenW = useSelector(selectScreenW)
  const [showMobileMenuFull, setShowMobileMenuFull] = useState('display-none')

  const [whichTabShow, setWhichTabShow] = useState('')

// MOBIL VERSIYADA CLICKLENDIKDE MENU CONTENTIN GORUNMESI UCUN

const showMobileMenuF =  ()=> {
 
  if(showMobileMenuFull === 'display-none' || showMobileMenuFull === 'mobile-header-content-hide' ){
    document.body.style.overflow = 'hidden'
    setShowMobileMenuFull( 'mobile-header-content-show');
    setWhichTabShow('')
  }
  
  else {
    document.body.style.overflow = 'auto'
    setShowMobileMenuFull('mobile-header-content-hide');
  }
}

// MOBIL VERSIYADA OLARKEN MENU KLIKLENDIKDEN SONRA WEB VERSIYAYA ARTIRILDIQDA DEFAULT FORMANI QAYTARMAQ UCUN
useEffect(() => {
  if(screenW === 'web'){
    document.body.style.overflow = 'auto'
    setShowMobileMenuFull('');
  }
}, [screenW])



  return (
 <>
 {
  screenW === 'web' ? 
  <div className='header-bottom-back'>
     
  <div className='my-container'>
  <div className='header-bottom'>
    <ul className='bottom-tab'>
      <li>
        <div className='bottom-tab-link'>Kreditlər</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Online kredit al</Link>
         <Link to={'/'}>Nağd kredit</Link>
          <Link to={'/'}>Avtomobil krediti</Link>
          <Link to={'/'}>Əmanətçi kredit limiti</Link>
          <Link to={'/'}>Əmanətçi nağd krediti</Link>
          <Link to={'/'}>Kart üzrə kredit limiti</Link>
          
         </div>
         <div className='bottom-tab-content-right'>
         <img src={creditImg} alt="" />
         <div className='flex flex-col justify-evenly items-start'>
          <h2 className='text-black text-2xl text-bold font-black'>Onlayn kredit sifarişi</h2>
          <h3 className='text-xl font-semibold'>Bütün ehtiyaclarınız üçün nağd pul krediti</h3>
          <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
         </div>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>İpoteka</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Daxili ipoteka krediti</Link>
         <Link to={'/'}>Mənzil krediti</Link>
          <Link to={'/'}>Tikinti krediti</Link>
          <Link to={'/'}>Əmanətli ipoteka krediti</Link>
          <Link to={'/'}>İpoteka kalkulyatoru</Link>
          <Link to={'/'}>Partnyor olun</Link>
          <Link to={'/'}>Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun vəsaiti hesabına verilən ipoteka kreditləri</Link>
          <Link to={'/'}>Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun vəsaiti hesabına verilən güzəştli (MİDA) ipoteka kreditləri</Link>
          <Link to={'/'}>Hədiyyə Sertifikatı</Link>
         </div>
          
         <div className='bottom-tab-content-right'>
         <img src={ipotecaImg} alt="" />
         <div className='flex flex-col justify-evenly items-start'>
          <h2 className='text-black text-2xl text-bold font-black'>Onlayn ipoteka müraciəti</h2>
          <h3 className='text-xl font-semibold'>Aylıq ipoteka ödənişinizi hesablayın və müraciət edin</h3>
          <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
         </div>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Əmanətlər</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>"Klassik" əmanəti</Link>
         <Link to={'/'}>Əmanətlərin sığortalanması</Link>
          <Link to={'/'}>Əmanətli ipoteka krediti</Link>
          <Link to={'/'}>Depozit seyfi</Link>
         
          
         </div>
         <div className='bottom-tab-content-right'>
       
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Kartlar</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Kredit kartları</Link>
         <Link to={'/'}>Debet kartları</Link>
         
          
         </div>
         <div className='bottom-tab-content-right'>
       
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Pul köçürmələri</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Valyuta tənzimlənməsi</Link>
         <Link to={'/'}>Hesabdan köçürmələr</Link>
         <Link to={'/'}>Təcili pul köçürmələri</Link>
          
         </div>
         <div className='bottom-tab-content-right'>
       
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Cari hesab</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Cari hesab açın</Link>
         <Link to={'/'}>Kassa əməliyyatları</Link>
         <Link to={'/'}>Hesabınıza nəzarət edin</Link>
         <Link to={'/'}>Arayış sifariş edin</Link>
         <Link to={'/'}>Mübadilə əməliyyatları</Link>
         </div>
         <div className='bottom-tab-content-right'>
       
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Elektron xidmətlər</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>NFC ilə əməliyyatlar</Link>
         <Link to={'/'}>Qatarlara təmassız keçid</Link>
         <Link to={'/'}>Karta pul yatırın</Link>
         <Link to={'/'}>Kartdan pul köçürün</Link>
         <Link to={'/'}>Kart sifariş edin</Link>
         <Link to={'/'}>SMS xəbərdarlıq</Link>
         <Link to={'/'}>R@ndevu</Link>
         <Link to={'/'}>PIN-kodunuzu dəyişin</Link>
         <Link to={'/'}>Xidmət haqlarını ödəyin</Link>
         <Link to={'/'}>Kreditinizi ödəyin</Link>
         <Link to={'/'}>3D Secure</Link>
         </div>
        
         <div className='bottom-tab-content-right'>
         <img src={electronImg} alt="" />
         <div className='flex flex-col justify-evenly items-start'>
          <h2 className='text-black text-2xl text-bold font-black'>Randevu xidmətimizdən yararlanın</h2>
          <h3 className='text-xl font-semibold'>Banka gəlməmişdən bir gün əvvəl müraciət edərək görüş vaxtını özünüz təyin edin</h3>
          <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
         </div>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Bank 24/7</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         <Link to={'/'}>Məlumat Mərkəzi 24/7</Link>
         <Link to={'/'}>Cash-In ATM-i</Link>
         <Link to={'/'}>Ödəniş terminalı</Link>
         <Link to={'/'}>ATM</Link>
         <Link to={'/'}>ABB Banking - İnternet Bank</Link>
         <Link to={'/'}>ABB mobile - Mobil Bank</Link>
         <Link to={'/'}>Şənbə günü fəaliyyət göstərən filiallar</Link>
        
         </div>
        
         <div className='bottom-tab-content-right'>
         <img src={bank247} alt="" />
         <div className='flex flex-col justify-evenly items-start'>
          <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
          <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
          <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
         </div>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>QayğıCash klubu</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         </div>
        
         <div className='bottom-tab-content-right'>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Avtomatik endirim</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         </div>
        
         <div className='bottom-tab-content-right'>
         </div>
         
        </div>
        </li>
        <li>
        <div className='bottom-tab-link'>Kampaniyalar</div>
        <div className='bottom-tab-content'>
         <div className='bottom-tab-content-left'>
         </div>
        
         <div className='bottom-tab-content-right'>
         </div>
         
        </div>
        </li>
    </ul>
    </div>
  </div>
  

</div>

:
<>
<div className='mobile-header-bottom'>

  <Link to={'/'}><img src={abbIcon} alt="" /></Link>
  {
    showMobileMenuFull === 'mobile-header-content-show'? 
    <i onClick={showMobileMenuF} className ="fa-solid fa-xmark text-4xl cursor-pointer"></i>
    :
    <i onClick={showMobileMenuF} className="fa-solid fa-bars font-bold text-4xl cursor-pointer"></i>
  }

</div>

<div className={showMobileMenuFull}>
<div className='mobile-header-content-ibanking'><img  src={internetBankingIcon} alt="" />&nbsp;<Link  to={'/'}>Internet Bankçılıq</Link></div>
<Tender/>
<ul className='mobile-header-content-tab'>

  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'kreditler' ? setWhichTabShow('') :setWhichTabShow('kreditler'))
    }}>
      <span>Kreditlər</span>
      <i className= { (whichTabShow === 'kreditler') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'kreditler') ? '' : 'display-none' }>
      <li><Link to={'/'}>Online kredit al</Link></li>
      
         <li><Link to={'/'}>Nağd kredit</Link></li>
         <li> <Link to={'/'}>Avtomobil krediti</Link></li>
         <li> <Link to={'/'}>Əmanətçi kredit limiti</Link></li>
         <li> <Link to={'/'}>Əmanətçi nağd krediti</Link></li>
          <li><Link to={'/'}>Kart üzrə kredit limiti</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'ipoteka' ? setWhichTabShow('') :setWhichTabShow('ipoteka'))
    }}>
      <span>İpoteka</span>
      <i className= {(whichTabShow === 'ipoteka') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'ipoteka') ? '' : 'display-none' }>
   <li> <Link to={'/'}>Daxili ipoteka krediti</Link></li>
       <li>  <Link to={'/'}>Mənzil krediti</Link></li>
         <li> <Link to={'/'}>Tikinti krediti</Link></li>
          <li><Link to={'/'}>Əmanətli ipoteka krediti</Link></li>
         <li> <Link to={'/'}>İpoteka kalkulyatoru</Link></li>
         <li> <Link to={'/'}>Partnyor olun</Link></li>
         <li> <Link to={'/'}>Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun vəsaiti hesabına verilən ipoteka kreditləri</Link></li>
         <li> <Link to={'/'}>Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun vəsaiti hesabına verilən güzəştli (MİDA) ipoteka kreditləri</Link></li>
         <li> <Link to={'/'}>Hədiyyə Sertifikatı</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'emanetler' ? setWhichTabShow('') :setWhichTabShow('emanetler'))
    }}>
      <span>Əmanətlər</span>
      <i className= { (whichTabShow === 'emanetler') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'emanetler') ? '' : 'display-none' }>
    <li><Link to={'/'}>"Klassik" əmanəti</Link></li>
        <li> <Link to={'/'}>Əmanətlərin sığortalanması</Link></li>
         <li> <Link to={'/'}>Əmanətli ipoteka krediti</Link></li>
       <li>   <Link to={'/'}>Depozit seyfi</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'kartlar' ? setWhichTabShow('') :setWhichTabShow('kartlar'))
    }}>
      <span>Kartlar</span>
      <i className= { (whichTabShow === 'kartlar') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'kartlar') ? '' : 'display-none' }>
   <li> <Link to={'/'}>Kredit kartları</Link></li>
        <li> <Link to={'/'}>Debet kartları</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'pul-kocurmeleri' ? setWhichTabShow('') :setWhichTabShow('pul-kocurmeleri'))
    }}>
      <span>Pul köçürmələri</span>
      <i className= { (whichTabShow === 'pul-kocurmeleri') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'pul-kocurmeleri') ? '' : 'display-none' }>
   <li> <Link to={'/'}>Valyuta tənzimlənməsi</Link></li>
        <li> <Link to={'/'}>Hesabdan köçürmələr</Link></li>
        <li> <Link to={'/'}>Təcili pul köçürmələri</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'cari-hesab' ? setWhichTabShow('') :setWhichTabShow('cari-hesab'))
    }}>
      <span>Cari hesab</span>
      <i className= { (whichTabShow === 'cari-hesab') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'cari-hesab') ? '' : 'display-none' }>
    <li><Link to={'/'}>Cari hesab açın</Link></li>
        <li> <Link to={'/'}>Kassa əməliyyatları</Link></li>
        <li> <Link to={'/'}>Hesabınıza nəzarət edin</Link></li>
        <li> <Link to={'/'}>Arayış sifariş edin</Link></li>
        <li> <Link to={'/'}>Mübadilə əməliyyatları</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'elektron-xidmetler' ? setWhichTabShow('') : setWhichTabShow('elektron-xidmetler'))
    }}>
      <span>Elektron xidmətlər</span>
      <i className= {(whichTabShow === 'elektron-xidmetler') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'elektron-xidmetler') ? '' : 'display-none' }>
   <li> <Link to={'/'}>NFC ilə əməliyyatlar</Link></li>
        <li> <Link to={'/'}>Qatarlara təmassız keçid</Link></li>
       <li>  <Link to={'/'}>Karta pul yatırın</Link></li>
       <li>  <Link to={'/'}>Kartdan pul köçürün</Link></li>
        <li> <Link to={'/'}>Kart sifariş edin</Link></li>
       <li>  <Link to={'/'}>SMS xəbərdarlıq</Link></li>
        <li> <Link to={'/'}>R@ndevu</Link></li>
        <li> <Link to={'/'}>PIN-kodunuzu dəyişin</Link></li>
        <li> <Link to={'/'}>Xidmət haqlarını ödəyin</Link></li>
        <li> <Link to={'/'}>Kreditinizi ödəyin</Link></li>
       <li>  <Link to={'/'}>3D Secure</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'bank-24/7' ? setWhichTabShow('') :setWhichTabShow('bank-24/7'))
    }}>
      <span>Bank 24/7</span>
      <i className= {(whichTabShow === 'bank-24/7') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
    <ul className= { (whichTabShow === 'bank-24/7') ? '' : 'display-none' }>
   <li> <Link to={'/'}>Məlumat Mərkəzi 24/7</Link></li>
       <li>  <Link to={'/'}>Cash-In ATM-i</Link></li>
       <li>  <Link to={'/'}>Ödəniş terminalı</Link></li>
        <li> <Link to={'/'}>ATM</Link></li>
        <li> <Link to={'/'}>ABB Banking - İnternet Bank</Link></li>
        <li> <Link to={'/'}>ABB mobile - Mobil Bank</Link></li>
        <li> <Link to={'/'}>Şənbə günü fəaliyyət göstərən filiallar</Link></li>
    </ul>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div  onClick={()=>{
      (whichTabShow === 'qaygikes-klubu' ? setWhichTabShow('') :setWhichTabShow('qaygikes-problemi'))
    }}>
      <span>QayğıCash klubu</span>
      <i className= {(whichTabShow === 'qaygikes-klubu') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'avtomatik-endirim' ? setWhichTabShow('') :setWhichTabShow('avtomatik-endirim'))
    }}>
      <span>Avtomatik endirim</span>
      <i className= {(whichTabShow === 'avtomatik-endirim') ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
  </li>
  <li className='mobile-header-content-tab-item'>
    <div onClick={()=>{
      (whichTabShow === 'kampaniyalar' ? setWhichTabShow('') :setWhichTabShow('kampaniyalar'))
    }}>
      <span>Kampaniyalar</span>
      <i className= {(whichTabShow === 'kampaniyalar')? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
      </div>
  </li>

</ul>
  </div>
  </>

 }
 </>
  )
}

export default HeaderBottom