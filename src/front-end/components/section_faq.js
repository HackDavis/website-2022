import React, { useState } from 'react';
import styles from '../css/section_faq.module.scss';
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody} from "reactstrap";
import Section_Contact from './section_contact.js';
import arrow_forward from "../images/main_section/arrow_forward.svg";
const Section_FAQ  = () => {
  const [open, setOpen] = useState();

  const faqItems = {
    "Who can apply?":"Any UC Davis undergraduate student can apply to be a HackDavis Director! We welcome all majors and all experience levels.",
    "Why join HackDavis?":"HackDavis is so much more than just a hackathon - there’s hundreds of hours of preparation that go into making the event as great as it can be, as well as creating supplemental items like pre-event workshops and some other great stuff we have planned for this upcoming year 😉. If you want to join a community of like-minded, motivated people who want to both better themselves and create an event that will have lasting positive impacts for hundreds of other students, we’d love to have you 💖.",
    "What exactly does a HackDavis Director do?":"A HackDavis Director’s responsibilities vary from team to team (see the team descriptions above), but in general, a director is expected to participate during the day of the hackathon, attend regularly scheduled club-wide meetings, and put their best foot forward to create both a positive community of directors and an amazing event for our hackers. ",
    "How does the application process work?":"After you submit your application, the HackDavis Team will review it and choose if you proceed to our first-round interview. At your first-round interview, you’ll meet with HackDavis Directors who will ask general questions and determine the top team you’re suited for. If you proceed to our second-round interview, you’ll meet with your potential future team, who will ask more team-specific questions. After your second-round interview, you’ll hear from us if you’ve been accepted :)",
    "How do I choose a team to apply for? ":"While you can apply to as many teams as you’d like, we encourage you to think carefully about where your skills fit in with each team, and which tasks you’d enjoy spending time doing.",
    "Can I apply for a team even if I don’t have any experience? ":"Yes! While we’d like members of each team to be familiar with the soft skills required for each team, there are no hard requirements. Above all else, we want motivated team players who want to build a great event for other students. We’ll also provide you with any resources or knowledge you might need to help your team when you first join, so no one will be behind.",
    "How much of a time commitment is HackDavis? ":"Organizing the largest completely student-run event at UC Davis is a mammoth task! The time commitments vary from team to team and also depends on the time of year. For instance, our Marketing team won’t do much work during the summer, while others like Finance & Development will be hard at work securing funding for our event. While we expect everyone to be available for the duration of the actual event itself, we can’t give firm estimates for every team here. If you’d like more specifics, feel free to email us at hello@hackdavis.io or to ask us in your first-round interview if you qualify."
  };

  return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerText}>Questions</div>
          {Object.keys(faqItems).map((key, ind) => {
            return (
            <UncontrolledAccordion
              key={key}
              flush
              open={open}
              style={{width: "100%", maxWidth: "1280px"}}
              toggle={() => (ind === open ? setOpen() : setOpen(ind))}
            >
              <AccordionItem>
                <AccordionHeader
                  targetId={`${ind}`}
                >
                  {key}
                </AccordionHeader>
                <AccordionBody accordionId={`${ind}`}>
                  {faqItems[key]}
                  {ind === 0 ? 
                    <a target="_blank" rel="noopener noreferrer" 
                     className={styles.link} 
                     href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                      MLH's Code of Conduct.
                    </a> 
                    : ""
                  }
                  {key == "New to hackathons? No experience?" ? <p className={styles.new_text}>No worries, we’ll teach you the ropes! Check out our <a target="_blank" href="https://hackdavis.notion.site/hackdavis/HackDavis-2022-Starter-Pack-9295e5896d524b28914844559b087aac">Starter Pack <img src={arrow_forward} /></a></p>: ""

                  }
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>
          );})}  
        </div>
        <Section_Contact/>
      </div>
  );
};

export default Section_FAQ;
