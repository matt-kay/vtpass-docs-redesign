import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type LinkItem = {
  title: string;
  to: string;
  description: string;
};

const START_STEPS: LinkItem[] = [
  {
    title: 'Create a sandbox account',
    to: '/docs/tutorials/getting-started/create-sandbox-account',
    description: 'Sign up for sandbox and get a test wallet.',
  },
  {
    title: 'Generate your API keys',
    to: '/docs/tutorials/getting-started/generate-api-keys',
    description: 'Get the keys you send with every request.',
  },
  {
    title: 'Whitelist products',
    to: '/docs/tutorials/getting-started/whitelist-products',
    description: 'Turn on the products you want to sell.',
  },
  {
    title: 'Make your first request',
    to: '/docs/tutorials/getting-started/make-first-request',
    description: 'Check your wallet balance to test your setup.',
  },
];

const SERVICES: LinkItem[] = [
  {
    title: 'Airtime',
    to: '/docs/reference/services/airtime',
    description: 'MTN, Glo, Airtel, 9mobile, and international airtime.',
  },
  {
    title: 'Data',
    to: '/docs/reference/services/data',
    description: 'Mobile data plans, Smile, and Spectranet.',
  },
  {
    title: 'Electricity',
    to: '/docs/reference/services/electricity',
    description: 'Prepaid tokens and postpaid bills for 12 companies.',
  },
  {
    title: 'TV subscription',
    to: '/docs/reference/services/tv-subscription',
    description: 'DStv, GOtv, StarTimes, and Showmax.',
  },
  {
    title: 'Education',
    to: '/docs/reference/services/education',
    description: 'WAEC registration, WAEC result checker, and JAMB PINs.',
  },
  {
    title: 'Insurance',
    to: '/docs/reference/services/insurance',
    description: 'Third-party motor insurance.',
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          VTpass API documentation
        </Heading>
        <p className={styles.lead}>
          Sell airtime, data, electricity, TV subscriptions, education PINs,
          and insurance from your own app with one REST API.
        </p>
        <div className={styles.actions}>
          <Link
            className="button button--primary"
            to="/docs/tutorials/getting-started/create-sandbox-account">
            Get started
          </Link>
          <Link
            className="button button--secondary button--outline"
            to="/docs/overview/about-this-doc">
            About the API
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="VTpass API documentation"
      description="Integrate airtime, data, electricity, TV, education, and insurance payments with the VTpass API.">
      <Header />
      <main className="container">
        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Get started
          </Heading>
          <p className={styles.sectionLead}>
            Go from sign-up to your first API call in four steps, all in
            sandbox.
          </p>
          <ol className={styles.steps}>
            {START_STEPS.map((step, index) => (
              <li key={step.to}>
                <Link to={step.to} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  <strong className={styles.stepTitle}>{step.title}</strong>
                  <span className={styles.stepText}>{step.description}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Services
          </Heading>
          <div className={styles.grid}>
            {SERVICES.map((service) => (
              <Link key={service.to} to={service.to} className={styles.card}>
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}
