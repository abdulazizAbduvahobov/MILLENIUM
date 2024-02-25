import React from 'react'
import Sec_3_img1 from '../Images/Group_22 1.png'
import Sec_3_img2 from '../Images/23 1.png'
import Sec_3_img3 from '../Images/24 1.png'
import Sec_3_img4 from '../Images/25 1.png'
import {Link} from 'react-router-dom'

function Section_3() {
    return ( 
        <div className="container">
            <div className="Section_3 w-100 h-auto">
                <p className='Sec_3_title mb-5'>Что вы <span>получаете ?</span> </p>
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <div className="Sec_3_box w-100 d-flex justify-content-center align-items-center">
                            <img className='Sec_3_images' src={Sec_3_img1} alt="Bu yerda rasm bor" />
                        </div>
            
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="Sec_3_box Sec_3_tb w-100 d-flex flex-column justify-content-center">
                            <p className='Sec_3_box_title'>Каталог товаров</p>
                            <ul className='Sec_3_list'>
                                <li>возможность выгружать свои товары в неограниченном количестве</li>
                                <li>добавлять и редактировать описание товаров</li>
                                <li>сортировать товары по заданным критериям</li>
                                <li>моментальная оплата товара или оформление при помощи добавления корзины</li>
                            </ul>
                        </div>

                    </div>
                        <div className="wrap-box">
                            <div className="row d-flex flex-wrap-reverse g-5">
                                <div className="col-12 col-lg-6">
                                <div className="Sec_3_box Sec_3_tb w-100 d-flex flex-column justify-content-center">
                                    <p className='Sec_3_box_title'>Оформление заказа</p>
                                    <ul className='Sec_3_list'>
                                        <li>личный кабинет</li>
                                        <li>корзина с отображением выбранных товаров</li>
                                        <li>оформление заказа с указанием контактных данных</li>
                                        <li>возможность приема онлайн-платежей</li>
                                        <li>использование купонов, скидок и специальных предложений</li>
                                    </ul>
                                </div>

                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="Sec_3_box w-100 d-flex justify-content-center align-items-center">
                                        <img className='Sec_3_images' src={Sec_3_img2} alt="Bu yerda rasm bor" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div className="col-12 col-lg-6">
                        <div className="Sec_3_box w-100 d-flex justify-content-center align-items-center">
                            <img className='Sec_3_images' src={Sec_3_img3} alt="Bu yerda rasm bor" />
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="Sec_3_box Sec_3_tb w-100 d-flex flex-column justify-content-center">
                            <p className='Sec_3_box_title'>Интеграции</p>
                            <ul className='Sec_3_list'>
                                <li>1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)</li>
                                <li>Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)</li>
                                <li>Интеграция со службами доставки СДЭК, Почта России</li>
                            </ul>
                        </div>

                    </div>
                        <div className="wrap-box">
                            <div className="row d-flex flex-wrap-reverse g-5">
                                <div className="col-12 col-lg-6">
                                    <div className="Sec_3_box Sec_3_tb w-100 d-flex flex-column justify-content-center">
                                        <p className='Sec_3_box_title'>CRM</p>
                                        <ul className='Sec_3_list'>
                                            <li>фиксация и отслеживание поступивших заявок</li>
                                            <li>уведомления о заказах</li>
                                            <li>отчетность магазина flex-column</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="Sec_3_box w-100 d-flex justify-content-center align-items-center">
                                        <img className='Sec_3_images' src={Sec_3_img4} alt="Bu yerda rasm bor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                        <div className='w-100 h-auto p-5 d-flex justify-content-center align-items-center'>
                            <Link className='text-light' to='/prices'><button className='left_box_btn'>Узнать стоимость</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Section_3;