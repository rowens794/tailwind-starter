import Navigation from "../page-components/headers/header-one";
import Hero from "../page-components/heros/hero-three-lt";
import Features from "../page-components/features-sections/GridWithOffsetIcons";
import FeaturesTwo from "../page-components/features-sections/AlternatingImages";
import FeaturesThree from "../page-components/features-sections/GridOnBrand";
import FeaturesFour from "../page-components/features-sections/SimpleThreeColumn";
import CTA from "../page-components/cta-sections/BrandWithScreenshot";
import CTATwo from "../page-components/cta-sections/BrandWithImage";
import CTAThree from "../page-components/cta-sections/Brand";
import Stats from "../page-components/stats-sections/SimpleCard";
import StatsTwo from "../page-components/stats-sections/SimpleOnBrand";
import StatsThree from "../page-components/stats-sections/FadingImageStats";

import Pricing from "../page-components/pricing/SinglePriceWithDetails";
import Pricing2 from "../page-components/pricing/SinglePriceWithFeatures";
import Pricing3 from "../page-components/pricing/ThreeTiers";
import Pricing4 from "../page-components/pricing/TwoTiers";

import SectionHeading from "../page-components/section-headings/BrandedImage";
import SectionHeading2 from "../page-components/section-headings/SimpleCentered";

import Faq1 from "../page-components/faqs/OffsetSupporting";
import Faq2 from "../page-components/faqs/ThreeColumns";
import Newsletter from "../page-components/newletter/BrandedWithDesc";
import Newsletter1 from "../page-components/newletter/SimpleStacked";

import Blog1 from "../page-components/blog-sections/ThreeColumnCards";

import PageNotFound from "../page-components/404/Simple404";
import Footer from "../page-components/footers/SocialOnly";

const themeColor = "indigo";
const secondaryColor = themeColor;

export default function Home() {
  return (
    <div>
      <Navigation colors={[themeColor, secondaryColor]} />
      <Hero color={themeColor} />
      <Features color={themeColor} />
      <Faq1 color={themeColor} />
      <Faq2 color={themeColor} />
      {/* <PageNotFound color={themeColor} /> */}
      <Footer />
    </div>
  );
}
