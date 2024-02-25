import React from 'react'
import {Link} from 'react-router-dom'
import call_img from '../Images/magazine-mockup 1.png'

function Navbar() {
    return ( 
        <div className='container'>
            <div className='Navbar d-flex'>
                <div className='Nav-left d-flex align-items-center w-50 h-100'>
                    {/* Button trigger modal */}
                    <i type="button" class="fa-solid fa-bars Nav-bars" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

                    {/* Modal */}
                    <div class="modal mx-auto fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-column justify-content-around text-center">
                                <ul className='mod-ul'>
                                    <li className='Nav-links'><Link className='router-link' to='/'>Главная</Link></li>
                                    <li className='Nav-links mt-4'><Link className='router-link' to='/prices'>Цены</Link></li>
                                    <li className='Nav-links mt-4'><Link className='router-link' to='/cases'>Кейсы и отзывы</Link></li>
                                    <li className='Nav-links mt-4'><Link className='router-link' to='/contacts'>Контакты</Link></li>
                                    <p className='mod-text mt-4'>info@millenium.ru</p>
                                    <p className='mod-text mt-4'>+7 (495) 792-66-69 <br /> пн-пт 10:00–19:00</p>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>

                    <a href="#"><p className='Nav-logo me-4'>MILLENIUM</p></a>
                    <ul className='Nav-list d-flex'>
                        <li className='Nav-links me-4'><Link className='router-link' to='/'>Главная</Link></li>
                        <li className='Nav-links me-4'><Link className='router-link' to='/prices'>Цены</Link></li>
                        <li className='Nav-links me-4'><Link className='router-link' to='/cases'>Кейсы и отзывы</Link></li>
                        <li className='Nav-links'><Link className='router-link' to='/contacts'>Контакты</Link></li>
                    </ul>
                    
                    {/* Button trigger modal */}
                    <div type="button" class="Nav-phone-icon" data-bs-toggle="modal" data-bs-target="#exampleMod"><i class="fa-solid fa-phone phone-icon"></i></div>

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
                <div className='Nav-right d-flex align-items-center w-50 h-100 '>
                    <div className='Nav-right-box_1 h-100 d-flex align-items-center justify-content-end'>
                    <a href="#"><i class="fa-brands fa-telegram Nav-icons"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp Nav-icons mx-3"></i></a>
                    <a href="#"><p className='Nav-number'>+ 7 (495) 555 65 65 <br /> <span className='d-flex justify-content-end'>Ежедневно с 09:00 до 18:00</span> </p></a>
                    </div>
                    <div className='Nav-right-box_2 h-100 d-flex align-items-center justify-content-end'>

                        {/* Button trigger modal */}
                        <button type="button" class="Nav-button" data-bs-toggle="modal" data-bs-target="#exampleMod">Заказать звонок</button>

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
                </div>
            </div>
        </div>
     );
}

export default Navbar;