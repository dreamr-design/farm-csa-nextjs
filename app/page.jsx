import site from '@/site.config';

export const metadata = {
  title: "Bramblecut Farm | Organic CSA shares, farm stand and farm dinners",
  description: "Bramblecut Farm grows certified organic vegetables on 22 acres near Viroqua, Wisconsin. Join the CSA for twenty weekly crates, stop by the farm stand, or eat at a farm dinner.",
};

export default function Page() {
  return (
<main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div>
          <p className="kicker">Certified organic · Viroqua, Wisconsin</p>
          <h1 id="hero-title">Twenty weeks of the farm, <em>packed in a crate.</em></h1>
          <p className="lede">Bramblecut Farm grows 140 kinds of vegetables on 22 acres of Driftless hillside. Join the CSA and a crate of whatever came in that week lands at your pickup every Thursday, June to October.</p>
          <div className="btn-row">
            <a className="btn" href="/pricing/">Reserve a 2027 share</a>{' '}
            <a className="btn btn--ghost" href="#box">See this week's crate</a>
          </div>
          <ul className="hero__facts">
            <li>310 member households</li>
            <li>Pickups in six towns</li>
            <li>Sliding scale shares</li>
          </ul>
        </div>
        <div className="hero__art">
          <div className="packet-wrap">
            <article className="packet" aria-label="The farm share, drawn as a seed packet">
              <div className="packet__top"><span className="reg" aria-hidden="true"></span><span>Bramblecut Farm · Lot 2027</span><span className="reg" aria-hidden="true"></span></div>
              <div className="packet__art"><img src="/assets/img/veg/tomato.svg" alt="Screenprinted heirloom tomato in red and green ink" width="240" height="240" /></div>
              <p className="packet__name">Farm Share</p>
              <p className="packet__variety">Mixed vegetable, open-pollinated, grown here</p>
              <dl className="packet__back">
                <dt>Sow</dt><dd>Sign up by March 15</dd>
                <dt>Harvest</dt><dd>Every Thursday, June 10 to October 21</dd>
                <dt>Yield</dt><dd>20 crates, 6 to 12 items each</dd>
                <dt>Grows best</dt><dd>In a kitchen, with company</dd>
              </dl>
              <div className="packet__ink" aria-hidden="true"><i></i><i></i><i></i></div>
            </article>
          </div>
          <p className="stamp stamp--round">Packed<strong>Thurs.</strong>Week 17</p>
        </div>
      </div>
    </section>

    <section className="section band" id="box" aria-labelledby="box-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Week 17 · Thursday, October 1</p>
            <h2 id="box-title">What's in the crate this week</h2>
          </div>
          <p>Every Wednesday we walk the rows and decide. This is what we packed for tomorrow's pickups. Flip between share sizes to see what each one takes home.</p>
        </div>
        <div className="crate-layout">
          <div>
            <div className="crate-controls">
              <div className="toggle" role="group" aria-label="Share size" data-toggle="share">
                <button type="button" data-value="half" aria-pressed="false">Half share</button>{' '}
                <button type="button" data-value="full" aria-pressed="true">Full share</button>
              </div>
              <p className="stamp stamp--leaf" aria-live="polite" data-share-half="Half: 7 items, about 9 lb" data-share-full="Full: 9 items, about 16 lb">Full: 9 items, about 16 lb</p>
            </div>
            <div className="crate">
              <ul className="crate__grid">
                <li className="cell"><img src="/assets/img/veg/squash.svg" alt="Striped delicata squash" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Delicata squash</span><span className="cell__qty" data-share-half="2 squash" data-share-full="3 squash">3 squash</span></span></li>
                <li className="cell"><img src="/assets/img/veg/carrot.svg" alt="Carrot with its green tops" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Nantes carrots</span><span className="cell__qty" data-share-half="1 lb bunch" data-share-full="2 lb bunch">2 lb bunch</span></span></li>
                <li className="cell"><img src="/assets/img/veg/beet.svg" alt="Beet with two leaves" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Chioggia beets</span><span className="cell__qty" data-share-half="1 lb" data-share-full="2 lb">2 lb</span></span></li>
                <li className="cell"><img src="/assets/img/veg/kale.svg" alt="Two long lacinato kale leaves" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Lacinato kale</span><span className="cell__qty" data-share-half="1 bunch" data-share-full="2 bunches">2 bunches</span></span></li>
                <li className="cell"><img src="/assets/img/veg/tomato.svg" alt="Heirloom tomato" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Tunnel tomatoes, the last</span><span className="cell__qty" data-share-half="1 lb" data-share-full="2 lb">2 lb</span></span></li>
                <li className="cell" data-share-out="half"><img src="/assets/img/veg/pepper.svg" alt="Red bell pepper" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Carmen sweet peppers</span><span className="cell__qty">4 peppers</span></span><span className="stamp cell__out">Full share only</span></li>
                <li className="cell"><img src="/assets/img/veg/garlic.svg" alt="Head of garlic" width="96" height="96" /><span className="cell__tag"><span className="cell__name">German White garlic</span><span className="cell__qty" data-share-half="2 heads" data-share-full="3 heads">3 heads</span></span></li>
                <li className="cell"><img src="/assets/img/veg/radish.svg" alt="Round radish with leaves" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Fall radishes</span><span className="cell__qty">1 bunch</span></span></li>
                <li className="cell" data-share-out="half"><img src="/assets/img/veg/potato.svg" alt="Red-skinned potato" width="96" height="96" /><span className="cell__tag"><span className="cell__name">Red Norland potatoes</span><span className="cell__qty">3 lb</span></span><span className="stamp cell__out">Full share only</span></li>
              </ul>
              <p className="crate__end" aria-hidden="true">Bramblecut Farm · Viroqua Wis · Wk 17</p>
            </div>
          </div>
          <aside className="note" aria-labelledby="note-title">
            <h3 id="note-title">From the wash shed</h3>
            <p>Frost came down the hollow Thursday night and took the last field peppers and all the basil. The high tunnel bought us one more week of tomatoes, so eat them on toast while you can.</p>
            <p>From here the crate gets heavier and earthier. A frost turns kale starch to sugar, so this is the sweetest bunch of the year.</p>
            <ul>
              <li>Delicata keeps two weeks on the counter. No fridge.</li>
              <li>Twist the beet greens off tonight and cook them like chard.</li>
              <li>Recipe card in the crate: roasted delicata rings with hot honey.</li>
            </ul>
            <p className="sig">Mae, with dirt under the nails</p>
          </aside>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="cal-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">The 2026 picking calendar</p>
            <h2 id="cal-title">When each crop comes in</h2>
          </div>
          <p>The Driftless season is short and loud. Strawberries and peas in June, a wall of tomatoes in August, roots and squash to close it out. The line marks where we are today.</p>
        </div>
        <div className="cal">
          <div className="cal__months" aria-hidden="true"><span>Crop</span><ol><li>Jun</li><li>Jul</li><li>Aug</li><li>Sep</li><li>Oct</li></ol></div>
          <ul>
            <li className="cal__row"><span className="cal__crop">Strawberries</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "1", "--e": "3" }}></span><span className="sr-only">weeks 1 to 3</span></span></li>
            <li className="cal__row"><span className="cal__crop">Snap peas</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "2", "--e": "6" }}></span><span className="sr-only">weeks 2 to 6</span></span></li>
            <li className="cal__row"><span className="cal__crop">Salad &amp; lettuce</span><span className="cal__track"><span className="bar" style={{ "--s": "1", "--e": "7" }}></span><span className="bar" style={{ "--s": "14", "--e": "20" }}></span><span className="sr-only">weeks 1 to 7 and 14 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Radishes</span><span className="cal__track"><span className="bar" style={{ "--s": "1", "--e": "5" }}></span><span className="bar" style={{ "--s": "16", "--e": "20" }}></span><span className="sr-only">weeks 1 to 5 and 16 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Kale</span><span className="cal__track"><span className="bar" style={{ "--s": "1", "--e": "20" }}></span><span className="sr-only">all twenty weeks</span></span></li>
            <li className="cal__row"><span className="cal__crop">Zucchini</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "5", "--e": "12" }}></span><span className="sr-only">weeks 5 to 12</span></span></li>
            <li className="cal__row"><span className="cal__crop">Carrots</span><span className="cal__track"><span className="bar" style={{ "--s": "6", "--e": "20" }}></span><span className="sr-only">weeks 6 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Beets</span><span className="cal__track"><span className="bar" style={{ "--s": "6", "--e": "11" }}></span><span className="bar" style={{ "--s": "14", "--e": "20" }}></span><span className="sr-only">weeks 6 to 11 and 14 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Tomatoes</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "8", "--e": "17" }}></span><span className="sr-only">weeks 8 to 17</span></span></li>
            <li className="cal__row"><span className="cal__crop">Sweet corn</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "9", "--e": "13" }}></span><span className="sr-only">weeks 9 to 13</span></span></li>
            <li className="cal__row"><span className="cal__crop">Garlic</span><span className="cal__track"><span className="bar" style={{ "--s": "9", "--e": "20" }}></span><span className="sr-only">weeks 9 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Potatoes</span><span className="cal__track"><span className="bar" style={{ "--s": "9", "--e": "20" }}></span><span className="sr-only">weeks 9 to 20</span></span></li>
            <li className="cal__row"><span className="cal__crop">Sweet peppers</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "10", "--e": "17" }}></span><span className="sr-only">weeks 10 to 17</span></span></li>
            <li className="cal__row"><span className="cal__crop">Winter squash</span><span className="cal__track"><span className="bar bar--r" style={{ "--s": "14", "--e": "20" }}></span><span className="sr-only">weeks 14 to 20</span></span></li>
          </ul>
          <p className="cal__now" aria-hidden="true"><span>Today · Wk 17</span></p>
          <p className="cal__legend"><span><i className="r"></i>Fruits, pods and ears</span><span><i></i>Leaves, roots and bulbs</span></p>
        </div>
      </div>
    </section>

    <section className="section band" aria-labelledby="ways-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Three ways in</p>
            <h2 id="ways-title">Eat from the farm your way</h2>
          </div>
          <p>Commit to the season, stop by when you are passing, or come sit at the long table. Each one keeps the same 22 acres going.</p>
        </div>
        <div className="ways">
          <div className="packet-wrap">
            <article className="packet">
              <div className="packet__top"><span>Lot 01</span><span className="reg" aria-hidden="true"></span></div>
              <div className="packet__art"><img src="/assets/img/veg/carrot.svg" alt="Screenprinted carrot" width="200" height="200" /></div>
              <h3 className="packet__name">The CSA Share</h3>
              <p className="packet__variety">Twenty Thursdays, half or full</p>
              <p>Pay before the season starts, and we plant for you. A crate every week from June to October, with a farmer's note and a recipe card tucked in.</p>
              <dl className="packet__back"><dt>Pickup</dt><dd>Thursdays 3 to 7 pm, six towns</dd><dt>From</dt><dd>$460 a season</dd></dl>
              <a className="btn btn--block" href="/pricing/">Compare shares</a>
            </article>
          </div>
          <div className="packet-wrap">
            <article className="packet">
              <div className="packet__top"><span>Lot 02</span><span className="reg" aria-hidden="true"></span></div>
              <div className="packet__art"><img src="/assets/img/veg/radish.svg" alt="Screenprinted radish" width="200" height="200" /></div>
              <h3 className="packet__name">The Farm Stand</h3>
              <p className="packet__variety">Red barn, bottom of the lane</p>
              <p>Everything that did not fit in the crates, eggs from the Hendersons up the road, and Mae's garlic pickles. Cash, card, or SNAP/EBT.</p>
              <dl className="packet__back"><dt>Open</dt><dd>Fri to Sun, 9 am to 6 pm</dd><dt>Honor box</dt><dd>Always. Pay in the coffee can.</dd></dl>
              <a className="btn btn--block btn--ghost" href="/about/#visit">Find the stand</a>
            </article>
          </div>
          <div className="packet-wrap">
            <article className="packet">
              <div className="packet__top"><span>Lot 03</span><span className="reg" aria-hidden="true"></span></div>
              <div className="packet__art"><img src="/assets/img/veg/squash.svg" alt="Screenprinted delicata squash" width="200" height="200" /></div>
              <h3 className="packet__name">Farm Dinners</h3>
              <p className="packet__variety">One long table in the field</p>
              <p>Four Saturdays a year, Dev cooks what came out of the ground that morning for forty people at a table set between the squash rows.</p>
              <dl className="packet__back"><dt>Seats</dt><dd>40 per dinner</dd><dt>Tickets</dt><dd>$95, cider and wine included</dd></dl>
              <a className="btn btn--block btn--leaf" href="#dinners">See the dates</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="section dark dinners" id="dinners" aria-labelledby="dinner-title">
      <div className="wrap">
        <div>
          <p className="kicker">Supper in the squash field</p>
          <h2 id="dinner-title">Dinner is served <em>between the rows.</em></h2>
          <p className="lede">Forty seats, one table, lanterns strung from the tunnel frame. Dev Anand plans a five-course menu around a single crop at its peak, and a farmer stands up between courses to tell you where it grew.</p>
          <p>Dinners start at 5:30 with a field walk. Bring a sweater; the hollow cools off fast once the sun drops behind the ridge.</p>
          <a className="btn" href="#list">Get on the dinner list</a>
        </div>
        <div className="tickets">
          <article className="ticket ticket--sold">
            <p className="ticket__date"><span>Aug</span><strong>22</strong><span>2026</span></p>
            <div className="ticket__body"><h3>The Tomato Supper</h3><p>Twelve heirlooms, five courses. Sold out in four days.</p></div>
          </article>
          <article className="ticket">
            <p className="ticket__date"><span>Oct</span><strong>10</strong><span>2026</span></p>
            <div className="ticket__body"><h3>The Harvest Supper</h3><p>Squash, smoke and cider pressed that afternoon. 6 of 40 seats left, $95.</p></div>
          </article>
          <article className="ticket">
            <p className="ticket__date"><span>Jun</span><strong>19</strong><span>2027</span></p>
            <div className="ticket__body"><h3>The Strawberry Supper</h3><p>Opens the 2027 season. Tickets go on sale February 1.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="notes-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Notes from the pickup line</p>
            <h2 id="notes-title">Members, in their own words</h2>
          </div>
          <p>Nine out of ten members sign up again. We asked a few of them why, and they wrote it on the back of a crate tag.</p>
        </div>
        <div className="tags">
          <figure className="tag">
            <blockquote><p>I did not know I liked kohlrabi. I did not know what kohlrabi was. Eight years in, I plan my whole week around Thursday.</p></blockquote>
            <figcaption><strong>Priya N.</strong>Full share since 2018 · La Crosse pickup</figcaption>
          </figure>
          <figure className="tag">
            <blockquote><p>The week the hail came, Mae wrote to us before we had even heard about it. That is what sharing the risk looks like. We have never missed a season.</p></blockquote>
            <figcaption><strong>The Oyelaran family</strong>Kitchen share since 2016 · Viroqua pickup</figcaption>
          </figure>
          <figure className="tag">
            <blockquote><p>My kids fight over who gets to carry the crate to the car. The radishes never survive the drive home.</p></blockquote>
            <figcaption><strong>Dana and Luis R.</strong>Half share since 2022 · Westby pickup</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="section band closing" id="list" aria-labelledby="list-title">
      <div className="wrap">
        <div className="closing__card">
          <p className="stamp" aria-hidden="true">Opens Feb. 1</p>
          <div>
            <p className="kicker">The 2027 season</p>
            <h2 id="list-title">Get on the list before the seeds go in.</h2>
            <p>Returning members pick first, and most years we are full by March. Leave your email and we will write once, the morning sign-ups open. That is the whole list.</p>
          </div>
          <form className="signup" data-slapform-success="You're on the list. Watch your inbox on February 1." action={site.slapform_form_id ? `https://api.slapform.com/${site.slapform_form_id}` : undefined} method="POST" data-slapform="">
<input className="slap-honey" type="text" name="slap_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />{' '}
            <label htmlFor="email">Your email</label>
            <div className="signup__row">
              <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />{' '}
              <button className="btn" type="submit">Save my spot</button>
            </div>
            <p className="signup__msg" role="status"></p>
          </form>
        </div>
      </div>
      <img className="closing__hills" src="/assets/img/hills.svg" alt="Screenprint of the farm's hills at sunrise, with the red barn and striped crop rows" width="640" height="300" />
    </section>
  </main>
  );
}
