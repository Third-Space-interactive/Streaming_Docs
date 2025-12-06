import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
  isExternal?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Quick Start",
    icon: "▶",
    description:
      "Deploy your first Unreal Engine project to the cloud in under 5 minutes. No AWS expertise required.",
    link: "/docs/getting-started/quick-start",
  },
  {
    title: "Pricing & Plans",
    icon: "$",
    description:
      "Transparent credit-based pricing. Compare tiers and find the perfect plan for your needs.",
    link: "/docs/pricing",
  },
  {
    title: "How It Works",
    icon: "◉",
    description:
      "Understand the technology behind Third Space's managed Pixel Streaming platform.",
    link: "/docs/core-concepts/how-it-works",
  },
  {
    title: "System Requirements",
    icon: "✓",
    description:
      "Check UE version compatibility, packaging requirements, and file size limits for your tier.",
    link: "/docs/getting-started/system-requirements",
  },
  {
    title: "Use Cases",
    icon: "●",
    description:
      "Explore real-world examples: Architecture, Education, Sales & Marketing, Digital Twins.",
    link: "/docs/core-concepts/use-cases",
  },
  {
    title: "Credit System",
    icon: "⊕",
    description:
      "Learn how credits work, pricing per minute, idle timeouts, and cost optimization strategies.",
    link: "/docs/core-concepts/credit-system",
  },
  {
    title: "Packaging Guide",
    icon: "□",
    description:
      "Step-by-step instructions for packaging your Unreal Engine project for Linux or Windows.",
    link: "/docs/technical-docs/packaging",
  },
  {
    title: "FAQ",
    icon: "?",
    description:
      "Quick answers to common questions about billing, credits, performance, and platform features.",
    link: "/docs/faq",
  },
  {
    title: "Troubleshooting",
    icon: "⚡",
    description:
      "Solve common issues with uploads, deployment, performance, and streaming connections.",
    link: "/docs/troubleshooting",
  },
];

function Feature({ title, icon, description, link, isExternal }: FeatureItem) {
  const isImageIcon = icon.startsWith("/") || icon.includes(".");

  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureIcon}>
          {isImageIcon ? <img src={icon} alt={`${title} icon`} /> : <span className={styles.emojiIcon}>{icon}</span>}
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
