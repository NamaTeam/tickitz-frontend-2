import React from 'react';
import { Link } from "react-router-dom";
import './styles/style.css';
export const MovieDetail = () => {

    return (
        <div class="container-fluid bg-grey">
            <nav className="navbar-top fixed-top">
                <div className="navbar-top-left">
                    <Link to='#' className="brand">
                        <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
                    </Link>
                    <ul className="nav">
                        <li className="item">
                            <Link to='#' className="link">Movies</Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">Cinemas</Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">Buy Ticket</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-top-right">
                    <Link to='#' className="dropdown-toggle right">Location</Link>
                    <Link to='#' className="navbar-search right">
                        <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                    </Link>
                    <Link to='#' className="navbar-photo-profile right">
                        <img src={process.env.PUBLIC_URL + '/svg/avatar-a.svg'} alt="profile" />
                    </Link>
                </div>
            </nav>

            <section className="row top-details">
                <div className="col-md-3 col-sm-6 movie-poster">
                    <img src={process.env.PUBLIC_URL + '/logo/movie-a.png'} alt="poster" />
                </div>
                <div className="col-md-9 col-sm-6 description-box">
                    <h4 className="title">Spider-Man: Homecoming</h4>
                    <p className="genre">Adventure, Action, Sci-Fi</p>
                    <div className="row information">
                        <div className="col-md-6">
                            <div className="first-column">
                                <div className="date">
                                    <p className="info-title">Release date</p>
                                    <p className="info">June 28</p>
                                </div>
                                <div className="duration">
                                    <p className="info-title">Duration</p>
                                    <p className="info">2 hours 13 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="second-column">
                                <div className="directed">
                                    <p className="info-title">Directed by</p>
                                    <p className="info">Jon Watss</p>
                                </div>
                                <div className="cast">
                                    <p className="info-title">Casts</p>
                                    <p className="info">Tom Holland, Michael Keaton, Robert Downey Jr., ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="synopsis">
                        <h5>Synopsis</h5>
                        <p>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.</p>
                    </div>
                </div>
            </section>

            {/* <section className="middle-details">
                <h5>Showtimes And Tickets</h5>
                <form>
                    <input id="today" type="date" />
                    <select name="location" id="location">
                        <option value="Purwokerto">Purwokerto</option>
                    </select>
                </form>
            </section> */}

            <section className="row bottom-details">
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu" />
                        </div>
                        <div className="cinema-logo">
                            <h5>ebv.id</h5>
                            <p>Whatever street No.12, South Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                        </div>
                        <div className="cinema-logo">
                            <h5>CineOne21</h5>
                            <p>Downcore street No. 21, East Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix" />
                        </div>
                        <div className="cinema-logo">
                            <h5>hiflix Cinema</h5>
                            <p>Colonel street No. 2, East Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu" />
                        </div>
                        <div className="cinema-logo">
                            <h5>ebv.id</h5>
                            <p>Whatever street No.12, South Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                        </div>
                        <div className="cinema-logo">
                            <h5>CineOne21</h5>
                            <p>Downcore street No. 21, East Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 cart">
                    <div className="top-cart">
                        <div className="cinema-logo">
                            <img src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix" />
                        </div>
                        <div className="cinema-logo">
                            <h5>hiflix Cinema</h5>
                            <p>Colonel street No. 2, East Purwokerto</p>
                        </div>
                    </div>
                    <div className="middle-cart">
                        <div className="schedule-time">
                            <ul>
                                <li>08:30am</li>
                                <li>10:30pm</li>
                                <li>12:00pm</li>
                                <li>02:00pm</li>
                                <li>04:30pm</li>
                                <li>07:00pm</li>
                                <li>08:30pm</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <h6 className="each-seat">$10.00/seat</h6>
                        </div>
                        <div className="booking-movie">
                            <button type="submit" className="btn book-now">Book now</button>
                            <Link to="#" className="add-cart">Add to cart</Link>
                        </div>
                    </div>
                </div>
                <h4><span>view more</span></h4>
            </section>

            <footer>
                <div className="row footer-info">
                    <div className="first-div col-md-3 col-sm-12">
                        <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="" />
                        <p>Stop waiting in line. Buy tickets <br />
                          conveniently, watch movies quietly</p>
                    </div>
                    <div className="second-div col-md-3 col-sm-12">
                        <h6>Explore</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <Link to='#' className="link">Cinemas</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">Movies List</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">My Ticket</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">Notification</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="third-div col-md-3 col-sm-12">
                        <h6>Our Sponsor</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <Link to='#' className="link">
                                    <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu id cinema" />
                                </Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">
                                    <img id="cineone" src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone cinema" />
                                </Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">
                                    <img id="hiflix" src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix cinema" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="fourth-div col-md-3 col-sm-12">
                        <h6>Follow us</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/facebook.svg'} alt="facebook icon" />
                                <Link to='#' className="link">Tickitz Cinema id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/instagram.svg'} alt="instagram icon" />
                                <Link to='#' className="link">tickitz.id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/twitter.svg'} alt="twitter icon" />
                                <Link to='#' className="link">tickitz.id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/youtube.svg'} alt="youtube icon" />
                                <Link to='#' className="link">Tickitz Cinema id</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    © 2021 Tickitz. All Rights Reserved
                </div>
            </footer>
        </div>
    )
}

