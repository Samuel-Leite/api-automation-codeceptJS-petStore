exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://petstore.swagger.io'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js',
    responseValidation: './resource/api/responseValidation.js',
    jsonSchema: './resource/api/jsonSchema.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/petStore.feature',
    steps: ['./step_definitions/petStore_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  // tests: './test/*_test.js',
  name: 'api-codeceptjs'
}