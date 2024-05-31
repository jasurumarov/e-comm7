import React from 'react'

const loading = () => {
  return (
    <>
      <section className='loading-section'>
        <div className="sup-header"></div>
        <div className="container">
          <div className="detail-section__content"> 
            <div className="detail-section__content-left">
              <div className="detail__product">
                <div className="detail__product-left">
                  <div className="detail__product-left__img"></div>
                  <div className="detail__product-left__secondaryImgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="detail__product-right">
                  <h3></h3>
                  <div className="detail__product-right__rating"></div>
                  <div className="detail__product-right__prices"></div>
                  <div className="detail__product-right__benefits"></div>
                  <div className="detail__product-right__colors"></div>
                  <div className="detail__product-right__size"></div>
                  <div className="detail__product-right__actions"></div>
                  <div className="detail__product-right__socials"></div>
                </div>
              </div>
            </div>
            <aside>
              <h3></h3>
              <div className="aside-cards">
                <div className='aside-card'>
                  <div className='aside-card__img'></div>
                  <div>
                    <article></article>
                  </div>

                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default loading