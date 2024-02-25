import React from 'react'
import Sec_5_img from '../Images/c0bdc671211dd57720632ca5e3934c61 1.png'

 function Section_5() {
    return ( 
        <div className="container">
            <div className="Section_5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="Sec_5_box w-100 pe-5">
                            <p className='Sec_3_title Sec_5_title mb-5'>Исследуем  <span>бизнес</span> </p>
                            <p className='Sec_5_text'>Каждый клиент – своя история. Мы не берем шаблонные решения, а исследуем рынок конкретно под ваши цели и задачи. </p>
                            <p className='Sec_5_text'>Сделать интернет-магазин с нуля непросто. Нужен сайт с качественной разработкой дизайна, который не будет отвлекать от сути, наполнением и рабочими модулями. Кроме этого, для успешного запуска электронной торговой площадки владельцу бизнеса требуется найти поставщиков, выбрать товарные позиции, просчитать рентабельность, уладить другие организационные вопросы вне сети.</p>
                            <p className='Sec_5_text'>Создание интернет-магазина лучше делегировать на профессионалов. Мы возьмем на себя вопросы по разработке интернет-магазина под ключ. Специалисты компании предоставляют заказчику готовый продающий сайт. Он уже наполнен контентом, ориентирован на конечного потребителя и интуитивно понятен для заказчика.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="Sec_5_box w-100 d-flex justify-content-center align-items-center">
                            <img className=' Sec_5_image w-100' src={Sec_5_img} alt="Bu yerda rasm bor" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
 }
 
 export default Section_5;