'use client';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import LearningMaterial from '@/app/_components/LearningMaterial';
import DiscussionForum from '@/app/_components/DiscussionForum';
import News from '@/app/(pages)/news/page';
import ProgressIndicator from '@/app/_components/ProgressIndicator';
import { getUtmParams, appendUtmParams } from '@/app/_utils/utm.util';
import { FaWifi } from 'react-icons/fa';

function Home() {
  const [timer, setTimer] = useState(20);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          const newTime = prevTimer - 1;
          if (newTime <= 10) {
            setButtonVisible(true);
          }
          return newTime;
        }
        return 0;
      });
    }, 1000);

    if (timer === 0) {
      clearInterval(countdownInterval);
      router.push(appendUtmParams('/interstitial'));
    }

    return () => clearInterval(countdownInterval);
  }, [timer, router]);

  return (
    <div>
      {/* GPT Configuration and Ad Display */}
      <Script id='gpt-home-setup' strategy='afterInteractive'>
        {`
          window.googletag = window.googletag || { cmd: [] };

          window.googletag.cmd.push(function () {
            const utmParams = ${JSON.stringify(getUtmParams())};
            console.log("home utm params =>",utmParams);
            Object.entries(utmParams).forEach(([key, value]) => {
              googletag.pubads().setTargeting(key, value);
            });

            // Define size mappings
            const mapping1 = googletag.sizeMapping()
              .addSize([1400, 0], [[728, 90], 'fluid'])
              .addSize([1200, 0], [[728, 90], 'fluid'])
              .addSize([1000, 0], [[728, 90], 'fluid'])
              .addSize([700, 0], [[468, 60], [320, 50], [300, 50], 'fluid', [300, 250], [320, 100], [300, 100]])
              .addSize([600, 0], [[468, 60], [320, 50], [300, 50], 'fluid', [300, 100], [320, 100], [300, 250]])
              .addSize([400, 0], [[320, 50], [300, 50], 'fluid', [320, 100], [300, 250], [300, 100]])
              .addSize([300, 0], [[320, 50], [300, 250], [320, 100], [300, 50], [300, 100], 'fluid'])
              .build();

            const mapping3 = googletag.sizeMapping()
              .addSize([1400, 0], ['fluid', [728, 90], [300, 250], [300, 600], [468, 60]])
              .addSize([1200, 0], ['fluid', [728, 90], [468, 60], [300, 250], [300, 600]])
              .addSize([1000, 0], ['fluid', [728, 90], [468, 60], [300, 250], [300, 600]])
              .addSize([700, 0], ['fluid', [468, 60], [320, 50], [300, 50], [320, 100], [300, 100], [300, 250], [300, 600]])
              .addSize([600, 0], ['fluid', [468, 60], [320, 50], [300, 50], [320, 100], [300, 100], [300, 250], [300, 600]])
              .addSize([400, 0], ['fluid', [320, 50], [300, 50], [320, 100], [300, 100], [300, 250], [300, 600]])
              .addSize([300, 0], ['fluid', [320, 50], [300, 50], [320, 100], [300, 100], [300, 250], [300, 600]])
              .build();

            const mapping4 = googletag.sizeMapping()
              .addSize([1400, 0], [[728, 90], 'fluid'])
              .addSize([1200, 0], [[728, 90], 'fluid'])
              .addSize([1000, 0], [[728, 90], 'fluid'])
              .addSize([700, 0], ['fluid', [468, 60], [320, 50], [300, 50], [320, 100], [300, 100], [300, 250]])
              .addSize([600, 0], ['fluid', [468, 60], [320, 50], [300, 50], [320, 100], [300, 100], [300, 250]])
              .addSize([400, 0], ['fluid', [320, 50], [300, 50], [320, 100], [300, 100], [300, 250]])
              .addSize([300, 0], ['fluid', [320, 50], [300, 50], [320, 100], [300, 100], [300, 250]])
              .build();

            // Define ad slots and display them
            googletag.defineSlot('/22047902240/wifinews/homepage_top_leaderboard', ['fluid', [320, 100], [320, 50], [300, 250], [468, 60], [728, 90]], 'div-gpt-ad-6641866-1')
              .defineSizeMapping(mapping1)
              .addService(googletag.pubads());

            googletag.defineSlot('/22047902240/wifinews/homepage_mpu_hpa', ['fluid', [300, 250], [300, 600], [320, 50], [320, 100], [468, 60], [728, 90]], 'div-gpt-ad-6641866-2')
              .defineSizeMapping(mapping3)
              .addService(googletag.pubads());

            googletag.defineSlot('/22047902240/wifinews/homepage_mpu_hpa_2', ['fluid', [300, 250], [300, 600], [320, 50], [320, 100], [468, 60], [728, 90]], 'div-gpt-ad-6641866-3')
              .defineSizeMapping(mapping3)
              .addService(googletag.pubads());

            googletag.defineSlot('/22047902240/wifinews/Homepage_bottom_1', ['fluid', [300, 250], [320, 100], [320, 50], [468, 60], [728, 90]], 'div-gpt-ad-6641866-4')
              .defineSizeMapping(mapping1)
              .addService(googletag.pubads());

            googletag.defineSlot('/22047902240/wifinews/Homepage_bottom_2', ['fluid', [300, 250], [320, 50], [320, 100], [468, 60], [728, 90]], 'div-gpt-ad-6641866-5')
              .defineSizeMapping(mapping1)
              .addService(googletag.pubads());

            googletag.defineSlot('/22047902240/wifinews/homepage_sticky', ['fluid', [320, 50], [320, 100], [300, 250], [468, 60], [728, 90]], 'div-gpt-ad-6641866-6')
              .defineSizeMapping(mapping4)
              .addService(googletag.pubads());

            // Enable services and set targeting
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().setCentering(true);
            googletag.enableServices();

            // Display the ad slots
            googletag.display('div-gpt-ad-6641866-1');
            googletag.display('div-gpt-ad-6641866-2');
            googletag.display('div-gpt-ad-6641866-3');
            googletag.display('div-gpt-ad-6641866-4');
            googletag.display('div-gpt-ad-6641866-5');
            googletag.display('div-gpt-ad-6641866-6');
          });
        `}
      </Script>

      {/* Separate Vignette Ad Script */}
      <Script
        id='gpt-vignette-setup'
        strategy='lazyOnload'
        crossOrigin='anonymous'
      >
        {`
          window.googletag = window.googletag || { cmd: [] };

          googletag.cmd.push(function() {
            const interstitialSlot = googletag.defineOutOfPageSlot(
              "/22047902240/wifinews/homepage_vignette",
              googletag.enums.OutOfPageFormat.INTERSTITIAL
            );

            if (interstitialSlot) {
              interstitialSlot.addService(googletag.pubads()).setConfig({
                interstitial: {
                  triggers: {
                    navBar: true,
                    unhideWindow: true,
                  },
                },
              });
              
              // Refresh the interstitial slot to trigger the ad
              googletag.pubads().refresh([interstitialSlot]);
            }
          });
        `}
      </Script>

      <div className='flex min-h-screen flex-col items-center px-4 py-10'>
        <div className='mb-5 text-center'>
          <ProgressIndicator currentStep={2} totalSteps={3} />
          <p className='mt-2 text-lg font-semibold text-gray-700'>
            View these ads for
          </p>
          <p className='text-xl font-bold text-gray-800'>{timer} seconds</p>
        </div>

        <div className='mb-4 flex justify-center'>
          {isButtonVisible && (
            <a
              href={appendUtmParams('/interstitial')}
              className='flex items-center rounded-lg bg-slate-950 px-6 py-3 font-medium text-white focus:outline-none lg:px-10'
            >
              <FaWifi className='mr-2' /> Connect Now
            </a>
          )}
        </div>

        <div className='my-4 flex w-full items-center justify-center'>
          <div id='div-gpt-ad-6641866-1'></div>
        </div>

        <LearningMaterial />
        <DiscussionForum />
        <div className='my-10'>
          <News />
        </div>

        {/* Sticky Ad */}
        <div className='fixed bottom-12 left-0 right-0 z-[9999] flex justify-center'>
          <div id='div-gpt-ad-6641866-6' className='w-full max-w-[768px]'></div>
        </div>

        <div className='my-4 flex w-full items-center justify-center'>
          <div id='div-gpt-ad-6641866-2'></div>
        </div>
        <div className='my-4 flex w-full items-center justify-center'>
          <div id='div-gpt-ad-6641866-3'></div>
        </div>
        <div className='my-4 flex w-full items-center justify-center'>
          <div id='div-gpt-ad-6641866-4'></div>
        </div>
        <div className='my-4 flex w-full items-center justify-center'>
          <div id='div-gpt-ad-6641866-5'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
