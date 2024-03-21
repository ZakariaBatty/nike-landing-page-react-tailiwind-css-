import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffers = () => {
   return (
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
         <div className="flex-1">
            <img
               src={offer}
               alt="offer"
               width={773}
               height={687}
               className="object-contain w-full"
            />
         </div>
         <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-x-lg">
               <span className="text-coral-red"> Special </span> Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
               beatae assumenda repellendus numquam corporis harum reiciendis
               officiis. Maiores consequatur ipsam quo beatae aperiam,
               perferendis fugit amet a vitae voluptatum! Dolore.
            </p>
            <p className="mt-6 lg:max-w-lg info-text">
               officiis. Maiores consequatur ipsam quo beatae aperiam,
               perferendis fugit amet a vitae voluptatum! Dolore.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
               <Button label="Shop now" iconUrl={arrowRight} />
               <Button
                  label="Learn more"
                  backgroundColor="bg-white"
                  borderColor="border-slate-gray"
                  textColor="text-slate-gray"
               />
            </div>
         </div>
      </section>
   );
};

export default SpecialOffers;
