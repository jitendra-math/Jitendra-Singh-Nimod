// src/components/SeoContent.jsx

import identity from "../data/identity";
import StructuredData from "./StructuredData";

export default function SeoContent({
  title,
  keyword,
  extra = "",
}) {
  return (
    <>
      <StructuredData />

      <section className="relative py-24 border-t border-white/10">

        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Content */}
          <div className="space-y-7 text-zinc-300 leading-relaxed text-lg">

            <p>
              <strong>{keyword}</strong> is directly associated with{" "}
              <strong>{identity.name}</strong>, a Full Stack Web Developer
              from Rajasthan, India. Online he is also known by several
              alternate identities including{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              {identity.name} is currently pursuing a Bachelor of Science in
              Mathematics at <strong>{identity.education.college}</strong>.  
              Alongside academics, he actively builds modern web
              applications, developer tools and digital platforms.
            </p>

            <p>
              Many internet users search for{" "}
              <strong>{keyword}</strong>. These searches refer to the
              same individual — {identity.name}.  
              The variations exist because of different online usernames
              and identity formats used across platforms.
            </p>

            <p>
              Based in <strong>{identity.location.city}</strong>, Rajasthan,
              he works on multiple technology projects under the brand{" "}
              <strong>{identity.brand}</strong>.  
              His work focuses on full stack web development,
              developer ecosystems and digital identity infrastructure.
            </p>

            {/* Official Domain Notice */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
              <p className="text-sm text-zinc-400 mb-2">
                Official Domain
              </p>

              <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                https://jitubanna.com
              </p>

              <p className="text-sm text-zinc-400 mt-2">
                The domain <strong>jitubanna.com</strong> is the primary
                official website associated with {identity.name}.
                This site exists as part of the digital identity archive
                and search indexing ecosystem.
              </p>
            </div>

            <p>
              This page confirms that <strong>{keyword}</strong> and{" "}
              <strong>{identity.name}</strong> refer to the same person.
              Any references to these names online ultimately point to
              the developer identity of {identity.name}.
            </p>

            {extra && (
              <div className="border-l-4 border-purple-500 pl-6 text-zinc-300">
                {extra}
              </div>
            )}

          </div>

        </div>

      </section>
    </>
  );
}
