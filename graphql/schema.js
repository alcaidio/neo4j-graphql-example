const { gql } = require("apollo-server");

const typeDefs = gql`
  type Action @node(additionalLabels: ["Exported"]) {
    custom_node: String
    kpi: String!
    onAvantleBac2S: [AvantleBac2!]! @relationship(type: "ON", direction: OUT)
    onBac29S: [Bac29!]! @relationship(type: "ON", direction: OUT)
    onBac30S: [Bac30!]! @relationship(type: "ON", direction: OUT)
    onBac316S: [Bac316!]! @relationship(type: "ON", direction: OUT)
    onBac317S: [Bac317!]! @relationship(type: "ON", direction: OUT)
    onBac3S: [Bac3!]! @relationship(type: "ON", direction: OUT)
    onBac52S: [Bac52!]! @relationship(type: "ON", direction: OUT)
    onOffers: [Offer!]! @relationship(type: "ON", direction: OUT)
    params: String!
    relatedToApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "RELATED_TO", direction: OUT)
    type: String!
    usersDoes: [User!]! @relationship(type: "DOES", direction: IN)
    uuid: String!
  }

  type ActiveGraph_Migrations_SchemaMigration
    @node(label: "ActiveGraph::Migrations::SchemaMigration") {
    migration_id: String!
  }

  type Alias {
    acronym: Boolean
    confirmed_at: BigInt
    count: BigInt
    crawler_updated_at: BigInt
    duration: BigInt
    email: String
    hr_end: BigInt
    hr_start: BigInt
    hr_uuid: String!
    invalidStatus2SOriginalName: [InvalidStatus2!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    invalidStatusesOriginalName: [InvalidStatus!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    is_hidden: Boolean
    is_normalized_name: Boolean!
    is_preferred: Boolean
    is_searchable: Boolean
    language: String
    lastResumesOriginalName: [LastResume!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    last_crawl_at: BigInt
    latitude: Float
    longitude: Float
    name: String!
    nb_workers: String
    ofApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "OF", direction: OUT)
    ofContinents: [Continent!]! @relationship(type: "OF", direction: OUT)
    ofCountries: [Country!]! @relationship(type: "OF", direction: OUT)
    ofSkill5S: [Skill5!]! @relationship(type: "OF", direction: OUT)
    resume_order_version: String
    resumesOriginalName: [Resume!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    rewrited_name: String
    status: String
    uuid: String!
  }

  type Alias2 @node(label: "Alias", additionalLabels: ["AliasSearchable"]) {
    acronym: Boolean
    applicationNode4SReferences: [ApplicationNode4!]!
      @relationship(
        type: "REFERENCES"
        direction: IN
        properties: "ReferencesProperties"
      )
    hiddensOriginalName: [Hidden!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    hr_uuid: String!
    is_normalized_name: Boolean!
    is_preferred: Boolean
    json: String
    language: String
    lastResumesOriginalName: [LastResume!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    name: String!
    ofContinents: [Continent!]! @relationship(type: "OF", direction: OUT)
    ofCountries: [Country!]! @relationship(type: "OF", direction: OUT)
    resumesOriginalName: [Resume!]!
      @relationship(type: "ORIGINAL_NAME", direction: IN)
    uuid: String!
  }

  type Alias3 @node(label: "Alias", additionalLabels: ["NeedSirene"]) {
    hr_uuid: String!
    is_acronym: Boolean!
    is_feminine: Boolean!
    is_normalized_name: Boolean!
    latitude: Float
    longitude: Float
    name: String!
    nb_users: BigInt
    uuid: String!
  }

  type Application {
    applied_at: BigInt!
    needOrderTestsHasFilledOut: [NeedOrderTest!]!
      @relationship(type: "HAS_FILLED_OUT", direction: IN)
    user6SHasFilledOut: [User6!]!
      @relationship(type: "HAS_FILLED_OUT", direction: IN)
    uuid: String!
  }

  type ApplicationNode @node(additionalLabels: ["Partner", "PartnerGroup"]) {
    api_secret: String!
    application: String!
    contact_mail: String
    crm_provider: String
    delivered_at: String!
    display_name_property: String
    has_elearning: Boolean!
    hr_uuid: String!
    is_network: Boolean
    is_public: Boolean
    is_valid: Boolean!
    is_visible_myroad: Boolean
    logo: String
    maintenance_admin: String!
    maintenance_gps: String!
    modified_by: String
    name: String!
    name_with_article: String!
    name_with_article_property: String
    nb_users: BigInt!
    old_applications: String
    square_logo: String
    status: String!
    updated_at: BigInt!
    uuid: String!
    watchesJob2S: [Job2!]!
      @relationship(
        type: "WATCHES"
        direction: OUT
        properties: "WatchesProperties"
      )
    website: String!
    website_international: String!
  }

  type ApplicationNode2
    @node(label: "ApplicationNode", additionalLabels: ["Network", "Partner"]) {
    api_secret: String!
    application: String!
    delivered_at: BigInt!
    has_elearning: Boolean!
    hr_uuid: String!
    is_clipped: String
    is_network: Boolean
    is_public: Boolean!
    is_valid: Boolean!
    logo: String
    maintenance_admin: String!
    maintenance_gps: String!
    name: String!
    name_with_article_property: String!
    nb_users: BigInt!
    old_applications: String
    remove_logo: String
    status: String!
    updated_at: BigInt!
    uuid: String!
    watchesJob2S: [Job2!]!
      @relationship(
        type: "WATCHES"
        direction: OUT
        properties: "WatchesProperties"
      )
    website: String!
    website_international: String!
  }

  type ApplicationNode3
    @node(
      label: "ApplicationNode"
      additionalLabels: ["Location", "NeedSirene"]
    ) {
    address: String
    api_secret: String
    cedex: String
    color_code: String
    contact_mail: String
    delivered_at: BigInt
    has_elearning: Boolean
    hr_uuid: String
    is_clipped: Boolean
    is_demo: Boolean
    is_hidden: Boolean
    is_outdated: Boolean
    is_public: Boolean
    is_searchable: Boolean
    is_top: Boolean
    is_valid: Boolean
    maintenance_admin: String
    maintenance_gps: String
    name: String
    old_applications: String
    remove_logo: String
    requires_user_relationship: Boolean
    same_dtype: Boolean
    size: String
    sso_model: String
    sso_origins: String
    status: String
    uuid: String
    website: String
    website_international: String
  }

  type ApplicationNode4
    @node(label: "ApplicationNode", additionalLabels: ["Partner"]) {
    api_secret: String
    application: String
    config: String
    contact_mail: String
    crawledLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "CRAWLED"
        direction: OUT
        properties: "CrawledProperties"
      )
    crawledLinkedin23S: [Linkedin23!]!
      @relationship(
        type: "CRAWLED"
        direction: OUT
        properties: "CrawledProperties"
      )
    crawledLinkedin43S: [Linkedin43!]!
      @relationship(
        type: "CRAWLED"
        direction: OUT
        properties: "CrawledProperties"
      )
    displayLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayLinkedin27S: [Linkedin27!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayLinkedin33S: [Linkedin33!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayLinkedin43S: [Linkedin43!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayNeedOrderTest13S: [NeedOrderTest13!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayUser3S: [User3!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayUser4S: [User4!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayUser5S: [User5!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    display_name_property: String
    has_elearning: Boolean
    hr_uuid: String
    is_public: Boolean
    is_valid: Boolean!
    is_visible_myroad: Boolean
    logo: String
    maintenance_admin: String
    maintenance_gps: String
    modified_by: String
    name: String!
    name_with_article: String
    name_with_article_property: String
    old_applications: String
    referencesAlias2S: [Alias2!]!
      @relationship(
        type: "REFERENCES"
        direction: OUT
        properties: "ReferencesProperties"
      )
    referencesContinents: [Continent!]!
      @relationship(
        type: "REFERENCES"
        direction: OUT
        properties: "ReferencesProperties"
      )
    referencesCountries: [Country!]!
      @relationship(
        type: "REFERENCES"
        direction: OUT
        properties: "ReferencesProperties"
      )
    remove_logo: String
    requires_user_relationship: Boolean
    status: String
    uuid: String!
    website: String
    website_international: String
  }

  type ApplicationNode5
    @node(label: "ApplicationNode", additionalLabels: ["Location"]) {
    actionsRelatedTo: [Action!]!
      @relationship(type: "RELATED_TO", direction: IN)
    address: String
    address2: String
    aliasesOf: [Alias!]! @relationship(type: "OF", direction: IN)
    api_secret: String
    application: String
    avantleBac2SInPartner: [AvantleBac2!]!
      @relationship(type: "IN_PARTNER", direction: IN)
    avantleBacsInPartner: [AvantleBac!]!
      @relationship(type: "IN_PARTNER", direction: IN)
    bac18SInPartner: [Bac18!]! @relationship(type: "IN_PARTNER", direction: IN)
    cedex: String
    color_code: String
    communicatesEvents: [Event!]!
      @relationship(
        type: "COMMUNICATES"
        direction: OUT
        properties: "CommunicatesProperties"
      )
    confirmed_at: BigInt
    contact_mail: String
    delivered_at: BigInt
    displayLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayLinkedin27S: [Linkedin27!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayLinkedin9S: [Linkedin9!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayUser4S: [User4!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    displayUser5S: [User5!]!
      @relationship(
        type: "DISPLAY"
        direction: OUT
        properties: "DisplayProperties"
      )
    display_name: String
    display_name_property: String
    eventsIn: [Event!]!
      @relationship(type: "IN", direction: IN, properties: "InProperties")
    excludesLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    excludesLinkedin43S: [Linkedin43!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    excludesNeedOrderTest13S: [NeedOrderTest13!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    excludesNeedOrderTest9S: [NeedOrderTest9!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    excludesUser5S: [User5!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    fax: String
    hr_uuid: String!
    includesWords: [Word!]!
      @relationship(
        type: "INCLUDES"
        direction: OUT
        properties: "IncludesProperties"
      )
    invalidateWords: [Word!]! @relationship(type: "INVALIDATE", direction: OUT)
    is_application: Boolean
    is_gov_owned: Boolean
    is_hidden: Boolean!
    is_outdated: Boolean!
    is_public: Boolean!
    is_searchable: Boolean
    is_valid: Boolean!
    lastResumesInAnalytics: [LastResume!]!
      @relationship(type: "IN_ANALYTICS", direction: IN)
    linkedin22SIsAmbassador: [Linkedin22!]!
      @relationship(type: "IS_AMBASSADOR", direction: IN)
    linkedin22SManages: [Linkedin22!]!
      @relationship(
        type: "MANAGES"
        direction: IN
        properties: "ManagesProperties"
      )
    linkedin9SIsAmbassador: [Linkedin9!]!
      @relationship(type: "IS_AMBASSADOR", direction: IN)
    location_subtype: String
    logo: String
    maintenance_admin: String
    maintenance_gps: String
    manualRuleForAvantleBacs: [AvantleBac!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac17S: [Bac17!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac19S: [Bac19!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac20S: [Bac20!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac212S: [Bac212!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac214S: [Bac214!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac215S: [Bac215!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac23S: [Bac23!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac24S: [Bac24!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac29S: [Bac29!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac30S: [Bac30!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac313S: [Bac313!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac31S: [Bac31!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac3S: [Bac3!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac46S: [Bac46!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac47S: [Bac47!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac5S: [Bac5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForBac9S: [Bac9!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForOffer3S: [Offer3!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    manualRuleForOffers: [Offer!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: OUT
        properties: "ManualRuleForProperties"
      )
    mediaIsAbout: [Media!]! @relationship(type: "IS_ABOUT", direction: IN)
    modified_by: String
    name: String!
    name_with_article: String
    name_with_article_property: String
    national_code: String
    nb_workers: String
    needOrderTest14SLogged: [NeedOrderTest14!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    needOrderTest14SSignedUp: [NeedOrderTest14!]!
      @relationship(
        type: "SIGNED_UP"
        direction: IN
        properties: "SignedUpProperties"
      )
    needOrderTest6SLogged: [NeedOrderTest6!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    needOrderTest6SSignedUp: [NeedOrderTest6!]!
      @relationship(
        type: "SIGNED_UP"
        direction: IN
        properties: "SignedUpProperties"
      )
    needOrderTestDut3SLogged: [NeedOrderTestDUT3!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    needOrderTestDut3SSignedUp: [NeedOrderTestDUT3!]!
      @relationship(
        type: "SIGNED_UP"
        direction: IN
        properties: "SignedUpProperties"
      )
    needOrderTestDut5SLogged: [NeedOrderTestDUT5!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    needOrderTestDutWithDomains2SLogged: [NeedOrderTestDUTWithDomains2!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    needOrderTestDutWithDomainsLogged: [NeedOrderTestDUTWithDomains!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    offer3SInPartner: [Offer3!]!
      @relationship(type: "IN_PARTNER", direction: IN)
    offer5SInPartner: [Offer5!]!
      @relationship(type: "IN_PARTNER", direction: IN)
    offer8SInPartner: [Offer8!]!
      @relationship(type: "IN_PARTNER", direction: IN)
    offersInPartner: [Offer!]! @relationship(type: "IN_PARTNER", direction: IN)
    old_applications: String
    organizesEvents: [Event!]! @relationship(type: "ORGANIZES", direction: OUT)
    phone: String
    postalbox: String
    presentation_text: String
    remove_logo: String
    requires_user_relationship: Boolean
    resume2SInAnalytics: [Resume2!]!
      @relationship(type: "IN_ANALYTICS", direction: IN)
    resume_order_version: String
    resume_ordered_at: BigInt
    resumesIn: [Resume!]!
      @relationship(type: "IN", direction: IN, properties: "InProperties")
    resumesInAnalytics: [Resume!]!
      @relationship(type: "IN_ANALYTICS", direction: IN)
    same_dtype: Boolean
    size: String
    square_logo: String
    sso_model: String
    sso_origins: String
    status: String
    tasksFor: [Task!]!
      @relationship(type: "FOR", direction: IN, properties: "ForProperties")
    tel: String
    user3SFollows: [User3!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    user3SLogged: [User3!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    user3SManages: [User3!]!
      @relationship(
        type: "MANAGES"
        direction: IN
        properties: "ManagesProperties"
      )
    user3SSignedUp: [User3!]!
      @relationship(
        type: "SIGNED_UP"
        direction: IN
        properties: "SignedUpProperties"
      )
    user4SUserAction: [User4!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    usersLogged: [User!]!
      @relationship(
        type: "LOGGED"
        direction: IN
        properties: "LoggedProperties"
      )
    usersManages: [User!]!
      @relationship(
        type: "MANAGES"
        direction: IN
        properties: "ManagesProperties"
      )
    usersSignedUp: [User!]!
      @relationship(
        type: "SIGNED_UP"
        direction: IN
        properties: "SignedUpProperties"
      )
    usersUserAction: [User!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    uuid: String!
    watchesJob2S: [Job2!]!
      @relationship(
        type: "WATCHES"
        direction: OUT
        properties: "WatchesProperties"
      )
    website: String
    website_international: String
    zip_code: String
  }

  type ApplicationOffer {
    created_at: BigInt!
    description: String!
    is_exam: Boolean!
    name: String!
    targetsBac20S: [Bac20!]! @relationship(type: "TARGETS", direction: OUT)
    targetsBac46S: [Bac46!]! @relationship(type: "TARGETS", direction: OUT)
    targetsOffer3S: [Offer3!]! @relationship(type: "TARGETS", direction: OUT)
    updated_at: BigInt
    uuid: String!
    website: String
  }

  type AvantleBac
    @node(
      additionalLabels: [
        "Bac"
        "Bac1"
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Bac6"
        "Bac7"
        "Bac8"
        "Offer"
        "Professionnel"
        "Sansniveau"
      ]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String!
    ignore_offer_myroad: Boolean
    ignore_scope: Boolean
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean!
    is_closed: Boolean
    is_continued_education: Boolean!
    is_default: Boolean
    is_generated: Boolean
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean
    is_internship: Boolean!
    is_next_studies: Boolean
    is_part_time: Boolean
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    resume_valid_only: Boolean
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean
  }

  type AvantleBac2
    @node(
      label: "AvantleBac"
      additionalLabels: [
        "Bac"
        "Bac1"
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Bac6"
        "Bac7"
        "Bac8"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
        "Sansniveau"
      ]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    contact_mail: String
    cost: Float
    cost_scholarship: Float
    description: String
    devise: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    ignore_scope: Boolean
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean!
    is_closed: Boolean
    is_continued_education: Boolean!
    is_default: Boolean
    is_generated: Boolean
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean
    is_initial_training: Boolean
    is_internship: Boolean!
    is_next_studies: Boolean
    is_part_time: Boolean
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    lastResumesInCohortOf: [LastResume!]!
      @relationship(type: "IN_COHORT_OF", direction: IN)
    name: String!
    resume_valid_only: Boolean
    resumesInCohortOf: [Resume!]!
      @relationship(type: "IN_COHORT_OF", direction: IN)
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean
  }

  type Bac
    @node(
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
        "Sansniveau"
      ]
    ) {
    allow_multiple_majors: Boolean!
    contact_mail: String!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac10
    @node(
      label: "Bac"
      additionalLabels: ["Bac2", "Bac3", "Offer", "OfferMyRoad"]
    ) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac11
    @node(label: "Bac", additionalLabels: ["Bac2", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac12 @node(label: "Bac", additionalLabels: ["Bac2", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac13
    @node(
      label: "Bac"
      additionalLabels: ["Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac14
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac1"
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Bac6"
        "Bac7"
        "Bac8"
        "Offer"
      ]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac15 @node(label: "Bac", additionalLabels: ["Bac3", "Offer"]) {
    allow_multiple_majors: Boolean!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac16 @node(label: "Bac", additionalLabels: ["Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac17 @node(label: "Bac", additionalLabels: ["Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    cost: Float
    cost_scholarship: Float
    description: String
    devise: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Bac18
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac19
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    cost: Float
    cost_scholarship: Float
    description: String!
    devise: String
    end_at: BigInt
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    student_contact_mail: String
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac2 @node(additionalLabels: ["Bac3", "Bac4", "Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac20
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
        "Sansniveau"
      ]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    applicationOffersTargets: [ApplicationOffer!]!
      @relationship(type: "TARGETS", direction: IN)
    contact_mail: String
    cost: Float
    created_at: BigInt!
    description: String!
    devise: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    student_contact_mail: String
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac21
    @node(
      label: "Bac"
      additionalLabels: ["Bac2", "Bac3", "Bac4", "Offer", "OfferMyRoad"]
    ) {
    allow_multiple_majors: Boolean!
    cost: BigInt!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac210
    @node(label: "Bac2", additionalLabels: ["Bac3", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac211
    @node(label: "Bac2", additionalLabels: ["Bac3", "Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac212 @node(label: "Bac2", additionalLabels: ["Bac3", "Offer"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac213 @node(label: "Bac2", additionalLabels: ["Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac214
    @node(label: "Bac2", additionalLabels: ["Bac3", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac215
    @node(
      label: "Bac2"
      additionalLabels: ["Bac3", "Bac4", "Bac5", "Offer", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac216
    @node(
      label: "Bac2"
      additionalLabels: ["Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac217
    @node(
      label: "Bac2"
      additionalLabels: [
        "Bac3"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac218 @node(label: "Bac2", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac219
    @node(
      label: "Bac2"
      additionalLabels: [
        "Bac3"
        "Bac4"
        "Bac5"
        "Bac8"
        "Offer"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    contact_mail: String!
    created_at: BigInt!
    description: String!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac22
    @node(
      label: "Bac2"
      additionalLabels: ["Bac3", "Offer", "Professionnel", "Sansniveau"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac23
    @node(
      label: "Bac2"
      additionalLabels: ["Bac3", "Bac5", "Offer", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac24
    @node(
      label: "Bac2"
      additionalLabels: ["Bac3", "Bac5", "Offer", "OfferMyRoad"]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac25
    @node(
      label: "Bac2"
      additionalLabels: ["Bac3", "Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac26 @node(label: "Bac2", additionalLabels: ["Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    uuid: String!
    valid_only: Boolean!
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Bac27
    @node(label: "Bac2", additionalLabels: ["Bac5", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac28 @node(label: "Bac2", additionalLabels: ["Bac3", "Bac4", "Offer"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac29
    @node(
      label: "Bac2"
      additionalLabels: [
        "Bac3"
        "Bac4"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    end_at: BigInt
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac3
    @node(
      label: "Bac"
      additionalLabels: ["Bac2", "Bac3", "Offer", "Professionnel"]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac30
    @node(
      label: "Bac"
      additionalLabels: ["Bac2", "Bac3", "Bac5", "Offer", "Professionnel"]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac31 @node(label: "Bac", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    cost: Float
    cost_scholarship: Float
    created_at: BigInt!
    description: String
    devise: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac310
    @node(label: "Bac3", additionalLabels: ["Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    description: String!
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac311 @node(label: "Bac3", additionalLabels: ["Bac4", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac312 @node(label: "Bac3", additionalLabels: ["Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac313 @node(label: "Bac3", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    description: String
    end_at: BigInt
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac314
    @node(label: "Bac3", additionalLabels: ["Bac5", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac315
    @node(
      label: "Bac3"
      additionalLabels: ["Bac4", "Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac316
    @node(
      label: "Bac3"
      additionalLabels: ["Bac4", "Bac5", "Offer", "Professionnel"]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    end_at: BigInt
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac317
    @node(
      label: "Bac3"
      additionalLabels: [
        "Bac4"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac32
    @node(
      label: "Bac3"
      additionalLabels: ["Bac5", "Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac33
    @node(
      label: "Bac3"
      additionalLabels: ["Bac4", "Bac5", "Offer", "OfferMyRoad"]
    ) {
    allow_multiple_majors: Boolean!
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac34
    @node(label: "Bac3", additionalLabels: ["Bac4", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac35
    @node(
      label: "Bac3"
      additionalLabels: ["Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac36
    @node(label: "Bac3", additionalLabels: ["Bac4", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac37 @node(label: "Bac3", additionalLabels: ["Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac38
    @node(label: "Bac3", additionalLabels: ["Bac5", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    description: String
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac39 @node(label: "Bac3", additionalLabels: ["Bac4", "Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac4
    @node(
      label: "Bac"
      additionalLabels: ["Bac3", "Bac5", "Offer", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac40
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Offer"
        "Professionnel"
        "Sansniveau"
      ]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac41
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac1"
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Bac6"
        "Bac7"
        "Bac8"
        "Offer"
        "OfferMyRoad"
      ]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac42 @node(label: "Bac4", additionalLabels: ["Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac43 @node(label: "Bac4", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac44
    @node(label: "Bac4", additionalLabels: ["Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac45
    @node(label: "Bac4", additionalLabels: ["Bac5", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac46
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Offer"
        "OfferMyRoad"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    applicationOffersTargets: [ApplicationOffer!]!
      @relationship(type: "TARGETS", direction: IN)
    contact_mail: String
    cost: Float
    description: String!
    devise: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    student_contact_mail: String
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Bac47
    @node(
      label: "Bac"
      additionalLabels: [
        "Bac2"
        "Bac3"
        "Bac4"
        "Bac5"
        "Offer"
        "Professionnel"
      ]
    ) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac48
    @node(
      label: "Bac4"
      additionalLabels: ["Bac5", "Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac49
    @node(
      label: "Bac"
      additionalLabels: ["Bac3", "Bac4", "Bac5", "Offer", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac5
    @node(label: "Bac", additionalLabels: ["Bac2", "Bac3", "Bac5", "Offer"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac52
    @node(label: "Bac5", additionalLabels: ["Offer", "Professionnel"]) {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    lastResumesInCohortOf: [LastResume!]!
      @relationship(type: "IN_COHORT_OF", direction: IN)
    name: String!
    resumesInCohortOf: [Resume!]!
      @relationship(type: "IN_COHORT_OF", direction: IN)
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Bac53 @node(label: "Bac5", additionalLabels: ["Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac54
    @node(
      label: "Bac5"
      additionalLabels: ["Offer", "OfferMyRoad", "Professionnel"]
    ) {
    allow_multiple_majors: Boolean!
    description: String!
    end_at: BigInt
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_duration: BigInt
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac55 @node(label: "Bac5", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String!
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac6
    @node(label: "Bac", additionalLabels: ["Bac3", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac7
    @node(label: "Bac", additionalLabels: ["Bac2", "Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac8 @node(label: "Bac", additionalLabels: ["Bac2", "Bac3", "Offer"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    created_at: BigInt!
    description: String!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Bac82
    @node(label: "Bac8", additionalLabels: ["Offer", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    is_analytics: Boolean!
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt!
    max_optional_majors: BigInt!
    min_majors: BigInt!
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean!
  }

  type Bac9
    @node(label: "Bac", additionalLabels: ["Bac3", "Offer", "OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    created_at: BigInt!
    description: String!
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    start_at: BigInt!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Badge {
    created_at: BigInt!
    description: String
    description_bronze: String!
    description_gold: String
    description_silver: String
    full_name: String!
    hr_uuid: String!
    is_valid: Boolean!
    lastResumesfalse: [LastResume!]! @relationship(type: "false", direction: IN)
    linkedin22SUserBadge: [Linkedin22!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    linkedin23SUserBadge: [Linkedin23!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    linkedin43SUserBadge: [Linkedin43!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    linkedin9SUserBadge: [Linkedin9!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    name: String!
    needOrderTest11SUserBadge: [NeedOrderTest11!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    needOrderTest17SUserBadge: [NeedOrderTest17!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    requirement: String
    requirement_bronze: String
    requirement_gold: String
    requirement_silver: String
    svg: String!
    type: String!
    updated_at: BigInt!
    user4SUserBadge: [User4!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    user5SUserBadge: [User5!]!
      @relationship(
        type: "USER_BADGE"
        direction: IN
        properties: "UserBadgeProperties"
      )
    uuid: String!
  }

  type Challenge @node(additionalLabels: ["ExpeditionStep"]) {
    description: String
    insctructions: String
    instructions: String
    name: String!
    type: String
    uuid: String!
  }

  type City {
    country: String
    country_code: String
    hr_uuid: String!
    inCountries: [Country!]!
      @relationship(type: "IN", direction: OUT, properties: "InProperties")
    inTmpCountries: [Country!]! @relationship(type: "IN_TMP", direction: OUT)
    includesWords: [Word!]!
      @relationship(
        type: "INCLUDES"
        direction: OUT
        properties: "IncludesProperties"
      )
    is_valid: Boolean!
    linkedin22SCouldHave: [Linkedin22!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin33SCouldHave: [Linkedin33!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin43SCouldHave: [Linkedin43!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    name: String!
    nb_users: BigInt
    needOrderTestsLiveInCity: [NeedOrderTest!]!
      @relationship(type: "LIVE_IN_CITY", direction: IN)
    region: String
    student_living_cost: Float
    user5SCouldHave: [User5!]! @relationship(type: "COULD_HAVE", direction: IN)
    user6SLiveInCity: [User6!]!
      @relationship(type: "LIVE_IN_CITY", direction: IN)
    uuid: String!
    wordsIs: [Word!]!
      @relationship(type: "IS", direction: IN, properties: "IsProperties")
    zipcode: String
  }

  interface DisplayProperties @relationshipProperties {
    test: String
  }

  interface ManagesProperties @relationshipProperties {
    test: String
  }

  interface IsProperties @relationshipProperties {
    test: String
  }

  interface MajorOfProperties @relationshipProperties {
    test: String
  }

  interface CommunicatesProperties @relationshipProperties {
    created_at: BigInt!
    devise: String!
    updated_at: BigInt!
  }

  interface ContainsAnalyticsIngenieurNiProperties @relationshipProperties {
    created_at: BigInt
  }

  interface ContainsProperties @relationshipProperties {
    order: BigInt
  }

  type Continent {
    alias2SOf: [Alias2!]! @relationship(type: "OF", direction: IN)
    aliasesOf: [Alias!]! @relationship(type: "OF", direction: IN)
    applicationNode4SReferences: [ApplicationNode4!]!
      @relationship(
        type: "REFERENCES"
        direction: IN
        properties: "ReferencesProperties"
      )
    code: String!
    countriesPartOf: [Country!]!
      @relationship(
        type: "PART_OF"
        direction: IN
        properties: "PartOfProperties"
      )
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    updated_at: BigInt!
    uuid: String!
    wordsIs: [Word!]!
      @relationship(type: "IS", direction: IN, properties: "IsProperties")
  }

  type Country {
    alias2SOf: [Alias2!]! @relationship(type: "OF", direction: IN)
    aliasesOf: [Alias!]! @relationship(type: "OF", direction: IN)
    applicationNode4SReferences: [ApplicationNode4!]!
      @relationship(
        type: "REFERENCES"
        direction: IN
        properties: "ReferencesProperties"
      )
    citiesIn: [City!]!
      @relationship(type: "IN", direction: IN, properties: "InProperties")
    citiesInTmp: [City!]! @relationship(type: "IN_TMP", direction: IN)
    code: String!
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    job2SHasLocalTrends: [Job2!]!
      @relationship(
        type: "HAS_LOCAL_TRENDS"
        direction: IN
        properties: "HasLocalTrendsProperties"
      )
    languages: String!
    linkedin22SCouldHave: [Linkedin22!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin22SHas: [Linkedin22!]! @relationship(type: "HAS", direction: IN)
    linkedin33SCouldHave: [Linkedin33!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin40SCouldHave: [Linkedin40!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin43SCouldHave: [Linkedin43!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin43SHas: [Linkedin43!]! @relationship(type: "HAS", direction: IN)
    linkedin9SCouldHave: [Linkedin9!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin9SHas: [Linkedin9!]! @relationship(type: "HAS", direction: IN)
    name: String!
    needOrderTest13SCouldHave: [NeedOrderTest13!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    needOrderTest13SHas: [NeedOrderTest13!]!
      @relationship(type: "HAS", direction: IN)
    needOrderTest5SHas: [NeedOrderTest5!]!
      @relationship(type: "HAS", direction: IN)
    partOfContinents: [Continent!]!
      @relationship(
        type: "PART_OF"
        direction: OUT
        properties: "PartOfProperties"
      )
    updated_at: BigInt!
    user4SCouldHave: [User4!]! @relationship(type: "COULD_HAVE", direction: IN)
    user4SHas: [User4!]! @relationship(type: "HAS", direction: IN)
    user5SCouldHave: [User5!]! @relationship(type: "COULD_HAVE", direction: IN)
    user5SHas: [User5!]! @relationship(type: "HAS", direction: IN)
    uuid: String!
    wordsIs: [Word!]!
      @relationship(type: "IS", direction: IN, properties: "IsProperties")
  }

  interface CrawledProperties @relationshipProperties {
    created_at: BigInt
  }

  type DPAE @node(additionalLabels: ["Resume"]) {
    comment: String!
    contract: String
    created_at: BigInt!
    duration: BigInt
    end: BigInt
    end_year: BigInt
    hr_end: BigInt
    hr_start: BigInt
    hr_uuid: String!
    is_aside_job: Boolean!
    is_continued_education: Boolean!
    is_internship: Boolean!
    is_last: Boolean!
    is_parallel: Boolean!
    is_part_time: Boolean!
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    name: String!
    original_location_name: String
    start: BigInt
    start_year: BigInt
    updated_at: BigInt!
    uuid: String!
  }

  type DPAE2 @node(label: "DPAE", additionalLabels: ["LastResume", "Resume"]) {
    comment: String!
    contract: String
    created_at: BigInt!
    duration: BigInt!
    end: BigInt
    end_year: BigInt
    hr_end: BigInt!
    hr_start: BigInt!
    hr_uuid: String!
    is_aside_job: Boolean!
    is_continued_education: Boolean!
    is_internship: Boolean!
    is_last: Boolean!
    is_parallel: Boolean!
    is_part_time: Boolean!
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    name: String!
    original_location_name: String
    start: BigInt!
    start_year: BigInt!
    updated_at: BigInt!
    uuid: String!
  }

  interface DesambiguationProperties @relationshipProperties {
    with_prev_diploma_level: Boolean
  }

  type Diploma @node(additionalLabels: ["ResumeNode"]) {
    confirmed_at: BigInt
    count: BigInt
    description_en: String
    description_fr: String
    diplomaMajor2SLeadsToNodeScenario: [DiplomaMajor2!]!
      @relationship(
        type: "LEADS_TO_NODE_SCENARIO"
        direction: IN
        properties: "LeadsToNodeScenarioProperties"
      )
    diplomaMajor2SMajorOf: [DiplomaMajor2!]!
      @relationship(
        type: "MAJOR_OF"
        direction: IN
        properties: "MajorOfProperties"
      )
    diplomaMajor2SMinorOf: [DiplomaMajor2!]!
      @relationship(type: "MINOR_OF", direction: IN)
    diploma_type: String
    diplomasLeadsToNode: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE"
        direction: IN
        properties: "LeadsToNodeProperties"
      )
    diplomasLeadsToNodeScenario: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE_SCENARIO"
        direction: IN
        properties: "LeadsToNodeScenarioProperties"
      )
    diplomasNoWay: [Diploma!]! @relationship(type: "NO_WAY", direction: IN)
    diplomasScenario: [Diploma!]!
      @relationship(
        type: "SCENARIO"
        direction: IN
        properties: "ScenarioProperties"
      )
    diplomasStepOf: [Diploma!]! @relationship(type: "STEP_OF", direction: IN)
    hiddensContainsAnalyticsEce: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: IN)
    hiddensContainsAnalyticsEcetech: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: IN)
    hiddensContainsAnalyticsEnseeiht: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: IN)
    hiddensContainsAnalyticsIaeCaen: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: IN)
    hiddensContainsAnalyticsIaeDijon: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: IN)
    hiddensContainsAnalyticsImtMinesAlbi: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: IN)
    hiddensContainsAnalyticsMillionroadsDemo: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO", direction: IN)
    hiddensContainsAnalyticsPolytechClermont: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_CLERMONT", direction: IN)
    hiddensContainsAnalyticsSciencespoParis: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_SCIENCESPO_PARIS", direction: IN)
    hiddensContainsAnalyticsUliege: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: IN)
    hr_uuid: String!
    includesWords: [Word!]!
      @relationship(
        type: "INCLUDES"
        direction: OUT
        properties: "IncludesProperties"
      )
    invalidStatus2SContainsAnalyticsIngenieurNI: [InvalidStatus2!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: IN
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    invalidStatus4SContainsAnalyticsIaeToulon: [InvalidStatus4!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: IN)
    invalidStatusesContainsAnalyticsIngenieurNI: [InvalidStatus!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: IN
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    is_hidden: Boolean!
    is_nomenclature: Boolean
    is_outdated: Boolean!
    is_root: Boolean
    is_searchable: Boolean!
    is_valid: Boolean!
    lastResume2SContainsAnalyticsArtsetmetiers: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: IN)
    lastResume2SContainsAnalyticsAudencia: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_AUDENCIA", direction: IN)
    lastResume2SContainsAnalyticsCesiAlternance: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: IN)
    lastResume2SContainsAnalyticsCriParis: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: IN)
    lastResume2SContainsAnalyticsEbi: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBI", direction: IN)
    lastResume2SContainsAnalyticsEbsParis: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBS_PARIS", direction: IN)
    lastResume2SContainsAnalyticsEfrei: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EFREI", direction: IN)
    lastResume2SContainsAnalyticsEiCesi: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    lastResume2SContainsAnalyticsEiml: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EIML", direction: IN)
    lastResume2SContainsAnalyticsEsce: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESCE", direction: IN)
    lastResume2SContainsAnalyticsEsitcCaen: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESITC_CAEN", direction: IN)
    lastResume2SContainsAnalyticsEurecom: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EURECOM", direction: IN)
    lastResume2SContainsAnalyticsHetic: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_HETIC", direction: IN)
    lastResume2SContainsAnalyticsIaeToulon: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: IN)
    lastResume2SContainsAnalyticsIcdParis: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ICD_PARIS", direction: IN)
    lastResume2SContainsAnalyticsIfgExecutive: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: IN)
    lastResume2SContainsAnalyticsIfocop: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFOCOP", direction: IN)
    lastResume2SContainsAnalyticsIngenieurs2000: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INGENIEURS2000", direction: IN)
    lastResume2SContainsAnalyticsInseec: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: IN)
    lastResume2SContainsAnalyticsInseecBs: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: IN)
    lastResume2SContainsAnalyticsIsenMediterranee: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISEN_MEDITERRANEE", direction: IN)
    lastResume2SContainsAnalyticsIsima: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISIMA", direction: IN)
    lastResume2SContainsAnalyticsMastersInseec: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: IN)
    lastResume2SContainsAnalyticsMontpellierBs: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: IN)
    lastResume2SContainsAnalyticsMyBs: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MY_BS", direction: IN)
    lastResume2SContainsAnalyticsNeomaAlumni: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_NEOMA_ALUMNI", direction: IN)
    lastResume2SContainsAnalyticsSkemaBs: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_SKEMA_BS", direction: IN)
    lastResume2SContainsAnalyticsSupdepub: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: IN)
    lastResume2SContainsAnalyticsUliege: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: IN)
    lastResumesContainsAnalyticsCriParis: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: IN)
    lastResumesContainsAnalyticsEce: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: IN)
    lastResumesContainsAnalyticsEcetech: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: IN)
    lastResumesContainsAnalyticsEiCesi: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    lastResumesContainsAnalyticsEnseeiht: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: IN)
    lastResumesContainsAnalyticsIaeCaen: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: IN)
    lastResumesContainsAnalyticsIaeDijon: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: IN)
    lastResumesContainsAnalyticsImtMinesAlbi: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: IN)
    lastResumesContainsAnalyticsInfn: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INFN", direction: IN)
    lastResumesContainsAnalyticsIngenieurNI: [LastResume!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: IN
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    lastResumesContainsAnalyticsInsaToulouse: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSA_TOULOUSE", direction: IN)
    lastResumesContainsAnalyticsLyceecoubertinMeaux: [LastResume!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_LYCEECOUBERTIN_MEAUX"
        direction: IN
      )
    lastResumesContainsAnalyticsMillionroadsDemo: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO", direction: IN)
    lastResumesContainsAnalyticsSupcareer: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: IN)
    lastResumesContainsAnalyticsUliege: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: IN)
    lastResumesContainsAnalyticsUtt: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_UTT", direction: IN)
    last_crawl_at: BigInt
    latitude: Float
    leadsToNodeDiplomas: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE"
        direction: OUT
        properties: "LeadsToNodeProperties"
      )
    leadsToNodeJob2S: [Job2!]!
      @relationship(
        type: "LEADS_TO_NODE"
        direction: OUT
        properties: "LeadsToNodeProperties"
      )
    leadsToNodeScenarioDiplomas: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE_SCENARIO"
        direction: OUT
        properties: "LeadsToNodeScenarioProperties"
      )
    linkedin22SFollows: [Linkedin22!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    longitude: Float
    mediaIsAbout: [Media!]! @relationship(type: "IS_ABOUT", direction: IN)
    name: String!
    needOrderTest10SFollows: [NeedOrderTest10!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    needOrderTest14SFollows: [NeedOrderTest14!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    needOrderTest6SFollows: [NeedOrderTest6!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    needOrderTestDut3SFollows: [NeedOrderTestDUT3!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    needOrderTestDut3SUserAction: [NeedOrderTestDUT3!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    noWayDiplomas: [Diploma!]! @relationship(type: "NO_WAY", direction: OUT)
    offer3SFor: [Offer3!]!
      @relationship(type: "FOR", direction: IN, properties: "ForProperties")
    offer3SNiceToHave: [Offer3!]!
      @relationship(type: "NICE_TO_HAVE", direction: IN)
    offersFor: [Offer!]!
      @relationship(type: "FOR", direction: IN, properties: "ForProperties")
    offersNiceToHave: [Offer!]!
      @relationship(type: "NICE_TO_HAVE", direction: IN)
    requires_application: Boolean
    resume2SContainsAnalyticsArtsetmetiers: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: IN)
    resume2SContainsAnalyticsAudencia: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_AUDENCIA", direction: IN)
    resume2SContainsAnalyticsCesiAlternance: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: IN)
    resume2SContainsAnalyticsCriParis: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: IN)
    resume2SContainsAnalyticsEbi: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBI", direction: IN)
    resume2SContainsAnalyticsEbsParis: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBS_PARIS", direction: IN)
    resume2SContainsAnalyticsEfrei: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EFREI", direction: IN)
    resume2SContainsAnalyticsEiCesi: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    resume2SContainsAnalyticsEiml: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EIML", direction: IN)
    resume2SContainsAnalyticsEnseeiht: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: IN)
    resume2SContainsAnalyticsEsce: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESCE", direction: IN)
    resume2SContainsAnalyticsEsitcCaen: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESITC_CAEN", direction: IN)
    resume2SContainsAnalyticsEssca: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESSCA", direction: IN)
    resume2SContainsAnalyticsEurecom: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EURECOM", direction: IN)
    resume2SContainsAnalyticsHetic: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_HETIC", direction: IN)
    resume2SContainsAnalyticsIaeToulon: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: IN)
    resume2SContainsAnalyticsIcdParis: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ICD_PARIS", direction: IN)
    resume2SContainsAnalyticsIfgExecutive: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: IN)
    resume2SContainsAnalyticsIfocop: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFOCOP", direction: IN)
    resume2SContainsAnalyticsIngenieurs2000: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INGENIEURS2000", direction: IN)
    resume2SContainsAnalyticsInseec: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: IN)
    resume2SContainsAnalyticsInseecBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: IN)
    resume2SContainsAnalyticsIsenMediterranee: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISEN_MEDITERRANEE", direction: IN)
    resume2SContainsAnalyticsIsima: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISIMA", direction: IN)
    resume2SContainsAnalyticsMastersInseec: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: IN)
    resume2SContainsAnalyticsMillionroadsDemo: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO", direction: IN)
    resume2SContainsAnalyticsMontpellierBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: IN)
    resume2SContainsAnalyticsMyBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MY_BS", direction: IN)
    resume2SContainsAnalyticsNeomaAlumni: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_NEOMA_ALUMNI", direction: IN)
    resume2SContainsAnalyticsSkemaBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_SKEMA_BS", direction: IN)
    resume2SContainsAnalyticsSupcareer: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: IN)
    resume2SContainsAnalyticsSupdepub: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: IN)
    resume_order_version: String
    resume_ordered_at: BigInt
    resumesContains: [Resume!]!
      @relationship(
        type: "CONTAINS"
        direction: IN
        properties: "ContainsProperties"
      )
    resumesContainsAnalyticsArtsetmetiers: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: IN)
    resumesContainsAnalyticsCesiAlternance: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: IN)
    resumesContainsAnalyticsChimieparistech: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_CHIMIEPARISTECH", direction: IN)
    resumesContainsAnalyticsCriParis: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: IN)
    resumesContainsAnalyticsEce: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: IN)
    resumesContainsAnalyticsEcetech: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: IN)
    resumesContainsAnalyticsEiCesi: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    resumesContainsAnalyticsEnseeiht: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: IN)
    resumesContainsAnalyticsIaeCaen: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: IN)
    resumesContainsAnalyticsIaeDijon: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: IN)
    resumesContainsAnalyticsIfgExecutive: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: IN)
    resumesContainsAnalyticsImtMinesAlbi: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: IN)
    resumesContainsAnalyticsInfn: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INFN", direction: IN)
    resumesContainsAnalyticsIngenieurNI: [Resume!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: IN
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    resumesContainsAnalyticsInsaToulouse: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSA_TOULOUSE", direction: IN)
    resumesContainsAnalyticsInseec: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: IN)
    resumesContainsAnalyticsLyceecoubertinMeaux: [Resume!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_LYCEECOUBERTIN_MEAUX"
        direction: IN
      )
    resumesContainsAnalyticsMastersInseec: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: IN)
    resumesContainsAnalyticsMillionroadsDemo: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO", direction: IN)
    resumesContainsAnalyticsPolytechClermont: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_CLERMONT", direction: IN)
    resumesContainsAnalyticsPolytechGrenoble: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE", direction: IN)
    resumesContainsAnalyticsPolytechTours: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: IN)
    resumesContainsAnalyticsPricPaca: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_PRIC_PACA", direction: IN)
    resumesContainsAnalyticsSciencespoParis: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_SCIENCESPO_PARIS", direction: IN)
    resumesContainsAnalyticsSupcareer: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: IN)
    resumesContainsAnalyticsSupdepub: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: IN)
    resumesContainsAnalyticsUliege: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: IN)
    resumesContainsAnalyticsUtt: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_UTT", direction: IN)
    scenarioDiplomas: [Diploma!]!
      @relationship(
        type: "SCENARIO"
        direction: OUT
        properties: "ScenarioProperties"
      )
    status: String
    stepOfDiplomas: [Diploma!]! @relationship(type: "STEP_OF", direction: OUT)
    user3SFollows: [User3!]!
      @relationship(
        type: "FOLLOWS"
        direction: IN
        properties: "FollowsProperties"
      )
    user3SUserAction: [User3!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    usersUserAction: [User!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    uuid: String!
    valid: Boolean
  }

  type DiplomaLevel {
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    uuid: String!
  }

  type DiplomaMajor
    @node(additionalLabels: ["NeedComputeHrUuid", "ResumeNode"]) {
    hr_uuid: String!
    is_hidden: Boolean!
    is_nomenclature: Boolean!
    is_optional: Boolean
    is_outdated: Boolean!
    is_required: Boolean
    is_searchable: Boolean!
    is_top: Boolean!
    is_valid: Boolean!
    name: String!
    uuid: String!
  }

  type DiplomaMajor2
    @node(label: "DiplomaMajor", additionalLabels: ["ResumeNode"]) {
    description_en: String
    description_fr: String
    diplomaMajor2SMinorOf: [DiplomaMajor2!]!
      @relationship(type: "MINOR_OF", direction: IN)
    hiddensContainsAnalyticsPolytechTours: [Hidden!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: IN)
    hr_uuid: String!
    is_hidden: Boolean!
    is_nomenclature: Boolean
    is_optional: Boolean
    is_outdated: Boolean!
    is_required: Boolean
    is_searchable: Boolean!
    is_top: Boolean!
    is_valid: Boolean!
    lastResume2SContainsAnalyticsEiCesi: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    lastResume2SContainsAnalyticsMontpellierBs: [LastResume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: IN)
    lastResumesContainsAnalyticsPolytechGrenoble: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE", direction: IN)
    leadsToNodeScenarioDiplomas: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE_SCENARIO"
        direction: OUT
        properties: "LeadsToNodeScenarioProperties"
      )
    majorOfDiplomas: [Diploma!]!
      @relationship(
        type: "MAJOR_OF"
        direction: OUT
        properties: "MajorOfProperties"
      )
    minorOfDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "MINOR_OF", direction: OUT)
    minorOfDiplomas: [Diploma!]! @relationship(type: "MINOR_OF", direction: OUT)
    name: String!
    resume2SContainsAnalyticsEiCesi: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: IN)
    resume2SContainsAnalyticsInseecBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: IN)
    resume2SContainsAnalyticsMontpellierBs: [Resume2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: IN)
    resumesContainsAnalyticsPolytechGrenoble: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE", direction: IN)
    resumesContainsAnalyticsPolytechTours: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: IN)
    resumesContainsAnalyticsUvsq: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_UVSQ", direction: IN)
    scenarioBacDomains: [Domain!]!
      @relationship(
        type: "SCENARIO_BAC"
        direction: OUT
        properties: "ScenarioBacProperties"
      )
    uuid: String!
  }

  type DiplomaType {
    country: String
    diploma_level: String
    ended_at: BigInt
    hr_uuid: String!
    is_continued_education: Boolean!
    is_diplomas_list: Boolean!
    is_international: Boolean!
    is_outdated: Boolean!
    is_top: Boolean
    is_valid: Boolean!
    linkedin22SCouldHave: [Linkedin22!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin43SCouldHave: [Linkedin43!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    name: String!
    uuid: String!
  }

  type Domain {
    color: String
    diplomaMajor2SScenarioBac: [DiplomaMajor2!]!
      @relationship(
        type: "SCENARIO_BAC"
        direction: IN
        properties: "ScenarioBacProperties"
      )
    hr_uuid: String!
    image_diploma: String
    image_job: String
    image_job_manager: String
    is_diploma: Boolean!
    is_job: Boolean!
    is_location: Boolean!
    is_valid: Boolean!
    linkedin22SCouldHave: [Linkedin22!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin23SCouldHave: [Linkedin23!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin43SCouldHave: [Linkedin43!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    linkedin9SCouldHave: [Linkedin9!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    name: String!
    needOrderTest5SCouldHave: [NeedOrderTest5!]!
      @relationship(type: "COULD_HAVE", direction: IN)
    normalized_at: BigInt
    offer4SOriginalPartOf: [Offer4!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: IN)
    offer5SOriginalPartOf: [Offer5!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: IN)
    offer8SOriginalPartOf: [Offer8!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: IN)
    offersOriginalPartOf: [Offer!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: IN)
    type: String!
    user4SCouldHave: [User4!]! @relationship(type: "COULD_HAVE", direction: IN)
    user5SCouldHave: [User5!]! @relationship(type: "COULD_HAVE", direction: IN)
    uuid: String!
  }

  type EnEmploi @node(additionalLabels: ["Offer", "ToutPublic"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt!
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String!
    name: String!
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  type EnEmploi2 @node(label: "EnEmploi", additionalLabels: ["Offer"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt!
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String
    name: String!
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  type ErrorNeedUpdateCRM
    @node(
      additionalLabels: [
        "Linkedin"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM2
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: [
        "Linkedin"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM3
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: [
        "Linkedin"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM4
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: [
        "Linkedin"
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM5
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: [
        "Linkedin"
        "NeedUpdateCRM"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM6
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: ["Linkedin", "User", "UserDevise"]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type ErrorNeedUpdateCRM7
    @node(
      label: "ErrorNeedUpdateCRM"
      additionalLabels: ["Linkedin", "User", "UserDevise", "UserSearchable"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean
    resume_order_version: String!
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Event {
    applicationNode5SCommunicates: [ApplicationNode5!]!
      @relationship(
        type: "COMMUNICATES"
        direction: IN
        properties: "CommunicatesProperties"
      )
    applicationNode5SOrganizes: [ApplicationNode5!]!
      @relationship(type: "ORGANIZES", direction: IN)
    comment: String
    description: String
    distance: BigInt
    end_date: BigInt
    forOffers: [Offer!]!
      @relationship(type: "FOR", direction: OUT, properties: "ForProperties")
    goalsFrom: [Goal!]! @relationship(type: "FROM", direction: IN)
    hr_uuid: String
    inApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN", direction: OUT, properties: "InProperties")
    is_virtual: Boolean
    modifiedBy: String
    name: String
    placement: String
    start_date: BigInt
    type: String
    user6SAttended: [User6!]! @relationship(type: "ATTENDED", direction: IN)
    uuid: String!
    website: String
  }

  interface ExcludesProperties @relationshipProperties {
    created_at: BigInt
    is_location: Boolean
    reason: String
  }

  type Expedition {
    created_at: BigInt!
    description: String!
    difficulty: String!
    expeditionInstancesIsInstanceOf: [ExpeditionInstance!]!
      @relationship(type: "IS_INSTANCE_OF", direction: IN)
    hr_uuid: String!
    image: String!
    isPublic: Boolean!
    is_public: Boolean!
    name: String!
    updated_at: BigInt!
    uuid: String!
  }

  type ExpeditionInstance {
    created_at: BigInt
    end: BigInt
    hr_uuid: String
    isInstanceOfExpeditions: [Expedition!]!
      @relationship(type: "IS_INSTANCE_OF", direction: OUT)
    start: BigInt
    updated_at: BigInt
    usersEngagedIn: [User!]! @relationship(type: "ENGAGED_IN", direction: IN)
    uuid: String!
  }

  type ExpeditionStep {
    created_at: BigInt!
    description: String!
    duration: String!
    group: String!
    hr_uuid: String!
    instructions: String!
    name: String!
    synthesis_instructions: String!
    type: String!
    updated_at: BigInt!
    uuid: String!
  }

  interface FollowsProperties @relationshipProperties {
    followed_at: BigInt
    is_accepted: Boolean
    is_invitation: Boolean
    is_top: String
    suggested_future_id: String
  }

  interface ForProperties @relationshipProperties {
    order: BigInt
  }

  type Goal {
    conversion_sent_at: BigInt
    conversion_viewed_at: BigInt
    count_at: BigInt!
    created_at: BigInt!
    description: String
    fromEvents: [Event!]! @relationship(type: "FROM", direction: OUT)
    is_closed: Boolean!
    is_generated: Boolean
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    linkedin42SSearches: [Linkedin42!]!
      @relationship(type: "SEARCHES", direction: IN)
    linkedin9SSearches: [Linkedin9!]!
      @relationship(type: "SEARCHES", direction: IN)
    name: String!
    nb_all: BigInt
    nb_itineraries: BigInt
    nb_profiles: BigInt
    requiresSkill2S: [Skill2!]! @relationship(type: "REQUIRES", direction: OUT)
    requiresSkill4S: [Skill4!]! @relationship(type: "REQUIRES", direction: OUT)
    requiresSkill5S: [Skill5!]! @relationship(type: "REQUIRES", direction: OUT)
    requiresSkill6S: [Skill6!]! @relationship(type: "REQUIRES", direction: OUT)
    requiresSkill7S: [Skill7!]! @relationship(type: "REQUIRES", direction: OUT)
    start_at: BigInt
    updated_at: BigInt!
    user3SSearches: [User3!]! @relationship(type: "SEARCHES", direction: IN)
    usersSearches: [User!]! @relationship(type: "SEARCHES", direction: IN)
    uuid: String!
  }

  type Group {
    name: String!
    uuid: String!
  }

  interface HasLocalTrendsProperties @relationshipProperties {
    in_tension: Boolean
    job_opportunities: Boolean
  }

  interface HasSkillProperties @relationshipProperties {
    created_at: BigInt
    obtained_at: BigInt
    updated_at: BigInt
  }

  type Hidden @node(additionalLabels: ["Resume"]) {
    comment: String
    containsAnalyticsEceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: OUT)
    containsAnalyticsEcetechDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: OUT)
    containsAnalyticsEnseeihtDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: OUT)
    containsAnalyticsIaeCaenDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: OUT)
    containsAnalyticsIaeDijonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: OUT)
    containsAnalyticsImtMinesAlbiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: OUT)
    containsAnalyticsMillionroadsDemoDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO"
        direction: OUT
      )
    containsAnalyticsPolytechClermontDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_POLYTECH_CLERMONT"
        direction: OUT
      )
    containsAnalyticsPolytechToursDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: OUT)
    containsAnalyticsSciencespoParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SCIENCESPO_PARIS", direction: OUT)
    containsAnalyticsUliegeDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: OUT)
    created_at: BigInt!
    created_by_location: BigInt
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_hroads: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    latitude: Float
    longitude: Float
    monthly_earning: BigInt
    name: String!
    nb_users: BigInt
    normalized_at: BigInt
    order_index: BigInt
    originalNameAlias2S: [Alias2!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    tag: String
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type Hidden2
    @node(label: "Hidden", additionalLabels: ["LastResume", "Resume"]) {
    comment: String
    created_at: BigInt!
    daily_earning: BigInt
    gap_after_previous: BigInt!
    has_no_location: Boolean
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean!
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt!
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    uuid: String!
    validation_status: String
    yearly_earning: BigInt!
  }

  type Hidden3
    @node(label: "Hidden", additionalLabels: ["Resume", "ValidStatus"]) {
    comment: String!
    created_at: BigInt!
    created_by_location: BigInt
    daily_earning: BigInt
    duration: BigInt
    end: BigInt
    end_year: BigInt
    gap_after_previous: BigInt!
    has_no_location: Boolean
    hr_end: BigInt
    hr_start: BigInt
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    order_index: BigInt
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    start: BigInt
    start_year: BigInt
    uuid: String!
    validation_status: String!
    yearly_earning: BigInt
  }

  type Hidden4
    @node(label: "Hidden", additionalLabels: ["InvalidStatus", "Resume"]) {
    comment: String!
    created_at: BigInt!
    created_by_location: BigInt
    daily_earning: BigInt
    duration: BigInt
    end_year: BigInt
    gap_after_previous: BigInt!
    has_no_location: Boolean
    hr_start: BigInt
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    order_index: BigInt
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    start_year: BigInt
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type Hobby {
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    normalized_at: BigInt
    user5SHas: [User5!]! @relationship(type: "HAS", direction: IN)
    uuid: String!
  }

  interface HomonymOfProperties @relationshipProperties {
    created_at: BigInt
  }

  interface InProperties @relationshipProperties {
    created_at: BigInt
    in_analytics: Boolean
  }

  interface IncludesChildProperties @relationshipProperties {
    created_at: BigInt
    updated_at: BigInt
  }

  interface IncludesMetaProperties @relationshipProperties {
    created_at: BigInt
    is_diploma: Boolean
    is_domain: Boolean
    is_job: Boolean
    is_resume_node: Boolean
  }

  interface IncludesNomenclatureProperties @relationshipProperties {
    created_at: BigInt!
  }

  interface IncludesProperties @relationshipProperties {
    added_by_user: Boolean
    is_exact: Boolean
    is_location: Boolean
    reliability_weight: Float
    spreadsheet: String
  }

  type InvalidStatus @node(additionalLabels: ["Resume"]) {
    comment: String
    containsAnalyticsIngenieurNIDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: OUT
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    created_by_location: BigInt
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    order_index: BigInt
    originalNameAliases: [Alias!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    tag: String
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type InvalidStatus2
    @node(label: "InvalidStatus", additionalLabels: ["LastResume", "Resume"]) {
    comment: String
    containsAnalyticsIngenieurNIDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: OUT
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    created_by_location: BigInt
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean!
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    order_index: BigInt
    originalNameAliases: [Alias!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type InvalidStatus3
    @node(label: "InvalidStatus", additionalLabels: ["Resume", "ValidStatus"]) {
    comment: String!
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String!
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean!
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type InvalidStatus4
    @node(
      label: "InvalidStatus"
      additionalLabels: ["LastResume", "Resume", "ValidStatus"]
    ) {
    comment: String!
    containsAnalyticsIaeToulonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: OUT)
    daily_earning: BigInt
    end: BigInt!
    gap_after_previous: BigInt
    has_no_location: Boolean
    hr_uuid: String!
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean!
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean!
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    start: BigInt
    updated_at: BigInt!
    uuid: String!
    validation_status: String!
    yearly_earning: BigInt
  }

  type Job @node(additionalLabels: ["NeedSirene", "ResumeNode"]) {
    avg_duration_yr: BigInt!
    created_at: BigInt!
    hr_uuid: String!
    is_hidden: Boolean!
    is_nomenclature: Boolean!
    is_outdated: Boolean!
    is_root: Boolean!
    is_searchable: Boolean!
    is_top: Boolean!
    is_valid: Boolean!
    name: String!
    nb_users: BigInt!
    normalized_at: BigInt!
    updated_at: BigInt!
    uuid: String!
    yearly_earning: BigInt!
    yearly_earning_max: BigInt!
    yearly_earning_min: BigInt!
  }

  type Job2 @node(label: "Job", additionalLabels: ["ResumeNode"]) {
    applicationNode2SWatches: [ApplicationNode2!]!
      @relationship(
        type: "WATCHES"
        direction: IN
        properties: "WatchesProperties"
      )
    applicationNode5SWatches: [ApplicationNode5!]!
      @relationship(
        type: "WATCHES"
        direction: IN
        properties: "WatchesProperties"
      )
    applicationNodesWatches: [ApplicationNode!]!
      @relationship(
        type: "WATCHES"
        direction: IN
        properties: "WatchesProperties"
      )
    avg_duration_yr: BigInt
    comment: String
    crawler_updated_at: BigInt
    description: String
    description_en: String
    description_fr: String
    diplomasLeadsToNode: [Diploma!]!
      @relationship(
        type: "LEADS_TO_NODE"
        direction: IN
        properties: "LeadsToNodeProperties"
      )
    hasLocalTrendsCountries: [Country!]!
      @relationship(
        type: "HAS_LOCAL_TRENDS"
        direction: OUT
        properties: "HasLocalTrendsProperties"
      )
    hasLocalTrendsRegions: [Region!]!
      @relationship(
        type: "HAS_LOCAL_TRENDS"
        direction: OUT
        properties: "HasLocalTrendsProperties"
      )
    hr_uuid: String!
    includesWords: [Word!]!
      @relationship(
        type: "INCLUDES"
        direction: OUT
        properties: "IncludesProperties"
      )
    is_hidden: Boolean!
    is_nomenclature: Boolean
    is_outdated: Boolean!
    is_root: Boolean
    is_searchable: Boolean!
    is_valid: Boolean!
    lastResumesContains: [LastResume!]!
      @relationship(
        type: "CONTAINS"
        direction: IN
        properties: "ContainsProperties"
      )
    lastResumesContainsAnalyticsInriaAlumni: [LastResume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INRIA_ALUMNI", direction: IN)
    latitude: Float
    longitude: Float
    name: String!
    resumesContains: [Resume!]!
      @relationship(
        type: "CONTAINS"
        direction: IN
        properties: "ContainsProperties"
      )
    resumesContainsAnalyticsInriaAlumni: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_INRIA_ALUMNI", direction: IN)
    resumesContainsAnalyticsMtes: [Resume!]!
      @relationship(type: "CONTAINS_ANALYTICS_MTES", direction: IN)
    user3SUserAction: [User3!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    uuid: String!
  }

  type JobExperience {
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    updated_at: BigInt!
    uuid: String!
  }

  type JobPosition {
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    updated_at: BigInt!
    uuid: String!
  }

  type JobTrend {
    created_at: BigInt!
    salary_max: Float!
    salary_med: Float
    salary_min: Float!
    updated_at: BigInt!
    uuid: String!
  }

  type LastResume @node(additionalLabels: ["Resume"]) {
    comment: String
    comment_choice: String
    confirmed_at: BigInt
    containsAnalyticsCriParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: OUT)
    containsAnalyticsEceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: OUT)
    containsAnalyticsEcetechDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: OUT)
    containsAnalyticsEiCesiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEnseeihtDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: OUT)
    containsAnalyticsIaeCaenDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: OUT)
    containsAnalyticsIaeDijonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: OUT)
    containsAnalyticsImtMinesAlbiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: OUT)
    containsAnalyticsInfnDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INFN", direction: OUT)
    containsAnalyticsIngenieurNIDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: OUT
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    containsAnalyticsInriaAlumniJob2S: [Job2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INRIA_ALUMNI", direction: OUT)
    containsAnalyticsInsaToulouseDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSA_TOULOUSE", direction: OUT)
    containsAnalyticsLyceecoubertinMeauxDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_LYCEECOUBERTIN_MEAUX"
        direction: OUT
      )
    containsAnalyticsMillionroadsDemoDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO"
        direction: OUT
      )
    containsAnalyticsPolytechGrenobleDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE"
        direction: OUT
      )
    containsAnalyticsSupcareerDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: OUT)
    containsAnalyticsUliegeDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: OUT)
    containsAnalyticsUttDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_UTT", direction: OUT)
    containsJob2S: [Job2!]!
      @relationship(
        type: "CONTAINS"
        direction: OUT
        properties: "ContainsProperties"
      )
    created_by_location: BigInt
    daily_earning: BigInt
    email: String
    falseBadges: [Badge!]! @relationship(type: "false", direction: OUT)
    has_no_location: Boolean
    hr_uuid: String
    inAnalyticsApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_ANALYTICS", direction: OUT)
    inCohortOfAvantleBac2S: [AvantleBac2!]!
      @relationship(type: "IN_COHORT_OF", direction: OUT)
    inCohortOfBac52S: [Bac52!]!
      @relationship(type: "IN_COHORT_OF", direction: OUT)
    in_company_duration: BigInt
    isParallelLastResumes: [LastResume!]!
      @relationship(type: "IS_PARALLEL", direction: OUT)
    isParallelResumes: [Resume!]!
      @relationship(type: "IS_PARALLEL", direction: OUT)
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_hroads: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean!
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_searchable: Boolean
    is_valid: Boolean!
    is_verified: Boolean!
    lastResumesIsParallel: [LastResume!]!
      @relationship(type: "IS_PARALLEL", direction: IN)
    latitude: Float
    longitude: Float
    monthly_earning: BigInt
    name: String
    nb_users: BigInt
    nb_workers: String
    order_index: BigInt
    originalNameAlias2S: [Alias2!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    originalNameAliases: [Alias!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    resume_order_version: String
    resume_ordered_at: BigInt
    resumesIsParallel: [Resume!]!
      @relationship(type: "IS_PARALLEL", direction: IN)
    resumesLeadsTo: [Resume!]!
      @relationship(
        type: "LEADS_TO"
        direction: IN
        properties: "LeadsToProperties"
      )
    resumesLeadsToStepOf: [Resume!]!
      @relationship(
        type: "LEADS_TO_STEP_OF"
        direction: IN
        properties: "LeadsToStepOfProperties"
      )
    tag: String
    training_mod: String
    user_defined_type: String
    uuid: String!
    validation_status: String
    video_ask_id: String
    yearly_earning: BigInt
  }

  type LastResume2
    @node(label: "LastResume", additionalLabels: ["Resume", "ValidStatus"]) {
    comment: String
    containsAnalyticsArtsetmetiersDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: OUT)
    containsAnalyticsAudenciaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_AUDENCIA", direction: OUT)
    containsAnalyticsCesiAlternanceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: OUT)
    containsAnalyticsCriParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: OUT)
    containsAnalyticsEbiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBI", direction: OUT)
    containsAnalyticsEbsParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBS_PARIS", direction: OUT)
    containsAnalyticsEfreiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EFREI", direction: OUT)
    containsAnalyticsEiCesiDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEiCesiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEimlDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EIML", direction: OUT)
    containsAnalyticsEsceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESCE", direction: OUT)
    containsAnalyticsEsitcCaenDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESITC_CAEN", direction: OUT)
    containsAnalyticsEurecomDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EURECOM", direction: OUT)
    containsAnalyticsHeticDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_HETIC", direction: OUT)
    containsAnalyticsIaeToulonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: OUT)
    containsAnalyticsIcdParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ICD_PARIS", direction: OUT)
    containsAnalyticsIfgExecutiveDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: OUT)
    containsAnalyticsIfocopDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFOCOP", direction: OUT)
    containsAnalyticsIngenieurs2000Diplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INGENIEURS2000", direction: OUT)
    containsAnalyticsInseecBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: OUT)
    containsAnalyticsInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: OUT)
    containsAnalyticsIsenMediterraneeDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_ISEN_MEDITERRANEE"
        direction: OUT
      )
    containsAnalyticsIsimaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISIMA", direction: OUT)
    containsAnalyticsMastersInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: OUT)
    containsAnalyticsMontpellierBsDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: OUT)
    containsAnalyticsMontpellierBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: OUT)
    containsAnalyticsMyBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MY_BS", direction: OUT)
    containsAnalyticsNeomaAlumniDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_NEOMA_ALUMNI", direction: OUT)
    containsAnalyticsSkemaBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SKEMA_BS", direction: OUT)
    containsAnalyticsSupdepubDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: OUT)
    containsAnalyticsUliegeDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: OUT)
    created_by_location: BigInt
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String
    inCohortOfAnalyticsOffers: [Offer!]!
      @relationship(type: "IN_COHORT_OF_ANALYTICS", direction: OUT)
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean!
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    monthly_earning: BigInt
    name: String!
    order_index: BigInt
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    testimony_text: String
    testimony_video_url: String
    user_defined_type: String
    uuid: String!
    validation_status: String
    video_ask_id: String
    yearly_earning: BigInt
  }

  interface LeadsToNodeProperties @relationshipProperties {
    created_at: BigInt
    duration_avg: BigInt
    leads_to_1: BigInt
    leads_to_2: BigInt
    leads_to_3: BigInt
    leads_to_5: BigInt
    most_popular: BigInt!
    nb_total: BigInt!
    shortest: BigInt!
  }

  interface LeadsToNodeScenarioProperties @relationshipProperties {
    created_at: BigInt!
  }

  interface LeadsToProperties @relationshipProperties {
    hr_uuid: String
    is_valid: BigInt
    level: BigInt
    name: String
    uuid: String
  }

  interface LeadsToStepOfProperties @relationshipProperties {
    count: BigInt!
    created_at: BigInt!
    updated_at: BigInt!
  }

  type Linkedin
    @node(
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin10
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin11
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedParse", "User", "UserDevise"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin12
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin13
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedUpdateCRM"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin14
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "NeedUpdateCRM"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin15
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin16
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin17
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin18
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrderTest", "NeedParse", "User", "UserDevise"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin19
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin2
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin20
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedUpdateCRM"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin21
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "NeedParse"
        "User"
        "UserDevise"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin22
    @node(
      label: "Linkedin"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    applicationNode4SCrawled: [ApplicationNode4!]!
      @relationship(
        type: "CRAWLED"
        direction: IN
        properties: "CrawledProperties"
      )
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SDisplay: [ApplicationNode5!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SExcludes: [ApplicationNode5!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    auth_token: String
    birthdate: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCities: [City!]! @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDiplomaTypes: [DiplomaType!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    facebook_uid: String
    firstname: String!
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasResumes: [Resume!]! @relationship(type: "HAS", direction: OUT)
    hasSkillHiddenSkill2S: [Skill2!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    hr_uuid: String
    isAmbassadorApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IS_AMBASSADOR", direction: OUT)
    isAuthorMedia: [Media!]! @relationship(type: "IS_AUTHOR", direction: OUT)
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    latitude: Float
    linkedin9SHomonymOf: [Linkedin9!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    linkedin_uid: String
    longitude: Float
    main_interest: String
    managesApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "MANAGES"
        direction: OUT
        properties: "ManagesProperties"
      )
    mediaIsAbout: [Media!]! @relationship(type: "IS_ABOUT", direction: IN)
    middlename: String
    nationality: String
    nb_users: BigInt
    needOrderTest11SHomonymOf: [NeedOrderTest11!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    need_newsletter: Boolean
    notification_preferences: String
    phone: String
    plain_password: String
    reset_password_token: String
    resume_order_version: String
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    twitter_uid: String
    unconfirmed_email: String
    user4SHomonymOf: [User4!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
    viadeo_uid: String
    website: String
  }

  type Linkedin23
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    applicationNode4SCrawled: [ApplicationNode4!]!
      @relationship(
        type: "CRAWLED"
        direction: IN
        properties: "CrawledProperties"
      )
    auth_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    current_sign_in_ip: String
    email: String
    firstname: String!
    gender: String!
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    needOrderTest11SHomonymOf: [NeedOrderTest11!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    user4SHomonymOf: [User4!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
  }

  type Linkedin24
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin25
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedParse"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin26
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin27
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrder", "User", "UserDevise", "UserSearchable"]
    ) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SDisplay: [ApplicationNode5!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    auth_token: String
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt
    current_sign_in_at: BigInt!
    current_sign_in_ip: String!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    last_sign_in_at: BigInt!
    last_sign_in_ip: String!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean
    resume_order_version: String
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin28
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedCheckDereferencing", "User", "UserDevise"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin29
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin3
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin30
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin31
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin32
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedParse", "User", "UserDevise", "UserSearchable"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin33
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCities: [City!]! @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    email: String
    firstname: String!
    gender: String!
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin34
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin35
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin36
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin37
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrderIsAsideJob", "User", "UserDevise"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    parser_updated_at: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin38
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrderTestDUTWithDomains", "User", "UserDevise"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    homonymOfLinkedin45S: [Linkedin45!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin39
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrderTestDUT", "User", "UserDevise"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin4
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin40
    @node(
      label: "Linkedin"
      additionalLabels: ["NeedOrderTest", "User", "UserDevise"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin41
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_at: BigInt
    current_sign_in_ip: String
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_at: BigInt
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin42
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_at: BigInt
    current_sign_in_ip: String
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_at: BigInt
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    searchesGoals: [Goal!]! @relationship(type: "SEARCHES", direction: OUT)
    test_dereferenced_at: BigInt
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type Linkedin43
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    applicationNode4SCrawled: [ApplicationNode4!]!
      @relationship(
        type: "CRAWLED"
        direction: IN
        properties: "CrawledProperties"
      )
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SExcludes: [ApplicationNode5!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    auth_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCities: [City!]! @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDiplomaTypes: [DiplomaType!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    normalized_at: BigInt
    remember_created_at: BigInt
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
  }

  type Linkedin44
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderIsAsideJob"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin45
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    linkedin38SHomonymOf: [Linkedin38!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    need_newsletter: Boolean
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin46
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedUpdateCRM"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin5
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin6
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    reputation: BigInt
    resume_order_version: String!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type Linkedin7
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin8
    @node(
      label: "Linkedin"
      additionalLabels: [
        "NeedCheckDereferencing"
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type Linkedin9
    @node(label: "Linkedin", additionalLabels: ["User", "UserDevise"]) {
    applicationNode5SDisplay: [ApplicationNode5!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    auth_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    expires_at: BigInt
    facebook_uid: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillSkill5S: [Skill5!]!
      @relationship(
        type: "HAS_SKILL"
        direction: OUT
        properties: "HasSkillProperties"
      )
    has_started: Boolean
    homonymOfLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfUser5S: [User5!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    isAmbassadorApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IS_AMBASSADOR", direction: OUT)
    is_anonym: Boolean!
    is_banned: Boolean
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_searchable: Boolean
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    linkedin_uid: String
    main_interest: String
    middlename: String
    need_newsletter: Boolean
    normalized_at: BigInt
    phone: String
    photo: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    searchesGoals: [Goal!]! @relationship(type: "SEARCHES", direction: OUT)
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    twitter_uid: String
    user4SHomonymOf: [User4!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
    viadeo_uid: String
    website: String
  }

  type LocationSubtype {
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    normalized_at: BigInt
    uuid: String!
  }

  type LocationType {
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    name: String!
    updated_at: BigInt!
    uuid: String!
  }

  interface LoggedProperties @relationshipProperties {
    module: String
  }

  interface ManualRuleForProperties @relationshipProperties {
    r_type: String!
    try_find_major: Boolean
    where_clause: String!
  }

  type Media {
    description: String!
    isAboutApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IS_ABOUT", direction: OUT)
    isAboutDiplomas: [Diploma!]! @relationship(type: "IS_ABOUT", direction: OUT)
    isAboutLinkedin22S: [Linkedin22!]!
      @relationship(type: "IS_ABOUT", direction: OUT)
    isAboutResume2S: [Resume2!]! @relationship(type: "IS_ABOUT", direction: OUT)
    isAboutResumes: [Resume!]! @relationship(type: "IS_ABOUT", direction: OUT)
    language: String!
    linkedin22SIsAuthor: [Linkedin22!]!
      @relationship(type: "IS_AUTHOR", direction: IN)
    name: String!
    type: String!
    url: String
    url_id: String!
    usersIsAuthor: [User!]! @relationship(type: "IS_AUTHOR", direction: IN)
    uuid: String!
  }

  type NeedCheckDereferencing
    @node(
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    crawler_updated_at: BigInt
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    parser_updated_at: BigInt
    reputation: BigInt!
    resume_order_version: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing10
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing2
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_valid: Boolean!
    lastname: String!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing3
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: ["NeedOrderTest", "User", "UserDevise", "Viadeo"]
    ) {
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing4
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: [
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    reputation: BigInt!
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing5
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: ["NeedOrderTestDUT", "User", "UserDevise", "Viadeo"]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing6
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: [
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing7
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing8
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    reputation: BigInt!
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedCheckDereferencing9
    @node(
      label: "NeedCheckDereferencing"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrder @node(additionalLabels: ["User", "UserDevise"]) {
    created_at: BigInt!
    email: String!
    encrypted_password: String!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    rewrited_name: String!
    sign_in_count: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrder2
    @node(
      label: "NeedOrder"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    auth_token: String
    birthdate: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_at: BigInt
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    expires_at: BigInt
    firstname: String
    function: String
    gender: String
    has_started: Boolean
    is_anonym: Boolean
    is_hidden: Boolean
    is_hroads: Boolean!
    is_optin: Boolean
    is_public: Boolean
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_at: BigInt
    last_sign_in_ip: String
    lastname: String
    main_interest: String
    middlename: String
    need_newsletter: Boolean
    phone: String
    promotion: String
    remember_created_at: BigInt
    reset_password_sent_at: BigInt
    reset_password_token: String
    resume_ordered_at: BigInt
    rewrited_name: String
    tuto: Boolean
    unconfirmed_email: String
    username: String!
    uuid: String!
    website: String
  }

  type NeedOrder3
    @node(
      label: "NeedOrder"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmation_sent_at: BigInt!
    confirmation_token: String!
    confirmed_at: BigInt!
    created_at: BigInt!
    email: String!
    encrypted_password: String!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    tuto: Boolean!
    unconfirmed_email: String!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrder4
    @node(
      label: "NeedOrder"
      additionalLabels: [
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    auth_token: String!
    birthdate: BigInt!
    confirmed_at: BigInt!
    created_at: BigInt!
    current_sign_in_at: BigInt!
    current_sign_in_ip: String!
    email: String!
    encrypted_password: String!
    expires_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    last_sign_in_at: BigInt!
    last_sign_in_ip: String!
    lastname: String!
    main_interest: String!
    middlename: String!
    need_newsletter: Boolean!
    phone: String!
    remember_created_at: BigInt!
    reset_password_sent_at: BigInt!
    reset_password_token: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
    website: String!
  }

  type NeedOrderIsAsideJob
    @node(
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    confirmed_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob2
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob3
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    auth_token: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    tuto: Boolean!
    unconfirmed_email: String
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob4
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob5
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: [
        "NeedOrderTest"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    parser_updated_at: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob6
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderIsAsideJob7
    @node(
      label: "NeedOrderIsAsideJob"
      additionalLabels: [
        "NeedOrderTest"
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest
    @node(
      additionalLabels: [
        "User"
        "UserDevise"
        "UserPoleEmploi"
        "UserSearchable"
      ]
    ) {
    advisor: String
    autonomy_km: BigInt
    autonomy_mn: BigInt
    axe: String!
    birthdate: String
    confirmed_at: BigInt!
    created_at: BigInt!
    dependent_children: String!
    firstname: String!
    gender: String!
    hasFilledOutApplications: [Application!]!
      @relationship(type: "HAS_FILLED_OUT", direction: OUT)
    has_started: Boolean!
    is_anonym: Boolean!
    is_available: String
    is_handicapped: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    liveInCityCities: [City!]!
      @relationship(type: "LIVE_IN_CITY", direction: OUT)
    moyen_locomotion: String!
    msa: String
    need_newsletter: Boolean!
    register_at: BigInt
    resident_qpv: String
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    social_benefit: Boolean!
    tuto: Boolean!
    unemployment_benefit: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest10
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    applications: [String]
    auth_token: String
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    groups: [String]
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hoads: Boolean
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    main_interest: String
    need_newsletter: Boolean
    notification_preferences: String
    plain_password: String
    remember_created_at: BigInt
    reset_password_token: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    roles: [String]
    test_dereferenced_at: BigInt
    tuto: Boolean
    unconfirmed_email: String
    username: String!
    uuid: String!
    website: String
    zipcode: BigInt
  }

  type NeedOrderTest11
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    homonymOfLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfLinkedin23S: [Linkedin23!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
  }

  type NeedOrderTest12
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedParse"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTest13
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SExcludes: [ApplicationNode5!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    birthdate: BigInt
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    email: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    username: String!
    usersHomonymOf: [User!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    uuid: String!
  }

  type NeedOrderTest14
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    auth_token: String
    birthdate: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    notification_preferences: String
    parser_updated_at: BigInt
    remember_created_at: BigInt
    reset_password_sent_at: BigInt
    reset_password_token: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    signedUpApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "SIGNED_UP"
        direction: OUT
        properties: "SignedUpProperties"
      )
    tuto: Boolean
    username: String!
    uuid: String!
    website: String
    zipcode: BigInt
  }

  type NeedOrderTest15
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    birthdate: BigInt
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTest16
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest17
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
  }

  type NeedOrderTest18
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["NeedOrderTestDUT", "User", "UserDevise"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    created_at: BigInt!
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    parser_updated_at: BigInt
    reputation: BigInt!
    resume_order_version: String!
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTest2
    @node(label: "NeedOrderTest", additionalLabels: ["User", "UserDevise"]) {
    auth_token: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    expires_at: BigInt
    external_id: String
    facebook_uid: String
    firstname: String!
    function: String
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    linkedin_uid: String
    main_interest: String
    middlename: String
    need_newsletter: Boolean
    notification_preferences: String
    phone: String
    reset_password_sent_at: BigInt
    reset_password_token: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt
    tuto: Boolean
    twitter_uid: String
    unconfirmed_email: String
    username: String!
    uuid: String!
    viadeo_uid: String
    website: String
  }

  type NeedOrderTest3
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["NeedParse", "User", "UserDevise", "Viadeo"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest4
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    crawler_updated_at: BigInt!
    created_at: BigInt!
    firstname: String!
    gender: String!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_valid: Boolean!
    lastname: String!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest5
    @node(
      label: "NeedOrderTest"
      additionalLabels: ["NeedOrderTestDUT", "User", "UserDevise", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    email: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTest6
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    auth_token: String
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    notification_preferences: String
    remember_created_at: BigInt
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    signedUpApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "SIGNED_UP"
        direction: OUT
        properties: "SignedUpProperties"
      )
    test_dereferenced_at: BigInt
    tuto: Boolean
    unconfirmed_email: String
    username: String!
    uuid: String!
    website: String
    zipcode: BigInt
  }

  type NeedOrderTest7
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
      ]
    ) {
    auth_token: String
    birthdate: BigInt
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    parser_updated_at: BigInt
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTest8
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "NeedParse"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTest9
    @node(
      label: "NeedOrderTest"
      additionalLabels: [
        "NeedOrderTestDUT"
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    applicationNode5SExcludes: [ApplicationNode5!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    normalized_at: BigInt
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUT @node(additionalLabels: ["User", "UserDevise"]) {
    confirmed_at: BigInt!
    contact_mail: Boolean!
    contact_mobile: Boolean!
    contact_skype: Boolean!
    contact_viber: Boolean!
    contact_whatsapp: Boolean!
    created_at: BigInt!
    current_sign_in_at: BigInt!
    current_sign_in_ip: String!
    email: String!
    encrypted_password: String!
    facebook_uid: String!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    last_sign_in_at: BigInt!
    last_sign_in_ip: String!
    lastname: String!
    linkedin_uid: String!
    middlename: String!
    need_newsletter: Boolean!
    phone: String!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    tuto: Boolean!
    twitter_uid: String!
    updated_at: BigInt!
    username: String!
    uuid: String!
    viadeo_uid: String!
    website: String!
  }

  type NeedOrderTestDUT2
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUT3
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    auth_token: String
    birthdate: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    parser_updated_at: BigInt
    reset_password_sent_at: BigInt
    reset_password_token: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    signedUpApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "SIGNED_UP"
        direction: OUT
        properties: "SignedUpProperties"
      )
    tuto: Boolean
    userActionDiplomas: [Diploma!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    username: String!
    uuid: String!
    zipcode: BigInt
  }

  type NeedOrderTestDUT4
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: [
        "NeedParse"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    confirmed_at: BigInt!
    created_at: BigInt!
    dereferenced_at: BigInt!
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt!
    need_newsletter: Boolean!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUT5
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
      ]
    ) {
    auth_token: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    notification_preferences: String
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt
    tuto: Boolean
    username: String!
    uuid: String!
    website: String
    zipcode: BigInt
  }

  type NeedOrderTestDUT6
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUT7
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUT8
    @node(
      label: "NeedOrderTestDUT"
      additionalLabels: [
        "NeedOrderTestDUTWithDomains"
        "User"
        "UserDevise"
        "UserSearchable"
        "Viadeo"
      ]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUTWithDomains
    @node(additionalLabels: ["User", "UserDevise"]) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_at: BigInt
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_at: BigInt
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    parser_updated_at: BigInt
    reputation: BigInt
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUTWithDomains2
    @node(
      label: "NeedOrderTestDUTWithDomains"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    auth_token: String
    confirmation_sent_at: BigInt
    confirmation_token: String
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String!
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    need_newsletter: Boolean
    notification_preferences: String
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    tuto: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUTWithDomains3
    @node(
      label: "NeedOrderTestDUTWithDomains"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedOrderTestDUTWithDomains4
    @node(
      label: "NeedOrderTestDUTWithDomains"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    confirmed_at: BigInt!
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    need_newsletter: Boolean
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedParse @node(additionalLabels: ["User", "UserDevise"]) {
    confirmed_at: BigInt!
    created_at: BigInt!
    email: String!
    firstname: String!
    gender: String!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_valid: Boolean!
    lastname: String!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedParse2
    @node(
      label: "NeedParse"
      additionalLabels: ["User", "UserDevise", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedParse3
    @node(
      label: "NeedParse"
      additionalLabels: ["User", "UserDevise", "UserSearchable"]
    ) {
    confirmed_at: BigInt!
    created_at: BigInt!
    email: String!
    firstname: String!
    gender: String!
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_valid: Boolean!
    lastname: String!
    parser_updated_at: BigInt!
    reputation: BigInt!
    resume_order_version: String!
    resume_ordered_at: BigInt!
    resume_state: String!
    rewrited_name: String!
    sign_in_count: BigInt!
    test_dereferenced_at: BigInt!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  type NeedParse4
    @node(
      label: "NeedParse"
      additionalLabels: ["User", "UserDevise", "UserSearchable", "Viadeo"]
    ) {
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    dereferenced_at: BigInt
    email: String
    firstname: String!
    gender: String!
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_valid: Boolean!
    lastname: String!
    launch_crawl_update: BigInt
    need_newsletter: Boolean
    parser_updated_at: BigInt!
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    test_dereferenced_at: BigInt!
    tuto: Boolean
    username: String!
    uuid: String!
  }

  type NeedSirene @node(additionalLabels: ["Resume"]) {
    comment: String!
    created_at: BigInt!
    daily_earning: BigInt!
    duration: BigInt
    end: BigInt
    end_year: BigInt
    gap_after_previous: BigInt!
    has_no_location: Boolean!
    hr_end: BigInt
    hr_start: BigInt
    hr_uuid: String!
    is_ambiguous: Boolean!
    is_aside_job: Boolean!
    is_capsule: Boolean!
    is_continued_education: Boolean!
    is_hidden: Boolean!
    is_internship: Boolean!
    is_last: Boolean!
    is_parallel: Boolean!
    is_parallel_education: BigInt!
    is_part_time: Boolean!
    is_project: Boolean!
    is_recommended: Boolean!
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    latitude: Float!
    longitude: Float!
    monthly_earning: BigInt!
    name: String!
    normalized_at: BigInt!
    qanda: Boolean!
    qanda_length: BigInt!
    start: BigInt
    start_year: BigInt
    updated_at: BigInt!
    uuid: String!
    yearly_earning: BigInt!
  }

  type Neo4j_Migrations_SchemaMigration
    @node(label: "Neo4j::Migrations::SchemaMigration") {
    migration_id: String!
  }

  type Offer {
    actionsOn: [Action!]! @relationship(type: "ON", direction: IN)
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    contact_mail: String
    cost: Float
    cost_scholarship: Float
    count_at: BigInt
    description: String
    devise: String
    duration_in_hour: BigInt
    eventsFor: [Event!]!
      @relationship(type: "FOR", direction: IN, properties: "ForProperties")
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    forDiplomas: [Diploma!]!
      @relationship(type: "FOR", direction: OUT, properties: "ForProperties")
    ignore_scope: Boolean
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean
    is_hidden_gps: Boolean
    is_hidden_myroad: Boolean
    is_initial_training: Boolean
    is_internship: Boolean
    is_next_studies: Boolean
    is_part_time: Boolean
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    lastResume2SInCohortOfAnalytics: [LastResume2!]!
      @relationship(type: "IN_COHORT_OF_ANALYTICS", direction: IN)
    max_adhesions: String
    name: String!
    niceToHaveDiplomas: [Diploma!]!
      @relationship(type: "NICE_TO_HAVE", direction: OUT)
    originalPartOfDomains: [Domain!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: OUT)
    permanently_open: String
    resume2SInCohortOfAnalytics: [Resume2!]!
      @relationship(type: "IN_COHORT_OF_ANALYTICS", direction: IN)
    resume_valid_only: Boolean
    stop_refine: Boolean!
    student_contact_mail: String
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Offer2 @node(label: "Offer", additionalLabels: ["Professionnel"]) {
    allow_multiple_majors: Boolean!
    contact_mail: String
    description: String
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    name: String!
    stop_refine: Boolean!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Offer3 @node(label: "Offer", additionalLabels: ["OfferMyRoad"]) {
    allow_multiple_majors: Boolean!
    applicationNode5SManualRuleFor: [ApplicationNode5!]!
      @relationship(
        type: "MANUAL_RULE_FOR"
        direction: IN
        properties: "ManualRuleForProperties"
      )
    applicationOffersTargets: [ApplicationOffer!]!
      @relationship(type: "TARGETS", direction: IN)
    contact_mail: String
    description: String
    devise: String
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    forDiplomas: [Diploma!]!
      @relationship(type: "FOR", direction: OUT, properties: "ForProperties")
    ignore_scope: Boolean
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean
    is_continued_education: Boolean
    is_default: Boolean
    is_generated: Boolean
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean
    is_initial_training: Boolean
    is_internship: Boolean
    is_next_studies: Boolean
    is_part_time: Boolean
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_adhesions: String
    name: String!
    niceToHaveDiplomas: [Diploma!]!
      @relationship(type: "NICE_TO_HAVE", direction: OUT)
    resume_valid_only: Boolean
    stop_refine: Boolean!
    student_contact_mail: String
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean
    wordsHintFor: [Word!]! @relationship(type: "HINT_FOR", direction: IN)
  }

  type Offer4 @node(label: "Offer", additionalLabels: ["SansEmploi"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String!
    name: String!
    originalPartOfDomains: [Domain!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: OUT)
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  type Offer5 @node(label: "Offer", additionalLabels: ["ToutPublic"]) {
    allow_multiple_majors: Boolean!
    duration_in_hour: BigInt
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean!
    is_closed: Boolean
    is_continued_education: Boolean!
    is_default: Boolean
    is_generated: Boolean
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean
    is_internship: Boolean!
    is_next_studies: Boolean
    is_part_time: Boolean
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String
    name: String!
    nb_all: BigInt
    nb_itineraries: BigInt
    nb_profiles: BigInt
    originalPartOfDomains: [Domain!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: OUT)
    permanently_open: String!
    resume_valid_only: Boolean
    stop_refine: Boolean!
    use_analytics_rel: Boolean!
    uuid: String!
    valid_only: Boolean
  }

  type Offer6
    @node(label: "Offer", additionalLabels: ["OfferMyRoad", "Professionnel"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    description: String!
    end_at: BigInt
    is_analytics: Boolean
    is_closed: Boolean!
    is_continued_education: Boolean!
    is_default: Boolean!
    is_generated: Boolean!
    is_hidden_gps: Boolean!
    is_internship: Boolean!
    is_next_studies: Boolean!
    is_part_time: Boolean!
    is_required: Boolean
    is_sandwich_training: Boolean!
    is_simplified: Boolean
    is_valid: Boolean!
    max_majors: BigInt
    max_optional_majors: BigInt
    min_majors: BigInt
    name: String!
    nb_all: BigInt!
    nb_itineraries: BigInt!
    nb_profiles: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean
    uuid: String!
    valid_only: Boolean!
  }

  type Offer7
    @node(label: "Offer", additionalLabels: ["OfferMyRoad", "SansEmploi"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt!
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String!
    name: String!
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  type Offer8
    @node(label: "Offer", additionalLabels: ["OfferMyRoad", "ToutPublic"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt
    inPartnerApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_PARTNER", direction: OUT)
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String!
    name: String!
    originalPartOfDomains: [Domain!]!
      @relationship(type: "ORIGINAL_PART_OF", direction: OUT)
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  type Offer9
    @node(label: "Offer", additionalLabels: ["SansEmploi", "ToutPublic"]) {
    allow_multiple_majors: Boolean!
    created_at: BigInt!
    duration_in_hour: BigInt
    is_analytics: Boolean!
    is_continued_education: Boolean!
    is_hidden_gps: Boolean!
    is_hidden_myroad: Boolean!
    is_internship: Boolean!
    is_required: Boolean!
    is_sandwich_training: Boolean!
    is_simplified: Boolean!
    is_valid: Boolean!
    max_adhesions: String!
    name: String!
    permanently_open: String!
    resume_valid_only: Boolean!
    start_at: BigInt!
    stop_refine: Boolean!
    updated_at: BigInt!
    use_analytics_rel: Boolean!
    uuid: String!
  }

  interface PartOfProperties @relationshipProperties {
    partner_uuid: String
  }

  interface ReferencesProperties @relationshipProperties {
    connection_history: String
    is_application: Boolean
    is_sharing: Boolean
    is_valid: Boolean
    partner_url: String
    partner_uuid2: String
    partner_uuid3: String
    partner_uuid_tmp: String
    partnership: String
  }

  type Region {
    code: String!
    created_at: BigInt!
    hr_uuid: String!
    is_top: Boolean!
    is_valid: Boolean!
    job2SHasLocalTrends: [Job2!]!
      @relationship(
        type: "HAS_LOCAL_TRENDS"
        direction: IN
        properties: "HasLocalTrendsProperties"
      )
    name: String!
    updated_at: BigInt!
    uuid: String!
  }

  type Resume {
    comment: String
    comment_choice: String
    confirmed_at: BigInt
    containsAnalyticsArtsetmetiersDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: OUT)
    containsAnalyticsCesiAlternanceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: OUT)
    containsAnalyticsChimieparistechDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CHIMIEPARISTECH", direction: OUT)
    containsAnalyticsCriParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: OUT)
    containsAnalyticsEceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECE", direction: OUT)
    containsAnalyticsEcetechDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ECETECH", direction: OUT)
    containsAnalyticsEiCesiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEnseeihtDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: OUT)
    containsAnalyticsIaeCaenDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_CAEN", direction: OUT)
    containsAnalyticsIaeDijonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_DIJON", direction: OUT)
    containsAnalyticsIfgExecutiveDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: OUT)
    containsAnalyticsImtMinesAlbiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IMT_MINES_ALBI", direction: OUT)
    containsAnalyticsInfnDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INFN", direction: OUT)
    containsAnalyticsIngenieurNIDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_INGENIEUR_N_I"
        direction: OUT
        properties: "ContainsAnalyticsIngenieurNiProperties"
      )
    containsAnalyticsInriaAlumniJob2S: [Job2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INRIA_ALUMNI", direction: OUT)
    containsAnalyticsInsaToulouseDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSA_TOULOUSE", direction: OUT)
    containsAnalyticsInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: OUT)
    containsAnalyticsLyceecoubertinMeauxDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_LYCEECOUBERTIN_MEAUX"
        direction: OUT
      )
    containsAnalyticsMastersInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: OUT)
    containsAnalyticsMillionroadsDemoDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO"
        direction: OUT
      )
    containsAnalyticsMtesJob2S: [Job2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MTES", direction: OUT)
    containsAnalyticsPolytechClermontDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_POLYTECH_CLERMONT"
        direction: OUT
      )
    containsAnalyticsPolytechGrenobleDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE"
        direction: OUT
      )
    containsAnalyticsPolytechGrenobleDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_POLYTECH_GRENOBLE"
        direction: OUT
      )
    containsAnalyticsPolytechToursDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: OUT)
    containsAnalyticsPolytechToursDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_POLYTECH_TOURS", direction: OUT)
    containsAnalyticsPricPacaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_PRIC_PACA", direction: OUT)
    containsAnalyticsSciencespoParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SCIENCESPO_PARIS", direction: OUT)
    containsAnalyticsSupcareerDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: OUT)
    containsAnalyticsSupdepubDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: OUT)
    containsAnalyticsUliegeDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ULIEGE", direction: OUT)
    containsAnalyticsUttDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_UTT", direction: OUT)
    containsAnalyticsUvsqDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_UVSQ", direction: OUT)
    containsDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS"
        direction: OUT
        properties: "ContainsProperties"
      )
    containsJob2S: [Job2!]!
      @relationship(
        type: "CONTAINS"
        direction: OUT
        properties: "ContainsProperties"
      )
    contract: String
    count: BigInt
    crawler_updated_at: BigInt
    created_by_location: BigInt
    daily_earning: BigInt
    email: String
    errorNeedUpdateCrm7SShouldHave: [ErrorNeedUpdateCRM7!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    has_no_location: Boolean
    hr_uuid: String
    inAnalyticsApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_ANALYTICS", direction: OUT)
    inApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN", direction: OUT, properties: "InProperties")
    inCohortOfAvantleBac2S: [AvantleBac2!]!
      @relationship(type: "IN_COHORT_OF", direction: OUT)
    inCohortOfBac52S: [Bac52!]!
      @relationship(type: "IN_COHORT_OF", direction: OUT)
    in_company_duration: BigInt
    isParallelLastResumes: [LastResume!]!
      @relationship(type: "IS_PARALLEL", direction: OUT)
    isParallelResume2S: [Resume2!]!
      @relationship(type: "IS_PARALLEL", direction: OUT)
    isParallelResumes: [Resume!]!
      @relationship(type: "IS_PARALLEL", direction: OUT)
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_hroads: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_searchable: Boolean
    is_valid: Boolean!
    is_verified: Boolean!
    lastResumesIsParallel: [LastResume!]!
      @relationship(type: "IS_PARALLEL", direction: IN)
    last_crawl_at: BigInt
    latitude: Float
    leadsToLastResumes: [LastResume!]!
      @relationship(
        type: "LEADS_TO"
        direction: OUT
        properties: "LeadsToProperties"
      )
    leadsToResumes: [Resume!]!
      @relationship(
        type: "LEADS_TO"
        direction: OUT
        properties: "LeadsToProperties"
      )
    leadsToStepOfLastResumes: [LastResume!]!
      @relationship(
        type: "LEADS_TO_STEP_OF"
        direction: OUT
        properties: "LeadsToStepOfProperties"
      )
    leadsToStepOfResumes: [Resume!]!
      @relationship(
        type: "LEADS_TO_STEP_OF"
        direction: OUT
        properties: "LeadsToStepOfProperties"
      )
    linkedin22SHas: [Linkedin22!]! @relationship(type: "HAS", direction: IN)
    linkedin22SShouldHave: [Linkedin22!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    linkedin28SShouldHave: [Linkedin28!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    linkedin41SShouldHave: [Linkedin41!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    linkedin43SShouldHave: [Linkedin43!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    linkedin9SShouldHave: [Linkedin9!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    longitude: Float
    mediaIsAbout: [Media!]! @relationship(type: "IS_ABOUT", direction: IN)
    monthly_earning: BigInt
    name: String!
    needOrderTest13SShouldHave: [NeedOrderTest13!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    order_index: BigInt
    origin_end: BigInt
    origin_start: BigInt
    originalNameAlias2S: [Alias2!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    originalNameAliases: [Alias!]!
      @relationship(type: "ORIGINAL_NAME", direction: OUT)
    original_location_name: String
    parser_updated_at: BigInt
    qanda: Boolean
    qanda_length: BigInt
    resume_order_version: String
    resume_ordered_at: BigInt
    resumesIsParallel: [Resume!]!
      @relationship(type: "IS_PARALLEL", direction: IN)
    resumesLeadsTo: [Resume!]!
      @relationship(
        type: "LEADS_TO"
        direction: IN
        properties: "LeadsToProperties"
      )
    resumesLeadsToStepOf: [Resume!]!
      @relationship(
        type: "LEADS_TO_STEP_OF"
        direction: IN
        properties: "LeadsToStepOfProperties"
      )
    status: String
    tag: String
    testimony_text: String
    testimony_video_url: String
    training_mod: String
    updated_sirene_at: BigInt
    user3SShouldHave: [User3!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    user4SShouldHave: [User4!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    user5SHas: [User5!]! @relationship(type: "HAS", direction: IN)
    user5SShouldHave: [User5!]!
      @relationship(type: "SHOULD_HAVE", direction: IN)
    user_defined_type: String
    uuid: String!
    validation_status: String
    video_ask_id: String
    yearly_earning: BigInt
  }

  type Resume2 @node(label: "Resume", additionalLabels: ["ValidStatus"]) {
    comment: String
    containsAnalyticsArtsetmetiersDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ARTSETMETIERS", direction: OUT)
    containsAnalyticsAudenciaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_AUDENCIA", direction: OUT)
    containsAnalyticsCesiAlternanceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CESI_ALTERNANCE", direction: OUT)
    containsAnalyticsCriParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_CRI_PARIS", direction: OUT)
    containsAnalyticsEbiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBI", direction: OUT)
    containsAnalyticsEbsParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EBS_PARIS", direction: OUT)
    containsAnalyticsEfreiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EFREI", direction: OUT)
    containsAnalyticsEiCesiDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEiCesiDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EI_CESI", direction: OUT)
    containsAnalyticsEimlDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EIML", direction: OUT)
    containsAnalyticsEnseeihtDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ENSEEIHT", direction: OUT)
    containsAnalyticsEsceDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESCE", direction: OUT)
    containsAnalyticsEsitcCaenDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESITC_CAEN", direction: OUT)
    containsAnalyticsEsscaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ESSCA", direction: OUT)
    containsAnalyticsEurecomDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_EURECOM", direction: OUT)
    containsAnalyticsHeticDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_HETIC", direction: OUT)
    containsAnalyticsIaeToulonDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IAE_TOULON", direction: OUT)
    containsAnalyticsIcdParisDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ICD_PARIS", direction: OUT)
    containsAnalyticsIfgExecutiveDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFG_EXECUTIVE", direction: OUT)
    containsAnalyticsIfocopDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_IFOCOP", direction: OUT)
    containsAnalyticsIngenieurs2000Diplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INGENIEURS2000", direction: OUT)
    containsAnalyticsInseecBsDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: OUT)
    containsAnalyticsInseecBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC_BS", direction: OUT)
    containsAnalyticsInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_INSEEC", direction: OUT)
    containsAnalyticsIsenMediterraneeDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_ISEN_MEDITERRANEE"
        direction: OUT
      )
    containsAnalyticsIsimaDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_ISIMA", direction: OUT)
    containsAnalyticsMastersInseecDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MASTERS_INSEEC", direction: OUT)
    containsAnalyticsMillionroadsDemoDiplomas: [Diploma!]!
      @relationship(
        type: "CONTAINS_ANALYTICS_MILLIONROADS_DEMO"
        direction: OUT
      )
    containsAnalyticsMontpellierBsDiplomaMajor2S: [DiplomaMajor2!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: OUT)
    containsAnalyticsMontpellierBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MONTPELLIER_BS", direction: OUT)
    containsAnalyticsMyBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_MY_BS", direction: OUT)
    containsAnalyticsNeomaAlumniDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_NEOMA_ALUMNI", direction: OUT)
    containsAnalyticsSkemaBsDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SKEMA_BS", direction: OUT)
    containsAnalyticsSupcareerDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPCAREER", direction: OUT)
    containsAnalyticsSupdepubDiplomas: [Diploma!]!
      @relationship(type: "CONTAINS_ANALYTICS_SUPDEPUB", direction: OUT)
    created_by_location: BigInt
    daily_earning: BigInt
    has_no_location: Boolean
    hr_uuid: String
    inAnalyticsApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "IN_ANALYTICS", direction: OUT)
    inCohortOfAnalyticsOffers: [Offer!]!
      @relationship(type: "IN_COHORT_OF_ANALYTICS", direction: OUT)
    is_ambiguous: Boolean
    is_aside_job: Boolean!
    is_capsule: Boolean
    is_continued_education: Boolean!
    is_current: Boolean
    is_hidden: Boolean
    is_internship: Boolean!
    is_invalidate: Boolean
    is_last: Boolean
    is_mission: Boolean
    is_not_completed: Boolean
    is_parallel: Boolean!
    is_parallel_education: BigInt
    is_part_time: Boolean
    is_project: Boolean!
    is_recommended: Boolean
    is_sandwich_training: Boolean!
    is_valid: Boolean!
    is_verified: Boolean!
    mediaIsAbout: [Media!]! @relationship(type: "IS_ABOUT", direction: IN)
    monthly_earning: BigInt
    name: String!
    normalized_at: BigInt
    order_index: BigInt
    original_location_name: String
    qanda: Boolean
    qanda_length: BigInt
    resumesIsParallel: [Resume!]!
      @relationship(type: "IS_PARALLEL", direction: IN)
    user_defined_type: String
    uuid: String!
    validation_status: String
    yearly_earning: BigInt
  }

  type Role {
    is_admin: Boolean!
    name: String!
    redirect_url: String!
    uuid: String!
  }

  interface ScenarioBacProperties @relationshipProperties {
    created_at: BigInt!
    updated_at: BigInt!
    weight: Float!
  }

  interface ScenarioProperties @relationshipProperties {
    is_secondary: Boolean
  }

  type Setting {
    type: String!
    uuid: String!
    value: String!
  }

  interface SignedUpProperties @relationshipProperties {
    sso_uuid: String
  }

  type Skill @node(additionalLabels: ["SkillKnowledge", "SkillSoft"]) {
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    level: BigInt!
    name: String!
    normalized_at: BigInt
    uuid: String!
  }

  type Skill2 @node(label: "Skill") {
    goalsRequires: [Goal!]! @relationship(type: "REQUIRES", direction: IN)
    hr_uuid: String!
    includesWords: [Word!]!
      @relationship(
        type: "INCLUDES"
        direction: OUT
        properties: "IncludesProperties"
      )
    is_top: Boolean
    is_valid: Boolean!
    linkedin22SHasSkillHidden: [Linkedin22!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    name: String!
    user4SHasSkillHidden: [User4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    user5SHasSkillHidden: [User5!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    uuid: String!
  }

  type Skill3
    @node(label: "Skill", additionalLabels: ["SkillLanguage", "SkillSoft"]) {
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    level: BigInt!
    name: String!
    normalized_at: BigInt!
    updated_at: BigInt!
    uuid: String!
  }

  type Skill4 @node(label: "Skill", additionalLabels: ["SkillTechnology"]) {
    goalsRequires: [Goal!]! @relationship(type: "REQUIRES", direction: IN)
    hr_uuid: String!
    is_top: Boolean
    is_valid: Boolean!
    linkedin22SHasSkillHidden: [Linkedin22!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    linkedin23SHasSkillHidden: [Linkedin23!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    linkedin9SHasSkillHidden: [Linkedin9!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    name: String!
    needOrderTest15SHasSkillHidden: [NeedOrderTest15!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    needOrderTest17SHasSkillHidden: [NeedOrderTest17!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    needOrderTest5SHasSkillHidden: [NeedOrderTest5!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    needOrderTestDut2SHasSkillHidden: [NeedOrderTestDUT2!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    needOrderTestDut8SHasSkillHidden: [NeedOrderTestDUT8!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    user4SHasSkillHidden: [User4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    user5SHasSkillHidden: [User5!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: IN)
    usersUserAction: [User!]!
      @relationship(
        type: "USER_ACTION"
        direction: IN
        properties: "UserActionProperties"
      )
    uuid: String!
  }

  type Skill5 @node(label: "Skill", additionalLabels: ["SkillKnowledge"]) {
    aliasesOf: [Alias!]! @relationship(type: "OF", direction: IN)
    goalsRequires: [Goal!]! @relationship(type: "REQUIRES", direction: IN)
    hr_uuid: String!
    is_top: Boolean
    is_valid: Boolean!
    linkedin22SHasSkill: [Linkedin22!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    linkedin23SHasSkill: [Linkedin23!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    linkedin28SHasSkill: [Linkedin28!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    linkedin33SHasSkill: [Linkedin33!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    linkedin43SHasSkill: [Linkedin43!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    linkedin9SHasSkill: [Linkedin9!]!
      @relationship(
        type: "HAS_SKILL"
        direction: IN
        properties: "HasSkillProperties"
      )
    name: String!
    uuid: String!
  }

  type Skill6 @node(label: "Skill", additionalLabels: ["SkillSoft"]) {
    goalsRequires: [Goal!]! @relationship(type: "REQUIRES", direction: IN)
    hr_uuid: String!
    is_top: Boolean
    is_valid: Boolean!
    name: String!
    uuid: String!
  }

  type Skill7 @node(label: "Skill", additionalLabels: ["SkillLanguage"]) {
    goalsRequires: [Goal!]! @relationship(type: "REQUIRES", direction: IN)
    hr_uuid: String!
    is_top: Boolean
    is_valid: Boolean!
    name: String!
    uuid: String!
  }

  type Skill8
    @node(
      label: "Skill"
      additionalLabels: ["SkillKnowledge", "SkillTechnology"]
    ) {
    hr_uuid: String!
    is_top: Boolean
    is_valid: Boolean!
    name: String!
    uuid: String!
  }

  type Task {
    application: String
    crawl_strategy: String
    duration: String
    forApplicationNode5S: [ApplicationNode5!]!
      @relationship(type: "FOR", direction: OUT, properties: "ForProperties")
    get_last_week: Boolean
    is_update: Boolean
    master_task: Boolean
    name: String
    only_crawl: Boolean
    partner_uuid: String
    search_engine: String
    status: String!
    sub_type: String
    type: String!
    url: String
    usersBy: [User!]! @relationship(type: "BY", direction: IN)
    uuid: String!
  }

  type User @node(additionalLabels: ["UserDevise"]) {
    aboutWikiQuestions: [WikiQuestion!]!
      @relationship(type: "ABOUT", direction: OUT)
    applications: [String]
    auth_token: String
    authorWikiAnswers: [WikiAnswer!]!
      @relationship(type: "AUTHOR", direction: OUT)
    authorWikiQuestions: [WikiQuestion!]!
      @relationship(type: "AUTHOR", direction: OUT)
    avatar: BigInt
    byTasks: [Task!]! @relationship(type: "BY", direction: OUT)
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    doesActions: [Action!]! @relationship(type: "DOES", direction: OUT)
    email: String
    encrypted_password: String
    engagedInExpeditionInstances: [ExpeditionInstance!]!
      @relationship(type: "ENGAGED_IN", direction: OUT)
    facebook_uid: String
    firstname: String
    function: String
    gender: String
    groups: [String]
    has_started: Boolean
    homonymOfNeedOrderTest13S: [NeedOrderTest13!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfUser5S: [User5!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    isAuthorMedia: [Media!]! @relationship(type: "IS_AUTHOR", direction: OUT)
    is_anonym: Boolean
    is_hidden: Boolean
    is_hoads: Boolean
    is_hroads: Boolean
    is_optin: Boolean
    is_public: Boolean
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    lastname: String
    launch_crawl_update: BigInt
    linkedin_uid: String
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    main_interest: String
    managesApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "MANAGES"
        direction: OUT
        properties: "ManagesProperties"
      )
    middlename: String
    need_newsletter: Boolean
    normalized_at: BigInt
    notification_preferences: String
    old_email: String
    phone: String
    photo: String
    plain_password: String
    promotion: String
    reset_password_token: String
    resume_order_version: String
    resume_state: String
    rewrited_name: String
    roles: [String]
    searchesGoals: [Goal!]! @relationship(type: "SEARCHES", direction: OUT)
    signedUpApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "SIGNED_UP"
        direction: OUT
        properties: "SignedUpProperties"
      )
    test_dereferenced_at: BigInt
    tuto: Boolean
    twitter_uid: String
    unconfirmed_email: String
    userActionApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    userActionDiplomas: [Diploma!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    userActionSkill4S: [Skill4!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    username: String!
    uuid: String!
    viadeo_uid: String
    voteWikiQuestions: [WikiQuestion!]!
      @relationship(type: "VOTE", direction: OUT, properties: "VoteProperties")
    website: String
    zipcode: BigInt
  }

  type User2 @node(label: "User") {
    applications: [String]
    confirmed_at: BigInt
    created_at: BigInt
    current_sign_in_at: BigInt
    email: String!
    encrypted_password: String
    firstname: String
    groups: [String]
    is_valid: Boolean
    last_sign_in_at: BigInt
    lastname: String
    phone: String
    plain_password: String
    roles: [String]
    sign_in_count: BigInt
    updated_at: BigInt
    username: String
    uuid: String!
  }

  type User3
    @node(label: "User", additionalLabels: ["UserDevise", "UserSearchable"]) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applications: [String]
    auth_token: String
    authorWikiQuestions: [WikiQuestion!]!
      @relationship(type: "AUTHOR", direction: OUT)
    avatar: BigInt
    confirmation_token: String
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    current_sign_in_ip: String
    email: String
    encrypted_password: String
    expires_at: BigInt
    facebook_uid: String
    firstname: String!
    followsApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    followsDiplomas: [Diploma!]!
      @relationship(
        type: "FOLLOWS"
        direction: OUT
        properties: "FollowsProperties"
      )
    gender: String!
    groups: [String]
    has_started: Boolean
    is_anonym: Boolean
    is_hidden: Boolean
    is_hoads: Boolean
    is_hroads: Boolean
    is_optin: Boolean
    is_public: Boolean
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_ip: String
    launch_crawl_update: BigInt
    linkedin_uid: String
    loggedApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "LOGGED"
        direction: OUT
        properties: "LoggedProperties"
      )
    main_interest: String
    managesApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "MANAGES"
        direction: OUT
        properties: "ManagesProperties"
      )
    middlename: String
    need_newsletter: Boolean
    normalized_at: BigInt
    notification_preferences: String
    phone: String
    photo: String
    plain_password: String
    promotion: String
    reset_password_token: String
    resume_order_version: String
    resume_state: String
    rewrited_name: String
    roles: [String]
    searchesGoals: [Goal!]! @relationship(type: "SEARCHES", direction: OUT)
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    signedUpApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "SIGNED_UP"
        direction: OUT
        properties: "SignedUpProperties"
      )
    test_dereferenced_at: BigInt
    tuto: Boolean
    twitter_uid: String
    unconfirmed_email: String
    userActionDiplomas: [Diploma!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    userActionJob2S: [Job2!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    username: String!
    uuid: String!
    viadeo_uid: String
    website: String
    zipcode: BigInt
  }

  type User4 @node(label: "User", additionalLabels: ["UserDevise", "Viadeo"]) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SDisplay: [ApplicationNode5!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    birthdate: BigInt
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    current_sign_in_at: BigInt
    current_sign_in_ip: String
    email: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasSkillHiddenSkill2S: [Skill2!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    homonymOfLinkedin22S: [Linkedin22!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfLinkedin23S: [Linkedin23!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfLinkedin9S: [Linkedin9!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    homonymOfUser5S: [User5!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: OUT
        properties: "HomonymOfProperties"
      )
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    last_sign_in_at: BigInt
    last_sign_in_ip: String
    lastname: String!
    need_newsletter: Boolean
    normalized_at: BigInt
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    userActionApplicationNode5S: [ApplicationNode5!]!
      @relationship(
        type: "USER_ACTION"
        direction: OUT
        properties: "UserActionProperties"
      )
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    uuid: String!
  }

  type User5
    @node(
      label: "User"
      additionalLabels: ["UserDevise", "UserSearchable", "Viadeo"]
    ) {
    applicationNode4SDisplay: [ApplicationNode4!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SDisplay: [ApplicationNode5!]!
      @relationship(
        type: "DISPLAY"
        direction: IN
        properties: "DisplayProperties"
      )
    applicationNode5SExcludes: [ApplicationNode5!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    birthdate: BigInt
    contact_mail: Boolean
    contact_mobile: Boolean
    contact_skype: Boolean
    contact_viber: Boolean
    contact_whatsapp: Boolean
    couldHaveCities: [City!]! @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveCountries: [Country!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    couldHaveDomains: [Domain!]!
      @relationship(type: "COULD_HAVE", direction: OUT)
    email: String
    firstname: String!
    gender: String!
    hasCountries: [Country!]! @relationship(type: "HAS", direction: OUT)
    hasHobbies: [Hobby!]! @relationship(type: "HAS", direction: OUT)
    hasResumes: [Resume!]! @relationship(type: "HAS", direction: OUT)
    hasSkillHiddenSkill2S: [Skill2!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    hasSkillHiddenSkill4S: [Skill4!]!
      @relationship(type: "HAS_SKILL_HIDDEN", direction: OUT)
    has_started: Boolean
    is_anonym: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean
    is_star: Boolean
    is_valid: Boolean
    lastname: String!
    linkedin9SHomonymOf: [Linkedin9!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    nb_users: BigInt
    need_newsletter: Boolean
    resume_order_version: String!
    resume_state: String
    rewrited_name: String!
    shouldHaveResumes: [Resume!]!
      @relationship(type: "SHOULD_HAVE", direction: OUT)
    tuto: Boolean
    user4SHomonymOf: [User4!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    userBadgeBadges: [Badge!]!
      @relationship(
        type: "USER_BADGE"
        direction: OUT
        properties: "UserBadgeProperties"
      )
    username: String!
    usersHomonymOf: [User!]!
      @relationship(
        type: "HOMONYM_OF"
        direction: IN
        properties: "HomonymOfProperties"
      )
    uuid: String!
  }

  type User6
    @node(
      label: "User"
      additionalLabels: ["UserDevise", "UserPoleEmploi", "UserSearchable"]
    ) {
    advisor: String
    attendedEvents: [Event!]! @relationship(type: "ATTENDED", direction: OUT)
    autonomy_km: BigInt
    autonomy_mn: BigInt
    axe: String
    birthdate: String
    confirmed_at: BigInt!
    created_at: BigInt!
    dependent_children: String!
    firstname: String!
    gender: String!
    hasFilledOutApplications: [Application!]!
      @relationship(type: "HAS_FILLED_OUT", direction: OUT)
    has_started: Boolean!
    is_anonym: Boolean!
    is_available: String
    is_handicapped: Boolean!
    is_hidden: Boolean!
    is_hroads: Boolean!
    is_optin: Boolean!
    is_public: Boolean!
    is_sharing: Boolean!
    is_star: Boolean!
    lastname: String!
    liveInCityCities: [City!]!
      @relationship(type: "LIVE_IN_CITY", direction: OUT)
    moyen_locomotion: String!
    msa: String
    need_newsletter: Boolean!
    register_at: BigInt
    resident_qpv: String
    resume_order_version: String!
    resume_ordered_at: BigInt!
    rewrited_name: String!
    sign_in_count: BigInt!
    social_benefit: Boolean!
    tuto: Boolean!
    unemployment_benefit: Boolean!
    updated_at: BigInt!
    username: String!
    uuid: String!
  }

  interface UserActionProperties @relationshipProperties {
    action: String
  }

  interface UserBadgeProperties @relationshipProperties {
    created_at: BigInt!
    depth: BigInt!
    updated_at: BigInt!
  }

  interface VoteProperties @relationshipProperties {
    created_at: BigInt!
    up_or_down: String!
    updated_at: BigInt!
  }

  interface WatchesProperties @relationshipProperties {
    created_at: BigInt!
    nb_total: BigInt
  }

  type WikiAnswer {
    content: String!
    created_at: BigInt!
    hr_uuid: String!
    is_valid: Boolean!
    toWikiQuestions: [WikiQuestion!]! @relationship(type: "TO", direction: OUT)
    updated_at: BigInt!
    usersAuthor: [User!]! @relationship(type: "AUTHOR", direction: IN)
    uuid: String!
  }

  type WikiQuestion {
    content: String!
    created_at: BigInt!
    hr_uuid: String!
    name: String!
    updated_at: BigInt!
    user3SAuthor: [User3!]! @relationship(type: "AUTHOR", direction: IN)
    usersAbout: [User!]! @relationship(type: "ABOUT", direction: IN)
    usersAuthor: [User!]! @relationship(type: "AUTHOR", direction: IN)
    usersVote: [User!]!
      @relationship(type: "VOTE", direction: IN, properties: "VoteProperties")
    uuid: String!
    wikiAnswersTo: [WikiAnswer!]! @relationship(type: "TO", direction: IN)
  }

  type Word {
    ambiguous: String
    applicationNode5SIncludes: [ApplicationNode5!]!
      @relationship(
        type: "INCLUDES"
        direction: IN
        properties: "IncludesProperties"
      )
    applicationNode5SInvalidate: [ApplicationNode5!]!
      @relationship(type: "INVALIDATE", direction: IN)
    avantleBac2SExcludes: [AvantleBac2!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac19SExcludes: [Bac19!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac211SExcludes: [Bac211!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac212SExcludes: [Bac212!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac214SExcludes: [Bac214!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac218SExcludes: [Bac218!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac23SExcludes: [Bac23!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac29SExcludes: [Bac29!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac30SExcludes: [Bac30!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac313SExcludes: [Bac313!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac316SExcludes: [Bac316!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac317SExcludes: [Bac317!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac33SExcludes: [Bac33!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac3SExcludes: [Bac3!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac46SExcludes: [Bac46!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac4SExcludes: [Bac4!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    bac8SExcludes: [Bac8!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    citiesIncludes: [City!]!
      @relationship(
        type: "INCLUDES"
        direction: IN
        properties: "IncludesProperties"
      )
    desambiguationWords: [Word!]!
      @relationship(
        type: "DESAMBIGUATION"
        direction: OUT
        properties: "DesambiguationProperties"
      )
    desambiguation_hints: String
    diplomasIncludes: [Diploma!]!
      @relationship(
        type: "INCLUDES"
        direction: IN
        properties: "IncludesProperties"
      )
    do_merge_nodes: Boolean!
    excludesWords: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: OUT
        properties: "ExcludesProperties"
      )
    hintForBac17S: [Bac17!]! @relationship(type: "HINT_FOR", direction: OUT)
    hintForBac26S: [Bac26!]! @relationship(type: "HINT_FOR", direction: OUT)
    hintForBac46S: [Bac46!]! @relationship(type: "HINT_FOR", direction: OUT)
    hintForBac52S: [Bac52!]! @relationship(type: "HINT_FOR", direction: OUT)
    hintForOffer3S: [Offer3!]! @relationship(type: "HINT_FOR", direction: OUT)
    hintForOffers: [Offer!]! @relationship(type: "HINT_FOR", direction: OUT)
    hr_uuid: String!
    id_composed: Boolean
    includesChildWords: [Word!]!
      @relationship(
        type: "INCLUDES_CHILD"
        direction: OUT
        properties: "IncludesChildProperties"
      )
    includesDomainWords: [Word!]!
      @relationship(type: "INCLUDES_DOMAIN", direction: OUT)
    includesJobWords: [Word!]!
      @relationship(type: "INCLUDES_JOB", direction: OUT)
    includesMetaWords: [Word!]!
      @relationship(
        type: "INCLUDES_META"
        direction: OUT
        properties: "IncludesMetaProperties"
      )
    includesNomenclatureWords: [Word!]!
      @relationship(
        type: "INCLUDES_NOMENCLATURE"
        direction: OUT
        properties: "IncludesNomenclatureProperties"
      )
    isCities: [City!]!
      @relationship(type: "IS", direction: OUT, properties: "IsProperties")
    isContinents: [Continent!]!
      @relationship(type: "IS", direction: OUT, properties: "IsProperties")
    isCountries: [Country!]!
      @relationship(type: "IS", direction: OUT, properties: "IsProperties")
    is_ambiguous: Boolean!
    is_city: Boolean
    is_colocation: Boolean
    is_composed: Boolean
    is_diploma: Boolean!
    is_hidden: Boolean!
    is_nomenclature: Boolean
    is_searchable: Boolean
    is_used_for_mining: Boolean
    is_valid: Boolean!
    job2SIncludes: [Job2!]!
      @relationship(
        type: "INCLUDES"
        direction: IN
        properties: "IncludesProperties"
      )
    language: String
    name: String!
    offer3SExcludes: [Offer3!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    offersExcludes: [Offer!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    required_to_merge: Boolean
    skill2SIncludes: [Skill2!]!
      @relationship(
        type: "INCLUDES"
        direction: IN
        properties: "IncludesProperties"
      )
    uuid: String!
    wordsDesambiguation: [Word!]!
      @relationship(
        type: "DESAMBIGUATION"
        direction: IN
        properties: "DesambiguationProperties"
      )
    wordsExcludes: [Word!]!
      @relationship(
        type: "EXCLUDES"
        direction: IN
        properties: "ExcludesProperties"
      )
    wordsIncludesChild: [Word!]!
      @relationship(
        type: "INCLUDES_CHILD"
        direction: IN
        properties: "IncludesChildProperties"
      )
    wordsIncludesDomain: [Word!]!
      @relationship(type: "INCLUDES_DOMAIN", direction: IN)
    wordsIncludesJob: [Word!]!
      @relationship(type: "INCLUDES_JOB", direction: IN)
    wordsIncludesMeta: [Word!]!
      @relationship(
        type: "INCLUDES_META"
        direction: IN
        properties: "IncludesMetaProperties"
      )
    wordsIncludesNomenclature: [Word!]!
      @relationship(
        type: "INCLUDES_NOMENCLATURE"
        direction: IN
        properties: "IncludesNomenclatureProperties"
      )
  }
`;

module.exports = typeDefs;
