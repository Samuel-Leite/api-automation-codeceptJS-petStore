const { I } = inject()

module.exports = {
  complexJsonStructuresPOST() {
    I.seeResponseMatchesJsonSchema((joi) => {
      return joi.object({
        id: joi.number().integer().min(1).max(999).required(),
        category: joi.object({
          id: joi.number().integer().min(1).max(999).required(),
          name: joi.string().trim().required()
        }),
        name: joi.string().trim().required(),
        photoUrls: joi.array().required(),
        tags: joi.array().required(),
        status: joi.string().trim().required()
      })
    })
  },

  complexJsonStructuresDELETE() {
    I.seeResponseMatchesJsonSchema((joi) => {
      return joi.object({
        code: joi.number().integer().min(200).max(200).required(),
        type: joi.string().trim().required(),
        message: joi.string().trim().required()
      })
    })
  },

  containsKeysPOST() {
    I.seeResponseContainsKeys(['id'])
    I.seeResponseContainsKeys(['category'])
    I.seeResponseContainsKeys(['name'])
    I.seeResponseContainsKeys(['photoUrls'])
    I.seeResponseContainsKeys(['tags'])
    I.seeResponseContainsKeys(['status'])
  },

  containsKeysDELETE() {
    I.seeResponseContainsKeys(['code'])
    I.seeResponseContainsKeys(['type'])
    I.seeResponseContainsKeys(['message'])
  }
}
