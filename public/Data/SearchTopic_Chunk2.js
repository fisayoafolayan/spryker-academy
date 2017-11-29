define({"139":{i:0.0109061819552758,u:"../developing_with_spryker/module_guide/mail/mail_register_provider.html",a:"To add your provider to the MailProviderCollection add it to MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_PROVIDER_COLLECTION, function ...",t:"Register the Mail Provider"},"140":{i:0.000884349596620892,u:"../developing_with_spryker/module_guide/mail/mail_register_type.html",a:"To add your MailType to the MailTypeCollection you need to add it in your MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_TYPE_COLLECTION, function ...",t:"Register a MailTypePlugin"},"141":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/products/about_products.html",a:"The following modules are used to establish product functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Products"},"142":{i:0.00109202112152264,u:"../developing_with_spryker/module_guide/products/product/product.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that control behavior of the shop. For example the color of a product is an important information that the customer might need, whereas the weight of the product can be used to ...",t:"Product"},"143":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_define_variants.html",a:"Spryker’s data structure for products allows to design a product hierarchy. The abstract product does not have stock, but can have a price. The concrete product has stock and price. This mechanism allows to create variants of a product. Consider the example of a T-Shirt that is available in the ...",t:"Defining Variants with Abstract and Concrete Products"},"144":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_bundles.html",a:"A bundle represents two or more products, sold as a set; it is a distinct product that incorporates other concrete products. Example: Bundles are handled in different ways: For example, a marketing bundle of two items that gives a 20% discount is purchased as a single item and then split for ...",t:"Product Bundles"},"145":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_attributes.html",a:"One way to describe a characteristic of a product is the attribute mechanism. It allows to store a list of key value pairs. There are 4 possible locations where attributes can be stored. Common attributes to all variant are stored on the level of the abstract product. However if they contain ...",t:"Product Attributes"},"146":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_options.html",a:"Product options allow to configure a product. For example if you want to choose the frame for a piece of artwork. Product Options allows you to define an option type (frame, paper, color e.g.) and every option type can have between 1 and n options values. Furthermore a price can be attached to an ...",t:"Product Options"},"147":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_domain_model.html",a:"The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model"},"148":{i:0.000907822085180365,u:"../developing_with_spryker/module_guide/products/product/product_lifecycle.html",a:"The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle"},"149":{i:0.00109004114550675,u:"../developing_with_spryker/module_guide/products/product_new.html",a:"Overview \n            New products feature extends product module by two date attributes: \"new from\" and \"new to\" dates. Between the\n            defined date range the product is considered new. New products on the frontend appear with a label on it that\n            displays this information for ...",t:"New Products"},"150":{i:0.00107319495316247,u:"../developing_with_spryker/module_guide/products/product_bundle.html",a:"Product bundles are two or more existing products combined into a new type of product for the sole purpose to be displayed as one product in the shop frontend and to be sold together. Typically the products are concrete products, because both need to be potential order items. The new (bundled) ...",t:"Product-Bundle Module"},"151":{i:0.000887887612740789,u:"../developing_with_spryker/module_guide/products/product_group/product_group.html",a:"The Product Groups feature allows to group together multiple abstract products for various reasons. One of the most common use cases of this feature is to group same products with different colors together to make user’s browsing more convenient. Once products are grouped together, on catalog and ...",t:"Product Group"},"152":{i:0.00113047200713302,u:"../developing_with_spryker/module_guide/products/product_group/product_group_feature_integration.html",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"153":{i:0.00113047200713302,u:"../developing_with_spryker/module_guide/products/product_group/product_group_under_the_hood.html",a:"Database schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Under The Hood"},"154":{i:0.00502046265588808,u:"../developing_with_spryker/module_guide/products/product_label/product_label.html",a:"Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature Integration Prerequisites To prepare your project for using Product ...",t:"Product Label"},"155":{i:0.00502046265588808,u:"../developing_with_spryker/module_guide/products/product_label/product_label_1_0.html",a:"The latest version of this module can be found here  Product Label Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature ...",t:"Product Label 1.0"},"156":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/products/product_option.html",a:"This module manages the product options. Each product can have one or more product option groups attached. A product option can have a price linked to it, which changes the total price of the product. Option Group The group name in the option group is a glossary key. The value and corresponding ...",t:"Product Option"},"157":{i:0.00109004114550675,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation.html",a:"E-Commerce shops maximize value for their shop visitors by helping them explore products that are related to the one they are currently interested in. These relations appear in different ways such as displaying similar products, upgrades of products (Product-relations), or simply products that fit ...",t:"Product Relation"},"158":{i:0.000907541589960821,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_types.html",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"159":{i:0.00167895440303923,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_yves_datatastore.html",a:"The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation"},"160":{i:0.000907541589960821,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_integration.html",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"161":{i:0.000907541589960821,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_db_entity_relation.html",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"162":{i:0.000907541589960821,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_building_your_own.html",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"163":{i:0.000907541589960821,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_query_builder.html",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"164":{i:0.000837349229549298,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review.html",a:"\n            The Product Reviews feature allows end users to add reviews and ratings to abstract products.\n            A dedicated Zed user interface allows reviews and ratings to be supervised.\n            Rating information can be used for sorting and filtering products.\n            Product ...",t:"Product Reviews"},"165":{i:0.00187828279165292,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_feature_configuration.html",a:"Configuring the Maximum Rating To change the maximum allowed rating, alter the Client configuration by extending the \\Spryker\\Client\\ProductReview\\ProductReviewConfig class in your project directory. Override getMaximumRating method to return the desired selectable maximum rating value. \n        ...",t:"Feature Configuration - Product Reviews"},"166":{i:0.00101528649004792,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_feature_integration.html",a:"Prerequisites To prepare your project to work with Product Reviews: Require the Product Review modules in your composer by running\n             composer require spryker/product-review composer require spryker/product-review-collector composer require spryker/product-review-gui Install the new ...",t:"Feature Integration - Product Reviews"},"167":{i:0.00101528649004792,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_filter_and_sort.html",a:"Prerequisites \n                Configure your product collector query which provides the product data for your product page map and add the required average rating value.\n             \n                Amend product page map to make it possible to filter and sort by rating value. Normalize the rating ...",t:"Filter \u0026 Sort by Average Rating - Product Reviews"},"168":{i:0.00676810628586761,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_under_the_hood.html",a:"Database Schema The Product Review module adds a new table: spy_product_review. The table stores all product review related information such as description, rating, locale, customer, product, etc. Product Reviews in Search product-review type is defined under the already existing index in Search. ...",t:"Under the Hood - Product Reviews"},"169":{i:0.00130977506690316,u:"../developing_with_spryker/module_guide/products/product_set.html",a:"Overview The Product Sets feature allows you to put together multiple products for the purpose of emphasizing that the set of products can be bought together. Product Sets usually have their own separate list and detail pages in the shop frontend where customers can add containing products to the ...",t:"Product Set"},"170":{i:0.000771944759256982,u:"../developing_with_spryker/module_guide/products/category.html",a:"Product Category The mechanisms that make finding a product easier are the most important features in a commerce business. If it\u0027s difficult for a customer to find the product that he needs, then he won\u0027t buy it even if that product is available in the shop. One of the features is organizing the ...",t:"Category"},"171":{i:0.000771944759256982,u:"../developing_with_spryker/module_guide/products/price.html",a:"A price can be attached to an abstract product but also to a concrete product. The price is stored as an integer, in the smallest unit of the currency (e.g. for Euro that would be cents). Each price is assigned to a price type ( e.g. gross price, net price ) and for a price type there can be one to ...",t:"Price"},"172":{i:0.0063631004394238,u:"../developing_with_spryker/module_guide/queue/queue.html",a:"Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar to a Mailbox, here you can store, send and receive messages.\n Introduction\n The Queue module provides a ...",t:"Queue"},"173":{i:0.00611658814720199,u:"../developing_with_spryker/module_guide/queue/queue_adapter.html",a:"Default Queue Adapter Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter"},"174":{i:0.00574552895963408,u:"../developing_with_spryker/module_guide/queue/queue_benefits.html",a:"The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits"},"175":{i:0.00574552895963408,u:"../developing_with_spryker/module_guide/queue/queue_engine.html",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI:\n\n Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg\n Click Login\n ...",t:"Default Queue Engine"},"176":{i:0.00574552895963408,u:"../developing_with_spryker/module_guide/queue/queue_job_config.html",a:"You can also find the Worker configuration in jobs.php as part of the Demopshop and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration"},"177":{i:0.00574552895963408,u:"../developing_with_spryker/module_guide/queue/queue_msg_processor.html",a:"Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin"},"178":{i:0.00611658814720199,u:"../developing_with_spryker/module_guide/queue/queue_task.html",a:"The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task"},"179":{i:0.00611658814720199,u:"../developing_with_spryker/module_guide/queue/queue_workers.html",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"180":{i:0.00414057909949716,u:"../developing_with_spryker/module_guide/tax/tax.html",a:"The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax"},"181":{i:0.00335010169862594,u:"../developing_with_spryker/module_guide/tax/tax_2_0.html",a:"The latest version of this module can be found here  Tax Spryker allows to define different tax sets that include one to many different tax rates. Tax set - tax rate association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : associate the ...",t:"Tax Version 2.0"},"182":{i:0.00221073464390777,u:"../developing_with_spryker/module_guide/url/url.html",a:" The URL module handles dynamic URLs for entities that appear on the front-end (Yves). At the moment, Spryker core provides URL handling for products, CMS pages, categories and URL redirects. The URLs are stored in one database table and each is unique. The database structure for storing URLs looks ...",t:"URL "},"183":{i:0.00169268562762787,u:"../developing_with_spryker/module_guide/url/url_handling_new_entity.html",a:"The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs"},"184":{i:0.00169268562762787,u:"../developing_with_spryker/module_guide/url/url_redirects.html",a:"A URL redirect is a special entity that consists of a source URL (which is provided by the spy_url database table), a target URL and an HTTP status code (stored in spy_url_redirect database table). Redirects are exported to the key-value storage with collectors and are matched with StorageRouter ...",t:"URL Redirects"},"185":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/utilities/about_utilities.html",a:"The following modules are utilities.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the ...",t:"About Utilities"},"186":{i:0.00514596035955823,u:"../developing_with_spryker/module_guide/utilities/currency.html",a:"\nThe Currency module provides an easy way to retrieve information about a currency given an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by its ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency"},"187":{i:0.0019858140891705,u:"../developing_with_spryker/module_guide/utilities/logger.html",a:"Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger"},"188":{i:0.00514596035955823,u:"../developing_with_spryker/module_guide/utilities/money.html",a:"Money Handling monetary values can be a problem and is often quite hard. The Money module makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"189":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/yves_components/about_yves_components.html",a:"The following modules are used to establish Yves functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Yves Components"},"190":{i:0.0070996090819823,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation.html",a:"Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation"},"191":{i:0.00168901697304587,u:"../developing_with_spryker/module_guide/yves_components/search/search.html",a:"One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search"},"192":{i:0.0028742870976292,u:"../developing_with_spryker/module_guide/yves_components/search/search_collector_config.html",a:"In this section you’ll learn how to easily map collected data from the database to the default Elasticsearch page mapping type. If you need information about how collectors work in general, you can read more about it on the  Collector  documentation page. First, you need to implement ...",t:"Search Collector Configuration"},"193":{i:0.000992396890806591,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_elasticsearch.html",a:"Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch"},"194":{i:0.00257846465242564,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"195":{i:0.000992396890806591,u:"../developing_with_spryker/module_guide/yves_components/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"196":{i:0.0022139760429978,u:"../developing_with_spryker/module_guide/yves_components/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},"197":{i:0.00333850864362249,u:"../developing_with_spryker/module_guide/yves_components/search/search_query.html",a:"Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query"},"198":{i:0.00095634190127085,u:"../developing_with_spryker/module_guide/yves_components/search/search_4_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 4.0"},"199":{i:0.000887887612740789,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)"},"200":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"201":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"202":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and pre processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"203":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"204":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"205":{i:0.000753118590896815,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},});