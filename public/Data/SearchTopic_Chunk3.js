define({"206":{i:0.000703922803185119,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"207":{i:0.00101884444765125,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules"},"208":{i:0.00469061924388263,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"209":{i:0.000721519617046673,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"210":{i:0.00121480323051948,u:"../developing_with_spryker/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"211":{i:0.000724555563495208,u:"../developing_with_spryker/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"212":{i:0.00525365502349388,u:"../developing_with_spryker/migration_guides/mg_calculation.html",a:"Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"213":{i:0.000724555563495208,u:"../developing_with_spryker/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"214":{i:0.00469061924388263,u:"../developing_with_spryker/migration_guides/mg_category.html",a:"Upgrading from version 3.* to version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"215":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_category_template_console.html",a:"\n\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Category\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Category Template Migration Console"},"216":{i:0.00130227285217772,u:"../developing_with_spryker/migration_guides/mg_cms.html",a:"Upgrading from Version 4.* to Version 5.* Cms version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"217":{i:0.000932844316964931,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"218":{i:0.00149686620892287,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlockCategoryConnector\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"219":{i:0.00181088750086939,u:"../developing_with_spryker/migration_guides/mg_cms_to_cms_block_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlock\\Communication\\Console;\n\nuse Orm\\Zed\\Cms\\Persistence\\SpyCmsPage;\nuse ...",t:"Migration Guide - CMS Block Migration Console"},"220":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_cms_collector.html",a:"Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"221":{i:0.000724555563495208,u:"../developing_with_spryker/migration_guides/mg_collector.html",a:"Upgrading from version 3.* to version 4.* With version 4 of the Collector module, we fixed the collector:search:export and collector:search:update console commands to run for all available locales instead of just for the current one. This behavior is now consistent with the storage collector command ...",t:"Migration Guide - Collector"},"222":{i:0.000782653214301651,u:"../developing_with_spryker/migration_guides/mg_currency.html",a:"Upgrading From Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency"},"223":{i:0.00089779338301568,u:"../developing_with_spryker/migration_guides/mg_customer.html",a:"  Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table schemas ...",t:"Migration Guide - Customer"},"224":{i:0.00922607047470342,u:"../developing_with_spryker/migration_guides/mg_discount.html",a:"Upgrading from Version 4.* to Version 5.* \n            In discount module version 5 we have introduced multicurrency support for fixed discount calculation.\n\n            This update also includes: \n              Support for net/gross amounts.\n               Currency decision rule -  to filter ...",t:"Migration Guide - Discount"},"225":{i:0.0087582357414025,u:"../developing_with_spryker/migration_guides/mg_discount_amounts_migration_console.html",a:"\u003c?php\n \n/**\n           \n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Discount\\Communication\\Console;\n\nuse ...",t:"Migration Guide - Discount Amounts Migration Console Command"},"226":{i:0.000724555563495208,u:"../developing_with_spryker/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from Version 3.* to Version ...",t:"Migration Guide - DiscountCalculatorConnector"},"227":{i:0.000724555563495208,u:"../developing_with_spryker/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"228":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_environment_config.html",a:"The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration"},"229":{i:0.00757251714723458,u:"../developing_with_spryker/migration_guides/mg_navigation.html",a:"Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module"},"230":{i:0.00963478675577525,u:"../developing_with_spryker/migration_guides/mg_navigation_gui.html",a:"Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module"},"231":{i:0.00134044404864959,u:"../developing_with_spryker/migration_guides/mg_oms.html",a:"Upgrading from version 6.* to version 7.* In version 7, OMS no longer uses SalesAggregator  to calculate totals, it is now done via the Calculator module. Therefore, there is no more dependency with SalesAggregator. The Spryker\\Zed\\Oms\\Business\\Mail\\MailHandler dependency to SalesAggregatorFacade ...",t:"Migration Guide - OMS"},"232":{i:0.0015705022816404,u:"../developing_with_spryker/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"233":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"234":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"235":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"236":{i:0.00101884444765125,u:"../developing_with_spryker/migration_guides/mg_product_management.html",a:"Upgrading from Version 0.7.* to Version 0.8.*\n If you’re migrating the ProductManagement module from version 0.7.x to version 0.8.x, you need to follow the steps described below.\n\n ProductManagement module persistence layer was moved into the new ProductAttribute module. ORM Entities Changed The ...",t:"Migration Guide - ProductManagement"},"237":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"238":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"239":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"240":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"241":{i:0.0018220536055639,u:"../developing_with_spryker/migration_guides/mg_rabbitmq.html",a:"Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: `bindingQueue` ...",t:"Migration Guide - RabbitMQ"},"242":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"243":{i:0.00266309009133082,u:"../developing_with_spryker/migration_guides/mg_sales.html",a:"Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multicurrency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales"},"244":{i:0.00182039981049148,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"245":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"246":{i:0.00222053818701783,u:"../developing_with_spryker/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"247":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"248":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"249":{i:0.0049559173600238,u:"../developing_with_spryker/migration_guides/mg_shipment.html",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"250":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"251":{i:0.00613608325529536,u:"../developing_with_spryker/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"252":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"253":{i:0.000703922803185119,u:"../developing_with_spryker/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"254":{i:0.00100568134695672,u:"../developing_with_spryker/industry_partner_integration/partner_integration.html",a:"In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/ Academy Navigation To navigate through content, click on an option from the right-hand table of ...",t:"Industry Partner Integration"},"255":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder.html",a:"Search Integration - Fact Finder (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Search Integration - Fact Finder (BETA)"},"256":{i:0.000763412586946046,u:"../developing_with_spryker/industry_partner_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Netmind Documentation Spryker customers can easily connect to Netmind and access comprehensive Netmind e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Netmind-Spryker Module"},"257":{i:0.00557069999048356,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss.html",a:"Risk Solution Services Integration - Arvato Partner Information   See also: Risk Solution Services Integration - Arvato 2.0 Risk Check - Arvato Risk Solution Services 2.0 Store Order - Arvato Risk Solution Services 2.0   Last review date: Nov. 13th, 2017   ",t:"Risk Solution Services Integration - Arvato"},"258":{i:0.00611027343283727,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_2.0.html",a:"The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 2.0"},"259":{i:0.00589611380379657,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_risk_check_2.0.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services 2.0"},"260":{i:0.00557069999048356,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_store_order_2.0.html",a:"\n    As soon as the order is activated in the eShop it has to be directly delivered by the service call StoreOrder in risk solution services.\n    Based on the transmitted data a limit check is processed again. The result and action codes returned by StoreOrder\n    should be analyzed and the order ...",t:"Store Order - Arvato Risk Solution Services 2.0"},"261":{i:0.000868748484422408,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda.html",a:"Performance Monitoring - Econda (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Performance Monitoring - Econda (BETA)"},"262":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_minubo.html",a:"Performance Monitoring - Minubo Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Minubo"},"263":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/preformance_monitoring_styla.html",a:"Performance Monitoring - Styla Partner Information STYLA Documentation https://www.styla.com/de/ressourcen/?iso=de\n Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Styla"},"264":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_channelpilot.html",a:"Performance Monitoring - Channel Pilot Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Channel Pilot"},"265":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_datavirtuality.html",a:"Performance Monitoring - Data Virtuality Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Data Virtuality"},"266":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_nitrobox.html",a:"Performance Monitoring - Nitrobox Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Nitrobox"},"267":{i:0.000742779826635956,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes ...",t:"Payment Integration - RatePAY"},"268":{i:0.000703922803185119,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},"269":{i:0.000861767748098247,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_invoice.html",a:"Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"Invoice - RatePAY"},"270":{i:0.000861767748098247,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_prepayment.html",a:"Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"Prepayment - RatePAY"},"271":{i:0.000861767748098247,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_dir_deb.html",a:"Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct Debit ...",t:"Direct Debit (ELV) - RatePAY"},"272":{i:0.000861767748098247,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_installment.html",a:"The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the Gateway ...",t:"Installment - RatePAY"},"273":{i:0.00290149142548554,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_state_machine.html",a:"Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY State Machine Commands and Conditions"},"274":{i:0.000703922803185119,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_structure_diag.html",a:"RatePAY Core Module Structure Diagram The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY Core Module Structure Diagram"},"275":{i:0.000703922803185119,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_facade.html",a:"RatePAY Facade\n",t:"RatePAY Facade\n"},});