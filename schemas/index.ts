// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationProduct from './annotations/product'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationProduct,
]

// Document types
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'



// Singleton document types

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types

// Mattressville start

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
import pageContent from './pageContent'
import ctaData from './ctaData'
import ctaSection from './ctaSection'
import contactUsData from './pages/contact-us/contactUsData'
import infoBlocks from './pages/contact-us/infoBlocks'
import matchMakerSeo from './pages/mattressMatchMaker/matchMakerSeo'
import mattressMatchMakerData from './pages/mattressMatchMaker/mattressMatchMakerData'
import matchMakerToolData from './pages/mattressMatchMaker/matchMakerToolData'
import option from './pages/mattressMatchMaker/option'
import matchMakerQuiz from './pages/mattressMatchMaker/matchMakerQuiz'

// Mattressville end
//import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionSize from './objects/customProductOption/size'
import imageWithProductHotspots from './objects/imageWithProductHotspots'
//import linkExternal from './objects/linkExternal'
//import linkInternal from './objects/linkInternal'
import heroCollection from './objects/hero/collection'
import moduleAccordion from './objects/module/accordion'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import moduleImage from './objects/module/image'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/placeholderString'
import productHotspots from './objects/productHotspots'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'


const documents = [collection, product, productVariant, siteSettings,
  headerOfferText,
  page,
  ctaSection,
  blog,
  blogPageContent,
  category,
  blogCategory,
  couponPageContent,
  coupons,homeSlider,
  salesandDeals,testimonials,
  categorySlider,
  brandSlider,]

const objects = [
  customProductOptionSize,
  imageWithProductHotspots,
  heroCollection,
  moduleAccordion,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  moduleImage,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  productHotspots,
  productOption,
  productWithVariant,
  proxyString,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
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
    mattressMatchMakerData,
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
    rightmattress,
    pageContent,
    infoBlocks,
    ctaData,
    contactUsData,
    matchMakerSeo,
    matchMakerToolData,
    option,
    matchMakerQuiz
]

export const schemaTypes = [...annotations, ...documents, ...objects, ...blocks]
