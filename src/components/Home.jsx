import React from 'react';
import '../styles/Home.css';

  
function Home() {
  return (
    <main id='home'>
      <section id="landing">
        <div className="content">
          <p>The best choice</p>
          <h2>What is the best method for you</h2>
          <h5>You will learn the easiest and most practical way to learn languages</h5>
          <div className="btns">
            <div className="start">
              <a href="/"><button>get started</button></a>
            </div>
            <div className="video">
              <a href="/">
                <div className="icon">
                  <i class="fa-solid fa-play"></i>
                </div>
                <button>watch video</button>
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="img">
            <img src={require('../images/image1.jpg')} alt="mainImage" />
          </div>
        </div>
      </section>
      <section id="started">
        <div className="title">
          <p>best way</p>
          <h3>How do i get started?</h3>
          <div className="lines">
            <div className="line"></div>
            <div className="shape"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="started">
        <div className="image">
          <img src={require('../images/image3.jpg')} alt="" />
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">
              <i class="fa-solid fa-user-plus"></i>
              <h3>Create an Account</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, sapiente? Culpa nihil unde praesentium nobis sed aperiam velit aliquid fuga!</p>
            </div>

            <div className="card">
              <i class="fa-solid fa-globe"></i>
              <h3>Select language</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, sapiente? Culpa nihil unde praesentium nobis sed aperiam velit aliquid fuga!</p>
            </div>

            <div className="card">
              <i class="fa-solid fa-location"></i>
              <h3>Learn your level</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, sapiente? Culpa nihil unde praesentium nobis sed aperiam velit aliquid fuga!</p>
            </div>

            <div className="card">
              <i class="fa-solid fa-flag"></i>
              <h3>Ready to start</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, sapiente? Culpa nihil unde praesentium nobis sed aperiam velit aliquid fuga!</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="learn">
        <div className="title">
          <p>languages</p>
          <h3>Which languages can i learn?</h3>
          <div className="lines">
            <div className="line"></div>
            <div className="shape"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="learn">
          <div className="content">
            <h3>more than 30 <span>languages</span> experiences</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut quod modi excepturi dolore praesentium placeat molestiae magnam quae cumque sapiente fugit possimus assumenda vel, nesciunt nihil dicta minus adipisci! Nulla, iure. Aliquam earum, modi quam dolorem velit tenetur ex dignissimos inventore ad eum maxime ducimus. Nobis, magnam consectetur modi ea possimus eligendi eveniet earum ratione molestias fugit, maiores unde rem aut repudiandae! Deleniti unde itaque enim alias, consequatur maxime.</p>
            <div className="btns">
              <div className="start">
                <a href="/"><button>get started</button></a>
              </div>
              <div className="video">
                <a href="/">
                  <div className="icon">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <button>watch video</button>
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={require('../images/image4.jpg')} alt="" />
          </div>
        </div>
      </section>
      <section id="price">
        <div className="title">
          <p>pricing</p>
          <h3>How much do i have to pay?</h3>
          <p className='extra'>You can choose the most suitable membership type for you and start right away.</p>
          <div className="lines">
            <div className="line"></div>
            <div className="shape"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="cards">
          <div className="card standard">
            <h3>Standard user</h3>
            <h4><span><i class="fa-solid fa-dollar-sign"></i>14,90</span>/month</h4>
            <div className="line"></div>
            <ul>
              <li><i class="fa-regular fa-circle-check"></i> 5 languages in a month</li>
              <li><i class="fa-regular fa-circle-check"></i> 10 exercises in a day</li>
              <li><i class="fa-regular fa-circle-check"></i> 15 live speaking</li>
              <li><i class="fa-regular fa-circle-check"></i> 1 level test</li>
              <li><i class="fa-regular fa-circle-xmark"></i> Achievement award</li>
              <li><i class="fa-regular fa-circle-xmark"></i> special education set</li>
            </ul>
            <a href="/"><button>Get started</button></a>
          </div>

          <div className="card premium">
            <h3>Premium user</h3>
            <h4><span><i class="fa-solid fa-dollar-sign"></i>34,90</span>/month</h4>
            <div className="line"></div>
            <ul>
              <li><i class="fa-regular fa-circle-check"></i> 5 languages in a month</li>
              <li><i class="fa-regular fa-circle-check"></i> 10 exercises in a day</li>
              <li><i class="fa-regular fa-circle-check"></i> 15 live speaking</li>
              <li><i class="fa-regular fa-circle-check"></i> 1 level test</li>
              <li><i class="fa-regular fa-circle-check"></i> Achievement award</li>
              <li><i class="fa-regular fa-circle-xmark"></i> special education set</li>
            </ul>
            <a href="/"><button>Get started</button></a>
          </div>

          <div className="card diamond">
            <h3>Diamond user</h3>
            <h4><span><i class="fa-solid fa-dollar-sign"></i>54,90</span>/month</h4>
            <div className="line"></div>
            <ul>
              <li><i class="fa-regular fa-circle-check"></i> 5 languages in a month</li>
              <li><i class="fa-regular fa-circle-check"></i> 10 exercises in a day</li>
              <li><i class="fa-regular fa-circle-check"></i> 15 live speaking</li>
              <li><i class="fa-regular fa-circle-check"></i> 1 level test</li>
              <li><i class="fa-regular fa-circle-check"></i> Achievement award</li>
              <li><i class="fa-regular fa-circle-check"></i> special education set</li>
            </ul>
            <a href="/"><button>Get started</button></a>
          </div>
        </div>
      </section>
      {/* <section id="social">
        <div className="title">
          <p>social</p>
          <h3>What did our users say about us?</h3>
          <div className="lines">
            <div className="line"></div>
            <div className="shape"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="testimonial">
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src={require('../images/image5.jpg')} alt="" />
              </div>
              <div className="content">
                <i class="fa-solid fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos ut voluptatum quasi sequi illum repudiandae asperiores dicta. Quo at impedit explicabo labore sapiente ut dolore eligendi animi voluptatem officia rerum esse id perspiciatis, quia accusantium atque aspernatur magni alias, adipisci doloribus molestias. Libero, a voluptatem quia doloremque facilis asperiores?</p>
                <h3>Wilson nshizi</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={require('../images/image5.jpg')} alt="" />
              </div>
              <div className="content">
                <i class="fa-solid fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos ut voluptatum quasi sequi illum repudiandae asperiores dicta. Quo at impedit explicabo labore sapiente ut dolore eligendi animi voluptatem officia rerum esse id perspiciatis, quia accusantium atque aspernatur magni alias, adipisci doloribus molestias. Libero, a voluptatem quia doloremque facilis asperiores?</p>
                <h3>Wilson nshizi</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={require('../images/image5.jpg')} alt="" />
              </div>
              <div className="content">
                <i class="fa-solid fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos ut voluptatum quasi sequi illum repudiandae asperiores dicta. Quo at impedit explicabo labore sapiente ut dolore eligendi animi voluptatem officia rerum esse id perspiciatis, quia accusantium atque aspernatur magni alias, adipisci doloribus molestias. Libero, a voluptatem quia doloremque facilis asperiores?</p>
                <h3>Wilson nshizi</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={require('../images/image5.jpg')} alt="" />
              </div>
              <div className="content">
                <i class="fa-solid fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos ut voluptatum quasi sequi illum repudiandae asperiores dicta. Quo at impedit explicabo labore sapiente ut dolore eligendi animi voluptatem officia rerum esse id perspiciatis, quia accusantium atque aspernatur magni alias, adipisci doloribus molestias. Libero, a voluptatem quia doloremque facilis asperiores?</p>
                <h3>Wilson nshizi</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={require('../images/image5.jpg')} alt="" />
              </div>
              <div className="content">
                <i class="fa-solid fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos ut voluptatum quasi sequi illum repudiandae asperiores dicta. Quo at impedit explicabo labore sapiente ut dolore eligendi animi voluptatem officia rerum esse id perspiciatis, quia accusantium atque aspernatur magni alias, adipisci doloribus molestias. Libero, a voluptatem quia doloremque facilis asperiores?</p>
                <h3>Wilson nshizi</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default Home
