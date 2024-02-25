import React from 'react'
import Sec_1_img from '../Images/rm355-pf-s73-card-laptop-01-mockup 2.png'
import {Link} from 'react-router-dom'

function Section_1() {
    return ( 
        <div className="container">
            <div className="Section_1 w-100 h-auto">
                <div className='Sec_1_left_box'>
                    <div className='left_box_top w-100 h-auto'>
                        <p className='left_box_title'>Разработка интернет-магазинов <span>на 1C-Битрикс</span> </p>
                        <img className='Sec_1_image' src={Sec_1_img} alt="bu yerda rasm bor" />
                        <p className='left_box_text mt-4'>Разработаем интернет-магазин за 30 дней с уникальным дизайном и продуманной структурой который <span>выделит вас на фоне конкурентов</span></p>
                    </div>
                    <div className='left_box_bottom w-100 h-auto'>
                        <Link className='text-light' to='/prices'><button className='left_box_btn mb-4'>Узнать стоимость</button></Link>
                        <p className='box_bottom_text_1 m-0'>Оставьте заявку и получите бесплатную консультацию от специалиста, <br /> полный расчет стоимости разработки и бонус:</p>
                        <p className='box_bottom_text_2 '>«15 сервисов которые покажут стратегию продвижения конкурентов, <br /> всё об их выдаче в поиске и не только»</p>
                    </div>
                </div>
                <div className='Sec_1_bg'></div>
            </div>
            <div className='w-100 h-auto p-5 d-flex justify-content-center align-items-center arrow-button'>
                <i class="fa-solid fa-arrow-down arrow_icon_btn"></i>
            </div>
        </div>
    );
}

export default Section_1;