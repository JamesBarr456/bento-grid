import { FeatureCard } from "@/components/feature-card";


export default function Home() {
  return (
   <main className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* First Row */}
        <FeatureCard
        image=""
          title="Create and schedule content quicker."
          variant="default"
          className="md:col-span-1"
        />
        <FeatureCard
          image=""
          title="Social Media 10x Faster with AI"
          variant="purple"
     
          className="md:col-span-2"
        />

        {/* Second Row */}
        <FeatureCard
          title="Write your content using AI."
          variant="yellow"
          image=""
          className="md:col-span-1"
        />
        <FeatureCard
          title="Manage multiple accounts and platforms."
          variant="default"
          className="md:col-span-1"
            image=""
        />
        <FeatureCard
          title="Maintain a consistent posting schedule."
          variant="yellow"
          className="md:col-span-1"
            image=""
        />

        {/* Third Row */}
        <FeatureCard
          title="Schedule to social media."
          variant="purple-light"
          image=""
          className="md:col-span-1"
        />
        <FeatureCard
          title="Grow followers with non-stop content."
          variant="purple"
           image=""
          className="md:col-span-2"
        />
      </div>
    </main>
  );
}
