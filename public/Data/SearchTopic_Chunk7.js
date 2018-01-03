define({"474":{i:0.00107371761734729,u:"../enablement/store_administration_guide/category/bg_about_category.html",a:"About Categories Managing volumes of products requires that you be able to group together items under specific criteria. With Categories, you can group and build hierarchies of products by category. This is how we create a structure to display products by, for example, Electronics. Under this ...",t:"Spryker OS"},"475":{i:0.00801760063962591,u:"../enablement/store_administration_guide/category/bg_ui_category.html",a:"A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. Category assigning A product can be assigned to one or more product categories. Next, we ...",t:"Category"},"476":{i:0.000789493542107771,u:"../enablement/store_administration_guide/cms/bg_cms.html",a:"In ZED Admin UI there is a dedicated section that enables you to create pages, blocks, as well as configure URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following sections: CMS - ...",t:"CMS"},"477":{i:0.00111067456228587,u:"../enablement/store_administration_guide/cms/cms_pages/cms_pages.html",a:"CMS - Pages In Pages section you can create new CMS pages, publish, view, edit them as well as manage all their changes with the versioning functionality.",t:"CMS - Pages"},"478":{i:0.00574952918610852,u:"../enablement/store_administration_guide/cms/cms_pages/cms_creating_new_page.html",a:"To demonstrate how to add a new page in Yves using the CMS, we will create a page with contact information in the demo shop. Adding a Template For the New ‘Contact Us’ Page Create a new Twig template under the src/Pyz/Yves/Cms/Theme/default/template/ folder. We’ll call it contact_page.twig and it ...",t:"CMS - Creating a New Page"},"479":{i:0.00374841080456558,u:"../enablement/store_administration_guide/cms/cms_pages/cms_url_redirects.html",a:" CMS - URL Redirects URL redirects can be configured from the CMS interface. You must specify the URL you need to redirect, the new URL and the status code which plays a major role for search engines.   See also: CMS - Creating a New Page CMS - Preview Draft Page CMS Block CMS Glossary  CMS ...",t:" CMS - URL Redirects"},"480":{i:0.00373659436586832,u:"../enablement/store_administration_guide/cms/cms_pages/cms_versions.html",a:"With CMS versioning, you can manage all changes for a CMS page.  You can compare CMS versions, rollback or discard changes to a page.  To view versioning for a CMS page, click Version History from the top of the page. Rollback to CMS Version By selecting previous CMS versions, you will be able to ...",t:"CMS Versioning"},"481":{i:0.0103554059602834,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block.html",a:"How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two extensions\n ...",t:"CMS Block"},"482":{i:0.00505849709761298,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block_category_connector.html",a:"Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. We want to apply the ...",t:"CMS Block Category Connector"},"483":{i:0.00505849709761298,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block_product_connector.html",a:"Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"484":{i:0.000656905925719194,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector.html",a:"\n            The Customer User Connector feature allows to connect a customer to 1 Zed user.\n         This feature is supported by 2 modules: CustomerUserConnector module:\n                Defines database schema requirements and CustomerTransferUsernameExpanderPlugin plugin to populate customer\u0027s ...",t:"Customer User Connector"},"485":{i:0.00144497278650166,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_feature_integration.html",a:"Prerequisites To prepare your project to work with Customer User Connector: Require the Customer User Connector modules in your composer by running\n                 composer require spryker/customer-user-connector composer require spryker/customer-user-connector-gui \n                Install the ...",t:"Feature Integration - Customer User Connector"},"486":{i:0.000936097893231174,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_under_the_hood.html",a:"Under the Hood - Customer User Connector Database Schema A new field (fk_user) is added to spy_customer to make it possible to connect a customer to 1 Zed user.   Last review date: Sep. 22, 2017 ",t:"Under the Hood - Customer User Connector"},"487":{i:0.000789493542107771,u:"../enablement/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"488":{i:0.00376301367554781,u:"../enablement/store_administration_guide/search_and_filters/search_and_filters.html",a:"Having a well-thought-out product search is a huge opportunity to provide an amazing shopping experience. It is one of the primary ways you can help customers find what they’re looking for. In our Zed Admin UI we have features that enable you to control search and filtering preferences and customize ...",t:"Search and Filters"},"489":{i:0.00441256306617994,u:"../enablement/store_administration_guide/search_and_filters/category_filters/category_filters.html",a:"An essential part of organizing products in a store is to arrange items into  categories . Category Filters allow you to refine and customize the way products are listed when you search by category. With Category Filters you can improve and optimize how visitors to the store locate products. When a ...",t:"Category Filters Overview"},"490":{i:0.00423002218159339,u:"../enablement/store_administration_guide/search_and_filters/category_filters/gui_category_filters.html",a:"To access the Category Filters page, from the Administration Interface\u0027s main menu (on the left), click Search and Filters and then Category Filters. Category filters page has two 2 major areas: The Root nodes list The Category tree The Category Filters page consists of the following elements: ",t:"The Category Filters Page"},"491":{i:0.00482937475780804,u:"../enablement/store_administration_guide/search_and_filters/category_filters/creating_managing_category_filters.html",a:"In the following section we will show you how to  create a Category filter set and customize filter behavior. Creating a  Filter Set To create a new filter set: Go to the Search and Filters and click Category Filters. Select the root category\nfrom the Root nodes list table. \n                The ...",t:"Creating and Managing Category Filters"},"492":{i:0.00181232237521927,u:"../enablement/store_administration_guide/discounts/bg_discounts.html",a:"In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only if the linked decision rules are satisfied and if it’s active and valid. Cart Rules This ...",t:"Discounts"},"493":{i:0.00104204474221922,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"494":{i:0.00104204474221922,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},"495":{i:0.00181232237521927,u:"../enablement/store_administration_guide/discounts/bg_discounts_2_0.html",a:"The latest version is  Discounts In Spryker, there are two types of discounts that can be defined : Cart Rules This discount is contained in the cart and doesn’t need any action to be performed by the customer. This discount is automatically applied if the decision rules attached to it are being ...",t:"Discounts 2.0"},"496":{i:0.00284542340119468,u:"../enablement/store_administration_guide/navigation/navigation_overview.html",a:"One of the first places that your customer goes to, once in your online shop, is the main navigation. The main navigation helps to guide your customer to the most relevant place. You will always want to build the most appealing and neat path for your customer to find her/his way. In the end of the ...",t:"Navigation Overview"},"497":{i:0.00284542340119468,u:"../enablement/store_administration_guide/navigation/graphic_user_interface_navigation.html",a:"To access the Navigation page in the ZED Administration Interface, go to the main menu (on the left) and click Navigation. Navigation page is visually represented in 4 major areas: Create Navigation button List of navigation elements Navigation tree frame Create/Update child node frame In the table ...",t:"Graphic User Interface - Navigation"},"498":{i:0.00284542340119468,u:"../enablement/store_administration_guide/navigation/creating_managing_navigation_tree.html",a:"The following section describes how to add and manage a new navigation element and its nodes. Creating a New Navigation To create a new navigation element: Go to the Navigation section and click Create Navigation button. Specify the following: Name - give your navigation tree a name Key - specify ...",t:"Creating and Managing a Navigation Tree"},"499":{i:0.00488568099151195,u:"../enablement/store_administration_guide/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the Zed Admin UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: ...",t:"Shipment"},"500":{i:0.0052606858403604,u:"../enablement/store_administration_guide/bg_user_control.html",a:"The purpose of the users control module is to manage back-office users creation and the associated roles and assignment to groups. Create a Role Create a Group Create a User Next, we will help you create a new role, a group that has that role associated and a user that we want to assign to that ...",t:"User Control"},"501":{i:0.000675518723553326,u:"../enablement/videos___webinars/videos.html",a:"We believe that good technology doesn’t stop with the code. You also need the examples and information to help you convert your vision into reality. In this section you can check out our videos for more information about Spryker OS. You can also send us direct requests for videos and topics to  ...",t:"Spryker Videos"},"502":{i:0.000691380036395036,u:"../enablement/videos___webinars/demo_shop.html",a:"Demo Shop This video is a short overview of the Spryker Demo Shop, our out-of-the-box online shop boilerplate. ",t:"Demo Shop"},"503":{i:0.000691380036395036,u:"../enablement/videos___webinars/product_management.html",a:"This video demonstrates how products are managed in Spryker. The video reviews product structure discussing concepts such as abstract and concrete products and their benefits. Then we review product features such as: Product Options, Product Labels, Product Relations, Product Sets and Product ...",t:"Product Management"},"504":{i:0.000691380036395036,u:"../enablement/videos___webinars/product_groups.html",a:"Product Groups This video shows how to create product groups. Product Groups allow you to display an item and its different variants such as different shoe colors or different t-shirt sizes. ",t:"Product Groups"},"505":{i:0.000691380036395036,u:"../enablement/videos___webinars/product_sets.html",a:"Product Sets This video shows how product sets are managed in Spryker. The video uses the Spryker Demo Shop to review how products are displayed and bought as a set and how sets are managed and configured in the Administration Interface.",t:"Product Sets"},"506":{i:0.000656905925719194,u:"../enablement/videos___webinars/category_management.html",a:"Category Management This video shows how we use Categories to structure products for displaying and filtering products. We use the Demo Shop and the Spryker Administration Interface to demonstrate this feature.",t:"Category Management"},"507":{i:0.000691380036395036,u:"../enablement/videos___webinars/cms_pages.html",a:"CMS Pages This video shows how CMS content is displayed and managed in Spryker. We use the Demo Shop to demonstrate this feature.",t:"CMS Pages"},"508":{i:0.000691380036395036,u:"../enablement/videos___webinars/cms_blocks.html",a:"CMS Blocks This video shows how CMS blocks are used to add complementary content to store pages. We use the Demo Shop to demonstrate this feature.",t:"CMS Blocks"},"509":{i:0.000691380036395036,u:"../enablement/videos___webinars/navigation.html",a:"Navigation This video shows how Navigation is used and created We use the Demo Shop to demonstrate this feature.",t:"Navigation"},"510":{i:0.000691380036395036,u:"../enablement/videos___webinars/wishlists.html",a:"Wishlists This video shows our demo shop implementation of Wishlists. ",t:"Wishlists"},"511":{i:0.00781525256375563,u:"../disclaimer.html",a:"Urheber \u0026 Haftungsausschluss für Publikationen Veröffentlicht in Berlin von der: Spryker Systems GmbH Julie-Wolfthorn-Strasse 1 10115 Berlin – DEUTSCHLAND eMail:  info@spryker.com Telefon: +49 (0) 30 208498351 Der Inhalt dieser Publikation ist unverbindlich und dient ausschließlich ...",t:"Disclaimer"},"512":{i:0.00193372487537154,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_paypal_express_checkout.html",a:"The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayPal Express Checkout Payment - Payone - 1.0"},"513":{i:0.00146559908012935,u:"../developing_with_spryker/module_guide/products/product_option_1.html",a:"This module manages the product options. The product options are product additions that can be sold with the actual product. Each product abstract can have multiple product option groups attached. Each product option value has a price, which changes the total price of the selected product. Option ...",t:"Product Option - Version 1"},"514":{i:0.00123152409396165,u:"../developing_with_spryker/module_guide/products/product/product_options_1.html",a:"\n            Product options allow to configure a product further. You can define option types and each option type can have 1 to n option values.\n            Each option value has an associated price.\n             Example \n                    You want to sell a piece of artwork as a product ...",t:"Product Options - Version 1"},"515":{i:0.00162765276706068,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_v1_0.html",a:"Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n     Online Transfer Paypal ...",t:"Payment Integration - BS Payone - 1.0"},"516":{i:0.000656905925719194,u:"../first_name.html",a:"first name Delete this text and replace it with your own content.",t:"first name"},"517":{i:0.000656905925719194,u:"../index.html",a:"Spryker Knowledge Planning to use Spryker? All you need to know about using and setting up the Spryker Commerce Operating System. Understanding Spryker Get to know what Spryker is and how you can easily adopt the Commerce OS for building your\n                                    e-commerce presence. ...",t:"Spryker Academy"},"518":{i:0.00147022751113926,u:"../developing_with_spryker/module_guide/discount/discount_2_0.html",a:"The latest version of this module can be found here  Discount The Discount Module is responsible of managing discounts in the Spryker OS. The schema below illustrates how discounts are modeled in Zed’s database. Discount Types There are two types of discounts: fixed amount discount ( e.g. 10€ off) ...",t:"Discount - Version 2.0"},"519":{i:0.00083417232256428,u:"../developing_with_spryker/module_guide/yves_components/search/search_3_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant ...",t:"Search 3.0"},"520":{i:0.00198180125386134,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v1_0/integration_arvato_rss_1.0.html",a:"The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 1.0"},"521":{i:0.000855911016970428,u:"../enablement/tutorials_and_howtos/howtos/ht_add_new_shipment_method.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method"},"522":{i:0.00153361279806723,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation_1.html",a:"Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation 1.*"},"523":{i:0.00311421114337139,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v1_0/integration_arvato_rss_risk_check_1.0.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services 1.0"},});