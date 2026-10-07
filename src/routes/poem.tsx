import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bow, Cloud, Flower } from "@/components/love-art";
import { poemStanzas } from "@/lib/poem";

export const Route = createFileRoute("/poem")({
  head: () => ({ meta: [
    { title: "For the girl who looks like heaven ♡" },
    { name: "description", content: "A little piece of my heart, written for you. A private love letter among lavender clouds." },
    { property: "og:title", content: "For the girl who looks like heaven ♡" },
    { property: "og:description", content: "A little piece of my heart, written for you." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Poem,
});

function Poem() {
  return <main className="poem-page page-entrance">
    <div className="heaven-scene" aria-hidden="true"><Cloud className="cloud-left"/><Cloud className="cloud-right"/><Cloud className="cloud-small"/><span className="moon">☾</span><span className="sky-star sky-star-one">✧</span><span className="sky-star sky-star-two">✧</span><span className="sky-star sky-star-three">✦</span></div>
    <header className="poem-header">
      <Link to="/" viewTransition className="quiet-back" aria-label="Back to my bunny"><ArrowLeft size={17}/></Link>
      <p className="gift-label">a love letter, just for you</p>
      <Bow className="letter-top-bow"/>
      <h1>For the girl who<br/>looks like <em>heaven ♡</em></h1>
      <p className="poem-subtitle">a little piece of my heart, written for you ♡</p>
    </header>
    <article className="love-letter">
      <div className="letter-rule" aria-hidden="true"/>
      <Flower className="letter-flower-top"/><Flower className="letter-flower-bottom"/>
      <p className="letter-dedication">For the Girl Who Looks Like Heaven</p>
      <div className="poem-stanzas">{poemStanzas.map((stanza, index) => <p key={index}>{stanza}</p>)}</div>
      <div className="letter-signoff"><Bow/><span>always, only you ♡</span></div>
    </article>
    <footer className="poem-footer"><Button variant="letter" asChild><Link to="/" viewTransition><ArrowLeft size={16}/>back to my bunny ♡</Link></Button><p>you & me, in every little universe</p></footer>
  </main>;
}