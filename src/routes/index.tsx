import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bow, BunnyPair, Flower } from "@/components/love-art";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Happy Wednesday, my love ♡" },
    { name: "description", content: "Wherever we are, my heart will always find its way back to you. A little Wednesday surprise." },
    { property: "og:title", content: "Happy Wednesday, my love ♡" },
    { property: "og:description", content: "Two little bunnies and a lavender love letter, just for you." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Wednesday,
});

function Wednesday() {
  return <main className="wednesday-page page-entrance">
    <div className="page-frame" aria-hidden="true" />
    <Bow className="corner-bow bow-left"/><Bow className="corner-bow bow-right"/>
    <span className="little-star star-one" aria-hidden="true">✧</span><span className="little-star star-two" aria-hidden="true">✧</span>
    <Flower className="side-flower flower-left"/><Flower className="side-flower flower-right"/>
    <div className="wednesday-content">
      <div className="gift-label"><span/> a little love, just for you <span/></div>
      <Bow className="center-bow"/>
      <h1>Wherever we are,<br/>my heart will always<br/>find its way <em>back to you.</em></h1>
      <div className="bunny-scene"><BunnyPair/></div>
      <p className="wednesday-greeting">happy wednesday, my love ♡</p>
      <span className="little-divider" aria-hidden="true">· &nbsp; ✧ &nbsp; ·</span>
      <Button variant="love" asChild><Link to="/poem" viewTransition>a little something for you ♡ <ArrowRight size={16}/></Link></Button>
      <p className="closing-note">you & me, in every little universe</p>
    </div>
    <div className="bottom-flourish" aria-hidden="true">♡</div>
  </main>;
}