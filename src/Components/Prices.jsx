import React from 'react'
import Prices_img from '../Images/price-bg 1.png'
import call_img from '../Images/magazine-mockup 1.png'

function Prices() {
    return ( 
        <div className="container">
            <div className="Prices w-100 h-auto">
                <div className="Prices-top w-100">
                    <p className='Prices-text'>Итоговая стоимость разработки интернет-магазина складывается от требований заказчика выясненные на этапе обсуждения. При расчёте конечной стоимости учитываются сложность дизайна и функционала (интеграция с 1С, подключение корпоративного портала и т.д.).</p>
                    <p className='Prices-text'><b>Стоимость лицензии 1С Битрикс не входит в стоимость.</b></p>
                </div>
                <div className="Prices-bottom w-100">
                    <div className="row g-5">
                        <div className="col-12 col-xl-4">
                            <div className="Pr-box w-100 h-auto">
                                <div className="Pr-box-top d-flex flex-column justify-content-around align-items-center">
                                    <p className='traffic'>Тариф</p>
                                    <p className='Pr-class'>Стандарт</p>
                                    <p className='Pr-price'>от <span>80 000</span> ₽</p>
                                </div>
                                <div className="Pr-box-bottom d-flex flex-column justify-content-between">
                                    <ul>
                                        <li className='pr-list'>Индивидуальный дизайн</li>
                                        <li className='pr-list'>Верстка Html, CSS, JavaScript, PHP</li>
                                        <li className='pr-list'>«Посадка» на CMS 1C Битрикс</li>
                                        <li className='pr-list'>Функционал онлайн оплаты товаров</li>
                                    </ul>

                                    {/* Button trigger modal */}
                                    <button type="button" class="Pr-btn mt-3 call_me'" data-bs-toggle="modal" data-bs-target="#exampleMod">Заказать</button>

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
                        <div className="col-12 col-xl-4">
                            <div className="Pr-box w-100 h-auto">
                                <div className="Pr-box-top d-flex flex-column justify-content-around align-items-center">
                                    <p className='traffic'>Тариф</p>
                                    <p className='Pr-class'>Премиум</p>
                                    <p className='Pr-price'>от <span>140 000</span> ₽</p>
                                </div>
                                <div className="Pr-box-bottom d-flex flex-column justify-content-between">
                                    <ul>
                                        <li className='pr-list'>Индивидуальный дизайн</li>
                                        <li className='pr-list'>Адаптивная верстка Html, CSS, JavaScript, PHP</li>
                                        <li className='pr-list'>«Посадка» на CMS 1C Битрикс</li>
                                        <li className='pr-list'>Функционал онлайн оплаты товаров</li>
                                        <li className='pr-list'>Личный кабинет</li>
                                        <li className='pr-list'>Расширенные фильтры с поддержкой SEO</li>
                                        <li className='pr-list'>Интеграция с системами служб доставки</li>
                                        <li className='pr-list'>Наполнение товарами</li>
                                        <li className='pr-list'>Обучение пользования сайтом</li>
                                    </ul>

                                    {/* Button trigger modal */}
                                    <button type="button" class="Pr-btn mt-3 call_me'" data-bs-toggle="modal" data-bs-target="#exampleMod">Заказать</button>

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
                        <div className="col-12 col-xl-4">
                            <div className="Pr-box w-100 h-auto">
                                <div className="Pr-box-top d-flex flex-column justify-content-around align-items-center">
                                    <p className='traffic'>Тариф</p>
                                    <p className='Pr-class'>Престиж</p>
                                    <p className='Pr-price'>от <span>180 000</span> ₽</p>
                                </div>
                                <div className="Pr-box-bottom d-flex flex-column justify-content-between">
                                    <ul>
                                        <li className='pr-list'>Индивидуальный дизайн</li>
                                        <li className='pr-list'>Адаптивная верстка Html, CSS, JavaScript, PHP</li>
                                        <li className='pr-list'>«Посадка» на CMS 1C Битрикс</li>
                                        <li className='pr-list'>Функционал онлайн оплаты товаров</li>
                                        <li className='pr-list'>Личный кабинет, Сравнение, Избранное</li>
                                        <li className='pr-list'>Расширенные фильтры с поддержкой SEO</li>
                                        <li className='pr-list'>Интеграция с системами служб доставки</li>
                                        <li className='pr-list'>Наполнение товаром</li>
                                        <li className='pr-list'>Обучение пользования сайтом</li>
                                        <li className='pr-list'>Интеграция с 1С, Мой склад</li>
                                        <li className='pr-list'>Интеграция с маркетплейсами (Яндекс.Маркет, Wildberries, Goods) </li>
                                        <li className='pr-list'>Внедрение политики лояльности, купоны, бонусы</li>
                                        <li className='pr-list'>Интеграция с CRM</li>
                                        <li className='pr-list'>Любой не стандартный функционал</li>
                                    </ul>
                                    
                                    {/* Button trigger modal */}
                                    <button type="button" class="Pr-btn mt-3 call_me'" data-bs-toggle="modal" data-bs-target="#exampleMod">Заказать</button>

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
                </div>
            </div>
        </div>
     );
}

export default Prices;