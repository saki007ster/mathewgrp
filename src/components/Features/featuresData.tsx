import { Feature } from "@/types/feature";
import { CubeIcon, UserGroupIcon, SparklesIcon, MapPinIcon, Cog6ToothIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: <CubeIcon />,
    title: "Beloved Flavors",
    paragraph:
      "Indulge in the iconic tastes of Dunkin’ Donuts and Buffalo Wild Wings, crafted to perfection for every craving.",
  },
  {
    id: 2,
    icon: <UserGroupIcon />,
    title: "Community-Focused",
    paragraph:
      "Building connections and creating memories with our family-run business at the heart of every neighborhood.",
  },
  {
    id: 3,
    icon: <SparklesIcon />,
    title: "Exceptional Dining",
    paragraph:
      "Dedicated to delivering high-quality dining experiences that bring people together over great food.",
  },
  {
    id: 4,
    icon: <MapPinIcon />,
    title: "Convenient Locations",
    paragraph:
      "Find our restaurants near you, offering signature dishes and excellent service every time.",
  },
  {
    id: 5,
    icon: <ArchiveBoxIcon />,
    title: "Rich Heritage",
    paragraph:
      "Celebrating a legacy of passion, quality, and community through years of culinary excellence.",
  },
  {
    id: 6,
    icon: <Cog6ToothIcon />,
    title: "More Than a Restaurant",
    paragraph:
      "A place where food, family, and community come together to create lasting moments.",
  },
];
export default featuresData;
