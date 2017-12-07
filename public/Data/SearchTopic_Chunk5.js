define({"342":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"343":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"344":{i:0.0022677660687524,u:"../developing_with_spryker/resources_and_developer_tools/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"345":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"346":{i:0.00157213798748769,u:"../developing_with_spryker/resources_and_developer_tools/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"347":{i:0.00455870409211824,u:"../developing_with_spryker/resources_and_developer_tools/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},"348":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/flash_messenger.html",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"349":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/internal_server_error_handling.html",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"350":{i:0.00138447496226427,u:"../developing_with_spryker/resources_and_developer_tools/performance_scalability.html",a:"Spryker OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"351":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/plugin.html",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins are the only classes that can be directly instantiated in ...",t:"Plugin"},"352":{i:0.000862095598851563,u:"../developing_with_spryker/resources_and_developer_tools/service.html",a:"Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For example: encoding, text ...",t:"Service"},"353":{i:0.000703922803185119,u:"../developing_with_spryker/resources_and_developer_tools/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"354":{i:0.00169692156486327,u:"../developing_with_spryker/resources_and_developer_tools/transfer_objects.html",a:"Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use transfer objects Simple usage The example shows a typical use case for a transfer object. ...",t:"Transfer Objects"},"355":{i:0.0010731512009088,u:"../developing_with_spryker/user_interface_guide/user_interface_guide.html",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. Academy Navigation To ...",t:"User Interface Guide"},"356":{i:0.00673743317234646,u:"../developing_with_spryker/user_interface_guide/oryx/oryx.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED ...",t:"Oryx"},"357":{i:0.00681215688158795,u:"../developing_with_spryker/user_interface_guide/oryx/oryx_for_zed.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs ...",t:"Oryx for Zed"},"358":{i:0.000703922803185119,u:"../developing_with_spryker/user_interface_guide/frontend/frontend_overview.html",a:"To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview"},"359":{i:0.00292322195667105,u:"../developing_with_spryker/user_interface_guide/frontend/download_structure.html",a:"Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure"},"360":{i:0.00120939157690505,u:"../developing_with_spryker/user_interface_guide/frontend/development.html",a:"Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n CommonJS\n ...",t:"Development"},"361":{i:0.000823592812983639,u:"../developing_with_spryker/user_interface_guide/frontend/build_optimization.html",a:"Build and Optimization We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend helper: ...",t:"Build Optimization"},"362":{i:0.000823592812983639,u:"../developing_with_spryker/user_interface_guide/frontend/demoshop_guide.html",a:"Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide"},"363":{i:0.000823592812983639,u:"../developing_with_spryker/user_interface_guide/frontend/public_folder.html",a:"To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder"},"364":{i:0.000703922803185119,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_overview.html",a:"Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig"},"365":{i:0.00130227285217772,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_best_practices.html",a:"Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates"},"366":{i:0.0107513693387746,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  them.\n ...",t:"Antelope Overview"},"367":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},"368":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/build_optimization_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope"},"369":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/cli.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, read ...",t:"CLI"},"370":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/configuration.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration"},"371":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/development_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope"},"372":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/download_structure_antelope.html",a:"Download and Structure (Antelope) Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"373":{i:0.00499317174973722,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/publishing.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing"},"374":{i:0.000724555563495208,u:"../developing_with_spryker/yves/yves.html",a:"Front-End Yves In this section you will find the following content: Client Controllers and Actions Frontend Translations Using Redis as a KV Storage Implementing URL Routing in Yves",t:"Front-End Yves"},"375":{i:0.00130439332201183,u:"../developing_with_spryker/yves/client.html",a:"Yves is divided into two:\n\n The part with controllers, forms, templates etc\n Client part which provides access to the search and storage engine and the Zed application.\n The purpose of the client is to encapsulate the logic which runs the shop independent from the overlying application. So in case ...",t:"Client"},"376":{i:0.000827100500215995,u:"../developing_with_spryker/yves/controllers_actions.html",a:"Controllers are placed inside the Controllers folder in Yves; they provide an entry point to the system for requests submitted by the front-end users.\n The methods inside of a controller are called actions. Usually an action reads the incoming request-data, maybe validates it with a form, delegates ...",t:"Controllers and Actions"},"377":{i:0.000827100500215995,u:"../developing_with_spryker/yves/frontend_translations.html",a:"Textual translations are handled by the Glossary-module. You can use the GlossaryFacade in Zed to add entries to Glossary (or you can use the Zed UI).\n\n \u003c?php\nclass GlossaryFacade extends AbstractFacade\n{\n    public function createTranslation($keyName, LocaleTransfer $locale, $value, $isActive = ...",t:"Frontend Translations"},"378":{i:0.000985273295882439,u:"../developing_with_spryker/yves/redis_as_kv.html",a:"This article describes how Redis is used within Spryker; the current functionality can be extended according to your needs.\n About Redis is a key-value data store and for the values it supports a large collection of data structures, such as strings, hashes, lists or sets.\n\n The following table shows ...",t:"Using Redis as a KV Storage"},"379":{i:0.00214832552979071,u:"../developing_with_spryker/yves/yves_url_routing.html",a:"Implementing URL Routing in Yves The words contained in an URL play a major factor for search engine to determine if the page is relevant for a specific search query. The URL routing is a mechanism used to map URLs to the code that gets executed when a specific request is being submitted. URL ...",t:"URL Routing"},"380":{i:0.000724555563495208,u:"../developing_with_spryker/zed/zed.html",a:"Back-End Zed In this section you will find the following content: Business Layer: Business Layer Business Models Custom Exceptions   Communication Layer: Controllers and Actions Persistence Layer Database Schema Definition Entity Persistence Layer Query Container Query Objects",t:"Back-End Zed"},"381":{i:0.00224776205948419,u:"../developing_with_spryker/zed/business_layer.html",a:"Zed’s business layer is responsible for the entire business logic.  Most classes exist in this layer and this is the primary area for development.  The business layer is used by the communication layer and by other bundles. Here you know how to save data objects, but you do not care about data ...",t:"Business Layer"},"382":{i:0.000772354857091161,u:"../developing_with_spryker/zed/business_models.html",a:"Business models are classes where you program the business logic of your system. With business logic we mean all kinds of algorithms (e.g. cart calculation), storage procedures (e.g. checkout save workflow) and interactions with external providers (e.g. payment). Business models are not visible from ...",t:"Business Models"},"383":{i:0.000772354857091161,u:"../developing_with_spryker/zed/custom_exceptions.html",a:"When you need to throw an exception, you should define your own type of exception. Later it is much easier to handle exceptions when the type represents a specific type of error. In Spryker exceptions are errors which are handled in a central error handler that will stop the execution. Do not use ...",t:"Custom Exceptions"},"384":{i:0.000862095598851563,u:"../developing_with_spryker/zed/facade/facade.html",a:"The facade acts as an internal API. The main responsibility of the facade is to hide the internal implementation. The simply only delegates the calls to internal business models. Similar to a remote web service, the client should not care about how a specific task is done. This is also important for ...",t:"Facade"},"385":{i:0.000948191033703968,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_use.html",a:"1. How to use the facade from a controller or a plugin? In Zed’s communication layer the facade of the same module is available with the getFacade() method from all controllers and plugins. A typical usage from a controller looks like this. The controller retrieves data from a submitted form and ...",t:"How to Use a Facade"},"386":{i:0.000948191033703968,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_implement.html",a:"AbstractFacade Every facade extends Spryker\\Zed\\Kernel\\Business\\AbstractFacade which provides an important method: Methods Inside a facade, the methods tell a story about the module. They expose  the module\u0027s functions and delegate calls to internal models. A typical method looks like this: ...",t:"How to Implement a Facade"},"387":{i:0.000948191033703968,u:"../developing_with_spryker/zed/facade/zed_facade_design_by_contract.html",a:"Every method in a facade contains an implicit promise. So a client expects that the behavior does not change in a minor update. Basically there are two types of possible changes. First there can be changes in the method’s signature for instance, when the name of the method or the order of the ...",t:"Design by Contract (DBC) - Facade"},"388":{i:0.000930527652757606,u:"../developing_with_spryker/zed/controllers_actions.html",a:"Zed’s communication layer is the entry point to the system. Here are executed all of the external requests from users, the Yves-application and all command-line calls. The purpose of this layer is to retrieve the data, delegate to the business layer and to handover it to the presentation layer.\n The ...",t:"Controllers and Actions"},"389":{i:0.000772354857091161,u:"../developing_with_spryker/zed/persistence_layer.html",a:"Zed’s persistence layer is the owner of the schema, entities and queries. This layer knows the database structure and holds the connection to it.\n Integrated Technologies\n Propel\tFast and simple ORM Framework\nMySQL or PostgreSQL\tBoth databases are supported\n Persistence Layer Elements:\n The ...",t:"Persistence Layer"},"390":{i:0.00288124999077765,u:"../developing_with_spryker/zed/database_schema_definition.html",a:"With Propel, a database schema is defined in an XML-file. Each module carries it’s own part of the big schema that is collected and merged. Propel’s documentation on defining the database schema:  Database schema Example Schema XML File This file can be copied into your moduleinto ...",t:"Database Schema Definition"},"391":{i:0.000772354857091161,u:"../developing_with_spryker/zed/entity.html",a:"In Spryker an entity represents one entry from a table in the database. Entities are an implementation of the  Active record design pattern , so their usage is very simple.\nFor a full documentation see  Propel’s Active Record Reference .  Spryker’s entities are called Active Record classes or just ...",t:"Entity"},"392":{i:0.00153630719106862,u:"../developing_with_spryker/zed/query_container.html",a:"A query container holds all the database queries of the current module. Each module has exactly one query container, which also acts as an entry point to the persistence layer. Internally it uses  query objects  and returns unterminated queries. As you can see in the example below, the query ...",t:"Query Container"},"393":{i:0.00142531049627622,u:"../developing_with_spryker/zed/query_objects.html",a:"Query objects provide an object-oriented API for writing database queries which are used in  query containers .\n Please check the official  Propel Query Reference  for a complete documentation.\n\n How to create a new query object\n Query object are created by Propel during the build model step. See ...",t:"Query Objects"},"394":{i:0.00100568134695672,u:"../enablement/enablement.html",a:"The enblement section of the Academy includes information and instructions designed to assist you in establishing your commercial web presence with the Spryker Commerce Operating System. Information Types:  HowTos  - short instructions that describe how to perform a single task. Migration Guides  - ...",t:"Enablement"},"395":{i:0.00100950706880135,u:"../enablement/tutorials_and_howtos/tutorials.html",a:"Tutorials and HowTos are instructions that describe an entire process including information about performing several tasks. We provide the following tutorials: Introduction tutorials - Tutorials that describe how to perform basic tasks Advanced tutorials- Advanced Spryker OS activities HowTos - ...",t:"Tutorials and HowTos"},"396":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/introduction_tutorials.html",a:"Introduction tutorials describe how to perform basic tasks with Spryker Os. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"Introduction Tutorials"},"397":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_hello_world.html",a:"Challenge Description Build a HelloWorld module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker  Code Generator console ...",t:"Tutorial - Hello World"},"398":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_architectural_walkthrough.html",a:"This is an architecture walkthrough as a coding exercise. Challenge Description Build a HelloSpryker module in Zed that will render the Hello Spryker! string, in reverse order, on the screen. The string must be retrieved from the config. Build a HelloSpryker module in Yves that will render the Hello ...",t:"Tutorial - Architectural Walkthrough"},"399":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_dynamic_content_page.html",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow these steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"400":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_boosting_cart_based_search.html",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should first display products that have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog should also contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"401":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_checkout.html",a:"Challenge Description Integrate an additional step into the checkout process; a Voucher step where a customer enters a voucher code and gets a discount. Add the Voucher step after the Payment one. To explore further before starting, you can read about the  Checkout  and the  StepEngine  modules. ...",t:"Tutorial - Checkout"},"402":{i:0.00122235534164958,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_oms_state_machine.html",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"403":{i:0.00237658934338318,u:"../enablement/tutorials_and_howtos/introduction_tutorials/t_stores.html",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yves module. Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial - Stores"},"404":{i:0.00203971886169081,u:"../enablement/tutorials_and_howtos/introduction_tutorials/ht_setup_hello_world_queue.html",a:"This Tutorial demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"Tutorial - Set Up a \"Hello World\" Queue"},"405":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/advanced_tutorials/advanced_tutorials.html",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"406":{i:0.000703922803185119,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_add_button_table.html",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"407":{i:0.000823592812983639,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_add_navigation_zed.html",a:"This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{BundleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed"},"408":{i:0.0020467383177901,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_add_new_bundle.html",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New module"},"409":{i:0.00105652563549302,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_calculator_plugin.html",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  Calculation module. First, there are ...",t:"Tutorial - Calculator Plugin"},});