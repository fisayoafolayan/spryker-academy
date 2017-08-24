define({"272":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"273":{i:0.00111516110419129,u:"../developing_with_spryker/developer_resources/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"274":{i:0.00339481689838735,u:"../developing_with_spryker/developer_resources/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"275":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"276":{i:0.00222087589919658,u:"../developing_with_spryker/developer_resources/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"277":{i:0.00655713523341306,u:"../developing_with_spryker/developer_resources/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},"278":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/flash_messenger.html",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"279":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/internal_server_error_handling.html",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"280":{i:0.00188889522881371,u:"../developing_with_spryker/developer_resources/performance_scalability.html",a:"Spryker OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"281":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/plugin.html",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins are the only classes that can be directly instantiated in ...",t:"Plugin"},"282":{i:0.0012178376564059,u:"../developing_with_spryker/developer_resources/service.html",a:"Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For example: encoding, text ...",t:"Service"},"283":{i:0.000994410504439075,u:"../developing_with_spryker/developer_resources/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"284":{i:0.00256606150242287,u:"../developing_with_spryker/developer_resources/transfer_objects.html",a:"Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use transfer objects Simple usage The example shows a typical use case for a transfer object. ...",t:"Transfer Objects"},"285":{i:0.00206955666115922,u:"../developing_with_spryker/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"286":{i:0.00351902709936877,u:"../developing_with_spryker/state_machine_cookbook/state_machine_cookbook_2.html",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"287":{i:0.00188935391476506,u:"../developing_with_spryker/store_administration_guide/store_administration_guide.html",a:"The  features list  will give you an overview of what the Spryker Commerce OS offers and prospective extensions that you can add in your development process. Next, user manuals for the back-office application (Zed) are offered. The manuals include all bundles that are available to configure, namely ...",t:"Store Administration"},"288":{i:0.00207854442460555,u:"../developing_with_spryker/store_administration_guide/bg_category.html",a:"A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. Category assigning A product can be assigned to one or more product categories. Next, we ...",t:"Category"},"289":{i:0.0011951557664018,u:"../developing_with_spryker/store_administration_guide/bg_cms.html",a:"In the back-office application there is a dedicated section that enables you to create pages, blocks, as well as configuring URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following ...",t:"CMS"},"290":{i:0.00796684852662724,u:"../developing_with_spryker/store_administration_guide/bg_customer.html",a:"Customer data can be managed either by the shop owner from the back-office application (Zed) or by the customer from the shop interface (Yves). When managing customer data from the back-office application, you can add personal information like name and email address, as well as customer billing and ...",t:"Customer"},"291":{i:0.00274325661827487,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts.html",a:"In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only if the linked decision rules are satisfied and if it’s active and valid. Cart Rules This ...",t:"Discounts"},"292":{i:0.00157735920905101,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"293":{i:0.00157735920905101,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},"294":{i:0.00274325661827487,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_2_0.html",a:"The latest version is  Discounts In Spryker, there are two types of discounts that can be defined : Cart Rules This discount is contained in the cart and doesn’t need any action to be performed by the customer. This discount is automatically applied if the decision rules attached to it are being ...",t:"Discounts 2.0"},"295":{i:0.00207854442460555,u:"../developing_with_spryker/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"296":{i:0.000994410504439075,u:"../developing_with_spryker/store_administration_guide/bg_sales.html",a:"Sales Orders can be managed by the shop owner from the back-office application (Zed). In this document we’ll describe the functionality offered by the Sales module that will help you manage the orders submitted in your shop. The Order Management System strongly correlates with the state machines you ...",t:"Sales"},"297":{i:0.00796684852662724,u:"../developing_with_spryker/store_administration_guide/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the back-office UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: ...",t:"Shipment"},"298":{i:0.00796684852662724,u:"../developing_with_spryker/store_administration_guide/bg_user_control.html",a:"The purpose of the users control module is to manage back-office users creation and the associated roles and assignment to groups. Create a Role Create a Group Create a User Next, we will help you create a new role, a group that has that role associated and a user that we want to assign to that ...",t:"User Control"},"299":{i:0.00119486997244798,u:"../developing_with_spryker/user_interface_guide/user_interface_guide.html",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. Academy Navigation To ...",t:"User Interface Guide"},"300":{i:0.0101896264072421,u:"../developing_with_spryker/user_interface_guide/oryx/oryx.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED ...",t:"Oryx"},"301":{i:0.0101206021300365,u:"../developing_with_spryker/user_interface_guide/oryx/oryx_for_zed.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs ...",t:"Oryx for Zed"},"302":{i:0.000994410504439075,u:"../developing_with_spryker/user_interface_guide/frontend/frontend_overview.html",a:"To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview"},"303":{i:0.00438773520223112,u:"../developing_with_spryker/user_interface_guide/frontend/download_structure.html",a:"Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure"},"304":{i:0.00180042079708165,u:"../developing_with_spryker/user_interface_guide/frontend/development.html",a:"Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n CommonJS\n ...",t:"Development"},"305":{i:0.00116346134409218,u:"../developing_with_spryker/user_interface_guide/frontend/build_optimization.html",a:"Build and Optimization We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend helper: ...",t:"Build Optimization"},"306":{i:0.00116346134409218,u:"../developing_with_spryker/user_interface_guide/frontend/demoshop_guide.html",a:"Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide"},"307":{i:0.00116346134409218,u:"../developing_with_spryker/user_interface_guide/frontend/public_folder.html",a:"To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder"},"308":{i:0.00196723514309744,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_overview.html",a:"Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig"},"309":{i:0.00292048387026874,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_best_practices.html",a:"include vs macros vs embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates"},"310":{i:0.0168748807670917,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  them.\n ...",t:"Antelope Overview"},"311":{i:0.00824316341059112,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},"312":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/build_optimization_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope"},"313":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/cli.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, read ...",t:"CLI"},"314":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/configuration.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration"},"315":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/development_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope"},"316":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/download_structure_antelope.html",a:"Download and Structure (Antelope) Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"317":{i:0.00765070316115223,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/publishing.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing"},"318":{i:0.00102355720093099,u:"../developing_with_spryker/yves/yves.html",a:"Front-End Yves In this section you will find the following content: Client Controllers and Actions Frontend Translations Using Redis as a KV Storage Implementing URL Routing in Yves",t:"Front-End Yves"},"319":{i:0.00184264571237285,u:"../developing_with_spryker/yves/client.html",a:"Yves is divided into two:\n\n The part with controllers, forms, templates etc\n Client part which provides access to the search and storage engine and the Zed application.\n The purpose of the client is to encapsulate the logic which runs the shop independent from the overlying application. So in case ...",t:"Client"},"320":{i:0.00116841632133108,u:"../developing_with_spryker/yves/controllers_actions.html",a:"Controllers are placed inside the Controllers folder in Yves; they provide an entry point to the system for requests submitted by the front-end users.\n The methods inside of a controller are called actions. Usually an action reads the incoming request-data, maybe validates it with a form, delegates ...",t:"Controllers and Actions"},"321":{i:0.00116841632133108,u:"../developing_with_spryker/yves/frontend_translations.html",a:"Textual translations are handled by the Glossary-module. You can use the GlossaryFacade in Zed to add entries to Glossary (or you can use the Zed UI).\n\n \u003c?php\nclass GlossaryFacade extends AbstractFacade\n{\n    public function createTranslation($keyName, LocaleTransfer $locale, $value, $isActive = ...",t:"Frontend Translations"},"322":{i:0.00139184347329791,u:"../developing_with_spryker/yves/redis_as_kv.html",a:"This article describes how Redis is used within Spryker; the current functionality can be extended according to your needs.\n About Redis is a key-value data store and for the values it supports a large collection of data structures, such as strings, hashes, lists or sets.\n\n The following table shows ...",t:"Using Redis as a KV Storage"},"323":{i:0.00352789015282128,u:"../developing_with_spryker/yves/yves_url_routing.html",a:"Implementing URL Routing in Yves The words contained in an URL play a major factor for search engine to determine if the page is relevant for a specific search query. The URL routing is a mechanism used to map URLs to the code that gets executed when a specific request is being submitted. URL ...",t:"URL Routing"},"324":{i:0.00123487075049737,u:"../developing_with_spryker/zed/zed.html",a:"Back-End Zed In this section you will find the following content: Business Layer: Business Layer Business Models Custom Exceptions   Communication Layer: Controllers and Actions Persistence Layer Database Schema Definition Entity Persistence Layer Query Container Query Objects",t:"Back-End Zed"},"325":{i:0.00319388670850771,u:"../developing_with_spryker/zed/business_layer.html",a:"Zed’s business layer is responsible for the entire business logic.  Most classes exist in this layer and this is the primary area for development.  The business layer is used by the communication layer and by other bundles. Here you know how to save data objects, but you do not care about data ...",t:"Business Layer"},"326":{i:0.00111103794992467,u:"../developing_with_spryker/zed/business_models.html",a:"Business models are classes where you program the business logic of your system. With business logic we mean all kinds of algorithms (e.g. cart calculation), storage procedures (e.g. checkout save workflow) and interactions with external providers (e.g. payment). Business models are not visible from ...",t:"Business Models"},"327":{i:0.00111103794992467,u:"../developing_with_spryker/zed/custom_exceptions.html",a:"When you need to throw an exception, you should define your own type of exception. Later it is much easier to handle exceptions when the type represents a specific type of error. In Spryker exceptions are errors which are handled in a central error handler that will stop the execution. Do not use ...",t:"Custom Exceptions"},"328":{i:0.001386888496059,u:"../developing_with_spryker/zed/facade/facade.html",a:"The facade acts as an internal API. The main responsibility of the facade is to hide the internal implementation. The simply only delegates the calls to internal business models. Similar to a remote web service, the client should not care about how a specific task is done. This is also important for ...",t:"Facade"},"329":{i:0.0013873651744284,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_use.html",a:"1. How to use the facade from a controller or a plugin? In Zed’s communication layer the facade of the same module is available with the getFacade() method from all controllers and plugins. A typical usage from a controller looks like this. The controller retrieves data from a submitted form and ...",t:"How to Use a Facade"},"330":{i:0.0013873651744284,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_implement.html",a:"AbstractFacade Every facade extends Spryker\\Zed\\Kernel\\Business\\AbstractFacade which provides an important method: Methods Inside a facade, the methods tell a story about the module. They expose  the module\u0027s functions and delegate calls to internal models. A typical method looks like this: ...",t:"How to Implement a Facade"},"331":{i:0.0013873651744284,u:"../developing_with_spryker/zed/facade/zed_facade_design_by_contract.html",a:"Every method in a facade contains an implicit promise. So a client expects that the behavior does not change in a minor update. Basically there are two types of possible changes. First there can be changes in the method’s signature for instance, when the name of the method or the order of the ...",t:"Design by Contract (DBC) - Facade"},"332":{i:0.0015035159415446,u:"../developing_with_spryker/zed/controllers_actions.html",a:"Zed’s communication layer is the entry point to the system. Here are executed all of the external requests from users, the Yves-application and all command-line calls. The purpose of this layer is to retrieve the data, delegate to the business layer and to handover it to the presentation layer.\n The ...",t:"Controllers and Actions"},"333":{i:0.00123178854967689,u:"../developing_with_spryker/zed/persistence_layer.html",a:"Zed’s persistence layer is the owner of the schema, entities and queries. This layer knows the database structure and holds the connection to it.\n Integrated Technologies\n Propel\tFast and simple ORM Framework\nMySQL or PostgreSQL\tBoth databases are supported\n Persistence Layer Elements:\n The ...",t:"Persistence Layer"},"334":{i:0.00422508158588963,u:"../developing_with_spryker/zed/database_schema_definition.html",a:"With Propel, a database schema is defined in an XML-file. Each module carries it’s own part of the big schema that is collected and merged. Propel’s documentation on defining the database schema:  Database schema Example schema xml file This file can be copied into your moduleinto ...",t:"Database Schema Definition"},"335":{i:0.00111103794992467,u:"../developing_with_spryker/zed/entity.html",a:"In Spryker an entity represents one entry from a table in the database. Entities are an implementation of the  Active record design pattern , so their usage is very simple.\nFor a full documentation see  Propel’s Active Record Reference .  Spryker’s entities are called Active Record classes or just ...",t:"Entity"},"336":{i:0.00220493321689734,u:"../developing_with_spryker/zed/query_container.html",a:"A query container holds all the database queries of the current module. Each module has exactly one query container, which also acts as an entry point to the persistence layer. Internally it uses  query objects  and returns unterminated queries. As you can see in the example below, the query ...",t:"Query Container"},"337":{i:0.00204814278004414,u:"../developing_with_spryker/zed/query_objects.html",a:"Query objects provide an object-oriented API for writing database queries which are used in  query containers .\n Please check the official  Propel Query Reference  for a complete documentation.\n\n How to create a new query object\n Query object are created by Propel during the build model step. See ...",t:"Query Objects"},"338":{i:0.00142068239695633,u:"../enablement/enablement.html",a:"The enblement section of the Academy includes information and instructions designed to assist you in establishing your commercial web presence with the Spryker Commerce Operating System. Information Types:  HowTos  - short instructions that describe how to perform a single task. Migration Guides  - ...",t:"Enablement"},"339":{i:0.00142608668945487,u:"../enablement/howtos/how_tos.html",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"340":{i:0.000994410504439075,u:"../enablement/howtos/how_to_implement_direct_debit/ht_implement_dd.html",a:"This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check  Tutorial - Adding a New ...",t:"HowTo - Implement Direct Debit Payment"},});