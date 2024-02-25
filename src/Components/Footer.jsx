import React from 'react'
import call_img from '../Images/magazine-mockup 1.png'

function Footer() {
    return ( 
        <div className="Footer-bg container-fluid p-0">
            <div className="container">
                <div className="Footer w-100">
                    <div className="Footer-top w-100 d-flex justify-content-between align-items-end">
                        <p className='Footer_title'>Напишите нам <br /> <br /> <a href="#"><span>info@millenium.ru</span></a> </p>

                        {/* Button trigger modal */}
                        <button type="button" class="left_box_btn call_me F-btn" data-bs-toggle="modal" data-bs-target="#exampleMod">Заказать звонок</button>

                        {/* Modal */}
                        <div class="modal fade" id="exampleMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body call-body">
                                <p className='call-text text-center'>Заявка на консультацию</p>
                                <form action="">
                                    <div className="d-flex flex-column">
                                    <label className='call-label' htmlFor="">Ваше имя</label>
                                    <input className='call-input' type="text" placeholder='Введите ваше имя'/>
                                    <label className='call-label mt-4' htmlFor="">Номер телефона</label>
                                    <input className='call-input' type="number" placeholder='+ 7 (999) 999 99 99' />
                                    <button className='call-button mt-4'>Отправить</button>
                                    </div>
                                </form>
                                <p className='call-btn-text mt-2'>Нажимая на кнопку «Отправить заявку», я даю согласие на обработку персональных данных и соглашаюсь c политикой конфиденциальности</p>
                                <div className="call-book mt-3 d-flex justify-content-center align-items-center">
                                    <div className='call-circle rounded-circle d-flex justify-content-center align-items-center'>
                                        <i class="fa-solid fa-lock circle-lock"></i>
                                    </div>
                                    <img src={call_img} alt="Bu yerda rasm bor" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <hr className='hr mt-4' />
                    <div className="Footer-mid w-100 d-flex justify-content-between align-items-start ">
                        <div>
                            <p className='Footer_text mt-4'>Москва, ул. Профсоюзная 76, <br /> БЦ «ГАЛЕРЕЯ 76» 2 этаж</p>
                            <br />
                            <a href="#"><p className='Footer_text'>+7 (495) 792-66-69 <br /> пн-пт 10:00–19:00</p></a>
                        </div>
                        <div>
                            <a href="#"><i class="fa-brands fa-telegram Footer-icons me-4 mt-4"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp Footer-icons mt-4"></i></a>
                        </div>
                    </div>
                    <div className="Footer-end w-100 d-flex flex-column justify-content-evenly align-items-center">
                        <p className='Nav-logo Footer-logo'>MILLENIUM</p>
                        <p className='Footer-links f-link'>© 2018–2021 | Millenium - создание интернет-магазинов на 1С Битрикс</p>
                        <a className='f-l' href=""><p className='Footer-links'>Политика конфиденциальности</p></a>
                    </div>      
                </div>
            </div>
        </div>
     );
}

export default Footer;