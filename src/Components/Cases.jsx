import React from 'react'
import emoji_rock from "../Images/emoji__rock 1.png"
import Case_card_img from '../Images/YouTube - Opera 1.png'

function Cases() {
    return ( 
        <div className="container">
            <div className="Cases w-100 h-auto">
                <div className="d-flex">
                    <p className='Sec_3_title'>Избранные <span>проекты</span> </p>
                    <img className='emoji_rock ms-3' src={emoji_rock} alt="Bu yerda rasm bor" />
                </div>
                <p className='Carousel-text'>Fortezzo <span>Алмазное оборудование</span> </p>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="Case_img_box1 d-flex justify-content-center mx-auto">
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="Case_img_box2 d-flex justify-content-center mx-auto">
                                
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
                    <p className='Sec_3_title Cases_card_title'>Отзывы о <span>работе</span> </p>
                    <div className="Cases_cards w-100 h-auto">
                        <div className="row g-5">
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="Case_card w-100">
                                    <img className='Case_c_images' src={Case_card_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default Cases;