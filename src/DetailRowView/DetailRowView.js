import React from "react";

export default ({ car }) => (
  <div className='detail'>
    <p>
      Выбран автомобиль: <b>{car.mark + " " + car.model}</b>
      
    </p>
     <p>
      Тариф Стандарт: <b>{car.tariffs["Стандарт"] ? car.mark + " " + car.model+' '+car.tariffs["Стандарт"].year + ' года выпуска' : 'Автомобили данной марки не распространяются на данный тариф'}</b>
      
    </p>
    <p>
      Тариф Комфорт: <b>{car.tariffs["Комфорт"] ? car.mark + " " + car.model+' '+car.tariffs["Комфорт"].year+ ' года выпуска' : 'Автомобили данной марки не распространяются на данный тариф'}</b>
      
    </p>
    <p>
      Тариф Комфорт +:  <b>{car.tariffs["Комфорт+"] ? car.mark + " " + car.model+' '+car.tariffs["Комфорт+"].year + ' года выпуска': 'Автомобили данной марки не распространяются на данный тариф'}</b>
      
    </p>
    <p>
      Тариф Минивен: <b>{car.tariffs["Минивен"] ? car.mark + " " + car.model+' '+car.tariffs["Минивен"].year+ ' года выпуска' : 'Автомобили данной марки не распространяются на данный тариф'}</b>
      
    </p>
    <p>
      Тариф Бизнес: <b>{car.tariffs["Бизнес"] ? car.mark + " " + car.model+' '+car.tariffs["Бизнес"].year+ ' года выпуска' : 'Автомобили данной марки не распространяются на данный тариф'}</b>
      
    </p>
    

    
  </div>
);
