import ConnectWiFi from '@/app/_components/ConnectWiFi';
import LearningMaterial from '@/app/_components/LearningMaterial';
import DiscussionForum from '@/app/_components/DiscussionForum';
import AdSection from '@/app/_components/Ads/AdSection';
import News from '@/app/(pages)/news/page';

function Interstitial() {
  return (
    <>
      <ConnectWiFi step={3} />
      <AdSection />
      <LearningMaterial />
      <AdSection />
      <DiscussionForum />
      <AdSection />
      <div className='my-10'>
        <News />
      </div>
    </>
  );
}

export default Interstitial;