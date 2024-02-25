import React from 'react'

function Contacts() {
    return ( 
        <div className="container">
            <p className='Sec_3_title mt-5'>Контактная <span>информация</span> </p>
            <div className="Contacts w-100 h-auto">
                <div className="Contacts_box w-100 h-auto">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="Con_box_left">
                                <div className="d-flex">
                                    <a href="#"><p className='Con-text'>+ 7 (495) 555 65 65</p></a>
                                    <a href="#"><i class="fa-brands fa-telegram Con-icons1 ms-5 mt-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-whatsapp Con-icons2 ms-3 mt-1"></i></a>
                                </div>
                                <a href="#"><p className='Con-text'>info@millenium.ru</p></a>
                                <p className='Con-text'>Москва, ул. Профсоюзная 76, <br /> БЦ «ГАЛЕРЕЯ 76» 2 этаж</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="Con_box_right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Contacts;