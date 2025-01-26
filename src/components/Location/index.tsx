import SectionTitle from "../Common/SectionTitle";
import SingleLocation from "./SingleLocation";
import locationData from "./locationData";

const Location = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Locations"
          paragraph="Our locations are designed to make you feel at home."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {locationData.map((location) => (
            <div key={location.id} className="w-full">
              <SingleLocation location={location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
