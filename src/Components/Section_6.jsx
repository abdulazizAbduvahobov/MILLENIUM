import React from 'react'
import Sec_6_image1 from '../Images/Frame 6 2.png'
import Sec_6_image2 from '../Images/FireShot Capture 025 - Каталог алмазного оборудования FORTEZZO - fortezzo 1.png'
import Sec_6_image3 from '../Images/AdobeEdgeHTML3 1.png'
import Sec_6_image4 from '../Images/order 1.png'

function Section_6() {
    return ( 
        <div className="container">
            <div className="Section_6 w-100 h-auto">
                <p className='Sec_3_title'>Этапы</p>
                <div className="w-100 d-flex">
                    <div className="Sec_6_leftbox d-flex px-5 py-4">
                        <div className="Sec_6_stick d-flex flex-column justify-content-between align-items-center">
                            <i class="fa-solid fa-circle stick-circle"></i>
                            <i class="fa-solid fa-circle stick-circle"></i>
                            <i class="fa-solid fa-circle stick-circle"></i>
                            <i class="fa-solid fa-circle stick-circle"></i>
                            <i class="fa-solid fa-circle stick-circle"></i>
                            <i class="fa-solid fa-circle stick-circle"></i>
                        </div>
                        <ul>
                            <li className='Sec_6_list'>01. Маркетинговый анализ бизнеса</li>
                            <li className='Sec_6_list'>02. Привлекательный дизайн</li>
                            <li className='Sec_6_list'>03. Профессиональная верстка</li>
                            <li className='Sec_6_list'>04. «Посадка» на CMS</li>
                            <li className='Sec_6_list'>05. Тестирование и доработка</li>
                            <li className='Sec_6_list'>06. Запуск сайта</li>
                        </ul>
                    </div>
                    <div className="Sec_6_rightbox">
                        <div className="row g-5">
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>1</p></div>
                                        <p className='level-box-title m-0'>Маркетинговый анализ бизнеса</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text'>На предварительном этапе мы выясняем специфику вашего бизнеса, товаров. Отмечаем ваши преимущества и уникальные предложения, изучаем ожидания и потребности целевой аудитории, рассматриваем ближайшее конкурентное окружение.</p>
                                    <p className='Sec_5_text'>На основании полученных данных мы разрабатываем прототип интернет-магазина, пишем техническое ТЗ для специалистов, готовим рекомендации по текстовому наполнению с учетом требований SEO, разрабатываем план по внешней и внутренней оптимизации сайта. Также мы создаем набор готовых элементов для пользовательского интерфейса.</p>
                                    <div className="level-box-bottom">
                                        <img className='Sec_6_image' src={Sec_6_image1} alt="Bu yerda rasm bor" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>2</p></div>
                                        <p className='level-box-title m-0'>Привлекательный дизайн</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text'>Интерфейс сайта будет соответствовать современным требованиям и отвечать ожиданиям целевой аудитории. Опытные специалисты Millenium создадут UX-дизайн, отталкиваясь от данных анализа пользовательского поведения, что позволит в несколько раз увеличить конверсию.</p>
                                    <p className='Sec_5_text'>Мы подберем оптимальные цветовые сочетания (основной, дополнительные, акцентные цвета), уделим внимание четкости графики, наглядности интерфейса, понятной и лаконичной визуализации.</p>
                                    <div className="level-box-bottom">
                                        <img className='Sec_6_image' src={Sec_6_image2} alt="Bu yerda rasm bor" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>3</p></div>
                                        <p className='level-box-title m-0'>Профессиональная верстка</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text'>Мы производим верстку по стандарту Pixel Perfect, который предполагает точное соответствие сверстанных страниц дизайн-макету. Наши специалисты напишут чистый код с двухфакторной проверкой, позволяющий обеспечить высокую скорость загрузки на любых браузерах и электронных устройствах (десктопных и мобильных).</p>
                                    <p className='Sec_5_text'>Профессиональная адаптивная верстка является важным условием бесперебойной надежной работы сайта на протяжении длительного времени. </p>
                                    <div className="level-box-bottomA">
                                        <img className='Sec_6_image' src={Sec_6_image3} alt="Bu yerda rasm bor" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>4</p></div>
                                        <p className='level-box-title m-0'>«Посадка» на CMS</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text'>Невозможно представить интернет-магазин без системы управления сайтом. Специалисты Millenium выполнят посадку готовой верстки вашего магазина на CMS №1 в странах СНГ - 1с Битрикс.</p>
                                    <p className='Sec_5_text'>Благодаря CMS, вы просто заходите в административную панель, и, при помощи понятных полей, легко управляете содержимым — редактируете новости, вносите коррективы в товары, добавляет фото и видеоконтент, модерируете и выполняете множество других действий, которые без CMS были бы сущим кошмаром.</p>
                                    <div className="level-box-bottomA">
                                        <img className='Sec_6_image' src={Sec_6_image4} alt="Bu yerda rasm bor" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>5</p></div>
                                        <p className='level-box-title m-0'>Тестирование и доработка</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text text_b'>Чтобы избежать проблем во время использования сайта, на данном этапе мы отрабатываем все возможные сценарии взаимодействия пользователей с сайтом. Это позволяет вовремя выявить ошибки и устранить их. Мы тестируем usability и безопасность сайта, проверяем скорость загрузки страниц, работу форм обратной связи и интерактивных элементов, отображение страниц на разных устройствах. Это позволяет на 100% гарантировать функциональность ресурса.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="level-box w-100 h-auto px-5 py-4">
                                    <div className="level-box-top w-100 d-flex align-items-center">
                                        <div className="circle-num d-flex justify-content-center align-items-center rounded-circle ms-2"><p className='mt-3'>6</p></div>
                                        <p className='level-box-title m-0'>Запуск сайта</p>
                                    </div>
                                    <hr className='my-4' />
                                    <p className='Sec_5_text text_b'>Когда все проверено и выполнены все нужные доработки, остается лишь выполнить грамотный запуск сайта. Наши специалисты сверяют всё по чек-листу, чтобы избежать неприятностей и получить на выходе идеальный интернет-магазин с высокой конверсией. Сайт от профессионалов Millenium позволит вам легко привлекать новых клиентов и станет достойным лицом вашей компании в интернете.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Section_6;