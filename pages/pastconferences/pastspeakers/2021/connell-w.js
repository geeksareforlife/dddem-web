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

export default function ConnellW() {
  return (
    <Layout>
      <Head>
        <title>Connell W</title>
      </Head>
      <Header
        title={'Connell W'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Connell_W.jpg"
            alt="Picture of Connell"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> Not Provided
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Onion Architecture with DDD and CQRS</h2>
        <p tabIndex="0">
          Explaining how I reason about the building blocks of Onion
          Architecture, Domain-Driven Design and Command Query
          Responsibility Segregation in an event-driven micro-services
          architecture. How it all fits together in my head, the
          concepts they share, and the mistakes I've made along the
          way.
        </p>
        <p tabIndex="0">
          Examples using modern C# but can be applied to other
          languages and frameworks.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Connell</h2>
        <p tabIndex="0">
          <b>Lead Platform Engineer at Oakbrook Finance</b>
        </p>
        <p tabIndex="0">
          Loves building software and making music. Coding since 2005.
          Every day learning and sharing knowledge.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CdZzfqwnx4I"
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
            aria-label="Connell: Youtube of Talk"
            href="https://youtu.be/CdZzfqwnx4I"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>
    </Layout>
  );
}
