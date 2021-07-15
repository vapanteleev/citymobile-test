import React from "react";
import './Table.css'

export default (props) => (
  <div className="scroll-table">
  <table >
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "mark")}>
          Марка и модель {props.sortField === "mark" ? <small>{props.sort}</small> : null}
        </th>
        <th >
         Стандарт{" "}
          
        </th>
        <th >
          Комфорт{" "}
          
        </th>
        <th >
          Комфорт +{" "}
          
        </th>
        <th >
          Минивен{" "}
          
        </th>
        <th >
          Бизнес{" "}
          
        </th>
      </tr>
      </thead>
      </table >
      <div className='scroll-table-body'>
      <table>
    <tbody >
      {props.data.map((item,index) => (
        <tr 
          key={index}
                    onClick={props.onRowSelect.bind(null, item)}

        >
           
          <td >{item.mark + ' ' + item.model}</td>
          <td>{item.tariffs["Стандарт"] ? item.tariffs["Стандарт"].year : '-'}</td>
          <td>{item.tariffs["Комфорт"] ? item.tariffs["Комфорт"].year : '-'}</td>
          <td>{item.tariffs["Комфорт+"] ? item.tariffs["Комфорт+"].year : '-'}</td>
          <td>{item.tariffs["Минивен"] ? item.tariffs["Минивен"].year : '-'}</td>
          <td>{item.tariffs["Бизнес"] ? item.tariffs["Бизнес"].year : '-'}</td>



        

        
          
        </tr>
      ))}
    </tbody>
        </table>
        
    </div>
    </div>
);
