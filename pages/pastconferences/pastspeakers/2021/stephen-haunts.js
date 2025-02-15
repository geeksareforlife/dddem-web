import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import PastSpeakersButton from '../../../../components/speakers/PastSpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function StephenHaunts() {
  return (
    <Layout>
      <Head>
        <title>Stephen Haunts</title>
      </Head>
      <Header
        title={'Stephen Haunts'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Stephen_H.jpg"
            alt="Picture of Stephen Haunts"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Hacking Humans : Social Engineering Techniques and How to
          Protect Against Them
        </h2>
        <p tabIndex="0">
          Social engineering is one of the biggest threats to our
          organisations as attackers use manipulation techniques to
          coerce people into revealing secrets about our companies to
          allow attackers to gain access to critical systems.
        </p>
        <p tabIndex="0">
          In this talk we will look at some of the techniques used in
          social engineering and look at how to guard yourself against
          them. We will cover subjects like pre-texting, elicitation
          and body language as techniques for manipulating people.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Stephen</h2>
        <p tabIndex="0">
          <b>Founder of Stephen Haunts Training</b>
        </p>
        <p tabIndex="0">
          Stephen Haunts is an independent software developer,
          Pluralsight Author, Writer for APress, and classroom
          trainer. Stephen has had a long career working in computer
          games, banks, retail finance, insurance and healthcare and
          is now passionate about helping other developers, and
          professionals succeed in their careers.
        </p>
        <p tabIndex="0">
          Stephen has authored over 14 courses for Pluralsight,
          written a book on Cryptography for APress, and has spoken
          and taught workshops at conferences and companies all over
          the world.
        </p>
        <p tabIndex="0">
          Stephen is also the host of the popular business podcast,
          the Side Hustle Success Podcast.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lkffxW3OOiA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="center-link">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Stephen: Youtube of Talk"
            href="https://youtu.be/lkffxW3OOiA"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Stephen Haunts: Twitter"
            href="https://twitter.com/stephenhaunts"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Stephen Haunts: Website"
            href="https://stephenhaunts.com/"
          >
            Website
          </a>
        </li>
      </section>
    </Layout>
  );
}
