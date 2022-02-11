import React, { useState } from 'react';
import styles from '../css/section_faq.module.scss';
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody} from "reactstrap";
import Section_Contact from './section_contact.js';

const Section_FAQ  = () => {
  const [open, setOpen] = useState();

  const faqItems = {
    "What is a hackathon?":"A hackathon is where you transform your crazy ideas into real stuff. Hundreds of students from across California form teams around an idea and collaboratively create technical solutions to problems we face in our local communities. These ideas turn into websites, mobile apps, hardware, and more! \n\nCome make the most incredible things you can imagine alongside fellow creators. You take care of building and we'll take care of you. \n\n We will be following ",
    "When will HackDavis take place?":"HackDavis 2022 will take place on the 16th and 17th of April, 2022.",
    "Is HackDavis in-person or virtual?":"We are planning to host HackDavis 2022 as a hybrid event. Participants will have the option to participate in-person at the University Credit Union Center in Davis, or participate virtually from the comfort of their homes! \n\nHackDavis will be organized in accordance with CDC, California, City of Davis, and UC Davis protocols. However, all plans are subject to change with evolving public health guidance.",
    "Who can attend?":"HackDavis is open to all enrolled undergraduate and graduate students from all majors, and graduates who have completed their degrees within the past year. As long as you're prepared to learn, brainstorm, and build cool things, we welcome you to join!",
    "How do teams work?":"Teams can have up to four members, and submit a single project together! \n\nWant to go solo? Fine by us, but we’d highly recommend joining a team to make new friends and build cool stuff together!",
    "How can I help?":"HackDavis is largely built upon the efforts of our mentors and volunteers, who ensure that our hackers have a great experience at our event! Our mentor and volunteer applications will open in early March, so keep an eye out!",
    "Why social good?":"We want people to build projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don’t result in projects as practical solutions to specific societal problems and we’re looking to change that.", 
    "What can I build?":"You can build whatever your heart desires, whether it's a webapp, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to bring you a learning experience where you can have fun, ask questions, and experiment with technology.",
    "What if I don’t have a team or an idea?" : "Worry not! You can use the team finder feature on our website - teams will have tags describing what they plan to work on/what roles they need that you can easily search by to find a project that interests you! \n\nWe also host a series of mixers before HackDavis, so please check out our social media for announcements about those as we get closer to the event. We’ll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go! \n\nOur non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don’t have an idea!",
    "How much does it cost?" : "HackDavis is free for all admitted participants. Don’t sweat it! We will provide your WiFi, meals, caffeine, swag, and workspace for the entire weekend.",  
    "Do I need to know how to code?" : "Nope! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 40% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.",
    "How much does it cost?" : "Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don’t sweat it! We will provide your WiFi, meals, caffeine, swag, and workspace for the entire weekend.",
    "As an NPO, why should I attend?" : "Because we emphasize social good in our hackathon, each year we partner with three non-profit organizations to raise awareness for issues on which they focus. Representatives come to our hackathon to help envision projects that relate to their non-profit’s goals."
  };

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
              <AccordionItem>
                <AccordionHeader
                  targetId={ind}
                >
                  {key}
                </AccordionHeader>
                <AccordionBody accordionId={ind}>
                  {faqItems[key]}
                  {ind === 0 ? 
                    <a target="_blank" rel="noopener noreferrer" 
                     className={styles.link} 
                     href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                      MLH's Code of Conduct.
                    </a> 
                    : ""
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
