import { Phone } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Greensboro NC Trusted Gutter Cleaning Services for Your Peace of Mind
            </h2>
            <p className="text-gray-600 mb-6">
              Protect your home with our professional gutter cleaning services in Greensboro, NC. If you've been searching for "gutter cleaning services near me," look no further! Regular gutter maintenance prevents costly structural damage, foundation issues, and landscape erosion caused by water overflow. Clogged gutters can lead to mold growth, ice buildup, and attract pests like rodents and mosquitoes, compromising your home's safety and comfort.
            </p>
            <p className="text-gray-600 mb-6">
              Experts recommend cleaning your gutters at least twice a year to avoid these risks. Don't wait until damage occurs—schedule your cleaning today! Ask about our seasonal maintenance plans to keep your gutters in top shape year-round. Trust us to safeguard your home with reliable and hassle-free service.
            </p>
            <div className="text-center">
              <a 
                href="tel:+13369650766"
                className="inline-flex items-center text-green-800 hover:text-green-700 font-semibold bg-green-100 px-6 py-3 rounded-full transition-all hover:bg-green-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call (336) 965-0766</span>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="\Gutter-Cleaning-Pros.jpeg"
              alt="Professional gutter cleaning in action"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}