// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import siteSettings from './siteSettings';
import blockContent from './blockContent';
import socialicons from './socialicons';
import hero from './hero';
import callToAction from './callToAction';
import textWithIllustration from './textWithIllustration';
import page from './page';
import headerOfferText from './headerOfferText';
import homeSlider from './homeSlider';
//import homeBannerSidebar from './homeBannerSidebar';
import salesandDeals from './salesandDeals';
import categorySlider from './categorySlider';
import brandSlider from './brandSlider';
//import homeShopbyCategories from './homeShopbyCategories';
import testimonials from './testimonials';
import brandLogo from './brandLogo';
//import brand from './brands';
import mainmenu from './header/object/mainMenu';
import subMenu from './header/object/subMenu';
import topHeader from './header/object/topHeader';
import menuItems from './header/object/menuItems';
import megaMenu from './header/object/megaMenu';
import topFooter from './footer/object/topFooter';
import about from './footer/object/about';
import brandType from './footer/object/brandType';
import brands from './footer/object/brands';
import stylesTypes from './footer/object/stylesTypes';
import styleType from './footer/object/styleType';
import location from './footer/object/location';
import areas from './footer/object/areas';
import menu from './footer/object/menu';
import bottomFooter from './footer/object/bottomFooter';
import socialMedia from './footer/object/socialMedia';
import paySafe from './footer/object/paySafe';
import tabletAbout from './footer/object/tablet/tabletAbout';
import accordionData from './footer/object/tablet/accordionData';
import brandsmenu from './footer/object/tablet/brandsmenu';
import brandTypemenu from './footer/object/tablet/brandTypemenu';
import locationmenu from './footer/object/tablet/locationmenu';
import stylesTypesmenu from './footer/object/tablet/stylesTypesmenu';
import styleTypemenu from './footer/object/tablet/styleTypemenu';
import tabletFooter from './footer/object/tablet/tabletFooter';
import menues from './footer/object/tablet/menues';
import bannerSidebar from './bannerSidebar'
import homepageData from './homepageData';
import testimonialsData from './testimonialsData'
import newsletter from './newsletter'
import explore from './homepage/explore'
import trendingEntry from './homepage/trendingEntry'
import dealsEntry from './homepage/dealsEntry'
import blog from './blogs/blog'
import blogPageContent from './blogs/blogPageContent'
import category from './blogs/category'
import blogCategory from './blogs/blogCategory'
import coupons from './coupons'
import tags from './tags'
import flyerPageContent from './flyerPageContent'
import flyers from './flyers'
import flyercta from './flyercta'
import couponCategories from './coupons/couponCategories'
import couponPageContent from './coupons/couponPageContent'
import blogmainData from './blogs/blogmainData'
import blogSeoData from './blogs/blogSeoData'
import blogSocialIcon from './blogs/blogSocialIcon'
import whyMVmainData from './pages/whyMattressville/whyMVmainData'
import seoData from './pages/whyMattressville/seoData'
import whyMVbannerSection from './pages/whyMattressville/whyMVbannerSection'
import whyMViconset from './pages/whyMattressville/whyMViconset'
import whyMVqualityMattressBrand from './pages/whyMattressville/whyMVqualityMattressBrand'
import whyMVcards from './pages/whyMattressville/whyMVcards'
import whyMVfaqs from './pages/whyMattressville/whyMVfaqs'
import whyreasonablePrices from './pages/whyMattressville/whyreasonablePrices'
import whyMVretailers from './pages/whyMattressville/whyMVretailers'
import whyMVmattressville from './pages/whyMattressville/whyMVmattressville'
import whyMVoutletStores from './pages/whyMattressville/whyMVoutletStores'
import whyMVbusinessStrategy from './pages/whyMattressville/whyMVbusinessStrategy'
import strategyCards from './pages/whyMattressville/strategyCards'
import totalSaving from './pages/whyMattressville/totalSaving'
import mattressGuideData from './pages/mattressFoundation/mattressGuideData'
import mattressFoundation from './pages/mattressFoundation/mattressFoundation'
import mattressSizes from './pages/mattressBuyingGuide/mattressSizes'
import choosingrightmattress from './pages/choosingTheRightMattress/choosingrightmattress'
import innerspring from './pages/choosingTheRightMattress/innerspring'
import latex from './pages/choosingTheRightMattress/latex'
import memoryFoam from './pages/choosingTheRightMattress/memoryFoam'
import pocketCoil from './pages/choosingTheRightMattress/pocketCoil'
import sleepStyle from './pages/choosingTheRightMattress/sleepStyle'
import pros from './pages/choosingTheRightMattress/pros'
import cons from './pages/choosingTheRightMattress/cons'
import rightmattress from './pages/choosingTheRightMattress/rightmattress'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    headerOfferText,
    page,
    blog,
    blogPageContent,
    category,
    blogCategory,
    couponPageContent,
    coupons,
    //homeBannerSidebar,
    //brand,
    homeSlider,
    salesandDeals,
    //homeShopbyCategories,
    testimonials,
    categorySlider,
    brandSlider,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    socialicons,
    hero,
    callToAction,
    textWithIllustration,
    brandLogo,
    mainmenu,
    subMenu,
    menuItems,
    megaMenu,
    topFooter,
    about,
    brandType,
    brands,
    stylesTypes,
    styleType,
    location,
    areas,
    bottomFooter,
    menu,
    paySafe,
    socialMedia,
    accordionData,
    tabletAbout,
    brandsmenu,
    brandTypemenu,
    locationmenu,
    stylesTypesmenu,
    styleTypemenu,
    tabletFooter,
    menues,
    topHeader,
    bannerSidebar,
    homepageData,
    testimonialsData,
    newsletter,
    explore,
    dealsEntry,
    trendingEntry,
    tags,
    flyerPageContent,
    flyers,
    flyercta,
    couponCategories,
    blogmainData,
    blogSeoData,
    blogSocialIcon,
    seoData,
    whyMVmainData,
    whyMVbannerSection,
    whyMViconset,
    whyMVqualityMattressBrand,
    whyMVcards,
    whyMVfaqs,
    whyreasonablePrices,
    whyMVretailers,
    whyMVmattressville,
    whyMVoutletStores,
    whyMVbusinessStrategy,
    strategyCards,
    totalSaving,
    mattressGuideData,
    mattressFoundation,
    mattressSizes,
    choosingrightmattress,
    innerspring,
    latex,
    memoryFoam,
    pocketCoil,
    sleepStyle,
    pros,
    cons,
    rightmattress
  ]),
});
