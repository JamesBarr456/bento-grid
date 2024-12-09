'use client';

import { FeatureCard } from '@/components/feature-card';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <main className="container mx-auto max-w-[1100px] p-8">
      <motion.div
        className="grid gap-5 lg:grid-cols-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-between space-y-5 lg:col-span-1">
          {/* First Col */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FeatureCard variant="yellow_light" className="py-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold leading-tight">
                  Create and schedule content{' '}
                  <motion.span
                    className="italic text-royal-orchid"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    quicker.
                  </motion.span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    className="mx-auto"
                    alt="Create and schedule content quicker"
                    src="/images/illustration-create-post.webp"
                    width={382}
                    height={182}
                  />
                </motion.div>
              </CardContent>
            </FeatureCard>
          </motion.div>
          {/* --------- */}
          <motion.div
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <FeatureCard variant="yellow_bold" className="space-y-3">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold leading-tight">
                  Write your content using IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  className="mx-auto"
                  alt="Write your content using IA"
                  src="/images/illustration-ai-content.webp"
                  width={440}
                  height={446}
                />
              </CardContent>
            </FeatureCard>
          </motion.div>
        </div>

        <div className="lg:col-span-4">
          {/* Second Col */}
          <div className="gap-5 lg:grid lg:w-4/5 lg:grid-cols-3">
            {/* First Row */}
            <div className="lg:col-span-2 lg:grid lg:gap-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FeatureCard variant="purple_bold" className="p-5">
                  <CardHeader>
                    <CardTitle className="text-center text-5xl font-normal">
                      Social Media
                      <motion.span
                        className="text-sunflower-glow"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        10x
                      </motion.span>
                      <span className="italic">Faster </span>
                      with AI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      className="mx-auto"
                      alt="Social Media 10x Faster with AI"
                      src="/images/illustration-five-stars.webp"
                      width={192}
                      height={32}
                    />
                    <p className="mt-2 text-center brightness-90">
                      Over 4,000 5-star reviews
                    </p>
                  </CardContent>
                </FeatureCard>
              </motion.div>

              <div className="grid-cols-2 gap-5 lg:grid">
                <motion.div whileHover={{ y: -5 }}>
                  <FeatureCard
                    variant="default"
                    className="max-w-[250px] overflow-hidden p-2"
                  >
                    <Image
                      className="h-14 object-cover object-left"
                      alt="Manage multiple accounts and platforms."
                      src="/images/illustration-multiple-platforms.webp"
                      width={633}
                      height={144}
                    />
                    <CardContent className="p-2">
                      <p className="mt-2 text-2xl font-medium leading-none">
                        Manage multiple accounts and platforms.
                      </p>
                    </CardContent>
                  </FeatureCard>
                </motion.div>
                {/* --------- */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <FeatureCard
                    variant="yellow_bold"
                    className="max-h-[200px] max-w-[250px] overflow-hidden pt-3"
                  >
                    <CardHeader className="py-2">
                      <CardTitle className="text-2xl font-normal leading-none">
                        Maintain a consistent posting schedule.
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        className="mx-auto"
                        alt="Maintain a consistent posting schedule."
                        src="/images/illustration-consistent-schedule.webp"
                        width={633}
                        height={144}
                      />
                    </CardContent>
                  </FeatureCard>
                </motion.div>
              </div>
            </div>
            {/* Second Row */}
            <div className="lg:grid-cols-1">
              <motion.div style={{ scale }}>
                <FeatureCard variant="purple_ligth" className="h-full py-4">
                  <CardHeader>
                    <CardTitle className="text-2xl font-normal">
                      Schedule to social media.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 pr-0">
                    <Image
                      className="mx-auto h-56 object-cover object-left"
                      alt="Schedule to social media."
                      src="/images/illustration-schedule-posts.webp"
                      width={715}
                      height={638}
                    />
                  </CardContent>
                  <CardFooter>
                    <p className="mt-2 text-sm">
                      Optimize post timings to publish content at the perfect
                      time for your audience
                    </p>
                  </CardFooter>
                </FeatureCard>
              </motion.div>
            </div>
            <motion.div
              className="col-span-1"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FeatureCard variant="default" className="h-full">
                <CardHeader>
                  <CardTitle className="text-sm font-normal leading-8">
                    <motion.span
                      className="text-5xl"
                      animate={{ color: ['#000', '#4a90e2', '#000'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      &gt;56%
                    </motion.span>
                    <br />
                    faster audience growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Avatars"
                    src="/images/illustration-audience-growth.webp"
                    width={179}
                    height={67}
                  />
                </CardContent>
              </FeatureCard>
            </motion.div>
            <motion.div
              className="col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FeatureCard
                variant="purple_bold"
                className="flex h-full items-center gap-3 p-5"
              >
                <CardHeader className="order-2 p-0">
                  <CardTitle className="text-3xl font-normal">
                    Grow followers with non-stop content.
                  </CardTitle>
                </CardHeader>
                <CardContent className="order-1 p-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Image
                      alt="followers with non-stop content"
                      src="/images/illustration-grow-followers.webp"
                      width={456}
                      height={402}
                    />
                  </motion.div>
                </CardContent>
              </FeatureCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
