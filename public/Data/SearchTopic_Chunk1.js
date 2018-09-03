define({"73":{i:0.000554422727851834,u:"../developing_with_spryker/module_guide/checkout_process/checkout/checkout_step_interface.html",a:" #\n  \u003c?php\n  interface StepInterface\n  {\n\t/**\n\t * Requirements for this step, return true when satisfied.\n\t *\n\t * @param QuoteTransfer $quoteTransfer\n\t *\n\t * @return bool\n\t */\n\tpublic function preCondition(QuoteTransfer $quoteTransfer);\n\t/**\n\t * Require input, should we render view with form or just ...",t:"Checkout Step Interface"},"74":{i:0.000554422727851834,u:"../developing_with_spryker/module_guide/checkout_process/checkout/checkout_step_ext_red_interface.html",a:" #\n  \u003c?php\n  interface StepWithExternalRedirectInterface extends StepInterface\n  {\n\t/**\n\t * Return external redirect url, when redirect occurs not within same application. Used after execute.\n\t *\n\t * @return string\n\t */\n\tpublic function getExternalRedirectUrl();\n  }",t:"Step with External Redirect Interface - Checkout"},"75":{i:0.00699409447953959,u:"../developing_with_spryker/module_guide/checkout_process/checkout/checkout_placing_the_order.html",a:"After the customer clicks the submit button during the SummaryStep, the PlaceOrderStep is started. This step takes the QuoteTransfer` and starts the checkout workflow to store the order into the system. Zed Checkout modulecontains a number of plugins where you can add additional behavior, check ...",t:"Placing the Order — Checkout"},"76":{i:0.00134888533572692,u:"../developing_with_spryker/module_guide/checkout_process/oms/oms.html",a:"Many start ups in the eCommerce world have gone through an automation approach of their order processing as described by Fabian Wesner in his blog post ( Introduction to Automated Order Management for E-commerce Startups ). They have started highly manually: every step from order to fulfillment was ...",t:"OMS"},"77":{i:0.00162149965043525,u:"../developing_with_spryker/module_guide/checkout_process/oms/patterns.html",a:"Process Patterns The  State Machine Cook Book  describes how to build a state machine with the elements state, transition and event. However there are some recurring design problems that are needed in many processes. In this article common problems and their solution with state machine snippets are ...",t:"State Machine Patterns"},"78":{i:0.00499985549954937,u:"../developing_with_spryker/module_guide/checkout_process/refund/refund.html",a:"Refund Refund manages the retour refund process. Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates refundable amount for the sales order saveRefund(RefundTransfer $refundTransfer) persists the calculated refund ...",t:"Refund"},"79":{i:0.00329057209455085,u:"../developing_with_spryker/module_guide/checkout_process/refund/refund_2_0.html",a:"The latest version of this module can be found here  Refund The Refund module manages the retours refund process. Overview Using  Refund  Extending  Refund  Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates ...",t:"Refund 2.0"},"80":{i:0.0105817096374825,u:"../developing_with_spryker/module_guide/checkout_process/sales/sales.html",a:"The Sales module provides the order management functionality. The functionality is obtained through the ZED UI that renders orders with orders details and the Client API to get customer orders. Getting Totals for Order To get the Order with totals, the facade method ...",t:"Sales"},"81":{i:0.00946982749552109,u:"../developing_with_spryker/module_guide/checkout_process/sales/sales_5_0.html",a:"The latest version of this module can be found here  Sales Getting Totals for Order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the discount ...",t:"Sales 5.0"},"82":{i:0.00365179867803594,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment.html",a:"One of the significant challenges web shop owners face, is choosing the best ways to ship products to their customers. It is necessary to account for the huge variety of possible shipping carriers - companies that provide shipping services (e.g. DHL, FedEx) as well as shipping methods - shipping ...",t:"Shipment"},"83":{i:0.00300059828435143,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment_overview_2.html",a:"The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The schema below shows how the sales order and shipment method entities are modeled in the database: A sales order has an associated sales shipment entity which has an associated sales ...",t:"Shipment Module Overview"},"84":{i:0.00361217163885925,u:"../developing_with_spryker/module_guide/checkout_process/shipment/shipment_methods_plugins.html",a:"The main concerns regarding shipping services are : availability : is the shipping method available to deliver the order? price : how is the delivery price calculated ? delivery time : when will the order be delivered ? For each of these concerns, an optional plugin is linked to each shipping method ...",t:"Shipment Methods Plugins"},"85":{i:0.00168408969747573,u:"../developing_with_spryker/module_guide/checkout_process/cart.html",a:"Our Cart consists of a few components in Yves and Zed. The Yves components  create the cart requests and persist the cart into the session. The Zed components  persist the data into the database and expand the items with data obtained from plugins. Cart operations are invoked in CartClient, which ...",t:"Cart"},"86":{i:0.00141060145578423,u:"../developing_with_spryker/module_guide/checkout_process/payment.html",a:"\nMultiple Payments\n Spryker enables to have multiple payments per checkout, payments are stored in QuoteTransfer::payments and persisted when CheckoutClient::placeOrder is called in last checkout step. \nEach payment method must provide payment amount it shares from order grand total. This amount is ...",t:"Payment"},"87":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/checkout_process/dummy_payment.html",a:"Do not use this code for production but you can use it as a starting point for new payment integrations. What is the DummyPayment for: it brings a simple state machine it shows how to integrate payment into the system it shows how to handle refunds it allows to test checkout process in several ways ...",t:"Dummy Payment"},"88":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/cms/content_management_system.html",a:"The CMS (content management system)  is a WYSIWYG-based tool for publishing, editing and changing the content displayed in the shop interface.\n        The CMS includes full page, partial page and content creation. Pre-defined templates help you to quickly deliver and support branded pages with a ...",t:"CMS"},"89":{i:0.00109822990778551,u:"../developing_with_spryker/module_guide/cms/cms_glossary.html",a:"CMS Glossary    See also: CMS - Creating a New Page Preview Draft Page CMS Block CMS Versioning Defining Maximum Size of Content Fields  CMS - URL Redirects   Last review date: Sep. 20th, 2017\n",t:"CMS Glossary "},"90":{i:0.00305476775786699,u:"../developing_with_spryker/module_guide/cms/cms_block/cms_block.html",a:"Embed custom blocks of content into your shop. Blocks come with full management and control capabilities. You can create connections to other objects (e.g. Customer Groups (show a block only for a specific group), Countries (show a block for products from a specific country), etc. Valid from-to ...",t:"CMS Block"},"91":{i:0.00341861798072473,u:"../developing_with_spryker/module_guide/cms/cms_block/cms_block_category_connector.html",a:"Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. We want to apply the ...",t:"CMS Block Category Connector"},"92":{i:0.00644858864908675,u:"../developing_with_spryker/module_guide/cms/cms_block/cms_block_multistore.html",a:"Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional configuration when you have ...",t:"Multi-store CMS Block"},"93":{i:0.00283544387396575,u:"../developing_with_spryker/module_guide/cms/cms_block/cms_block_product_connector.html",a:"Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"94":{i:0.00158373359789293,u:"../developing_with_spryker/module_guide/cms/cms_page/cms_page.html",a:"Have full control over your content by publishing it using CMS pages. A content creation workflow supports all the stages of content creation from offline drafts to publishing live content. Pages can be created as inactive, added, edited, deleted, activated, deactivated and ordered by ID. CMS pages ...",t:"CMS Page"},"95":{i:0.00191613621416386,u:"../developing_with_spryker/module_guide/cms/cms_page/cms_preview_draft_page.html",a:"Overview With the CMS draft feature the shop administrator can create drafts of CMS pages without affecting the current live version of the page. It is possible to preview draft version of content before publishing it to see how the page will look like when it is live. This article will tell you how ...",t:"Preview Draft Page"},"96":{i:0.00205463216034591,u:"../developing_with_spryker/module_guide/cms/cms_page/content_fields_max_size.html",a:"              By default CMS module doesn\u0027t specify the content field size.\n                Based on your DB (MySql or PostgreSql), it will be transferred to TEXT (65535 bytes) and TEXT (unlimited length) respectively.\n                In case your project requires more, you can redefine field size ...",t:"Defining Maximum Size of Content Fields"},"97":{i:0.00085498034584903,u:"../developing_with_spryker/module_guide/cms/cms_page/cms_extension_points.html",a:"\nThe CMS module provides an extension point for post activation and deactivation of CMS pages. The plugin interface set for this extension point is as follows:\n \nnamespace Spryker\\Zed\\Cms\\Communication\\Plugin;\n\nuse Generated\\Shared\\Transfer\\CmsPageTransfer;\n\ninterface ...",t:"CMS Extension Points"},"98":{i:0.00287807258260321,u:"../developing_with_spryker/module_guide/cms/cms_widget/cms_widget.html",a:"With CMS content widgets we are bringing more power to CMS pages and blocks. You can easily include placeholders to display products, product groups and products sets in CMS pages and blocks. Multiple templates allow you to define which template is used per widget. So, you can for example apply ...",t:"CMS Widget"},"99":{i:0.00360481180291942,u:"../developing_with_spryker/module_guide/cms/cms_widget/available_widgets.html",a:"Currently there are four widgets provided by default in Spryker shop: Product (abstract), Product Set, Product Group and Product Search. They can be found in Administration Interface under Content Management-\u003ePage-\u003e Edit Placeholders-\u003e Content tab. The rules for widget creation are provided in Cms ...",t:"Available Widgets"},"100":{i:0.00192665004166622,u:"../developing_with_spryker/module_guide/cms/cms_widget/enabling_cms_widget.html",a:"\n\t\t\tCMS content widgets is a CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update composer.json ...",t:"Enabling the Content Widget"},"101":{i:0.00110833201554321,u:"../developing_with_spryker/module_guide/customer/customer_management.html",a:"Shop Customers are created by registering online to create an account. Accounts can be assigned to groups for targeting products, discounts, languages and many other types of categorization. Authorization can be handled directly in the shop and items such as subscriptions and passwords can be ...",t:"Customer Management"},"102":{i:0.00112727347848361,u:"../developing_with_spryker/module_guide/customer/customer_module_overview.html",a:"The Customer entity wraps data around registered customers. Customer data is managed from the Administration Interface by the shop administration and from the shop website itself by customers. This article describes how new customers can be created and managed and how to enable specific features ...",t:"Customer Module Overview"},"103":{i:0.00386938559836142,u:"../developing_with_spryker/module_guide/discount/discount.html",a:"Discount The Discount module is responsible for managing discounts in the Spryker OS. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the vouchers codes generated for each discount. You can ...",t:"Discount"},"104":{i:0.00208708204893084,u:"../developing_with_spryker/module_guide/discount/discount_applying.html",a:"There are two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts ...",t:"Applying a Discount"},"105":{i:0.00138830905333624,u:"../developing_with_spryker/module_guide/discount/discount_calculator_plugin.html",a:"Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin"},"106":{i:0.00167595229674228,u:"../developing_with_spryker/module_guide/discount/discount_excl_nonexcl.html",a:"Exclusive and Non-Exclusive Discounts Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"107":{i:0.000944777924118933,u:"../developing_with_spryker/module_guide/discount/discount_ext_module.html",a:"The main components that describe a discount are: discount collector: Specifies for which items discount is being applied/calculated. Example: The discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"108":{i:0.000997088863552984,u:"../developing_with_spryker/module_guide/discount/discount_promotion.html",a:"\n           For marketing reasons shops sometimes give away free products depending on the cart content. This could be for example when the cart value is high to give away some free perks.\n           Or for example when the customer buys certain product to give away some other product that is ...",t:"Discount Promotion"},"109":{i:0.00089778426937632,u:"../developing_with_spryker/module_guide/gift_cards/gift_cards.html",a:"Gift card is a prepaid certificate entitling its owner to use it for the purchase of products for the gift card’s value. Gift cards are usually purchased as a present, whereas the recipients have the full freedom of choice to buy from your shop. Gift cards are easy to buy and can be accessed ...",t:"Gift Cards"},"110":{i:0.0012569255611469,u:"../developing_with_spryker/module_guide/gift_cards/gift_cards_purchase_redeeming.html",a:"Gift Cards are sensible data and can be used to pay orders, therefore please keep in mind that they should be protected just like real money. This article describes general concepts of gift cards, their purchase and redeeming process as well as various use case scenarios. Introduction In the Spryker ...",t:"Gift Cards Purchase and Redeeming"},"111":{i:0.000856459365011617,u:"../developing_with_spryker/module_guide/gift_cards/enabling_gift_cards.html",a:"The Gift Cards feature is shipped with the following modules: GiftCard: implements basic functionality of the Gift Cards feature as  well as the  Replacement value-checking strategy . GiftCardBalance: implements gift card  Balance value-checking strategy . GiftCardMailConnector: responsible for ...",t:"Enabling Gift Cards"},"112":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/glossary/glossary.html",a:"The Glossary module has the responsibility to manage glossary keys that hold the localized content in the database. For each entry in the glossary keys table there is a corresponding entry in the Touch table that has a timestamp that marks the last update that was made on that glossary keys that ...",t:"Glossary"},"113":{i:0.000609447444334141,u:"../developing_with_spryker/module_guide/glossary/glossary_keys.html",a:"Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys"},"114":{i:0.000609447444334141,u:"../developing_with_spryker/module_guide/glossary/glossary_keys_use.html",a:"One of the usages of the glossary keys in the front office application (Yves) is for rendering translated content. For allowing to render translated content, a dedicated extension for the twig template engine is available to be used. You can see bellow how you can add translated content in Yves  ...",t:"Using Glossary Keys"},"115":{i:0.000609447444334141,u:"../developing_with_spryker/module_guide/glossary/glossary_translations.html",a:"The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed - Glossary"},"116":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/infrastructure/about_infrastructure.html",a:"The following modules are used to establish the supporting infrastructure.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Infrastructure"},"117":{i:0.00549493119595261,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector.html",a:"The Collector module provides functionality to aggregate data from an SQL database, and synchronize with a NoSQL data store, in a format that can be easily consumed by front-end application.\n\n See  Performance and Scalability  for an overview of the separation of responsibilities between Yves and ...",t:"Collector"},"118":{i:0.00261488554378104,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_development.html",a:"The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the  Touch mechanism . Each collector ...",t:"Development - Collector"},"119":{i:0.00261488554378104,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_running.html",a:"Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole collector:search:update\nconsole ...",t:"Running Collectors"},"120":{i:0.00261488554378104,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_sched_collector_jobs.html",a:"The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs"},"121":{i:0.00261488554378104,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_types.html",a:"Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types"},"122":{i:0.00461273106973562,u:"../developing_with_spryker/module_guide/infrastructure/event/event.html",a:"The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other bundles to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"123":{i:0.00386757786609815,u:"../developing_with_spryker/module_guide/infrastructure/event/event_adding.html",a:"When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (BundleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events"},"124":{i:0.00386757786609815,u:"../developing_with_spryker/module_guide/infrastructure/event/event_asynch.html",a:"Asynchronous Events An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events"},"125":{i:0.00386757786609815,u:"../developing_with_spryker/module_guide/infrastructure/event/event_configure_q.html",a:"Implementation is already present in demoshop and all code samples can be found there. To implement an events queue: Click to expand the code sample \u003c?php\nnamespace Pyz\\Client\\RabbitMq;\n\nuse ArrayObject;\nuse Generated\\Shared\\Transfer\\RabbitMqOptionTransfer;\nuse ...",t:"Configuring an Events Queue"},"126":{i:0.00386757786609815,u:"../developing_with_spryker/module_guide/infrastructure/event/event_listen.html",a:"There are two ways to listen to events, using direct listeners or subscribers. The difference between these two is that a subscriber allows the module providing the subscriber to wire up the handlers in the module that owns it without touching the EventDependencyProvider exception’s initial ...",t:"Listening to Events"},"127":{i:0.00386757786609815,u:"../developing_with_spryker/module_guide/infrastructure/event/event_priority.html",a:"The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority"},"128":{i:0.00316440837333582,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem.html",a:" The FileSystem Service provides an abstraction for file systems. It uses the same interface to access different types of file systems, regardless of their location or protocol. The Flysystem module provides plugins which  thephpleague/flysystem  vendor package and implement FileSystem\u0027s plugin ...",t:"File System "},"129":{i:0.00316440837333582,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem_api.html",a:"Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API"},"130":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/infrastructure/console.html",a:"A console command is a php class that contains the implementation of a functionality that can get executed from the command line. Spryker contains a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. More information about console ...",t:"Console"},"131":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/infrastructure/errorhandler.html",a:"The Spryker Commerce OS uses a dedicated error handling mechanism to collect detailed error related information. The ErrorHandler handles notices, warnings and other types of minor issues usually not thrown as exceptions as strict as more serious errors. By default, they all throw meaningful ...",t:"ErrorHandler"},"132":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/infrastructure/installer.html",a:"The Installer module is responsible of managing the installment process of required database data. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Installer;\n\nuse ...",t:"Installer"},"133":{i:0.000534676129804194,u:"../developing_with_spryker/module_guide/infrastructure/sequence_number.html",a:"\n    Sometimes it should be ensured for a project that the just generated number is not used for the same purpose twice.\n    Spryker provides Sequence Number module which handles the unique number generation.\n General Usage The sequence number facade contains ::generate() method which provides a ...",t:"Sequence Number"},"134":{i:0.00611368646621725,u:"../developing_with_spryker/module_guide/infrastructure/touch.html",a:"Yves has no connection to the database of Zed. This is a key concept to make rendering front-end pages fast. Yves fetches all dynamic data from a key-value storage (Redis) and a search engine (Elasticsearch).\n\n This data includes, but is not limited to:\n\n URL mappings\n Product Information\n Product ...",t:"Touch"},"135":{i:0.000474892199022422,u:"../developing_with_spryker/module_guide/infrastructure/zed_request.html",a:"This module is used to handle requests from Yves to Zed and the responses from Zed. Internally it makes use of the well known  Guzzle  library. HandlerStackContainer Guzzle provides a way to add a so called middleware. It makes use of a handler stack where you can push a middleware to. For more ...",t:"Zed Request"},"136":{i:0.00287329627988514,u:"../developing_with_spryker/module_guide/inventory/about_inventory.html",a:"Inventory is the amount of products you offer to your customers. These products are catalogued and divided into items that are in stock and reserved. The stock value is the physical amount of products you have in your warehouse, whereas availability is an aggregated value per store which reflects ...",t:"Inventory"},"137":{i:0.00287329627988514,u:"../developing_with_spryker/module_guide/inventory/availability.html",a:"For most of the e-commerce platforms stock does not reflect real availability of products, since stock is just the physical number of products in your warehouse which does not take reserved products into account. In contrast to stock, availability considers not just number of products in the ...",t:"Availability"},"138":{i:0.00173269204906227,u:"../developing_with_spryker/module_guide/inventory/stock.html",a:"Stock defines physical amount of products you have in your whorehouse. This article will tell you how the stock module works and how product stock is calculated. Multiple Storage Locations Spryker allows to define several storage locations in which the products are being stored. For a product we can ...",t:"Stock"},"139":{i:0.000572161539683705,u:"../developing_with_spryker/module_guide/mail/mail.html",a:"Sending mail is a standard web application task. There are many cases where an action triggers an email to be sent. These actions can be newsletter subscriptions, order placement, refunds, customer account registration, etc. The Mail module helps you to create emails to be sent. To send an email you ...",t:"Mail"},"140":{i:0.000669430880344989,u:"../developing_with_spryker/module_guide/mail/mail_create_provider_plugin.html",a:"The provider class is used to define the Mail Provider you want to use. As each provider behaves differently the provider class will also look different accordingly. Create a class which implements MailProviderPluginInterface. After that  register  your provider in the Mail module.",t:"Create a MailProviderPlugin"},});