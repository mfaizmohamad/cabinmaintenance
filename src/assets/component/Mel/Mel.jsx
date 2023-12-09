import React from 'react'
import './Mel.css'
import { FaCheck } from "react-icons/fa";

const Mel = () => {
  return (
    <section id='mel' className='container mel__container'>
      <h5>Defer Defect</h5>
      <h2>Mel</h2>

      <div className="mel__box">
      <article className="mel">
          <div className="mel__head">
            <h3>Avio</h3>
          </div>

          <ul className='mel__list'>
            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Screen blank / no interactive / handset unable to stow / handset stuck / unable to enter flight no : DD 180 days</p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Oven unserviceable/ no heating : DD 180 days</p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Boiler unserviceable : DD 180 days </p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Sidewall / ceiling light : MEL 33-02-02 CAT C 10 days</p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Taxi light : MEL 33-09-01 CAT C 10 days</p>
            </li>
          </ul>
        </article>

        <article className="mel">
          <div className="mel__head">
            <h3>Aim</h3>
          </div>

          <ul className='mel__list'>
            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Physician kit : MEL 25-34 CAT C 10 days</p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Extension seat belt missing / dirty : MEL 25-33-02 CAT C 10 days</p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Infant seat belt missing / dirty : MEL 25-33-01 CAT C 10 days </p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Seat unable to recline ( immovable in upright position ) : MEL 25-06-01B CAT D 120 days </p>
            </li>

            <li>
            <FaCheck className='mel__list-icon'/>
            <p>Seat auto recline ( need to secured in upright position) : MEL 25-06-01A CAT C 10 days</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Mel