// eslint-disable-next-line no-undef
const { I, qaConfig } = inject()

module.exports = {
  validationStatus(statusCode) {
    if (statusCode !== 200) {
      I.seeResponseCodeIs(404)
    }
  },

  validationSuccessfulStatus() {
    I.seeResponseCodeIsSuccessful()
  },

  dontSeeCode(dontSeeStatusCode) {
    I.dontSeeResponseCodeIs(dontSeeStatusCode)
  },

  validateTimeout(timeOut) {
    I.setRequestTimeout(timeOut)
  },

  responseCallBackPOST() {
    I.seeResponseValidByCallback(({ data, status, expect }) => {
      expect(status).to.eql(200)
      expect(data.id)
      expect(data.category)
      expect(data.category.id)
      expect(data.category.name)
      expect(data.name)
      expect(data.photoUrls)
      expect(data.tags)
      expect(data.tags.id)
      expect(data.tags.name)
      expect(data.status)
    })
  },

  responseCallBackDELETE() {
    I.seeResponseValidByCallback(({ data, status, expect }) => {
      expect(status).to.eql(200)
      expect(data.code)
      expect(data.type)
      expect(data.message)
    })
  },

  responseContains() {
    I.seeResponseContainsJson(qaConfig.petStore.payload)
  }
}
