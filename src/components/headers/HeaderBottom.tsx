import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import Credit from './headerGroups/Credit'
import abbIcon from '../../icons/logo.svg'
import creditImg from '../../icons/Kredit_sub_iba.png'
import ipotecaImg from '../../icons/ipoteka-02.png'
import electronImg from '../../icons/randevu_iba_yeni_site.jpg'
import bank247 from '../../icons/proekt-2.png'

const HeaderBottom = () => {

  const screenW = useSelector(selectScreenW)
  return (
    <div className='header-bottom-back'>
      <div className='my-container'>
      <div className='header-bottom'>
      {screenW === 'web' ? <>
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
      </> : <Link to={'/'}><img src={abbIcon} alt="" /></Link>}
    </div>
      </div>
    </div>
  )
}

export default HeaderBottom