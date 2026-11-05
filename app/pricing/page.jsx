import site from '@/site.config';

export const metadata = {
  title: "Shares and pricing | Bramblecut Farm CSA",
  description: "Compare Bramblecut Farm CSA shares for 2027: the Stand Card, Half, Full and Kitchen shares, with pay-in-4 plans, sliding-scale shares, SNAP at the stand and an FAQ.",
};

export default function Page() {
  return (
<main id="main">
    <section className="page-hero" aria-labelledby="page-title">
      <div className="wrap">
        <div>
          <p className="kicker">The 2027 season · 20 Thursdays</p>
          <h1 id="page-title">Pick a share size. We plant the rest.</h1>
          <p className="lede">Every share is paid before the season, so we can buy seed in January and plant for the exact number of kitchens we feed. Returning members pick first on February 1.</p>
        </div>
        <p className="stamp stamp--round">Season<strong>Jun 10</strong>to Oct. 21</p>
      </div>
    </section>

    <section className="section band" aria-labelledby="plans-title">
      <div className="wrap">
        <h2 id="plans-title" className="sr-only">Shares for 2027</h2>
        <div className="bill">
          <div className="toggle" role="group" aria-label="How to pay" data-toggle="pay">
            <button type="button" data-value="full" aria-pressed="true">Pay in full</button>{' '}
            <button type="button" data-value="four" aria-pressed="false">Pay in 4</button>
          </div>
          <p>Pay in 4 splits the price over February, March, April and May, plus $3 a payment for the paperwork.</p>
        </div>
        <div className="plans">
          <div className="packet-wrap">
            <article className="packet" aria-labelledby="p1">
              <div className="packet__top"><span>Lot 01</span><span className="reg" aria-hidden="true"></span></div>
              <h3 className="packet__name" id="p1">Stand Card</h3>
              <p className="plan__for">For folks who would rather choose at the stand.</p>
              <p className="plan__price"><span data-pay-full="$250" data-pay-four="$65.50">$250</span> <small data-pay-full="a season" data-pay-four="x 4 payments">a season</small></p>
              <p className="plan__per" data-pay-full="Loads $275 of stand credit" data-pay-four="$262 total, February to May">Loads $275 of stand credit</p>
              <div className="fill" aria-hidden="true"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <ul className="plan__list">
                <li>$275 to spend at the stand, June to October</li>
                <li>Use it any week, or all at once for canning</li>
                <li>10% off pickles and preserves</li>
                <li>No pickup day to remember</li>
              </ul>
              <a className="btn btn--ghost btn--block" href="/contact/">Get a Stand Card</a>
            </article>
          </div>
          <div className="packet-wrap">
            <article className="packet" aria-labelledby="p2">
              <div className="packet__top"><span>Lot 02</span><span className="reg" aria-hidden="true"></span></div>
              <h3 className="packet__name" id="p2">Half Share</h3>
              <p className="plan__for">One or two eaters, or a cook who travels.</p>
              <p className="plan__price"><span data-pay-full="$460" data-pay-four="$118">$460</span> <small data-pay-full="a season" data-pay-four="x 4 payments">a season</small></p>
              <p className="plan__per" data-pay-full="About $23 a crate" data-pay-four="$472 total, February to May">About $23 a crate</p>
              <div className="fill" aria-hidden="true"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i><i></i><i></i><i></i></div>
              <ul className="plan__list">
                <li>20 weekly crates, 6 to 8 items each</li>
                <li>Farmer's note and a recipe card</li>
                <li>Two vacation swaps</li>
                <li>Pickup in any of six towns</li>
              </ul>
              <a className="btn btn--block" href="/contact/">Reserve a half share</a>
            </article>
          </div>
          <div className="packet-wrap plan--featured">
            <p className="stamp stamp--round" aria-hidden="true">Most<strong>Picked</strong>since 2013</p>
            <article className="packet" aria-labelledby="p3">
              <div className="packet__top"><span>Lot 03 · Most picked</span><span className="reg" aria-hidden="true"></span></div>
              <h3 className="packet__name" id="p3">Full Share</h3>
              <p className="plan__for">Three or four eaters, or two who really cook.</p>
              <p className="plan__price"><span data-pay-full="$760" data-pay-four="$193">$760</span> <small data-pay-full="a season" data-pay-four="x 4 payments">a season</small></p>
              <p className="plan__per" data-pay-full="About $38 a crate" data-pay-four="$772 total, February to May">About $38 a crate</p>
              <div className="fill" aria-hidden="true"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div>
              <ul className="plan__list">
                <li>20 weekly crates, 9 to 12 items each</li>
                <li>Pick-your-own strawberries and flowers</li>
                <li>Three vacation swaps</li>
                <li>10% off everything at the farm stand</li>
              </ul>
              <a className="btn btn--block" href="/contact/">Reserve a full share</a>
            </article>
          </div>
          <div className="packet-wrap">
            <article className="packet" aria-labelledby="p4">
              <div className="packet__top"><span>Lot 04</span><span className="reg" aria-hidden="true"></span></div>
              <h3 className="packet__name" id="p4">Kitchen Share</h3>
              <p className="plan__for">A household that cooks every single night.</p>
              <p className="plan__price"><span data-pay-full="$1,140" data-pay-four="$288">$1,140</span> <small data-pay-full="a season" data-pay-four="x 4 payments">a season</small></p>
              <p className="plan__per" data-pay-full="Eggs and two dinner seats included" data-pay-four="$1,152 total, February to May">Eggs and two dinner seats included</p>
              <div className="fill" aria-hidden="true"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i></div>
              <ul className="plan__list">
                <li>Everything in the Full Share</li>
                <li>A dozen pastured eggs every week</li>
                <li>Orchard fruit from August on</li>
                <li>Two seats at a farm dinner</li>
              </ul>
              <a className="btn btn--leaf btn--block" href="/contact/">Reserve a kitchen share</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="compare-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Side by side</p>
            <h2 id="compare-title">What comes with each share</h2>
          </div>
          <p>The crates are the same vegetables from the same rows. What changes is how much, and what rides along with it.</p>
        </div>
        <div className="table-wrap" role="region" aria-labelledby="compare-title" tabIndex="0">
          <table className="compare">
            <caption>2027 shares, compared</caption>
            <thead>
              <tr><th scope="col"><span className="sr-only">Feature</span></th><th scope="col">Stand Card</th><th scope="col">Half</th><th scope="col" className="hl">Full</th><th scope="col">Kitchen</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Weekly crates</th><td className="no">Stand credit</td><td>20</td><td className="hl">20</td><td>20</td></tr>
              <tr><th scope="row">Items per crate</th><td className="no">You choose</td><td>6 to 8</td><td className="hl">9 to 12</td><td>9 to 12</td></tr>
              <tr><th scope="row">Feeds</th><td>Anyone</td><td>1 to 2</td><td className="hl">3 to 4</td><td>4 or more</td></tr>
              <tr><th scope="row">Farmer's note and recipes</th><td>By email</td><td className="yes">✓<span className="sr-only"> Included</span></td><td className="yes hl">✓<span className="sr-only"> Included</span></td><td className="yes">✓<span className="sr-only"> Included</span></td></tr>
              <tr><th scope="row">Vacation swaps</th><td className="no">Not needed</td><td>2</td><td className="hl">3</td><td>4</td></tr>
              <tr><th scope="row">Pick-your-own berries and flowers</th><td className="no">·<span className="sr-only">Not included</span></td><td className="no">·<span className="sr-only">Not included</span></td><td className="yes hl">✓<span className="sr-only"> Included</span></td><td className="yes">✓<span className="sr-only"> Included</span></td></tr>
              <tr><th scope="row">Farm stand discount</th><td>10% preserves</td><td className="no">·<span className="sr-only">Not included</span></td><td className="hl">10%</td><td>15%</td></tr>
              <tr><th scope="row">Pastured eggs</th><td className="no">·<span className="sr-only">Not included</span></td><td className="no">·<span className="sr-only">Not included</span></td><td className="no hl">·<span className="sr-only">Not included</span></td><td>1 dozen a week</td></tr>
              <tr><th scope="row">Orchard fruit, August to October</th><td className="no">·<span className="sr-only">Not included</span></td><td className="no">·<span className="sr-only">Not included</span></td><td className="no hl">·<span className="sr-only">Not included</span></td><td className="yes">✓<span className="sr-only"> Included</span></td></tr>
              <tr><th scope="row">Farm dinner seats</th><td className="no">·<span className="sr-only">Not included</span></td><td className="no">·<span className="sr-only">Not included</span></td><td className="no hl">·<span className="sr-only">Not included</span></td><td>2</td></tr>
              <tr><th scope="row">Paid in full</th><td>$250</td><td>$460</td><td className="hl">$760</td><td>$1,140</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section dark" aria-labelledby="scale-title">
      <div className="wrap">
        <p className="kicker">Nobody leaves without dinner</p>
        <h2 id="scale-title">Pay what fits your kitchen.</h2>
        <p className="lede">Good vegetables should not depend on a good paycheck. A slice of every season is set aside so the price never decides who eats from this farm.</p>
        <div className="scale">
          <div><h3>20 sliding shares</h3><p>Pay anywhere from $230 to $760 for a full share. No paperwork and no questions: pick your number on the sign-up form.</p></div>
          <div><h3>SNAP at the stand</h3><p>We take SNAP/EBT at the farm stand and match the first $20 of every visit with stand credit, all season long.</p></div>
          <div><h3>Six work shares</h3><p>Four hours in the field on a Tuesday or Wednesday morning, and a full share goes home with you every Thursday.</p></div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Asked at the pickup table</p>
            <h2 id="faq-title">Questions, answered</h2>
          </div>
          <p>Something missing? Write to Juniper at <a href="mailto:hello@bramblecut.farm">hello@bramblecut.farm</a>. She answers after chores.</p>
        </div>
        <div className="faq">
          <details open><summary>What if I am away one week?</summary><p>Tell us by Monday. We skip that week and add its value to a later crate, or you can send a friend to pick it up in your name. Swaps per share are listed in the table above.</p></details>
          <details><summary>Can I choose what goes in my crate?</summary><p>Not the crate itself; that is the deal with a CSA. Every pickup has a swap bin, though: leave the beets, take the extra kale somebody else left.</p></details>
          <details><summary>What happens if the weather ruins a crop?</summary><p>You share that risk with us, and the good years too. A wet June might mean fewer peas and more lettuce. In fourteen seasons we have never sent out an empty week.</p></details>
          <details><summary>Where are the pickups?</summary><p>Six spots every Thursday: the farm itself from 3 to 7 pm, the Viroqua food co-op, Westby, Coon Valley, and two porches in La Crosse. Exact addresses come with your welcome letter.</p></details>
          <details><summary>Is everything certified organic?</summary><p>Every acre, since 2014. The eggs come from the Hendersons up the road, who are certified too. The orchard fruit comes from a neighbor in transition, and the weekly note says so.</p></details>
          <details><summary>Can two households split one share?</summary><p>Plenty do. A full share splits well between two small households. Put one name on the account, then trade weeks or halve the crate at pickup.</p></details>
        </div>
      </div>
    </section>

    <section className="section band closing" aria-labelledby="close-title">
      <div className="wrap">
        <div className="closing__card">
          <p className="stamp" aria-hidden="true">Opens Feb. 1</p>
          <div>
            <p className="kicker">Before the seed order</p>
            <h2 id="close-title">Hold a crate for 2027.</h2>
            <p>Leave your email and we will write once, the morning sign-ups open. Returning members pick first, and most years we are full by March.</p>
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
      <img className="closing__hills" src="/assets/img/hills.svg" alt="Screenprint of the farm's hills at sunrise, with the red barn and striped crop rows" width="1440" height="320" />
    </section>
  </main>
  );
}
