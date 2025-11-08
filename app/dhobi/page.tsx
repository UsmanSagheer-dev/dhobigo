
import { DollarSignIcon } from 'lucide-react'
import DhobiPortalCard from './components/DhobiPortalCard'
import DhobiPortalHero from './components/DhobiPortalHero'
export default function DhobiPortal() {

  return (
    <div className=' flex text-[var(--textColor)] flex-col bg-[var(--background)] p-5 dark:bg-[var(--background)] dark:text-[var(--textColor)]  '>
      <h1  >Dashboard </h1>
      <h1 className='  text-[var(--textSecondary)] dark:text-[var(--textSecondary)] '>ڈیش بورڈ </h1>

      <DhobiPortalHero />
      <div className='flex w-full align-middle justify-between gap-5 flex-wrap  rounded-lg mt-5 flex-col lg:flex-row'>
        <DhobiPortalCard title="Today's Earning" urduTitle="آج کی کمائی" subtitle="$ 250" subtitleColor="text-green-500" icon={<DollarSignIcon />} iconbgColor="bg-green-500" />
        <DhobiPortalCard title="Active Orders" urduTitle="فعال آرڈرز" subtitle="0" subtitleColor="text-blue-500" icon={<DollarSignIcon />} iconbgColor="bg-blue-500" />
      </div>
      <div className='mt-5 p-5 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-lg'>
        <h1>Quick Tips / تجاویز</h1>
        <ul className='list-disc flex flex-col gap-5  ml-5 mt-2 text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>
          <li>Make sure to update your availability status regularly. </li>
          <li>  اپنی دستیابی کی حیثیت کو باقاعدگی سے اپ ڈیٹ کرنا یقینی بنائیں۔</li>
          <li>Respond promptly to new orders to enhance customer satisfaction. </li>
          <li>صارف کی اطمینان کو بڑھانے کے لیے نئے آرڈرز کا فوری جواب دیں۔</li>
          <li>Keep your profile information up to date for better service.</li>
          <li>بہتر خدمت کے لیے اپنی پروفائل کی معلومات کو اپ ٹو ڈیٹ رکھیں۔</li>
        </ul>
      </div>
    </div>
  )
}
