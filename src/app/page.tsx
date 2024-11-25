import ThreeDCardDemo from "@/components/example/3d-card-demo";
import AnimatedPinDemo from "@/components/example/3d-pin-demo";
import AnimatedModalDemo from "@/components/example/animated-modal-demo";
import AnimatedTestimonialsDemo from "@/components/example/animated-testimonials-demo";
import AnimatedTooltipPreview from "@/components/example/animated-tooltip-demo";
import AppleCardsCarouselDemo from "@/components/example/apple-cards-carousel-demo";
import AuroraBackgroundDemo from "@/components/example/aurora-background-demo";
import BackgroundBeamsDemo from "@/components/example/background-beams-demo";
import BackgroundBeamsWithCollisionDemo from "@/components/example/background-beams-with-collision-demo";
import BackgroundBoxesDemo from "@/components/example/background-boxes-demo";
import BackgroundGradientDemo from "@/components/example/background-gradient-demo";
import {BackgroundLinesDemo} from "@/components/example/background-lines-demo";
import BentoGridDemo from "@/components/example/bento-grid-demo";
import BentoGridThirdDemo from "@/components/example/bento-grid-demo-3";
import BentoGridSecondDemo from "@/components/example/bento-grid-demo-2";
// import CanvasRevealEffectDemo from "@/components/example/canvas-reveal-effect-demo";
import CardHoverEffectDemo from "@/components/example/card-hover-effect-demo";
// import CardSpotlightDemo from "@/components/example/card-spotlight-demo";
import CardStackDemo from "@/components/example/card-stack-demo";
import CardDemo from "@/components/blocks/cards-demo-1";
import CompareDemo from "@/components/example/compare-demo";
import CoverDemo from "@/components/example/cover-demo";
import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import DirectionAwareHoverDemo from "@/components/example/direction-aware-hover-demo";
import EvervaultCardDemo from "@/components/example/evervault-card-demo";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-standard";
// import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
// import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";
import FileUploadDemo from "@/components/example/file-upload-demo";
import FlipWordsDemo from "@/components/example/flip-words-demo";
import FloatingDockDemo from "@/components/example/floating-dock-demo";
import FloatingNavDemo from "@/components/example/floating-navbar-demo";
import FollowingPointerDemo from "@/components/example/following-pointer-demo";
// import GlobeDemo from "@/components/example/globe-demo";
// import GlareCardDemo from "@/components/example/glare-card-demo";
import GlareCardDemo from "@/components/example/glare-card-demo-2";
import GlowingStarsBackgroundCardPreview from "@/components/example/glowing-stars-demo";
import GoogleGeminiEffectDemo from "@/components/example/google-gemini-effect-demo";
import BackgroundGradientAnimationDemo from "@/components/example/background-gradient-animation-demo";
import GridBackgroundDemo from "@/components/example/grid-background-demo";
import GridSmallBackgroundDemo from "@/components/example/grid-small-background-demo";
import DotBackgroundDemo from "@/components/example/dot-background-demo";
import HeroHighlightDemo from "@/components/example/hero-highlight-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import HoverBorderGradientDemo from "@/components/example/hover-border-gradient-demo";
import ImagesSliderDemo from "@/components/example/images-slider-demo";
import InfiniteMovingCardsDemo from "@/components/example/infinite-moving-cards-demo";
import LampDemo from "@/components/example/lamp-demo";
import LayoutGridDemo from "@/components/example/layout-grid-demo";
import LensDemo from "@/components/example/lens-demo";
import LinkPreviewDemo from "@/components/example/link-preview-demo";
import MacbookScrollDemo from "@/components/example/macbook-scroll-demo";
import MeteorsDemo from "@/components/example/meteors-demo";
import MovingBorderDemo from "@/components/example/moving-border-demo";
import MultiStepLoaderDemo from "@/components/example/multi-step-loader-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import ParallaxScrollDemo from "@/components/example/parallax-scroll-demo";
import PlaceholdersAndVanishInputDemo from "@/components/example/placeholders-and-vanish-input-demo";
import ShootingStarsAndStarsBackgroundDemo from "@/components/example/shooting-stars-and-stars-background-demo";
import SidebarDemo from "@/components/example/sidebar-demo";
import SignupFormDemo from "@/components/example/signup-form-demo";
import SparklesPreview from "@/components/example/sparkles-fullpage-demo";
import SpotlightPreview from "@/components/example/spotlight-demo";
import StickyScrollRevealDemo from "@/components/example/sticky-scroll-reveal-demo";
import SVGMaskEffectDemo from "@/components/example/svg-mask-effect-demo";
import TabsDemo from "@/components/example/tabs-demo";
import TailwindcssButtons from "@/components/example/tailwindcss-buttons-demo";
import TextGenerateEffectDemo from "@/components/example/text-generate-effect-demo";
import TextHoverEffectDemo from "@/components/example/text-hover-effect-demo";
import TextRevealCardPreview from "@/components/example/text-reveal-card-demo";
import TimelineDemo from "@/components/example/timeline-demo";
import TracingBeamDemo from "@/components/example/tracing-beam-demo";
import TypewriterEffectSmoothDemo from "@/components/example/typewriter-effect-demo-1";
import VortexDemo from "@/components/example/vortex-demo";
import VortexDemoSecond from "@/components/example/vortex-demo-2";
import WobbleCardDemo from "@/components/example/wobble-card-demo";
// import TextGenerateEffectDemo from "@/components/example/text-generate-effect-demo-2";
// import SparklesPreview from "@/components/example/sparkles-demo";
// import SidebarDemo from "@/components/example/sidebar-demo-2";
// import CardDemo from "@/components/blocks/cards-demo-2";
// import CardDemo from "@/components/blocks/cards-demo-3";


export default function Home() {
  return (
      <div className="container m-auto my-10 text-center">
          <div>
              <h2 className="text-2xl my-10">Background Lines</h2>
              <BackgroundLinesDemo/>
          </div>

          <div>
              <h2 className="text-2xl my-10">NavbarDemo</h2>
              <div className="bg-gray-200 py-2">
                  <NavbarDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl">Threed Card Demo</h2>
              <ThreeDCardDemo/>
          </div>
          <div>
              <h2 className="text-2xl">Animated Pin Demo</h2>
              <AnimatedPinDemo/>
          </div>
          <div>
              <h2 className="text-2xl">Animated Modal</h2>
              <AnimatedModalDemo/>
          </div>
          <div>
              <h2 className="text-2xl">Animated Testimonials</h2>
              <AnimatedTestimonialsDemo/>
          </div>

          <div>
              <h2 className="text-2xl my-10">Animated Tooltip</h2>
              <AnimatedTooltipPreview/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Apple Cards Carousel</h2>
              <AppleCardsCarouselDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Aurora Background</h2>
              <AuroraBackgroundDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Background Beams</h2>
              <BackgroundBeamsDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Background Beams With Collision</h2>
              <BackgroundBeamsWithCollisionDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Background Boxes</h2>
              <BackgroundBoxesDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Background Gradient</h2>
              <BackgroundGradientDemo/>
          </div>
          <div>
              <h2 className="text-2xl my-10">Bento Grid</h2>
              <BentoGridDemo/>
              <h2 className="text-2xl my-10">Populated with Header and Content</h2>
              <BentoGridThirdDemo/>
              <h2 className="text-2xl my-10">Column Grid</h2>
              <BentoGridSecondDemo/>
          </div>

          {/*<div>*/}
          {/*    <h2 className="text-2xl my-10">Canvas Reveal Effect</h2>*/}
          {/*    <CanvasRevealEffectDemo/>*/}
          {/*</div>*/}

          <div>
              <h2 className="text-2xl my-10">Hover Effect</h2>
              <CardHoverEffectDemo/>
          </div>
          {/*<div>*/}
          {/*    <h2 className="text-2xl my-10">Card Spotlight</h2>*/}
          {/*    <CardSpotlightDemo/>*/}
          {/*</div>*/}

          <div>
              <h2 className="text-2xl my-10">Card Stack</h2>
              <CardStackDemo/>
          </div>

          <div>
              <h2 className="text-2xl my-10">Feature Block Animated Card</h2>
              <CardDemo/>
          </div>

          <div>
              <h2 className="text-2xl my-10">Compare</h2>
              <CompareDemo/>
          </div>

          <div>
              <h2 className="text-2xl my-10">CoverDemo</h2>
              <div className="bg-gray-100">
                  <CoverDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Hero Scroll Demo</h2>
              <div className="bg-gray-100">
                  <HeroScrollDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Direction Aware Hover Demo</h2>
              <div className="bg-gray-100">
                  <DirectionAwareHoverDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Evervault Card Demo</h2>
              <div className="bg-gray-200">
                  <EvervaultCardDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Expandable Card Demo</h2>
              <div className="bg-gray-200 py-2">
                  <ExpandableCardDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">FeaturesSectionDemo</h2>
              <div className="bg-gray-200 py-2">
                  <FeaturesSectionDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">File Upload Demo</h2>
              <div className="bg-gray-200 py-2">
                  <FileUploadDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Flip Words Demo</h2>
              <div className="bg-gray-200 py-2">
                  <FlipWordsDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Floating Dock Demo</h2>
              <div className="bg-gray-200 py-2">
                  <FloatingDockDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Floating Nav Demo</h2>
              <div className="bg-gray-200 py-2">
                  <FloatingNavDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Following Pointer Demo</h2>
              <div className="bg-gray-200 py-2">
                  <FollowingPointerDemo/>
              </div>
          </div>

          {/*<div>*/}
          {/*    <h2 className="text-2xl my-10">Globe Demo</h2>*/}
          {/*    <div className="bg-gray-200 py-2">*/}
          {/*        <GlobeDemo/>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <div>
              <h2 className="text-2xl my-10">Glare Card Demo</h2>
              <div className="bg-gray-200 py-2">
                  <GlareCardDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Glowing Stars Background Card Preview</h2>
              <div className="bg-gray-200 py-2">
                  <GlowingStarsBackgroundCardPreview/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Google Gemini Effect Demo</h2>
              <div className="bg-gray-200 py-2">
                  <GoogleGeminiEffectDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Background Gradient Animation Demo</h2>
              <div className="bg-gray-200 py-2">
                  <BackgroundGradientAnimationDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Grid Background Demo</h2>
              <div className="bg-gray-200 py-2">
                  <GridBackgroundDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Grid Small Background Demo</h2>
              <div className="bg-gray-200 py-2">
                  <GridSmallBackgroundDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Dot Background Demo</h2>
              <div className="bg-gray-200 py-2">
                  <DotBackgroundDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Hero High light Demo</h2>
              <div className="bg-gray-200 py-2">
                  <HeroHighlightDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Hero Parallax Demo</h2>
              <div className="bg-gray-200 py-2">
                  <HeroParallaxDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Hover Border Gradient Demo</h2>
              <div className="bg-gray-200 py-2">
                  <HoverBorderGradientDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Images Slider Demo</h2>
              <div className="bg-gray-200 py-2">
                  <ImagesSliderDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Infinite Moving Cards Demo</h2>
              <div className="bg-gray-200 py-2">
                  <InfiniteMovingCardsDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Lamp Demo</h2>
              <div className="bg-gray-200 py-2">
                  <LampDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Layout Grid Demo</h2>
              <div className="bg-gray-200 py-2">
                  <LayoutGridDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Lens Demo</h2>
              <div className="bg-gray-200 py-2">
                  <LensDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Link Preview Demo</h2>
              <div className="bg-gray-200 py-2">
                  <LinkPreviewDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Macbook Scroll Demo</h2>
              <div className="bg-gray-200 py-2">
                  <MacbookScrollDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Meteors Demo</h2>
              <div className="bg-gray-200 py-2">
                  <MeteorsDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Moving Border Demo</h2>
              <div className="bg-gray-200 py-2">
                  <MovingBorderDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">MultiStep Loader Demo</h2>
              <div className="bg-gray-200 py-2">
                  <MultiStepLoaderDemo/>
              </div>
          </div>


          <div>
              <h2 className="text-2xl my-10">Parallax Scroll Demo</h2>
              <div className="bg-gray-200 py-2">
                  <ParallaxScrollDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Placeholders And Vanish Input Demo</h2>
              <div className="bg-gray-200 py-2">
                  <PlaceholdersAndVanishInputDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Shooting Stars And Stars Background Demo</h2>
              <div className="bg-gray-200 py-2">
                  <ShootingStarsAndStarsBackgroundDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Sidebar Demo</h2>
              <div className="bg-gray-200 py-2">
                  <SidebarDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Signup Form Demo</h2>
              <div className="bg-gray-200 py-2">
                  <SignupFormDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Sparkles Preview</h2>
              <div className="bg-gray-200 py-2">
                  <SparklesPreview/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Spotlight Preview</h2>
              <div className="bg-gray-200 py-2">
                  <SpotlightPreview/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Sticky Scroll Reveal Demo</h2>
              <div className="bg-gray-200 py-2">
                  <StickyScrollRevealDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">SVG MaskEffect Demo</h2>
              <div className="bg-gray-200 py-2">
                  <SVGMaskEffectDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Tabs Demo</h2>
              <div className="bg-gray-200 py-2">
                  <TabsDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Tailwindcss Buttons</h2>
              <div className="bg-gray-200 py-2">
                  <TailwindcssButtons/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Text Generate Effect Demo</h2>
              <div className="bg-gray-200 py-2">
                  <TextGenerateEffectDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Text Hover Effect Demo</h2>
              <div className="bg-gray-300 py-2">
                  <TextHoverEffectDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Text Reveal Card Preview</h2>
              <div className="bg-gray-300 py-2">
                  <TextRevealCardPreview/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Timeline Demo</h2>
              <div className="bg-gray-200 py-2">
                  <TimelineDemo/>
              </div>
          </div>

          {/*<div>*/}
          {/*    <h2 className="text-2xl my-10">Tracing Beam Demo</h2>*/}
          {/*    <div className="bg-gray-200 py-2">*/}
          {/*        <TracingBeamDemo/>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <div>
              <h2 className="text-2xl my-10">TypewriterEffectSmoothDemo</h2>
              <div className="bg-gray-200 py-2">
                  <TypewriterEffectSmoothDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">VortexDemo</h2>
              <div className="bg-gray-200 py-2">
                  <VortexDemo/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Vortex Demo Second</h2>
              <div className="bg-gray-200 py-2">
                  <VortexDemoSecond/>
              </div>
          </div>

          <div>
              <h2 className="text-2xl my-10">Wobble Card Demo</h2>
              <div className="bg-gray-200 py-2">
                  <WobbleCardDemo/>
              </div>
          </div>


      </div>
  );
}
