'use client'
import React, { useRef, useState } from 'react'
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { FaStar } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Products from '../products/Products';


const DetailProductContent = ({ data, singleProduct }) => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    let bestProduct = data.slice(0, 4)?.map(el => (
        <SwiperSlide className='aside-card'>
            <div className='aside-card__img'>
                <Link href={`/product/${el.id}`}>
                    <Image src={el.image} alt={el.title} width={100} height={100} />
                </Link>
            </div>
            <div>
                {[...Array(5)].map((item, i) => (
                    <FaStar key={i} className={i < Math.round(el.rating.rate) ? 'rate' : 'unrate'} />
                ))}
            </div>
            <article>
                <h4>${Math.round(el.price)}</h4>
                <del>${Math.round(el.price * 1.4)}</del>
            </article>
        </SwiperSlide>
    ))

    let product = (
        <div className="detail__product">
            <div className="detail__product-left">
                <div className="detail__product-left__img">
                    <Image src={singleProduct?.image} alt={singleProduct?.title} width={200} height={200} />
                </div>
                <div className="detail__product-left__secondaryImgs">
                    <div><Image src={singleProduct?.image} alt={singleProduct?.title} width={200} height={200} /></div>
                    <div><Image src={singleProduct?.image} alt={singleProduct?.title} width={200} height={200} /></div>
                    <div><Image src={singleProduct?.image} alt={singleProduct?.title} width={200} height={200} /></div>
                    <div><Image src={singleProduct?.image} alt={singleProduct?.title} width={200} height={200} /></div>
                </div>
            </div>
            <div className="detail__product-right">
                <h3>{singleProduct?.title}</h3>
                <div className="detail__product-right__rating">
                    <div className="detail__product-right__rating-stars">
                        {[...Array(5)].map((item, i) => (
                            <FaStar key={i} className={i < Math.round(singleProduct?.rating?.rate) ? 'rate' : 'unrate'} />
                        ))}
                    </div>
                    <p>{singleProduct?.rating?.count} reviews</p>
                    <button>Submit a review</button>
                </div>
                <div className="detail__product-right__prices">
                    <h4>${Math.round(singleProduct?.price)}</h4> <p><del>${Math.round(singleProduct?.price * 1.4)}</del>24% Off</p>
                </div>
                <div className="detail__product-right__benefits">
                    <p>Availability: <span>In stock</span></p>
                    <p>Category: <span>{singleProduct?.category}</span></p>
                    <p>Free shipping</p>
                </div>
                <div className="detail__product-right__colors">
                    <p>Select Color:</p>
                    <div>
                        <Radio
                            {...controlProps('a')}
                            sx={{
                                color: 'blue',
                                '&.Mui-checked': {
                                    color: 'blue',
                                },
                            }}
                        />
                        <Radio
                            {...controlProps('e')}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                        <Radio
                            {...controlProps('d')}
                            sx={{
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'black',
                                },
                            }}
                        />
                        <Radio
                            {...controlProps('c')}
                            sx={{
                                color: 'yellow',
                                '&.Mui-checked': {
                                    color: 'yellow',
                                },
                            }}

                        />

                    </div>
                </div>
                <div className="detail__product-right__size">
                    <p>Size</p>
                    <select>
                        <option value="">XS</option>
                        <option value="">XL</option>
                        <option value="">SM</option>
                    </select>
                </div>
                <div className="detail__product-right__actions">
                    <div>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                    </div>
                    <article>
                        <button className="detail__product-right__actions-cart">
                            <FiShoppingCart />
                            Add To Cart
                        </button>
                        <button className="detail__product-right__actions-wishlist">
                            <FaRegHeart />
                        </button>
                    </article>
                </div>
                <div className="detail__product-right__socials">
                    <Link href={'https://www.facebook.com/'} target='_blank'><FaFacebookF /> Share on Facebook</Link>
                    <Link href={'https://www.twitter.com/'} target='_blank'><FaTwitter /> Share on Twitter</Link>
                </div>
            </div>
        </div>
    )

    return (
        <section className='detail-section'>
            <div className="container">
                <div className="detail-section__content">
                    <div className="detail-section__content-left">
                        {product}
                        <div className="detail__text">
                            <div className='detail__text-headings'>
                                <p>Product Infomation</p>
                                <p>Reviews</p>
                                <p>Another tab</p>
                            </div>
                            <div className='detail__text-line'></div>
                            <div className='detail__text-par'>
                                <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                                <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                                <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            </div>
                        </div>
                    </div>
                    <aside>
                        <h3>BEST SELLER</h3>
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="aside-cards">
                            {bestProduct}
                        </Swiper>
                    </aside>
                </div>
                <h2>RELATED PRODUCTS</h2>
                <Products data={data.slice(0, 4)} />
            </div>
        </section>
    )
}

export default DetailProductContent