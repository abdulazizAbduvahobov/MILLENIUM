import React from 'react'
import Sec_8_img1 from '../Images/Purple-in-Basic2 1 1.png'
import Sec_8_img2 from '../Images/Platonic_1_-_Octa0005 1.png'
import Sec_8_img3 from '../Images/5f0fd3c8ed6dcee0b99b11fa_Confetti 2 1 1.png'
import Sec_8_img4 from '../Images/Cube_Rounded0005 (1) 1.png'
import Sec_8_img5 from '../Images/Cylinder_Y1_-_Extra_Thin0006 1 1.png'

function Section_8() {
    return ( 
        <div className="container">
            <div className="Section_8 w-100 h-auto">
                <img className='Sec_8img1' src={Sec_8_img1} alt="Bu yerda rasm bor" />
                <img className='Sec_8img2' src={Sec_8_img2} alt="Bu yerda rasm bor" />
                <img className='Sec_8img3' src={Sec_8_img3} alt="Bu yerda rasm bor" />
                <img className='Sec_8img4' src={Sec_8_img4} alt="Bu yerda rasm bor" />
                <img className='Sec_8img5' src={Sec_8_img5} alt="Bu yerda rasm bor" />
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className="Sec_8_box1 w-100">
                            <p className='Sec_8_title'>Компания Millenium-</p>
                            <p className='Sec_5_text Sec_8_text'>Это дорогая и долгая разработка интернет-магазинов на 1С Битрикс! Нельзя сделать <b>качественный</b> цифровой продукт за дешево и быстро!</p>
                            <p className='Sec_5_text Sec_8_text'>Мы создадим интернет-магазин с нуля. Заказчику не придется искать других IT-специалистов для дальнейшей настройки и запуска сайта. Мы настроим сервисы, интегрируем модули для онлайн-торговли, добавим контент и товары. Работы по созданию интернет-магазина с нуля ведутся только после анализа ниши бизнеса.</p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="Sec_8_box w-100">
                            <div className="login-box p-5">
                                <p className='login-title text-center'>Звоните нам по телефону <br /> +7 (495) 792-66-69</p>
                                <p className='login-text text-center'>или закажите обратный звонок чтобы получить ответы на все интересующие вас вопросы.</p>
                                <form action="">
                                    <input className='login-input w-100 mt-3' type="text" placeholder='Введите ваше имя' />
                                    <input className='login-input w-100 mt-3' type="number" placeholder='+ 7 (999) 999 99 99' />
                                    <button className='login-button mt-4 w-100'>Перезвоните мне</button>
                                    <div className="d-flex mt-5">
                                        <input className='login-check' type="checkbox" />
                                        <label className='login-label' htmlFor=""> <span>Cогласен/а на</span> обработку персональных данных</label>     
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Section_8;