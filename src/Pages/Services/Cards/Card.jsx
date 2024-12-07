import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = ({ image, altText, businessLabel, businessTitle, businessPara, businessPara2, businessPara3, businessPara4, businessPara5, businessPara6, btText1, btText2 }) => {
  return (
    
              <div className="cards-box">
          <div className="cards-inside">
              <div className='card-image-box'>
              <img src={image} alt={altText}/></div>
              <label className='card-label'>{ businessLabel}</label>
                  <h2 className='card-title'>{businessTitle}</h2>
              <p className='card-para'> {businessPara} </p>
              <p className='card-para'> {businessPara2} </p>
              <p className='card-para'> {businessPara3} </p>
              <p className='card-para'> {businessPara4} </p>
              <p className='card-para'> {businessPara5} </p>
              <p className='card-para'> {businessPara6} </p>
              <div className='button-box'>
              <button className='primary-button'>{ btText1}</button>
              <Link to='https://api.whatsapp.com/send?phone=355699305604' target='_blank'>   <button className="secondary-button">{ btText2}</button>
</Link>
              </div>
              </div>
          
          
          </div>
      
    
    
    )
}

export default Card