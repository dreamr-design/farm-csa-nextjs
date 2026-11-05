import site from '@/site.config';

export const metadata = {
  title: "Write to the farm | Bramblecut Farm",
  description: "Write to Bramblecut Farm about CSA shares, farm dinners or a tour. Find the farm stand on County Road B near Viroqua, Wisconsin, its hours, and Thursday pickup times.",
};

export default function Page() {
  return (
<main id="main">
    <section className="page-hero" aria-labelledby="page-title">
      <div className="wrap">
        <div>
          <p className="kicker">Write to the farm · We read every letter</p>
          <h1 id="page-title">Drop us a line. We answer after chores.</h1>
          <p className="lede">A question about a share, a seat at a farm dinner, a tour for your class or a case of seconds for canning: send it here. Juniper reads the inbox every evening once the crates are washed.</p>
        </div>
        <p className="stamp stamp--round">Replies in<strong>1 day</strong>2 in August</p>
      </div>
    </section>

    <section className="section band closing" aria-labelledby="reach-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Three ways in</p>
            <h2 id="reach-title">Write, call, or come down the lane</h2>
          </div>
          <p>The form lands in the same inbox as our email. The phone rings in the packing shed, so let it ring a while, or leave a message and we will call back at lunch.</p>
        </div>
        <div className="contact">
          <div className="packet-wrap">
            <form className="packet contact-form" aria-labelledby="write-title" data-slapform-success="Got it. Your letter is in the crate, and we will write back after chores." action={site.slapform_form_id ? `https://api.slapform.com/${site.slapform_form_id}` : undefined} method="POST" data-slapform="">
<input className="slap-honey" type="text" name="slap_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div className="packet__top"><span>Lot 00 · Letters</span><span className="reg" aria-hidden="true"></span></div>
              <h3 className="packet__name" id="write-title">Write to the farm</h3>
              <p className="packet__variety">Sow one question. Harvest a reply within a day.</p>
              <label htmlFor="contact-name">Your name</label>{' '}
              <input id="contact-name" name="name" type="text" autoComplete="name" required />{' '}
              <label htmlFor="contact-email">Your email</label>{' '}
              <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />{' '}
              <label htmlFor="contact-message">Your message</label>{' '}
              <textarea id="contact-message" name="message" rows="6" required placeholder="Which share fits two people who cook every night?"></textarea>{' '}
              <button className="btn" type="submit">Send the letter</button>
              <p className="signup__msg" role="status"></p>
            </form>
          </div>
          <div className="contact__side">
            <div className="tag">
              <h3>The farm stand</h3>
              <dl className="packet__back">
                <dt>Address</dt><dd>E4410 County Road B, Viroqua, WI 54665. Look for the painted tomato on the mailbox.</dd>
                <dt>Stand hours</dt><dd>Friday to Sunday, 9 am to 6 pm</dd>
                <dt>Honor box</dt><dd>Every day. Pay in the coffee can, or tap a card on the reader.</dd>
                <dt>Phone</dt><dd>(608) 555-0147</dd>
                <dt>Email</dt><dd><a href="mailto:hello@bramblecut.farm">hello@bramblecut.farm</a></dd>
              </dl>
            </div>
            <div className="note">
              <h3>Thursday is pickup day</h3>
              <p>Crates are packed by noon and waiting in the barn cooler from 3 to 7 pm. Town members pick up at the same hours in all six towns.</p>
              <ul>
                <li>Bring last week's crate back, rinsed if you can.</li>
                <li>Running late? Call the shed and we will leave yours in the cooler overnight.</li>
                <li>Away for a week? Tell us by Monday and we donate your crate to the Viroqua pantry.</li>
              </ul>
              <p className="sig">Juniper, CSA and farm stand</p>
            </div>
          </div>
        </div>
      </div>
      <img className="closing__hills" src="/assets/img/hills.svg" alt="Screenprint of the farm's hills at sunrise, with the red barn and striped crop rows" width="1440" height="320" />
    </section>
  </main>
  );
}
