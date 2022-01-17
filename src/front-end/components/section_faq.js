import React, { useState } from 'react';
import styles from '../css/section_faq.module.scss';
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody} from "reactstrap";
import Section_Contact from './section_contact.js';

const Section_FAQ  = () => {
  const [open, setOpen] = useState();

  const faqItems = {
    "What is a hackathon?":"A hackathon is where you transform your crazy ideas into real stuff. Hundreds of hackers from across California and other parts of the U.S. form teams around an idea and collaboratively create a solution from scratch. These ideas turn into websites, mobile apps, hardware, and more! \n\nCome make the most incredible things you can imagine alongside fellow creators. You take care of building and we'll take care of you. \n\nWe will be following MLH's Code Of Conduct.",
    "Who can attend?":"HackDavis is open to all majors! As long as you're prepared to learn, brainstorm, and build cool things, we welcome you to join. We encourage participants to form teams of up to 4 people. \n\nWe will be holding workshops throughout the year for students to immerse themselves into the world of hackathons and technology. These workshops will be held by industry professionals and members of our team, who will teach new and upcoming tools that assist with web development, mobile development, and more.",
    "How can I help?":"We need mentors and volunteers to ensure a great hacker experience at our event! We will release our mentor and volunteer applications soon so keep an eye out!",
    "Why social good?":"We want people to build projects with a meaningful impact and hope to foster a community dedicated to social change. \n\nWe find that most hackathons often don’t result with projects as practical solutions to specific societal problems and we’re looking to change that.",
    "What can I build?":"You can build whatever your heart desires, whether its a web app, mobile app, hardware hack, or an open source tool. Any social good oriented project is recommended. \n\nOur main focus is to bring you a learning experience where you can have fun, ask questions, and experiment with technology.",
    "What if I don't have a team or idea?":"Don't worry! You can use our team finder that will open with applications in November! Teams will have tags describing what they plan to work on/what roles they need that you can easily search by to find a project that interests you! \n\nWe're also hosting a virtual mixer before HackDavis, so please check out our Facebook page for more announcements about that when we get closer to the time of the event.",
    "As an NPO, why should I attend?":"Because we emphasize social good in our hackathon, each year we partner with three non-profit organizations to raise awareness for issues on which they focus. Representatives come to our hackathon to help envision projects that relate to their non-profit’s goals.", 
    "When do applications open?":"Applications typically open in February!", 
  }

  return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerText}>Questions</div>
          {Object.keys(faqItems).map((key, ind) => {
            return (
            <UncontrolledAccordion
              flush
              open={open}
              style={{width: "100%", maxWidth: "1280px"}}
              toggle={() => (ind === open ? setOpen() : setOpen(ind))}
            >
              <AccordionItem className={styles.accHead}>
                <AccordionHeader
                  targetId={ind}
                >
                  {key}
                </AccordionHeader>
                <AccordionBody
                  accordionId={ind}
                >
                  {faqItems[key]}
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>
          );})}  
        </div>
        <Section_Contact/>
      </div>
  )
}

export default Section_FAQ;
