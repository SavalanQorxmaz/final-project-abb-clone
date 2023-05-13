import React from 'react'
import { useSelector } from 'react-redux'
import { selectScreenW } from '../screenSlice'
import { Link } from 'react-router-dom'
import abbIcon from '../icons/logo.svg'
import internetBankingIcon  from '../icons/internet-banking-signin.svg'
import { selectDarkMode } from '../slices/mainSlice'

const Footer = () => {

    const screenW = useSelector(selectScreenW)
    const selectMode = useSelector(selectDarkMode)

  return (
    <div className='footer border-t-2 border-gray-100 mt-20' >
        <div className='footer-top-back '>
            <div className='my-container'>
                <div className='footer-top py-5'>
            {
                screenW === 'web' ?
                <div className='flex justify-between'>
                    <Link to={'/'}><img src={abbIcon} alt="" style={{height:'30px'}}   /></Link>
                    <Link className='flex item-center h-8 whitespace-pre' to={'/internet-bankciliq'}>
                        <img className='h-6' src={internetBankingIcon} alt="" />&nbsp;
                        <span className=''>Internet Bankçılıq</span>
                        </Link>
   
                </div>
                :
                <div className='flex justify-between'>
                     <Link to={'/'}><img src={abbIcon} alt="" style={{height:'30px'}}   /></Link>
                     <Link className='flex item-center whitespace-pre' to={'/internet-bankciliq'}>
                     <i className="fa-solid fa-phone"></i>&nbsp;
                        <span className=''>947</span>
                        </Link>
                </div>
            }
                </div>
            </div>
        </div>
     
                        <div className={ selectMode ? 'footer-bottom-back bg-black text-white pt-10' : 'footer-bottom-back bg-neutral-100 text-black pt-10'}>
                        
                        <div className='footer-bottom'>
                            {
                        screenW === 'web' ?
                        <div className='my-container'>
                        <div className='grid grid-cols-6 gap-5 font-footer-font '>
                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>Fərdi</span></li>
                                <li><Link to={'/'}>Avtomatik endirim</Link></li>
                                <li><Link to={'/'}>İpoteka</Link></li>
                                <li><Link to={'/'}>Cari hesab</Link></li>
                                <li><Link to={'/'}>Elektron xidmətlər</Link></li>
                                <li><Link to={'/'}>Əmanətlər</Link></li>
                                <li><Link to={'/'}>QayğıCash klubu</Link></li>
                                <li><Link to={'/'}>Pul köçürmələri</Link></li>
                                <li><Link to={'/'}>Kartlar</Link></li>
                                <li><Link to={'/'}>Kreditlər</Link></li>
                                <li><Link to={'/'}>Bank 24/7</Link></li>
                                <li><Link to={'/'}>Kampaniyalar</Link></li>
                            </ul>

                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>Haqqımızda</span></li>
                                <li><Link to={'/'}>Siyasətlərimiz</Link></li>
                                <li><Link to={'/'}>Brend mərkəzi</Link></li>
                                <li><Link to={'/'}>Maliyyə monitorinqi və komplayns</Link></li>
                                <li><Link to={'/'}>Təklif və şikayətlər</Link></li>
                                <li><Link to={'/'}>Tender elanları</Link></li>
                                <li><Link to={'/'}>Mükafatlar</Link></li>
                                <li><Link to={'/'}>İnsan Resursları</Link></li>
                                <li><Link to={'/'}>Missiya və strateji baxış</Link></li>
                                <li><Link to={'/'}>Korporativ Sosial Məsuliyyət / Sponsorluq</Link></li>
                                <li><Link to={'/'}>Müxbir banklar</Link></li>
                                <li><Link to={'/'}>Törəmə və asılı müəssisələrdə iştirak payı</Link></li>
                                <li><Link to={'/'}>Məlumatların açıqlanması</Link></li>
                                <li><Link to={'/'}>Rəhbərlik</Link></li>
                            </ul>

                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>Korporativ</span></li>
                                <li><Link to={'/'}>Əməkhaqqı layihəsi</Link></li>
                                <li><Link to={'/'}>Elektron bankçılıq</Link></li>
                                <li><Link to={'/'}>Hesablar</Link></li>
                                <li><Link to={'/'}>Ödəniş kartları</Link></li>
                                <li><Link to={'/'}>Sənədli əməliyyatlar</Link></li>
                                <li><Link to={'/'}>Köçürmələr</Link></li>
                                <li><Link to={'/'}>Əmanətlər</Link></li>
                                <li><Link to={'/'}>Məsafədən hesab aç</Link></li>
                                <li><Link to={'/'}>Korporativ kreditlər</Link></li>
                            </ul>

                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>KOB</span></li>
                                <li><Link to={'/'}>Xidmət paketləri</Link></li>
                                <li><Link to={'/'}>Əmanətlər</Link></li>
                                <li><Link to={'/'}>Sahibkarlar Klubu</Link></li>
                                <li><Link to={'/'}>Hesablar</Link></li>
                                <li><Link to={'/'}>Ödəniş kartları</Link></li>
                                <li><Link to={'/'}>Elektron bankçılıq</Link></li>
                                <li><Link to={'/'}>Köçürmələr</Link></li>
                                <li><Link to={'/'}>Sənədli əməliyyatlar</Link></li>
                                <li><Link to={'/'}>ABB Link</Link></li>
                                <li><Link to={'/'}>Məsafədən hesab aç</Link></li>
                                <li><Link to={'/'}>Biznes kreditləri</Link></li>
                            </ul>

                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>Maliyyə və İnvestisiya</span></li>
                                <li><Link to={'/'}>Hesabatlar</Link></li>
                                <li><Link to={'/'}>Digər məlumatlar</Link></li>
                                <li><Link to={'/'}>Təqdimatlar</Link></li>
                                <li><Link to={'/'}>Reytinqlər</Link></li>
                                <li><Link to={'/'}>Səhmdarlar</Link></li>
                            </ul>

                            <ul className='[&>*]:my-5'>
                                <li><span className='text-lg font-semibold'>Əlaqə</span></li>
                                <li><Link to={'/'}>Nizami küç. 67, AZ1005 Bakı, Azərbaycan</Link></li>
                                <li><Link to={'/'}>Tel.: (+994 12) 493 00 91</Link></li>
                                <li><Link to={'/'}>Faks: (+994 12) 493 40 91</Link></li>
                                <li><Link to={'/'}>E-poçt: info@abb-bank.az</Link></li>
                                <li className='text-xl font-semibold'>
                                <i className="fa-solid fa-phone"></i>&nbsp;
                                    <Link to={'/'}>937</Link>
                                    </li>
                            </ul>
                        </div>

                        <div className='flex [&>*]:mr-6 my-5'>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/appstore.png'} alt = ''/></Link>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/googleplay.png'} alt = ''/></Link>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/appgallery.png'} alt = ''/></Link>
                            </div>

                            <div className='flex justify-between '>
                            <p className='text-sm text-gri-200 my-5'>© ABB - Bütün hüquqlar qorunur</p>
                            <div className='flex [&>*]:mr-5 my-5'>
                                <Link to={'/'}><img className='h-6' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-infobank.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-6' src={process.env.PUBLIC_URL + '/images/footer/logo/yenilogo.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-6' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-virtual-qarabag.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-6' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-msp.png'} alt = ''/></Link>
                            </div>
                            <div className='text-xl [&>*]:mr-5 my-5'>
                                <Link to={'/'}><i className="fa-brands fa-instagram"></i></Link>
                                <Link to={'/'}><i className="fa-brands fa-facebook"></i></Link>
                                <Link to={'/'}><i className="fa-brands fa-youtube"></i></Link>
                                <Link to={'/'}><i className="fa-brands fa-twitter"></i></Link>
                                <Link to={'/'}><i className="fa-brands fa-linkedin"></i></Link>
                            </div>
                            </div>
        </div>
                   
                        :
                   <div className='main-container'>
                        <div>
                            <div>
                            <Link  className='hover:text-blue-400' to={'/'}> Fərdi</Link>&nbsp;/&nbsp;
                            <Link  className='hover:text-blue-400' to={'/'}>Haqqımızda</Link>&nbsp;/&nbsp;
                            <Link  className='hover:text-blue-400' to={'/'}>Korporativ</Link>&nbsp;/&nbsp;
                            <Link  className='hover:text-blue-400' to={'/'}>KOB</Link>&nbsp;/&nbsp;
                            <Link  className='hover:text-blue-400' to={'/'}>Maliyyə və İnvestisiya</Link>
                            </div>

                            <ul className=''>
                                <li><span className='text-lg font-semibold'>Əlaqə</span></li>
                                <li><Link to={'/'}>Nizami küç. 67, AZ1005 Bakı, Azərbaycan</Link></li>
                                <li><Link to={'/'}>Tel.: (+994 12) 493 00 91</Link></li>
                                <li><Link to={'/'}>Faks: (+994 12) 493 40 91</Link></li>
                                <li><Link to={'/'}>E-poçt: info@abb-bank.az</Link></li>
                                <li className='text-xl font-semibold'>
                                <i className="fa-solid fa-phone"></i>&nbsp;
                                    <Link to={'/'}>937</Link>
                                    </li>
                            </ul>

                            <div className='text-3xl [&>*]:mr-5 my-5'>
                                <Link className='hover:text-blue-400' to={'/'}><i className="fa-brands fa-instagram"></i></Link>
                                <Link className='hover:text-blue-400' to={'/'}><i className="fa-brands fa-facebook"></i></Link>
                                <Link className='hover:text-blue-400' to={'/'}><i className="fa-brands fa-youtube"></i></Link>
                                <Link className='hover:text-blue-400' to={'/'}><i className="fa-brands fa-twitter"></i></Link>
                                <Link className='hover:text-blue-400' to={'/'}><i className="fa-brands fa-linkedin"></i></Link>
                            </div>

                            <div className='flex [&>*]:mr-6 my-5'>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/appstore.png'} alt = ''/></Link>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/googleplay.png'} alt = ''/></Link>
                                <Link to={'/'}><img src={process.env.PUBLIC_URL + '/images/footer/store/appgallery.png'} alt = ''/></Link>
                            </div>
                            <div className='flex [&>*]:mr-5 my-5'>
                                <Link to={'/'}><img className='h-9' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-infobank.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-9' src={process.env.PUBLIC_URL + '/images/footer/logo/yenilogo.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-9' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-virtual-qarabag.png'} alt = ''/></Link>
                                <Link to={'/'}><img className='h-9' src={process.env.PUBLIC_URL + '/images/footer/logo/logo-msp.png'} alt = ''/></Link>
                            </div>

                            <p className='text-sm text-gri-200 my-5'>© ABB - Bütün hüquqlar qorunur</p>

                        </div>
                        </div>
                            }
                    
            </div>
        </div>
        
    </div>
  )
}

export default Footer