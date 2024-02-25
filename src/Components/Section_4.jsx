import React from 'react'
import Sec_4_img1 from '../Images/gold-bitrix 1.png'
import Sec_4_img2 from '../Images/sertif-1 1.png'
import Sec_4_img3 from '../Images/sertif-2 1.png'

function Section_4() {
    return ( 
        <div className="container">
            <div className="Section_4 w-100 p-4">
                <div className="row border border-light border-2 rounded-3 p-2">
                    <div className="col-4">
                        <div className="Sec_4_items">
                            <img className='Sec_4_image1 mt-5' src={Sec_4_img1} alt="Bu yerda rasm bor" />      
                         </div>
                    </div>
                    <div className="col-4">
                        <div className="Sec_4_items">
                            <p className='items-title mt-4'>Сертификат</p>
                            <p className='items-text'>Золотой сертифицированный <br /> партнер битрикс</p> 
                            <img className='Sec_4_image2 mt-3' src={Sec_4_img2} alt="Bu yerda rasm bor" />       
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Sec_4_items">
                            <p className='items-title mt-4'>Сертификат</p>
                            <p className='items-text'>Прграммы мониторинга <br /> качества внедрений</p>  
                            <img className='Sec_4_image3 mt-3' src={Sec_4_img3} alt="Bu yerda rasm bor" />      
                        </div>
                    </div>
                </div>
            </div>
            <div className="karusel-img w-100 p-5">
            <div id="carouselExampleIndicators" class="carousel h-100" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Sec_4_img1} class="karusel-image1 d-block mx-auto" alt="Bu yerda rasm bor"/>
                        <p className='items-title mt-5'>Сертификат</p>
                        <p className='items-text'>Золотой сертифицированный <br /> партнер битрикс</p>
                        <div className="img-center w-100 h-auto d-flex justify-content-center">
                            <img className='license-img mt-3' src={Sec_4_img2} alt="Bu yerda rasm bor" />
                        </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Sec_4_img1} class="karusel-image1 d-block mx-auto" alt="Bu yerda rasm bor"/>
                        <p className='items-title mt-5'>Сертификат</p>
                        <p className='items-text'>Прграммы мониторинга <br /> качества внедрений</p> 
                        <div className="img-center w-100 h-auto d-flex justify-content-center">
                            <img className='license-img mt-3' src={Sec_4_img3} alt="Bu yerda rasm bor" />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
     );
}

export default Section_4;
{/* <div className="row g-4 border border-light border-2 rounded-3 p-2 mt-1">
                    <div className="col-12">
                        <div className="karusel-item w-100 h-auto d-flex justify-content-center">
                        <img className='karusel-image1 mt-4' src={Sec_4_img1} alt="Bu yerda rasm bor" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="karusel-item w-100 h-auto d-flex justify-content-center">

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="karusel-item w-100 h-auto d-flex justify-content-center">

                        </div>
                    </div>
                </div> */}