import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articleContent: Record<string, {
  title: string;
  date: string;
  category: string;
  image: string;
  intro: string;
  sections: { subtitle?: string; content: string[] }[];
}> = {
  "real-estate-market-trends": {
    title: "Real estate market trends",
    date: "April 28, 2026",
    category: "News",
    image: "/images/journal/Remove_logos_and_text_from_202607012107.jpeg",
    intro:
      "The real estate market is constantly evolving, shaped by economic shifts, technological innovation, and changing lifestyle demands.",
    sections: [
      {
        subtitle: "Key Market Shifts",
        content: [
          "Location + Lifestyle now go hand in hand",
          "Rising demand for eco-friendly housing",
          "Growth of mixed-use developments",
          "Data-driven and smarter investment decisions",
        ],
      },
      {
        subtitle: "Modern Buyer Preferences",
        content: [
          "Today's buyers prioritize: smart home technology, energy efficiency, community and amenities, and long-term investment value.",
        ],
      },
      {
        subtitle: "Investment Perspective",
        content: [
          "Real estate is becoming a strategic long-term asset. Investors are focusing on rental yield potential and appreciation in emerging neighborhoods.",
        ],
      },
      {
        subtitle: "Final thoughts",
        content: [
          "The future of real estate lies in innovation, sustainability, and human-centered design. Those who adapt to these changes will lead the next generation of urban development.",
        ],
      },
    ],
  },
  "functional-interiors-the-secret": {
    title: "Functional Interiors: The Secret",
    date: "April 28, 2026",
    category: "News",
    image: "/images/journal/Remove_logos_and_text_from_202607012110.jpeg",
    intro:
      "A well-designed interior is not just about beauty — it's about how a space works. Functional design creates environments that are efficient, comfortable, and visually refined.",
    sections: [
      {
        subtitle: "Core Principles of Functional Design",
        content: [
          "Smart space planning",
          "Multi-functional furniture",
          "Hidden storage solutions",
          "Minimal and clutter-free layout",
        ],
      },
      {
        subtitle: "Design That Works",
        content: [
          "Modern interiors focus on usability: open layouts improve movement, natural light enhances mood, and neutral tones create calmness. Every element is intentional and contributes to a seamless living experience.",
        ],
      },
      {
        subtitle: "Balancing Beauty & Practicality",
        content: [
          "True luxury lies in effortless living. Functional interiors ensure less clutter, better organization, and more breathable spaces.",
        ],
      },
      {
        subtitle: "Final thoughts",
        content: [
          "Functional design transforms everyday living into a refined and stress-free experience, where form and function exist in perfect harmony.",
        ],
      },
    ],
  },
  "real-estate-market": {
    title: "Real estate market",
    date: "April 28, 2026",
    category: "News",
    image: "/images/journal/ckc_pool_cleaned.png",
    intro:
      "Modern architecture is more than just buildings — it is a reflection of lifestyle, culture, and innovation.",
    sections: [
      {
        subtitle: "Core principles of modern architecture",
        content: [
          "Simplicity & Clean Lines: Minimalism plays a key role, removing unnecessary details to highlight structure and form.",
          "Sustainability: Use of eco-friendly materials, energy-efficient systems, and climate-responsive design.",
          "Natural Light: Large windows and open layouts maximize daylight and create a seamless indoor-outdoor connection.",
          "Functionality First: Every space is designed with purpose, ensuring comfort and usability.",
        ],
      },
      {
        subtitle: "Materials & design language",
        content: [
          "Modern architecture embraces a refined palette: concrete, glass, and steel with natural wood and stone accents. Neutral colors (white, beige, grey) create a timeless and elegant aesthetic.",
        ],
      },
      {
        subtitle: "Architecture & human experience",
        content: [
          "Good architecture is not just seen — it is felt. It creates emotional connection, enhances daily living, and improves well-being. Spaces are designed to bring comfort, peace, and inspiration to everyday life.",
        ],
      },
      {
        subtitle: "Final thoughts",
        content: [
          "Modern architecture is a perfect blend of design, technology, and sustainability. It reflects how we live today and how we envision the future.",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articleContent).map((slug) => ({ slug }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleContent[slug];

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-bayon text-3xl text-[#1e1e1e]">Article not found</h1>
            <p className="mt-2 text-[#535353]">
              The article you are looking for does not exist.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f1f1f2]">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm text-[#535353]">{article.date}</span>
              <span className="rounded-full bg-white px-3 py-0.5 text-xs font-medium uppercase text-[#535353]">
                {article.category}
              </span>
            </div>
            <h1
              className="font-bayon text-4xl text-[#1e1e1e] md:text-5xl"
              style={{ fontFamily: "var(--font-bayon)" }}
            >
              {article.title}
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <img
            src={article.image}
            alt={article.title}
            className="mb-10 w-full rounded-lg object-cover"
          />

          <p className="mb-10 text-lg leading-relaxed text-[#535353]">
            {article.intro}
          </p>

          {article.sections.map((section, i) => (
            <div key={i} className="mb-8">
              {section.subtitle && (
                <h2 className="mb-4 text-2xl font-semibold text-[#1e1e1e]">
                  {section.subtitle}
                </h2>
              )}
              {section.content.map((paragraph, j) => (
                <p key={j} className="mb-4 leading-relaxed text-[#535353]">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
