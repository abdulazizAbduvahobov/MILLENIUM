import React from 'react'
import {Link} from 'react-router-dom'

function Section_2() {
    return ( 
        <div className="container">
            <div className="Section_2 w-100 h-auto">
                <p className='left_box_title mb-5'>Мы создаем интернет-магазины, <span>которые продают</span></p>
                <div className="row g-5">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>01</p>
                            <p className="Card-text">Удобный интерфейс</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Блоковая подача информации, удобные кнопки, карточки товаров, понятное меню и легкая навигация по многостраничному сайту.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>02</p>
                            <p className="Card-text">Продающая структура</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Делаем анализ вашей целевой аудитории и вашего предложения. Опираясь на анализ прописываем продающуюу структуру сайта.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>03</p>
                            <p className="Card-text">Адаптивность</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Сайт корректно отображается на различных устройствах, элементы динамически подстраиваются под различные разрешения экрана, что повышает конверсию сайта.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>04</p>
                            <p className="Card-text">Уникальный дизайн</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Не пользуемся шаблонными решениями. Под каждый проект разрабатывается индивидуальный дизайн который подчеркнет имидж компании</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>05</p>
                            <p className="Card-text">Защита и безопасность</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Подключаем HTPS протокол, защиту от DDOS атак, чтобы данные клиентов были в безопасности.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="Sec_2_cards w-100 d-flex flex-column px-3">
                            <p className='Card-title'>06</p>
                            <p className="Card-text">SEO оптимизация</p>
                            <div className='Card-border'></div>
                            <p className='text-about-card'>Сайты соответствуют требованиям поисковой оптимизации, они без труда покоряют топы поисковой выдачи Яндекс и Google.</p>                    
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='w-100 h-auto p-3 d-flex justify-content-center align-items-center'>
                            <Link className='text-light' to='/prices'><button className='left_box_btn'>Узнать стоимость</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Section_2;